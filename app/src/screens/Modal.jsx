import RenderIf from "../components/RenderIf";

export default function Modal({ title, show, children, onClose }) {
    return (
        <RenderIf condition={show}>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/* Close button */}
                    {/* Modal content */}
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                        <button
                            onClick={onClose}
                            className="text-black absolute top-0 right-0 p-2 m-1 cursor-pointer hover:bg-red-600 hover:text-white transition-colors"
                        >
                            X
                        </button>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </RenderIf>
    )
}