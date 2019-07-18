// Main App
import React, { Component } from "react";
import axios from "axios";
import "../style/App.css";
import KEYS from "../keys";

import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

export default class App extends Component {
    state = {
        imageResults: []
    };

    onSearch = async term => {
        const searchResults = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
                params: {
                    query: term,
                    per_page: 48
                },

                headers: {
                    Authorization: `Client-ID ${KEYS.access_key}`
                }
            }
        );
        console.log(searchResults);
        this.setState({ imageResults: searchResults.data.results });
    };

    render() {
        return (
            <div id="app">
                <Searchbar onSearch={this.onSearch} />
                <ImageList images={this.state.imageResults} />
                {this.state.imageResults !== [] ? (
                    <footer id="disclaimer">
                        <span id="disclaimer-text">
                            Images provided by{" "}
                            <a href="https://unsplash.com">Unsplash</a>
                        </span>
                    </footer>
                ) : null}
            </div>
        );
    }
}
