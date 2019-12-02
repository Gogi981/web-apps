import User from "../model/User";
import { ClientStorage } from "./ClientStorage";


const loadUsers = () => {
    const cachedApiUsers = JSON.parse(localStorage.getItem("users"));

    if (cachedApiUsers && cachedApiUsers.length) {
        return Promise.resolve(cachedApiUsers.map(user => new User(user)))
    }

    return fetchUsers()
}

const fetchUsers = () => (
    fetch("https://randomuser.me/api/?results=15")
        .then(res => res.json())
        .then(data => {
            ClientStorage.save("users", data.results)
            ClientStorage.save("lastRefresh", new Date());

            return data.results.map(user => new User(user))
        })
)

export { fetchUsers, loadUsers }