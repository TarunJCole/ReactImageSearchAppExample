import React, { Component } from "react";

import ImageItem from "./ImageItem";

export default class ImageList extends Component {
    render() {
        return (
            <div id="image-list">
                {this.props.images
                    ? this.props.images.map(image => (
                          <ImageItem
                              image={image}
                              key={image.id}
                              changeModalImage={this.props.changeModalImage}
                          />
                      ))
                    : null}
            </div>
        );
    }
}
