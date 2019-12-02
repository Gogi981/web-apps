import React from 'react'

const UserStats = (props) => {
    let numberOfFemaleUsers = 0;

    props.users.forEach((element) => {
        if (element.gender === "female") {
            numberOfFemaleUsers++
        }
    })

    return (
        <div className="userStats">
            <span> Male:{props.users.length - numberOfFemaleUsers}</span>
            <span> Female:{numberOfFemaleUsers}</span>
        </div>

    )
}

export default UserStats;
