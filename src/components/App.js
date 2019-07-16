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
                    query: term
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
            <div>
                <Searchbar onSearch={this.onSearch} />
                <ImageList images={this.state.imageResults} />
            </div>
        );
    }
}
