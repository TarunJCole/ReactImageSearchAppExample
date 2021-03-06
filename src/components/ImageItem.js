import React, { Component } from "react";

export default class ImageItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };

        this.imageInfo = React.createRef();
    }

    componentDidUpdate() {
        this.state.hover
            ? this.imageInfo.current.classList.add("display")
            : this.imageInfo.current.classList.remove("display");
    }

    render() {
        return (
            <div
                className="image-item"
                onMouseEnter={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
                onClick={() => this.props.changeModalImage(this.props.image)}
            >
                <img
                    src={this.props.image.urls.regular}
                    alt={this.props.image.alt_description}
                />
                <div className="image-info" ref={this.imageInfo}>
                    <div>
                        <img
                            src={this.props.image.user.profile_image.medium}
                            alt="user avatar"
                        />
                        <span>{this.props.image.user.name}</span>
                    </div>
                    <span>
                        <i className="far fa-thumbs-up" />{" "}
                        {this.props.image.likes}
                    </span>
                </div>
            </div>
        );
    }
}
