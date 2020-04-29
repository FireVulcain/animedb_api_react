import React, { Component } from "react";
import { formatAMPM, sortArrByTime } from "./../../helpers/helpers";

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            airingNextId: null,
        };
    }
    componentDidMount = () => {
        const { data } = this.props;
        this.setState({ airingNextId: this.airingNext(data).id });
    };

    isInPast = (airingAt, episode) => {
        const date1 = new Date(airingAt * 1000);
        const now = new Date();
        if (date1 < now) {
            return `Ep ${episode} aired at ${formatAMPM(new Date(airingAt * 1000))}`;
        } else {
            return `Ep ${episode} airing at ${formatAMPM(new Date(airingAt * 1000))}`;
        }
    };

    airingNow = (airingAt, duration) => {
        const now = new Date();
        const dateAiring = new Date(airingAt * 1000);
        const finalAiring = new Date(airingAt * 1000);
        finalAiring.setTime(finalAiring.getTime() + duration * 60 * 1000);

        if (dateAiring <= now && finalAiring >= now) {
            return true;
        } else {
            return false;
        }
    };
    airingNext = (datas) => {
        const now = new Date();

        let closest = Infinity;

        datas.forEach(function (data) {
            const date = new Date(data.airingAt * 1000);

            if (date >= now && (date < new Date(closest.airingAt * 1000) || date < closest)) {
                closest = data;
            }
        });

        return closest;
    };

    render() {
        const { data } = this.props;
        const { airingNextId } = this.state;
        const daysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const daysCustomOrder = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];

        return (
            <div className="calendar">
                {daysCustomOrder.map((day, key) => {
                    return (
                        <div className="day" key={key}>
                            <h2>{day}</h2>
                            <div className="cards">
                                {data.sort(sortArrByTime).map((element, i) => {
                                    let d = new Date(element.airingAt * 1000);
                                    if (day === daysOrder[d.getDay()]) {
                                        return (
                                            <div className="airing-card" key={i}>
                                                <a href={`/anime/${element.media.id}/`} target="_blank" rel="noopener noreferrer">
                                                    <img
                                                        src={element.media.coverImage.extraLarge}
                                                        className="image"
                                                        alt={element.media.title.romaji}
                                                    />
                                                    <div className="content">
                                                        <div className="title">{element.media.title.romaji}</div>
                                                        <div className="airing">{this.isInPast(element.airingAt, element.episode)}</div>
                                                        {this.airingNow(element.airingAt, element.media.duration) ? (
                                                            <div className="airing-now">Airing Now</div>
                                                        ) : null}
                                                        {airingNextId === element.id ? <div className="airing-next">Airing Next</div> : null}
                                                    </div>
                                                </a>
                                            </div>
                                        );
                                    } else {
                                        return false;
                                    }
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
