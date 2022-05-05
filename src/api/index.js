const KEY = `4N_1YzH4H3ycNqIb__zgeH-_fDBYJnN4qheDhGz_1jM`;
const URL = `https://api.unsplash.com/photos/?client_id=`;

const fetchImages = async (page) => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    if (response.status > 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages };
