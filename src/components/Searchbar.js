import React, { Component } from "react";

export default class Searchbar extends Component {
    state = {
        term: ""
    };

    onInputChange = event => {
        this.setState({ term: event.target.value });
        console.log(this.state.term);
    };

    render() {
        return (
            <div className="searchbar">
                <i className="fas fa-search" />
                <form onSubmit={this.props.onSearchSubmit}>
                    <input
                        type="text"
                        onChange={this.onInputChange}
                        value={this.state.term}
                    />
                </form>
            </div>
        );
    }
}
