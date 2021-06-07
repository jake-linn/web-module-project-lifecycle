import React from "react";



class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ""
        };
    };

    handleChange = e => {
        this.setState({
            ...this.state,
            search: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchFunc(this.state.search)
        this.setState({
            ...this.state,
            search: ""
        });
    };

    render() {
        return(
            <div onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter username here..."
                    value={this.state.search}
                    onChange={this.handleChange}
                />
                <div className="btn-div">
                    <button>Get User!</button>
                </div>
            </div>
        );
    };
};

export default Search;