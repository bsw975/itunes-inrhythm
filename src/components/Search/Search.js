import React from "react";
import "./Search.css";

const Search = props => {
    let guide;
    console.log(props)
    if (props.newpage) {
        guide = ""
    } else {
        guide = "Click to show in Apple Mussic";
    }
    return (<div>
        <h1 className="title">Lookup an iTunes Album</h1>
        <form>
            <div className="form-group">
                <label htmlFor="search"></label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    // className="form-control"
                    placeholder="Enter an artist"
                    id="search"
                />
                <br />
                <button
                    onClick={props.handleFormSubmit}
                    className="btn btn-primary"
                >Search</button>
            </div>
        </form>
        <h6 className='guide'>{guide}</h6>
    </div>)
};

export default Search;
