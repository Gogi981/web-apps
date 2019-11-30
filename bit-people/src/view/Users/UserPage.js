import React from 'react';
import UserList from './UserList'
import UserGrid from './UserGrid'
import { fetchUsers } from '../../services/userServices'

class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { users: [], isList: !!JSON.parse(localStorage.getItem("isList")), icon: "list" }


    }
    componentDidMount() {
        fetchUsers()
            .then(users => this.setState({ users })
            );
        // this.setState({ list: this.props.list })

    };

    changeLayout = () => {
        this.setState((prevState) => {
            localStorage.isList = !prevState.isList;
            return {
                isList: !prevState.isList
            }
        })
    }


    render() {
        if (this.state.users.length === 0) {
            return (<div>
                <p>Loading</p>


            </div >)

        };


        if (this.state.isList) {

            return (
                <div>
                    <div className="buttonsHeader">
                        <span><i onClick={() => document.location.reload()} className="material-icons">refresh</i></span>
                        <span><i onClick={this.changeLayout} className="material-icons">view_module</i></span>
                    </div>
                    <UserList data={this.state.users} />
                </div>)
        }
        return (
            <div>
                <div className="buttonsHeader">
                    <span><i onClick={() => document.location.reload()} className="material-icons">refresh</i></span>
                    <span><i onClick={this.changeLayout} className="material-icons">list</i></span>
                </div>
                <UserGrid data={this.state.users} />
            </div>)

    }
}


export default UsersPage;