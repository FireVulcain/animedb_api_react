import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

export default class DesktopMenu extends Component {
    render() {
        const currentYear = new Date().getFullYear();
        return (
            <header id="navbar">
                <nav className="wrap">
                    <a href="/" className="logo-link">
                        <img src={logo} alt="Logo Site" />
                    </a>
                    <div className="seasons">
                        <NavLink to={`/winter/${currentYear}`} className="season" activeClassName="active">
                            <div className="season-name">Winter</div>
                            <div className="season-year">{currentYear}</div>
                        </NavLink>
                        <NavLink to={`/spring/${currentYear}`} className="season" activeClassName="active">
                            <div className="season-name">Spring</div>
                            <div className="season-year">{currentYear}</div>
                        </NavLink>
                        <NavLink to={`/summer/${currentYear}`} className="season" activeClassName="active">
                            <div className="season-name">Summer</div>
                            <div className="season-year">{currentYear}</div>
                        </NavLink>
                        <NavLink to={`/fall/${currentYear}`} className="season" activeClassName="active">
                            <div className="season-name">Fall</div>
                            <div className="season-year">{currentYear}</div>
                        </NavLink>
                    </div>
                    <div className="charts">
                        <NavLink to="/airing" activeClassName="active">
                            <svg version="1.1" viewBox="0 0 18 18" className="svg-icon" aria-label="Airing" style={{ width: "18px" }}>
                                <path
                                    pid="0"
                                    d="M14.25 3H3.75a1.5 1.5 0 0 0-1.5 1.5V15a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V4.5a1.5 1.5 0 0 0-1.5-1.5zM12 1.5v3M6 1.5v3M2.25 7.5h13.5"
                                    _stroke="#EDF1F5"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                            <div className="label">Airing</div>
                        </NavLink>
                        <NavLink to="/archive" activeClassName="active">
                            <svg version="1.1" viewBox="0 0 18 18" className="svg-icon" aria-label="Archive" style={{ width: "18px" }}>
                                <g clipPath="url(#clip0)" _stroke="#EDF1F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path
                                        pid="0"
                                        d="M15.75 6v8.75a1 1 0 0 1-1 1H3.25a1 1 0 0 1-1-1V6M16.25 2.25H1.75a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1h14.5a1 1 0 0 0 1-1V3.25a1 1 0 0 0-1-1zM7.5 9h3"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <path pid="1" _fill="#fff" d="M0 0h18v18H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="label">Archive</div>
                        </NavLink>
                        <NavLink to="/tba" activeClassName="active">
                            <svg version="1.1" viewBox="0 0 17 15" className="svg-icon" style={{ width: "18px" }}>
                                <path
                                    pid="0"
                                    d="M9.625 13.125L15.25 7.5 9.625 1.875M1.75 13.125L7.375 7.5 1.75 1.875"
                                    _stroke="#E1E1E4"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                            <div className="label">TBA</div>
                        </NavLink>
                        <NavLink className="tooltip-search" to="/search" activeClassName="active">
                            <svg viewBox="0 0 19 19" className="svg-icon" style={{ width: "18px" }}>
                                <path
                                    pid="0"
                                    d="M8.708 15.042a6.333 6.333 0 1 0 0-12.667 6.333 6.333 0 0 0 0 12.667zM16.625 16.625l-3.444-3.444"
                                    _stroke="#777A9E"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                            <div className="label">Search</div>
                        </NavLink>
                    </div>
                </nav>
            </header>
        );
    }
}
