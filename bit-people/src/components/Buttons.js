import React from 'react'

const Buttons = props => {
    return (

        <div className="buttons">
            <span><i onClick={props.changeLayout} className="material-icons">{(props.isList) ? "view_module" : "list"}</i></span>
            <span><i onClick={props.loadPageData} className="material-icons">refresh</i></span>
        </div>
    )
}

export default Buttons;
