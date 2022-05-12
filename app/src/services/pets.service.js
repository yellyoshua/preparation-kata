const getDogs = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    return fetch(`${API_URL}/api/dogs`)
        .then(response => response.json())
        .then(data => data.data);
}

const getCats = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    return fetch(`${API_URL}/api/cats`)
        .then(response => response.json())
        .then(data => data.data);
}
export default { getDogs, getCats };