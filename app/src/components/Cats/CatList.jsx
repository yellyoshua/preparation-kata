import { useId } from "react";
import CatDetails from "./CatDetails.jsx";

export default function (props) {
    const renderCatDetails = (cat) => {
        const id = useId();
        return <CatDetails key={id} cat={cat} />
    }

    return <div className="flex-wrap">
        {props.cats.map(renderCatDetails)}
    </div>
}