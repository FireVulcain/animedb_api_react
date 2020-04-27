import React, { Component } from "react";

import { externalLinks } from "./../../helpers/helpers";

class ExternalLinks extends Component {
    render() {
        const { element } = this.props;
        return (
            <div className="external-links-wrap">
                <div className="section">
                    {element.hashtag ? (
                        <a href={`https://twitter.com/search?q=%23${element.hashtag.split(" ")[0].replace("#", "")}`} className="hashtag">
                            {element.hashtag.split(" ")[0]}
                        </a>
                    ) : null}
                    <div className="external-links">{externalLinks(element.externalLinks)}</div>
                </div>
                {element.trailer ? (
                    <a href={`https://www.youtube.com/watch?v=${element.trailer.id}`} target="_blank" rel="noopener noreferrer">
                        <div className="trailer" style={{ backgroundImage: "url(" + element.trailer.thumbnail + ")" }}></div>
                    </a>
                ) : null}
            </div>
        );
    }
}
export default ExternalLinks;
