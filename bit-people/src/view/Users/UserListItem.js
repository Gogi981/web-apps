import React from 'react'

const UserListItem = props => {
    return (
        <li className="collection-item avatar">
            <img className="circle" src={props.picture}></img>
            <span className="title">name: {props.first}</span>
            <p>Email: {props.email} </p>
            <p> Date of Birth: {props.dob}</p>
        </li>
    )
}

export default UserListItem;