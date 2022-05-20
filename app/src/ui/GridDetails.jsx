export default function GridDetails({ details = [] }) {
    const renderColorBox = (detail, index) => {
        return (
            <div
                key={index}
                className="w-10 h-10 rounded-sm"
                style={{ backgroundColor: detail.color }}
            ></div>
        );
    }

    const renderTextBox = (detail, index) => {
        return (
            <div key={index}>
                <div>{detail.name}</div>
                <div>{detail.value}</div>
            </div>
        )
    }
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-center">
            {details.map((detail, index) => {
                if (detail.type === "color")
                    return renderColorBox(detail, index);
                return renderTextBox(detail, index);
            })}
        </div>
    );
}