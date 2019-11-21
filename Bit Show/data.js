const dataModule = (function () {

    class Show {
        constructor(id, name, img) {
            this.id = id;
            this.name = name;
            this.img = img;
        }
    };


    class Query {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    };


    function getAllShows(getShowList) {
        $.get(`http://api.tvmaze.com/shows`, function (responseData) {
            let listAllShows = responseData.map(function (show) {
                return new Show(show.id, show.name, show.image.original)
            });
            responseData.length = 50;
            getShowList(listAllShows);
        })
    };

    function showSeasons(id, getSeasons) {
        $.get(`http://api.tvmaze.com/shows/${id}/seasons`, function (responseData) {
            let Seasons = responseData.map(function (season) {
                return `${season.premiereDate} ~ ${season.endDate}`;
            })
            getSeasons(Seasons);
        });
    };


    function showCast(id, getCast) {
        $.get(` http://api.tvmaze.com/shows/${id}/cast`, function (responseData) {
            let Cast = responseData.map(function (cast) {
                return cast.person.name
            })
            getCast(Cast)
        });
    };

    function getSingleShowData(searchId, displaySingleShow) {

        $.get(`http://api.tvmaze.com/shows/${searchId}`, function (showData) {
            displaySingleShow(showData);
        })
    };

    function searchForShow(searchQuery, displaySearchList) {
        $.get(`http://api.tvmaze.com/search/shows?q=${searchQuery}`, function (queryResult) {
            let searchResult = queryResult.map(function (query) {
                return new Query(query.show.id, query.show.name)
            })
            displaySearchList(searchResult);
        });
    };

    return {
        getAllShows,
        showSeasons,
        showCast,
        getSingleShowData,
        searchForShow
    }

})()
