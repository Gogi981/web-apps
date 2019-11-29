import React from 'react'

const UserListItem = props => {
    return (
        <li className="collection-item avatar">
            <img className="circle" src={props.picture}></img>
            <span className="title">name: {props.first}</span>
            <p>email: {props.email} </p>
            <p> date of Birth: {props.dob}</p>
        </li>
    )
}

export default UserListItem;