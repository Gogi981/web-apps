
const ctrlModule = (function (ui, data) {

    const $searchInput = document.querySelector('.search');
    $searchInput.addEventListener('change', onSearchHandler);


    function onSuccessHandler(users) {

        ui.displayUsers(users);

        let listOfDivUsers = ui.getDivUsers();
        for (let i = 0; i < listOfDivUsers.length; i++) {
            listOfDivUsers[i].addEventListener("click", handleUserDiv);
        }
    };

    function onSearchHandler() {

        let searchText = ui.getInputText();
        data.getSearchText(searchText, onSuccessHandler);
        ui.resetDisplay();
    };

    function handleUserDiv() {
        let name = this.querySelector('p').textContent;
        $.get(`https://api.github.com/users/${name}/repos`)
    }



})(uiModule, dataModule)