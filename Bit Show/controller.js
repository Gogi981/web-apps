import * as ui from "./ui.js";
import * as data from "./data.js";

$(ui.getInputSearch()).on("keyup", searchShow);
$(ui.getHome()).on("click", init);


function singleShowInfo() {
    ui.hideMenuList();
    ui.resetInputSearch();

    const id = this.getAttribute("data-id");

    data.getSingleShowData(id)
        .then(show => ui.displayShowInfo(show));

    data.showSeasons(id)
        .then(show => ui.displaySeasons(show));

    data.showCast(id)
        .then(show => ui.displayCast(show))
};

function searchShow() {
    ui.showMenuList();
    let searchQuery = ui.getSearchData();
    data.searchForShow(searchQuery)
        .then(searchResult => displaySearchResult(searchResult));
}

function displaySearchResult(resultList) {
    ui.displayMenu(resultList, setEventsOnListItems);
}

function setEventsOnListItems(elementArray) {
    elementArray.map(function (element) { element.on("click", singleShowInfo) })
}


export default function init() {
    data.getAllShows()
        .then(list => {
            ui.displayShows(list);
            return list
        })
        .then(list => ui.getDivShows().on("click", singleShowInfo))
}
