import React from 'react';
import UserList from './UserList'
import { fetchUsers } from '../../services/userServices'

class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { users: [] }

    }
    /* componentDidMount() {
         fetchUsers()
             .then(users => this.setState({ users: users })
             )
     };*/

    getData() { return fetchUsers().then(users => this.setState({ users: users })) };


    render() {
        if (this.state.users.length === 0) {
            return (<div>
                <p>Loading</p>
                <button onClick={this.getData()} >CLick to load data</button>

            </div >)

        }

        return <UserList data={this.state.users}></UserList>

    }
}


export default UsersPage;