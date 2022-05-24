import { Link } from "react-router-dom";
export default function HomeScreen() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Home</h1>
            <Link to="/cats" className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go to Cats
            </Link>
            <Link to="/dogs" className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go to Dogs
            </Link>
        </div>
    );
}