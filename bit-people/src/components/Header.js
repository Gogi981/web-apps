import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {

    let icon = "list";

    if (props.isList) { icon = "view_module" };

    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
                <ul class="right hide-on-med-and-down">
                    <li> <Link to="about">About </Link> </li>
                    <li><i onClick={() => document.location.reload()} className="material-icons">refresh</i></li>
                    <li><i onClick={props.onChangeLayout} className="material-icons">{icon}</i></li>

                </ul>
            </div>
        </nav >
    )
}

export default Header;
