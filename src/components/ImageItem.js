import React, { Component } from "react";

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <img
                    src={this.props.image.urls.regular}
                    alt={this.props.image.alt_description}
                />
            </div>
        );
    }
}
