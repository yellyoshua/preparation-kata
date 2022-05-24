import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CatsScreen from "../screens/CatsScreen";
import DogsScreen from "../screens/DogsScreen";
import HomeScreen from "../screens/HomeScreen";
import ToDoScreen from "../screens/ToDoScreen";
import Layout from "../ui/Layout";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Layout>
                        <HomeScreen />
                    </Layout>
                } />
                <Route path="/todo" element={
                    <Layout>
                        <ToDoScreen />
                    </Layout>
                } />
                <Route path="/cats" element={
                    <Layout>
                        <CatsScreen />
                    </Layout>
                } />
                <Route path="/dogs" element={
                    <Layout>
                        <DogsScreen />
                    </Layout>
                } />
            </Routes>
        </BrowserRouter>
    );
}