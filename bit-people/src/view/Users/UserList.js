import React from 'react'
import UserListItem from './UserListItem'
import format from 'date-format'

const UserList = props => {
    return (
        <ul className="collection">
            {props.data.map(element => {
                return (
                    <UserListItem first={element.first} last={element.last} email={element.getHiddenEmail()} dob={element.getDateString()} picture={element.picture} gender={element.gender} key={element.id} ></UserListItem>
                )
            })}

        </ul>
    )
}

export default UserList;