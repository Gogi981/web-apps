function fetchAllCharacters(page) {
    return fetch (`https://rickandmortyapi.com/api/character/?page=${page}`)
.then(results=> results.json())
};

export {fetchAllCharacters};
