import React, { Component } from "react";

import { Scrollbars } from "react-custom-scrollbars";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

/* Components */
import { Header, ExternalLinks } from "./../";

export default class Cards extends Component {
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
    render() {
        const { data, type, season } = this.props;
        return (
            <div className="card-list">
                {data.map((element, key) => {
                    return (
                        <div
                            className="container"
                            key={key}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                            data-element={`${type}${key}`}
                            data-id={`${element.id}`}
                        >
                            <div className="cover">
                                <LazyLoadImage alt={element.title.romaji} height={265} effect="blur" src={element.coverImage.large} />

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
                            </div>
                            <div className="data">
                                <Scrollbars autoHide>
                                    <div className="scroller">
                                        <div className="scroller-wrap">
                                            <div className="body">
                                                <Header element={element} season={season} />
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
