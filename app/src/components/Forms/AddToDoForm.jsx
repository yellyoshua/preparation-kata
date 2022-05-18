import { useState } from "react";
export default function AddToDoForm(props) {
    const [todoText, setTodoText] = useState("");
    const [todoTitle, setTodoTitle] = useState("");

    const onUpdateTodoContent = (e) => {
        setTodoText(e.target.value);
    }

    const onUpdateTodoTitle = (e) => {
        setTodoTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            title: todoTitle,
            content: todoText,
        });
        setTodoTitle("");
        setTodoText("");
    }

    return (
        <div className="container py-3 my-3">
            <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleSubmit}
            >
                <h1 className="text-lg">Add ToDo</h1>
                <input
                    type="ToDo Title"
                    className="bg-gray-200 my-2 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={todoTitle}
                    placeholder="Title"
                    onChange={onUpdateTodoTitle}
                />
                <textarea
                    type="content"
                    className="bg-gray-200 my-2 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={todoText}
                    placeholder="ToDo Content"
                    onChange={onUpdateTodoContent}
                />
                <button
                    type="submit"
                    className="bg-slate-700 p-2 rounded-md text-white"
                >Save</button>
            </form>
        </div>
    );
}