const ctrlModule = (function (ui, data) {

    $(ui.getInputSearch()).on("keyup", searchShow);
    $(ui.getHome()).on("click", init);


    function singleShowInfo() {
        ui.hideMenuList();
        ui.resetInputSearch();

        const id = this.getAttribute("data-id");

        data.getSingleShowData(id, ui.displayShowInfo);
        data.showSeasons(id, ui.displaySeasons);
        data.showCast(id, ui.displayCast)
    };

    function searchShow() {
        ui.showMenuList();
        let searchQuery = ui.getSearchData();
        data.searchForShow(searchQuery, displaySearchResult);
    }

    function displaySearchResult(resultList) {
        ui.displayMenu(resultList, setEventsOnListItems);
    }

    function setEventsOnListItems(elementArray) {
        for (let i = 0; i < elementArray.length; i++) {
            $(elementArray[i]).on("click", singleShowInfo);

        }
    }

    function init() {
        data.getAllShows(function (list) {
            ui.displayShows(list);
            ui.getDivShows().on("click", singleShowInfo);
        });
    }

    return {
        init
    }

}

)(uiModule, dataModule)