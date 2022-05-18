import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPetsFromApi } from "../store/reducers/pets.reducer.js";

export default function usePets() {
    const dispatch = useDispatch();
    const { 
        cats = [], 
        dogs = [],
        loading,
    } = useSelector(state => state.pets);

    useEffect(() => {
        dispatch(fetchPetsFromApi());
    }, []);

    return { cats, dogs, loading };
}