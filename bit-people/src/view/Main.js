import React from 'react';
import UsersPage from './Users/UserPage';

const Main = props => {
    return (
        <div className='container'>
            <UsersPage data={props.data} />
        </div>
    )
}


export default Main;
