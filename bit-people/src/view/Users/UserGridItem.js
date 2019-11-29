import React from 'react'

const UserGridItem = props => {
    return (
        <div class="col s4 m4">
            <div class="card">
                <div class="card-image">
                    <img src={props.picture}></img>
                    <span class="card-title">{props.first}</span>
                </div>
                <div class="card-content">
                    <p> <i class="material-icons">email</i> email: {props.email} </p>
                    <p> <i class="material-icons">cake</i>date of Birth: {props.dob}</p>
                </div>


            </div>
        </div>

    )
}

export default UserGridItem;


