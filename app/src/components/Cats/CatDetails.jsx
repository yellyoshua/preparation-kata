export default function (props) {
    const cat = props.cat;

    return <div className="item">
        <strong>{cat.name}</strong>
    </div>
}