import React from 'react'
import UserGridItem from './UserGridItem'


const UserGrid = props => {
    return (
        <div className="row">
            {props.data.map(element => {
                return (
                    <UserGridItem first={element.first} last={element.last} email={element.getHiddenEmail()} dob={element.getDateString()} picture={element.picture} gender={element.gender} key={element.id} ></UserGridItem>
                )
            })}
        </div>
    )
}

export default UserGrid;