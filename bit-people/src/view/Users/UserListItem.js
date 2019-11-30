import React from 'react'

const UserListItem = props => {
    if (props.gender === "female") {
        return (
            <li className="collection-item avatar reddish">
                <img className="circle" src={props.picture} alt="User Avatar"></img>
                <span className="title">name: {props.first} {props.last}</span>
                <p> <i className="material-icons">email</i> email: {props.email} </p>
                <p> <i className="material-icons">cake</i>date of Birth: {props.dob}</p>
            </li>
        )
    } else {
        return (
            <li className="collection-item avatar">
                <img className="circle" src={props.picture} alt="User Avatar"></img>
                <span className="title">name: {props.first} {props.last}</span>
                <p> <i className="material-icons">email</i> email: {props.email} </p>
                <p> <i className="material-icons">cake</i>date of Birth: {props.dob}</p>
            </li>
        )
    }
}


export default UserListItem;