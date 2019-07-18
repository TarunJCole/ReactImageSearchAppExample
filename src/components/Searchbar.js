import React, { Component } from "react";

export default class Searchbar extends Component {
    state = {
        term: ""
    };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSearch(this.state.term);
    };

    render() {
        return (
            <div className="searchbar">
                <i className="fas fa-search" />
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        onChange={this.onInputChange}
                        value={this.state.term}
                        placeholder="Search"
                    />
                </form>
            </div>
        );
    }
}
