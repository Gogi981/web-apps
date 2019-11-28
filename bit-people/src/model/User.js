class User {
    constructor(data) {
        this.first = data.name.first
        this.last = data.name.last
        this.gender = data.gender
        this.email = data.email
        this.dob = new Date(data.dob.date)
        this.picture = data.picture.medium
        this.id = data.login.uuid
    }
}
export default User;