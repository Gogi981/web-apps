class User {
    constructor(data) {
        this.first = data.name.first
        this.last = data.name.last
        this.gender = data.gender
        this.email = data.email
        this.dob = new Date(data.dob.date)
        this.picture = data.picture.large
        this.id = data.login.uuid
    }

    getDateString = () => {
        return ("0" + this.dob.getDate()).slice(-2) + "-" + ("0" + (this.dob.getMonth()) + 1).slice(-2) + "-" + (this.dob.getFullYear())
    };

    getHiddenEmail = () => {
        const emailArray = this.email.split('@');

        return emailArray[0].slice(0, 3) + "..." + emailArray[0].slice(-3) + "@" + emailArray[1]
    }
}

export default User;