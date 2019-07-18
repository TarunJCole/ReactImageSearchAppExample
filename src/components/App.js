// Main App
import React, { Component } from "react";
import axios from "axios";
import "../style/App.css";
import KEYS from "../keys";

import Searchbar from "./Searchbar";
import ImageList from "./ImageList";
import Modal from "./Modal";

export default class App extends Component {
    state = {
        imageResults: [],
        modalImage: null
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

    changeModalImage = image => {
        console.log(image);
        this.setState({ modalImage: image });
    };

    render() {
        return (
            <div id="app">
                <Searchbar onSearch={this.onSearch} />
                <ImageList
                    images={this.state.imageResults}
                    changeModalImage={this.changeModalImage}
                />
                {this.state.imageResults !== [] &&
                this.state.modalImage === null ? (
                    <footer id="disclaimer">
                        <span id="disclaimer-text">
                            Images provided by{" "}
                            <a href="https://unsplash.com">Unsplash</a>
                        </span>
                    </footer>
                ) : null}
                {this.state.modalImage ? (
                    <Modal
                        image={this.state.modalImage}
                        changeModalImage={this.changeModalImage}
                    />
                ) : null}
            </div>
        );
    }
}
