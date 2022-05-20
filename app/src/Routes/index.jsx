import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CatsScreen from "../screens/CatsScreen";
import ToDoScreen from "../screens/ToDoScreen";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ToDoScreen />} />
                <Route path="/cats" element={<CatsScreen />} />
            </Routes>
        </BrowserRouter>
    );
}