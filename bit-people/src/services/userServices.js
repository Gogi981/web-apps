import User from "../model/User";

const fetchUsers = () => {
    const url = "https://randomuser.me/api/?results=15"
    return fetch(url)
        .then(res => res.json())
        .then(data => data.results.map(user => new User(user)))
}
export { fetchUsers }