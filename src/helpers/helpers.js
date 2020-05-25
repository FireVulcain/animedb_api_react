import React from "react";

export function diffBetweenDates(future, now) {
    let delta = Math.abs(future - now) / 1000;

    let month = Math.floor(delta / 2.628e6);
    delta -= month * 2.628e6;

    let days = Math.floor(delta / 86400);
    delta -= days * 86400;

    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    let monthText = month > 1 ? `${month} months` : `${month} month`;
    let daysText = days > 1 ? `${days} days` : `${days} day`;
    let hoursText = hours > 1 ? `${hours} hours` : `${hours} hour`;
    let minutesText = minutes > 1 ? `${minutes} mins` : `${minutes} min`;

    switch (true) {
        case month > 0 && days > 0:
            return `${monthText}, ${daysText}`;
        case month > 0 && days === 0 && hours > 0:
            return `${monthText}, ${hoursText}`;
        case month > 0 && days === 0 && hours === 0 && minutes > 0:
            return `${monthText}, ${minutesText}`;
        case month > 0:
            return `${monthText}`;
        case days > 0 && hours > 0:
            return `${daysText}, ${hoursText}`;
        case days > 0 && hours === 0 && minutes > 0:
            return `${daysText}, ${minutesText}`;
        case days > 0:
            return `${daysText}`;
        case hours > 0 && minutes > 0:
            return `${hoursText}, ${minutesText}`;
        case hours > 0:
            return `${hoursText}`;
        case minutes > 0:
            return `${minutesText}`;
        default:
            return `Airing now`;
    }
}
export function firstAiringDate(date) {
    var listMonth = [];
    listMonth[1] = "January";
    listMonth[2] = "February";
    listMonth[3] = "March";
    listMonth[4] = "April";
    listMonth[5] = "May";
    listMonth[6] = "June";
    listMonth[7] = "July";
    listMonth[8] = "August";
    listMonth[9] = "September";
    listMonth[10] = "October";
    listMonth[11] = "November";
    listMonth[12] = "December";

    let month = date.month ? listMonth[date.month] : "";
    let day = date.day ? ", " + date.day : "";

    if (!date.year) {
        return `TBA`;
    } else {
        return `${month}${day} ${date.year}`;
    }
}

export function currentSeason(date) {
    const d = date ? new Date(date) : new Date();
    let seasonArray = [
        { name: "SPRING", date: new Date(d.getFullYear(), 2, d.getFullYear() % 4 === 0 ? 19 : 20).getTime(), url: "/spring/2020" },
        { name: "SUMMER", date: new Date(d.getFullYear(), 5, d.getFullYear() % 4 === 0 ? 20 : 21).getTime(), url: "/summer/2020" },
        { name: "FALL", date: new Date(d.getFullYear(), 8, d.getFullYear() % 4 === 0 ? 22 : 23).getTime(), url: "/fall/2020" },
        { name: "WINTER", date: new Date(d.getFullYear(), 11, d.getFullYear() % 4 === 0 ? 20 : 21).getTime(), url: "/winter/2020" },
    ];
    const season = seasonArray.filter(({ date }) => date <= d).slice(-1)[0];
    return season;
}

export function airingIn(airingSchedule, episodes) {
    if (airingSchedule.nodes[0]) {
        let nextAired = airingSchedule.nodes[0].episode;
        if (episodes) {
            return `Ep ${nextAired} of ${episodes} airing in`;
        } else {
            return `Ep ${nextAired} airing in`;
        }
    }
}
export function averageScore(averageScore) {
    switch (true) {
        case averageScore >= 70:
            return (
                <svg version="1.1" viewBox="0 0 512 512" className="svg-icon svg-fill">
                    <path
                        fill="rgb(var(--color-green))"
                        stroke="none"
                        pid="0"
                        _fill="currentColor"
                        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
                    ></path>
                </svg>
            );
        case averageScore < 70 && averageScore >= 55:
            return (
                <svg version="1.1" viewBox="0 0 512 512" className="svg-icon svg-fill">
                    <path
                        fill="rgb(var(--color-orange))"
                        stroke="none"
                        pid="0"
                        _fill="currentColor"
                        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm8 144H160c-13.2 0-24 10.8-24 24s10.8 24 24 24h176c13.2 0 24-10.8 24-24s-10.8-24-24-24z"
                    ></path>
                </svg>
            );
        case averageScore < 55:
            return (
                <svg version="1.1" viewBox="0 0 512 512" className="svg-icon svg-fill">
                    <path
                        fill="rgb(var(--color-red))"
                        stroke="none"
                        pid="0"
                        _fill="currentColor"
                        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"
                    ></path>
                </svg>
            );

        default:
            break;
    }
}
export function externalLinks(externalLinks) {
    return externalLinks.map((link, key) => {
        switch (link.site) {
            case "Twitter":
                return (
                    <a key={key} href={link.url} target="_blank" alt="Twitter" rel="noopener noreferrer" className="external-link twitter">
                        <svg version="1.1" viewBox="0 0 15 12" className="icon svg-icon svg-fill">
                            <path
                                fill="#fff"
                                stroke="none"
                                pid="0"
                                d="M4.717 12c5.66 0 8.757-4.617 8.757-8.621 0-.131 0-.262-.01-.392A6.209 6.209 0 0 0 15 1.42a6.218 6.218 0 0 1-1.768.477A3.05 3.05 0 0 0 14.585.22a6.226 6.226 0 0 1-1.954.735A3.096 3.096 0 0 0 10.885.04a3.122 3.122 0 0 0-1.951.319A3.053 3.053 0 0 0 7.582 1.78a2.99 2.99 0 0 0-.195 1.939 8.845 8.845 0 0 1-3.514-.92A8.713 8.713 0 0 1 1.044.554 2.992 2.992 0 0 0 .707 2.76a3.032 3.032 0 0 0 1.29 1.837A3.091 3.091 0 0 1 .6 4.218v.039c0 .7.246 1.377.696 1.919.45.54 1.077.912 1.773 1.05a3.12 3.12 0 0 1-1.39.053c.197.602.58 1.128 1.095 1.506a3.113 3.113 0 0 0 1.78.598A6.238 6.238 0 0 1 0 10.64a8.813 8.813 0 0 0 4.717 1.359"
                                _fill="#fff"
                            ></path>
                        </svg>
                    </a>
                );
            case "Official Site":
                return (
                    <a
                        key={key}
                        href={link.url}
                        alt="Official Site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link official-site"
                    >
                        <svg version="1.1" viewBox="0 0 16 16" className="icon svg-icon">
                            <path
                                stroke="#fff"
                                fill="none"
                                pid="0"
                                d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334z"
                                _stroke="#76868E"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                stroke="#fff"
                                fill="none"
                                pid="1"
                                d="M10.827 5.173l-1.414 4.24-4.24 1.414 1.414-4.24 4.24-1.414z"
                                _stroke="#76868E"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </a>
                );
            case "Crunchyroll":
                return (
                    <a key={key} href={link.url} alt="Crunchyroll" target="_blank" rel="noopener noreferrer" className="external-link crunchyroll">
                        <svg version="1.1" viewBox="0 0 15 15" className="icon svg-icon svg-fill">
                            <path
                                fill="#fff"
                                stroke="none"
                                pid="0"
                                d="M1.808 8.404a6.591 6.591 0 0 1 6.596-6.596 6.6 6.6 0 0 1 6.58 6.136C15 7.801 15 7.643 15 7.5 15 3.362 11.639 0 7.5 0A7.505 7.505 0 0 0 0 7.5C0 11.639 3.362 15 7.5 15c.174 0 .349 0 .507-.016a6.599 6.599 0 0 1-6.2-6.58z"
                                _fill="#fff"
                            ></path>
                            <path
                                fill="#fff"
                                stroke="none"
                                pid="1"
                                d="M12.05 8.768a2.392 2.392 0 0 1-.808-4.645 5.314 5.314 0 0 0-2.458-.603 5.278 5.278 0 0 0-5.28 5.28 5.278 5.278 0 0 0 5.28 5.28 5.278 5.278 0 0 0 5.28-5.28c0-.333-.031-.65-.095-.967a2.405 2.405 0 0 1-1.918.935z"
                                _fill="#fff"
                            ></path>
                        </svg>
                    </a>
                );
            default:
                return false;
        }
    });
}

export function getCurrentWeek() {
    let getDay = [];
    getDay[0] = 7;
    getDay[1] = 1;
    getDay[2] = 2;
    getDay[3] = 3;
    getDay[4] = 4;
    getDay[5] = 5;
    getDay[6] = 6;

    let curr = new Date();
    curr.setHours(23, 59, 59);
    let first = curr.getDate() - getDay[curr.getDay()];

    let firstday = new Date(curr.setDate(first));
    let lastday = new Date(curr.setDate(curr.getDate() + 7));

    let firstdayTimestamp = Math.round(firstday / 1000);
    let lastdayTimestamp = Math.round(lastday / 1000);

    let week = {
        weekStart: firstdayTimestamp,
        weekEnd: lastdayTimestamp,
    };
    return week;
}

export function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? (hours < 10 ? `0${hours}` : hours) : 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
}

export function sortArrByTime(a, b) {
    let aHours = new Date(a.airingAt * 1000).getHours();
    let bHours = new Date(b.airingAt * 1000).getHours();
    if (aHours < bHours) return -1;
    if (aHours > bHours) return 1;
    return 0;
}

export function sortBy(data, type) {
    switch (type) {
        case "title":
            data.sort((a, b) => (a.title.romaji.toLowerCase().replace(/\W/g, " ") > b.title.romaji.toLowerCase().replace(/\W/g, " ") ? 1 : -1));
            break;
        case "nextAiring":
            data.sort((a, b) => {
                if (a.airingSchedule.nodes.length > 0 && b.airingSchedule.nodes.length > 0) {
                    return a.airingSchedule.nodes[0].airingAt > b.airingSchedule.nodes[0].airingAt ? 1 : -1;
                } else {
                    let va =
                            a.airingSchedule.nodes.length > 0
                                ? a.airingSchedule.nodes[0].airingAt
                                : a.nextAiringEpisode
                                ? a.nextAiringEpisode.airingAt
                                : null,
                        vb =
                            b.airingSchedule.nodes.length > 0
                                ? b.airingSchedule.nodes[0].airingAt
                                : b.nextAiringEpisode
                                ? b.nextAiringEpisode.airingAt
                                : null;

                    return va < vb ? 1 : -1;
                }
            });
            break;
        case "score":
            data.sort((a, b) => (a.title.romaji > b.title.romaji ? 1 : -1)).sort((a, b) => (a.averageScore > b.averageScore ? -1 : 1));
            break;
        case "startDate":
            data.sort((a, b) => (a.title.romaji > b.title.romaji ? 1 : -1)).sort((a, b) => {
                if (a.startDate && b.startDate) {
                    return (
                        new Date(`${a.startDate.year}-${a.startDate.month}-${a.startDate.day}`) -
                        new Date(`${b.startDate.year}-${b.startDate.month}-${b.startDate.day}`)
                    );
                }
                return false;
            });
            break;
        case "endDate":
            data.sort((a, b) => (a.title.romaji > b.title.romaji ? 1 : -1)).sort((a, b) => {
                if (a.startDate && b.startDate) {
                    return (
                        new Date(`${a.startDate.year}-${a.startDate.month}-${a.startDate.day}`) +
                        new Date(`${b.startDate.year}-${b.startDate.month}-${b.startDate.day}`)
                    );
                }
                return false;
            });
            break;
        case "popularity":
        default:
            data.sort((a, b) => (a.title.romaji > b.title.romaji ? 1 : -1)).sort((a, b) => (a.popularity > b.popularity ? -1 : 1));
            break;
    }
    return data;
}

export function ranking(datas) {
    if (datas.length > 0) {
        return datas.map((data, key) => {
            if (data.type === "POPULAR" && data.season !== null) {
                return (
                    <div className="icon-stat" key={key}>
                        <svg version="1.1" viewBox="0 0 18 18" className="svg-icon">
                            <path
                                stroke="rgb(var(--color-red))"
                                fill="none"
                                pid="0"
                                d="M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 1 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835v0z"
                                _stroke="#EF5C5C"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <span className="stat">#{data.rank}</span>
                    </div>
                );
            }
            return false;
        });
    }
}
