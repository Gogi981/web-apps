import React from 'react'

const SearchBar = props => {
    const onSearchInput = (e) => {
        props.onInput(e.target.value.toLowerCase())
    }

    return (
        <div className="inputField">
            <label className="label" htmlFor="search"><i className="material-icons">search</i></label>
            <input id="search" type="text" onChange={onSearchInput} value={props.currentValue} placeholder="Search" />
        </div>
    )
}

export default SearchBar;
