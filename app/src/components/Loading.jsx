export default function Loading({ isLoading, children }) {
    return (
        <>
            {isLoading ?
                <div className="loading">
                    <div className="loading__text">
                        Loading...
                    </div>
                </div>
                :
                children
            }
        </>
    );
}