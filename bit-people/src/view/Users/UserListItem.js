import React from 'react'

const UserListItem = props => {
    return (
        <li className="collection-item avatar">
            <img className="circle" src={props.picture}></img>
            <span className="title">name: {props.first}</span>
            <p>Email: {props.email} </p>
            <p> Date of Birth: {(props.dob.getMonth() + 1)}-{props.dob.getDate()}-{props.dob.getFullYear()}</p>
        </li>
    )
}

export default UserListItem;