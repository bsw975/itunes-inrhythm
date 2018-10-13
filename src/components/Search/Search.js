import React from "react";
import "./Search.css";

const Search = props => {
    let guide, title;
    console.log(props.newpage)
    if (props.newpage) {
        guide = '',
        title = "To see iTunes albums..."
    } else {
        guide = '(Click to show in Apple Music)',
        title = "To see some more iTunes albums..."
    }
    return (<div>
        <h1 className="title">{title}</h1>
        <form>
            <div className="form-group">
                <label htmlFor="search"></label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    placeholder=" Enter an artist"
                    id="search"
                />
                {/* <br /> */}
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
