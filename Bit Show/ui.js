let $body = $('.topShows');
let $inputSearch = $('input#search');
let $menu = $('.menu');
let $home = $('#home');
let divShows = [];

function getHome() {
    return $home;
};

function hideMenuList() {
    $($menu).css("display", "none");
};

function showMenuList() {
    $($menu).css("display", "inline-Block");
};

function resetInputSearch() {
    $inputSearch.val("");
};

function getInputSearch() {
    return $inputSearch;
};

function getSearchData() {
    return $inputSearch.val();
};

function resetPopularShows() {
    $body.empty();
};

function displayShows(list) {
    resetPopularShows();

    let header = $('<h2></h2>');
    header.text("Popular Shows");

    let showList = $('<ul></ul>');

    for (let i = 0; i < list.length; i++) {

        let show = list[i];

        let listItem = $(`<li></li>`);
        listItem.css("width", "30%");
        listItem.css("min-width", "200px");

        let divShow = $('<div></div>');
        divShow.attr("data-id", show.id);

        divShow.style = {
            padding: "5px",
            borderRadius: "5px",
            borderRadius: "1px solid black",
            width: "100%"
        }

        let image = $('<img></img>');
        image.attr("src", show.img);
        image.attr("width", "100%");
        image.attr("height", "300px");
        image.css("borderRadius", '5px');

        let name = $('<p></p>');
        name.css("textAlign", "center");
        name.text(show.name);

        divShow.append(image);
        divShow.append(name);

        listItem.append(divShow);

        showList.append(listItem);
        divShows.push(divShow);
    }

    $body.append(header);
    $body.append(showList);
};

function getDivShows() {
    return $('[data-id]');
};

function displayShowInfo(show) {
    $body.empty();
    let showTitle = $('<h1></h1>');
    showTitle.css("text-align", "center");
    showTitle.text(show.name);

    let showImage = $('<img></img>').attr("src", show.image.medium);
    showImage.css("width", "50%");
    showImage.css("float", "left");

    let seasonsList = $('<ul></ul>');
    seasonsList.attr("id", "season");
    seasonsList.css("display", "inline-block");
    seasonsList.css("width", "50%");
    seasonsList.css("text-align", "center");

    let castList = $('<ul></ul>');
    castList.attr("id", "cast");
    castList.css("display", "inline-block");
    castList.css("width", "50%");
    castList.css("text-align", "center");


    let showDetailHeading = $('<h3></h3>');
    showDetailHeading.text('Show Details');
    showDetailHeading.css("clear", "left");

    $body.append(showTitle);
    $body.append(showImage);
    $body.append(seasonsList);
    $body.append(castList);
    $body.append(showDetailHeading);
    let showDetailParagraph = $body.html();
    showDetailParagraph += show.summary;
    $body.html(showDetailParagraph);
};

function displaySeasons(seasons) {

    let seasonList = $('#season');

    seasonList.text(`Seasons ${seasons.length}`);

    for (let i = 0; i < seasons.length; i++) {
        let listItemSeason = $('<li></li>');
        listItemSeason.text(seasons[i]);
        seasonList.append(listItemSeason);
    }
};

function displayCast(cast) {
    let castList = $('#cast');
    castList.text('Cast');

    for (let i = 0; i < 8; i++) {
        let listCast = $('<li></li>');
        listCast.text(cast[i]);
        castList.append(listCast);
    }
};

function displayMenu(list, setEvents) {
    $menu.empty();
    let events = [];

    for (let i = 0; i < list.length; i++) {
        let menuItem = $('<li></li>');
        menuItem.attr("data-id", list[i].id);
        menuItem.text(list[i].name);

        $menu.append(menuItem);
        events.push(menuItem);
    }
    setEvents(events);
};

export {
    displayShows,
    getDivShows,
    displayShowInfo,
    displaySeasons,
    displayCast,
    getSearchData,
    displayMenu,
    resetInputSearch,
    resetPopularShows,
    getInputSearch,
    getHome,
    hideMenuList,
    showMenuList
};

