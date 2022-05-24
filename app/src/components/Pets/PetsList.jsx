import PetDetails from "./PetDetails.jsx";

export default function PetsList({ pets = [] }) {
    const renderPetDetails = (pet, index) => {
        return <PetDetails
            key={`${pet.id}-${index}`}
            pet={pet}
        />
    }

    return <div id="pet-list" className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 box-border mx-auto px-3">
        {pets.map(renderPetDetails)}
    </div>
}