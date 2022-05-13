const STATUSES = {
    done: "Done",
    pending: "Pending",
    canceled: "Canceled",
    todo: "ToDo",
}

export default function ToDoCard({ todo: { id, title, text, status }}) {
    const task_status = STATUSES[status] || STATUSES.pending;

    const renderStatusBadge = () => {
        return <div className="todo-card__status">
            {task_status}
        </div>
    }

    return (
        <div className="todo-card">
            <div className="todo-card__title">
                {title} {renderStatusBadge()}
            </div>
            <div className="todo-card__text">
                {text}
            </div>
        </div>
    );
}