export default function ToDoCard(props) {
    const [todoText, setTodoText] = useState("");

    const handleChange = (e) => {
        setTodoText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(todoText);
    }

    return (
        <div className="todo-card">
            <form onSubmit={handleSubmit}>
                <input type="text" value={todoText} onChange={handleChange} />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}