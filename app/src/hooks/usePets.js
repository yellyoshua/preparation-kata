import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import petsService from "../services/pets.service.js";
import { getPets } from "../store/reducers/pets.reducer.js";

export default function usePets() {
    const dispatch = useDispatch();
    const { 
        cats = [], 
        dogs = [],
        loading,
    } = useSelector(state => state.pets);

    useEffect(() => {
        const getPetsFromApi = async () => {
            const [dogs, cats] = await Promise.all([
                petsService.getDogs(),
                petsService.getCats(),
            ]);

            dispatch(getPets({ dogs, cats, loading: false }));
        };

        getPetsFromApi();
    }, []);

    return { cats, dogs, loading };
}