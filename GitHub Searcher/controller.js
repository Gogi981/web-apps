
import { getSearchText } from './data.js';
import { getInputText, displayUsers, resetDisplay, getDivUsers } from './ui.js'


export const init = () => {
    const $searchInput = document.querySelector('.search');
    $searchInput.addEventListener('keyup', onSearchHandler);

    function onSuccessHandler(users) {
        displayUsers(users);
        let listOfDivUsers = getDivUsers();
        users.forEach(() => { addEventListener("click", handleUserDiv) });
    };

    function onSearchHandler() {
        let searchText = getInputText();
        getSearchText(searchText, onSuccessHandler);
        resetDisplay();
    };

    function handleUserDiv() {
        let name = this.querySelector('p').textContent;
        $.get(`https://api.github.com/users/${name}/repos`)
    }
}