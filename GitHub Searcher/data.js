import User from './user.js';

function getSearchText(text, onSuccess) {
    const searchUrl = `https://api.github.com/search/users?q=${text}`;


    $.get(searchUrl, function (data) {
        const usersList = data.items
        const { id, login, avatar_url } = usersList;
        usersList.map((elem) => { id, login, avatar_url })

        let myUsers = usersList.map((elem) => {
            const { id, login, avatar_url } = elem;
            elem = { id: id, name: login, img: avatar_url };
            return elem
        })

        onSuccess(myUsers)
    })
}

export { getSearchText }

