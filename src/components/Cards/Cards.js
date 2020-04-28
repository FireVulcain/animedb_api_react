import React, { Component } from "react";

import { Scrollbars } from "react-custom-scrollbars";

/* Components */
import Header from "./Header";
import ExternalLinks from "./ExternalLinks";

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }
    handleMouseLeave = (e) => {
        let selector = document.querySelectorAll(`[data-element="${e.currentTarget.dataset.element}"] .data > div > div`);
        selector.forEach((el) => {
            el.scroll({
                top: 0,
                behavior: "smooth",
            });
        });

        let selectIdAnime = document.getElementById(e.currentTarget.dataset.id);
        if (selectIdAnime) {
            selectIdAnime.classList.remove("active");
        }
    };
    handleMouseEnter = (e) => {
        let selector = document.getElementById(e.currentTarget.dataset.id);
        if (selector) {
            if (!selector.classList.contains("active")) {
                selector.className += " active";
            }
        }
    };
    handleImageLoaded = () => {
        this.setState({ loaded: true });
    };
    render() {
        const { data, type } = this.props;
        const { loaded } = this.state;
        return (
            <div className="card-list">
                {data
                    .sort((a, b) => (a.title.romaji > b.title.romaji ? 1 : -1))
                    .sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
                    .map((element, key) => {
                        return (
                            <div
                                className="container"
                                key={key}
                                onMouseEnter={this.handleMouseEnter}
                                onMouseLeave={this.handleMouseLeave}
                                data-element={`${type}${key}`}
                                data-id={`${element.id}`}
                            >
                                <a href={`anime/${element.id}`}>
                                    <img
                                        onLoad={this.handleImageLoaded}
                                        className={loaded ? "loaded" : null}
                                        src={element.coverImage.large}
                                        alt={element.title.romaji}
                                    />
                                    <div className="overlay">
                                        <p className="title">{element.title.romaji}</p>
                                        {element.studios ? (
                                            element.studios.nodes.length > 0 ? (
                                                <div className="studio">
                                                    <p target="_blank" rel="noopener noreferrer">
                                                        {element.studios.nodes[0].name}
                                                    </p>
                                                </div>
                                            ) : null
                                        ) : null}
                                    </div>
                                </a>
                                <div className="data">
                                    <Scrollbars autoHide>
                                        <div className="scroller">
                                            <div className="scroller-wrap">
                                                <div className="body">
                                                    <Header element={element} index={key} />
                                                    <ExternalLinks element={element} />
                                                    <div className="description-wrap">
                                                        <span
                                                            className="description"
                                                            dangerouslySetInnerHTML={{
                                                                __html: element.description,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Scrollbars>

                                    <div className="footer">
                                        <div className="genres">
                                            {element.genres.map((genre, key) => {
                                                return (
                                                    <div className="genre" key={key}>
                                                        {genre}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        );
    }
}
