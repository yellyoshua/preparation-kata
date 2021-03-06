import PetsList from "../components/Pets/PetsList";
import usePets from "../hooks/usePets";

export default function CatsScreen() {
    const { cats } = usePets();
    return (
        <PetsList pets={cats} />
    );
}