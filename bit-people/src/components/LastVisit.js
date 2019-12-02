import React from 'react';

const LastVisit = (props) => {


    var timeDifference = (Date.parse(Date()) - (Date.parse(props.lastRefresh))) / 1000;
    var result = "";

    if (timeDifference < 60) {
        result = "1 minute ago"
    } else if (timeDifference < (60 * 60)) {
        result = `${Math.floor(timeDifference / 60)} minutes ago`
    } else if (timeDifference < (24 * 3600)) {
        result = `Over an hour ago`
    } else if (timeDifference < (7 * 24 * 3600)) {
        result = `${Math.floor(timeDifference / 24 / 3600)} days ago`
    } else if (timeDifference < (30 * 24 * 3600)) {
        result = `Over a week ago`
    } else {
        result = `Over a month ago`
    }

    return (
        <span className="lastRefresh">
            <span>
                Last update: {result}
            </span>
        </span>
    )

}

export default LastVisit;