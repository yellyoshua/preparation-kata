import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CatsScreen from "../screens/CatsScreen";
import DogsScreen from "../screens/DogsScreen";
import HomeScreen from "../screens/HomeScreen";
import ToDoScreen from "../screens/ToDoScreen";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/todo" element={<ToDoScreen />} />
                <Route path="/cats" element={<CatsScreen />} />
                <Route path="/dogs" element={<DogsScreen />} />
            </Routes>
        </BrowserRouter>
    );
}