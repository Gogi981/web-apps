export class ClientStorage {
    static get(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    static save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static delete(key) {
        localStorage.removeItem(key);
    }
}