export default function GridDetails({ details = [] }) {
    const renderColorBox = (detail, index) => {
        return (
            <div key={index}>
                <div className="text-center text-base font-bold text-white">{detail.name}</div>
                <div
                    className="m-auto w-3 h-3 rounded-sm border-2 border-white "
                    style={{ backgroundColor: detail.value }}
                ></div>
            </div>
        );
    }

    const renderTextBox = (detail, index) => {
        return (
            <div key={index}>
                <div className="text-center text-base font-bold text-white">{detail.name}</div>
                <div className="text-center text-xs text-white">{detail.value}</div>
            </div>
        )
    }
    return (
        <div className="flex flex-wrap m-auto items-center justify-between">
            {details.map((detail, index) => {
                if (detail.type === "color")
                    return renderColorBox(detail, index);
                return renderTextBox(detail, index);
            })}
        </div>
    );
}