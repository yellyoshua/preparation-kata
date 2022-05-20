import GridDetails from "../../ui/GridDetails"

export default function ({ cat }) {
    /**
     * Cat Details
     *  age: 85
        breed: "Maine"
        color: "white"
        createdAt: "2022-05-20T20:20:11.602Z"
        description: "Sunt repellendus ut nobis esse ipsum nihil quidem."
        image: "http://loremflickr.com/640/480/cats"
        name: "Ragdoll"
        type: "cat"
     */
    const details = [
        {
            name: "Age",
            value: cat.age,
        },
        {
            name: "Type",
            value: cat.type,
        },
        {
            name: "Breed",
            value: cat.breed,
        },
        {
            name: "Color",
            value: cat.color,
            type: "color",
        },
    ]

    return <div className="m-1 p-3 bg-slate-600 rounded-md">
        <h1 className="text-xl font-bold text-white">{cat.name}</h1>
        <img className="object-cover rounded-md my-2" src={cat.image} alt={cat.name} />
        <GridDetails details={details}>
        </GridDetails>
        <p className="text-base text-gray-300 text-left whitespace-pre-line">{cat.description}</p>
    </div>
}