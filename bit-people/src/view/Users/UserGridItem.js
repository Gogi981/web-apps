import React from 'react'

const UserGridItem = props => {
    if (props.gender === "female") {
        return (
            <div className="col s4 m4">
                <div className="card reddish">
                    <div className="card-image ">
                        <img src={props.picture} alt="User Avatar"></img>
                        <span className="card-title">{props.first}</span>
                    </div>
                    <div className="card-content">
                        <p> <i className="material-icons">email</i> email: {props.email} </p>
                        <p> <i className="material-icons">cake</i>date of Birth: {props.dob}</p>
                    </div>


                </div>
            </div>
        )
    } else {
        return (
            <div className="col s4 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={props.picture} alt="User Avatar"></img>
                        <span className="card-title">{props.first}</span>
                    </div>
                    <div className="card-content">
                        <p> <i className="material-icons">email</i> email: {props.email} </p>
                        <p> <i className="material-icons">cake</i>date of Birth: {props.dob}</p>
                    </div>


                </div>
            </div>

        )

    }
}

export default UserGridItem;


