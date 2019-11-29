import React from 'react'

const UserListItem = props => {
    return (
        <li className="collection-item avatar">
            <img className="circle" src={props.picture}></img>
            <span className="title">name: {props.first} {props.last}</span>
            <p> <i class="material-icons">email</i> email: {props.email} </p>
            <p> <i class="material-icons">cake</i>date of Birth: {props.dob}</p>
        </li>
    )
}

export default UserListItem;