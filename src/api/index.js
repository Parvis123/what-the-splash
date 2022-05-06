const KEY = `?client_id=4N_1YzH4H3ycNqIb__zgeH-_fDBYJnN4qheDhGz_1jM`;
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async (page) => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    if (response.status > 400) {
        throw new Error(data.errors);
    }
    return data;
};

const fetchImageStats = async (id) => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages, fetchImageStats };
