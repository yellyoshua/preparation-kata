import CatDetails from "./CatDetails.jsx";
import usePets from "../../hooks/usePets.js";

export default function () {
    const { cats } = usePets();

    const renderCatDetails = (cat, index) => {
        return <CatDetails
            key={`${cat.id}-${index}`}
            cat={cat}
        />
    }

    return <div id="cat-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {cats.map(renderCatDetails)}
    </div>
}