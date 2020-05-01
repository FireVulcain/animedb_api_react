import React, { Component } from "react";

import { diffBetweenDates, firstAiringDate, airingIn, averageScore, ranking } from "./../../helpers/helpers";

class Header extends Component {
    render() {
        const { element, season } = this.props;
        return (
            <div className="header">
                <div>
                    {element.nextAiringEpisode ? (
                        <div>
                            <div className="episode">{airingIn(element.airingSchedule, element.episodes)}</div>
                            <div className="countdown">
                                {diffBetweenDates(new Date(element.nextAiringEpisode.airingAt * 1000), new Date(), element.startDate)}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="episode">
                                {element.episodes
                                    ? element.episodes === 1
                                        ? `${element.episodes} Episode airing in`
                                        : `${element.episodes} Episodes airing in`
                                    : "Airing in"}
                            </div>
                            <div className="countdown">{firstAiringDate(element.startDate)}</div>
                        </div>
                    )}

                    <div>{element.source ? <div className="source">Source • {element.source.toLowerCase().replace("_", " ")}</div> : null}</div>
                </div>
                <div className="icon-stats">
                    {element.averageScore ? (
                        <div className="icon-stat">
                            {averageScore(element.averageScore)}
                            <span className="stat">{element.averageScore}%</span>
                        </div>
                    ) : null}
                    {ranking(element.rankings, season)}
                </div>
            </div>
        );
    }
}
export default Header;
