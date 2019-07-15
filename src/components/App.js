// Main App
import React, { Component } from "react";
import "../style/App.css";

import Searchbar from "./Searchbar";

export default class App extends Component {
    render() {
        return (
            <div>
                <Searchbar />
            </div>
        );
    }
}
