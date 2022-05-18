import { useState } from "react";
import AddToDoForm from "../components/Forms/AddToDoForm";
import Loading from "../components/Loading";
import ToDoList from "../components/ToDo/ToDoList";
import useTodoBoard from "../hooks/useTodoBoard";
import Modal from "./Modal";

export default function ToDoBoard() {
    const [showAddToDoForm, setShowAddToDoForm] = useState(false);
    const { loading, addTodo } = useTodoBoard();

    const handleCloseAddToDoForm = () => setShowAddToDoForm(false)

    return (
        <div className="container">
            <div className="flex justify-center items-center my-2">
                <h1 className="text-xl">To Do Board</h1>
            </div>
            <div className="flex justify-center items-center my-2">
                <button
                    className="bg-slate-700 p-2 rounded-md text-white"
                    onClick={() => setShowAddToDoForm(true)}
                >
                    Add ToDo
                </button>
            </div>
            <div className="container">
                <Loading isLoading={loading}>
                    <ToDoList />
                </Loading>
            </div>
            <Modal show={showAddToDoForm} onClose={handleCloseAddToDoForm} title="Add todo task">
                <AddToDoForm onSubmit={addTodo}/>
            </Modal>
        </div>
    );
}