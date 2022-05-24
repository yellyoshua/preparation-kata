import GridDetails from "../../ui/GridDetails"

export default function PetDetails({ pet }) {
    const details = [
        {
            name: "Age",
            value: pet.age,
        },
        {
            name: "Type",
            value: pet.type.toUpperCase(),
        },
        {
            name: "Breed",
            value: pet.breed,
        },
        {
            name: "Color",
            value: pet.color,
            type: "color",
        },
    ]

    return <div className="relative p-3 bg-slate-600 rounded-sm break-inside-avoid my-3">
        <h1 className="absolute top-4 left-0 text-center px-2 right-0 text-xl font-bold text-white">{pet.name}</h1>
        <img className="object-cover rounded-sm mt-2" src={pet.image} alt={pet.name} />
        <GridDetails details={details}/>
        <p className="text-base text-gray-300 text-left whitespace-pre-line">{pet.description}</p>
    </div>
}