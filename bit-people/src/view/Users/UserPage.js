import React from 'react';
import UserList from './UserList'
import UserGrid from './UserGrid'
import { fetchUsers } from '../../services/userServices'

class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { users: [] }

    }
    componentDidMount() {
        fetchUsers()
            .then(users => this.setState({ users })
            );
        // this.setState({ list: this.props.list })

    };


    render() {
        if (this.state.users.length === 0) {
            return (<div>
                <p>Loading</p>


            </div >)

        };


        if (this.props.isList) {
            return <UserList data={this.state.users} />
        }
        return <UserGrid data={this.state.users} />

    }
}


export default UsersPage;