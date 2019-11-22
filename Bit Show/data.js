import Query from "./queryClass.js";
import Show from "./showClass.js";

const getAllShows = () => {
    return fetch(`http://api.tvmaze.com/shows`)
        .then(responseData => responseData.json())
        .then(responseData => {
            let listAllShows = responseData.map(function (show) {
                return new Show(show.id, show.name, show.image.original)
            });
            listAllShows.length = 50;
            return (listAllShows);
        })
};

function showSeasons(id) {
    return fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
        .then(responseData => responseData.json())
        .then(responseData => {
            let Seasons = responseData.map(function (season) {
                return `${season.premiereDate} ~ ${season.endDate}`;
            })
            return Seasons
        });
};

function showCast(id) {
    return fetch(` http://api.tvmaze.com/shows/${id}/cast`)
        .then(responseData => responseData.json())
        .then(responseData => {
            let Cast = responseData.map(function (cast) {
                return cast.person.name
            });
            return Cast;
        })
};

function getSingleShowData(searchId) {
    return fetch(`http://api.tvmaze.com/shows/${searchId}`)
        .then(response => response.json())
        .then(data => data)
};

function searchForShow(searchQuery) {
    return fetch(`http://api.tvmaze.com/search/shows?q=${searchQuery}`)
        .then(data => data.json())
        .then(queryResult => {
            let searchResult = queryResult.map(function (query) {
                return new Query(query.show.id, query.show.name)
            })
            return searchResult;
        });
};

export {
    getAllShows,
    showSeasons,
    showCast,
    getSingleShowData,
    searchForShow
};