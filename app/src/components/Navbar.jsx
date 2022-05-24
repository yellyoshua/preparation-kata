import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="mb-3">
            <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to="/">
                        Hulala
                    </Link>
                </div>
                <div className="w-full flex-grow flex md:w-auto">
                    <div className="text-sm md:flex-grow">
                        <Link to="/todos" className="mt-4 inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                            ToDo
                        </Link>
                        <Link to="/dogs" className="mt-4 inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                            Dogs
                        </Link>
                        <Link to="/cats" className="mt-4 inline-block md:mt-0 text-teal-200 hover:text-white mr-4">
                            Cats
                        </Link>
                    </div>
                </div>
            </nav> 
        </div>
    )
}