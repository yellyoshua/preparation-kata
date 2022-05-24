import PetsList from "../components/Pets/PetsList";
import usePets from "../hooks/usePets";

export default function DogsScreen() {
    const { dogs } = usePets();
    return (
        <PetsList pets={dogs} />
    );
}