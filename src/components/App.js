// Main App
import React, { Component } from "react";
import axios from "axios";
import "../style/App.css";

import Searchbar from "./Searchbar";

export default class App extends Component {
    state = {
        searchTerm: "",
        imageResults: []
    };

    onSearchSubmit = event => {
        event.preventDefault();
        console.log("submitted");
    };

    render() {
        return (
            <div>
                <Searchbar onSearchSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}
