import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import React, { Component } from "react";

export default class SkeletonLoader extends Component {
    render() {
        const items = [];

        for (let i = 0; i < 9; i++) {
            items.push(
                <div className="container" key={i}>
                    <SkeletonTheme color="#202020" highlightColor="#292929">
                        <Skeleton width={185} height={265} duration={2} />
                    </SkeletonTheme>
                    <SkeletonTheme color="#403f3f" highlightColor="#444">
                        <div className="skeleton-title">
                            <Skeleton height={40} duration={2} />
                        </div>
                        <div className="skeleton-text">
                            <Skeleton height={8} duration={2} />
                            <Skeleton height={8} duration={2} />
                            <Skeleton height={8} duration={2} />
                        </div>
                    </SkeletonTheme>
                </div>
            );
        }
        return <div id="anime">{items}</div>;
    }
}
