
const uiModule = (function () {


    var $inputField = document.querySelector('input.search');
    var $nameList = document.querySelector('ul.list1');
    let divUsers = [];


    function getInputText() {
        return $inputField.value;
    };

    function displayUsers(users) {

        for (let i = 0; i < users.length; i++) {

            let user = users[i];

            let listItem = document.createElement('li');

            let divUser = document.createElement('div');
            divUser.style.padding = "5px";
            divUser.style.borderRadius = "5px";
            divUser.style.border = "1px solid black";
            divUser.style.width = "100%";


            let image = document.createElement('img');
            image.setAttribute("src", user.img);
            image.setAttribute("width", "100%");
            image.style.borderRadius = "5px";

            let name = document.createElement('p');
            name.textContent = user.name;
            name.style.textAlign = "center";

            divUser.append(image);
            divUser.append(name);

            listItem.append(divUser);

            divUsers.push(divUser);
            $nameList.append(listItem);
        };

    };

    function getDivUsers() {
        return divUsers;
    };

    function resetDisplay() {
        $nameList.innerHTML = "";
    }

    return {
        getInputText,
        displayUsers,
        resetDisplay,
        getDivUsers
    };


})()