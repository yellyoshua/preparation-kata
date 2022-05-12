import { useId } from "react";
import CatItem from "./CatItem.jsx";

export default function (props) {
    const id = useId();

    const renderCatItem = (cat) => {
        return <CatItem key={id} cat={cat} />
    }

    return <div className="flex-wrap">
        {props.cats.map(renderCatItem)}
    </div>
}