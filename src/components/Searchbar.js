import React, { Component } from "react";

export default class Searchbar extends Component {
    render() {
        return (
            <div class="searchbar">
                <i className="fas fa-search" />
                <input type="text" />
            </div>
        );
    }
}
