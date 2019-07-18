import React, { Component } from "react";

export default class Modal extends Component {
    render() {
        return (
            <div id="modal-wrapper">
                <button
                    className="close-button"
                    onClick={() => this.props.changeModalImage(null)}
                >
                    <i className="fas fa-times fa-3x" />
                </button>

                <div id="modal-content">
                    <img
                        src={this.props.image.urls.full}
                        alt={this.props.image.alt_description}
                    />
                    <div>
                        <div className="user">
                            <img
                                src={this.props.image.user.profile_image.medium}
                                alt="user avatar"
                            />
                            <span>{this.props.image.user.name}</span>
                        </div>
                        <span>
                            <i className="far fa-thumbs-up fa-2x" />{" "}
                            {this.props.image.likes}
                        </span>
                        <span>
                            <i className="fas fa-link fa-2x" />
                            <a href={this.props.image.links.html}>
                                View On Unsplash
                            </a>
                        </span>
                        <span>
                            <i className="fas fa-download fa-2x" />
                            <a href={this.props.image.links.download}>
                                Download
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
