import React, { Component } from "react";

export default class ImageItem extends Component {
    render() {
        return (
            <img
                src={this.props.image.urls.regular}
                alt={this.props.image.alt_description}
            />
        );
    }
}
