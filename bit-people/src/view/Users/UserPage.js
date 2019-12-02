import React from 'react';

import UserList from './UserList'
import UserGrid from './UserGrid'
import { Loader } from '../../components/Loader'
import Buttons from '../../components/Buttons';
import NoUsers from '../../components/NoUsers';
import UserStats from '../../components/UserStats'
import SearchBar from '../../components/SearchBar'
import { ClientStorage } from '../../services/ClientStorage';
import { fetchUsers, loadUsers } from '../../services/userServices'

class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            users: [],
            query: '',
            isList: !!ClientStorage.get('isList') || true,
        }

        this.onSearchChange = this.onSearchChange.bind(this);
        this.loadPageData = this.loadPageData.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true })

        loadUsers()
            .then(users => {
                this.setState({ users, loading: false });
            })
    }

    loadPageData() {
        this.setState({ loading: true })

        fetchUsers()
            .then(users => {
                this.setState({ users, loading: false });
                this.props.lastRefresh()
            })
    }


    onSearchChange = (query) => {
        this.setState({ query });
    }

    changeLayout = () => {
        this.setState((prevState) => {
            localStorage.isList = !prevState.isList;

            return {
                isList: !prevState.isList
            }
        })
    }

    render() {
        if (this.state.loading) {
            return <Loader />
        };

        const filteredUsers = this.state.users.filter((element) => (element.first + element.last).toLowerCase().includes(this.state.query));

        return (
            <div>
                <SearchBar onInput={this.onSearchChange} currentValue={this.state.query} />
                <Buttons isList={this.state.isList} loadPageData={this.loadPageData} changeLayout={this.changeLayout} />
                <UserStats users={filteredUsers} />

                {(filteredUsers.length === 0) ? <NoUsers /> : ""}

                {this.state.isList
                    ? <UserList data={filteredUsers} />
                    : <UserGrid data={filteredUsers} />}
            </div>
        );
    }
}

export default UsersPage;