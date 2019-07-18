import React, { Component } from "react";

export default class Modal extends Component {
    render() {
        return (
            <div id="modal-wrapper">
                <button
                    className="close-button"
                    onClick={() => this.props.changeModalImage(null)}
                >
                    <i class="fas fa-times fa-3x" />
                </button>

                <div id="modal-content">
                    <img
                        src={this.props.image.urls.full}
                        alt={this.props.image.alt_description}
                    />
                </div>
            </div>
        );
    }
}
