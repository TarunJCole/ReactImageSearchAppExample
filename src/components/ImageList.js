import React, { Component } from "react";

import ImageItem from "./ImageItem";

export default class ImageList extends Component {
    render() {
        return (
            <div>
                {this.props.images
                    ? this.props.images.map(image => (
                          <ImageItem image={image} key={image.id} />
                      ))
                    : null}
            </div>
        );
    }
}
