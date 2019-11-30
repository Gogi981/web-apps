import React from 'react';
import UserList from './UserList'
import UserGrid from './UserGrid'
import { Loader } from '../../components/Loader'
import { fetchUsers } from '../../services/userServices'
import SearchBar from '../../components/SearchBar'
import Buttons from '../../components/Buttons';

class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            users: [],
            query: '',
            isList: !!JSON.parse(localStorage.getItem("isList")),
            icon: "list",
        }

        this.onSearchChange = this.onSearchChange.bind(this);
        this.loadPageData = this.loadPageData.bind(this);
    }

    componentDidMount() {
        this.loadPageData();
    };

    loadPageData() {
        this.setState({ loading: true })

        fetchUsers()
            .then(users => this.setState({ users, loading: false }));
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

                {this.state.isList
                    ? <UserList data={filteredUsers} />
                    : <UserGrid data={filteredUsers} />}
            </div>
        );
    }
}

export default UsersPage;