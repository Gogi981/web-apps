import React from 'react';
import UsersPage from './Users/UserPage';
import AboutPage from './Users/AboutPage'
import { Route, Switch } from 'react-router-dom'

const Main = props => {
    return (
        <div className='container'>
            <Switch>
                <Route exact path='/' component={() => <UsersPage isList={props.isList} />} />
                <Route path='/about' component={AboutPage} />
            </Switch>

        </div>
    )
}


export default Main;
