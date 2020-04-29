import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import React, { Component } from "react";

export default class SkeletonAiring extends Component {
    render() {
        const day = [];
        const airingCard = [];

        for (let i = 0; i < 7; i++) {
            day.push(
                <div className="day" key={i}>
                    <SkeletonTheme color="#1a1e24" highlightColor="#2b3442">
                        <div style={{ marginBottom: 20, marginTop: 25 }}>
                            <Skeleton height={40} duration={2} />
                        </div>
                    </SkeletonTheme>
                    <div className="cards">{airingCard}</div>
                </div>
            );
        }
        for (let i = 0; i <= 12; i++) {
            airingCard.push(
                <div className="airing-card" key={i}>
                    <SkeletonTheme color="#1a1e24" highlightColor="#2b3442">
                        <Skeleton height={58} duration={2} />
                    </SkeletonTheme>
                </div>
            );
        }
        return <div className="calendar">{day}</div>;
    }
}
