import React from 'react';
import LastVisit from '../components/LastVisit'

const Footer = (props) => {
    return (
        <div className="page-footer">
            <span>
                © {new Date().getFullYear()} Copyright Text
            </span>
            <LastVisit lastRefresh={props.lastRefresh} />
        </div>

    )
}



export default Footer;