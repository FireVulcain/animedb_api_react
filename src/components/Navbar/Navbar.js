import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

export default class Navbar extends Component {
    render() {
        return (
            <header id="navbar">
                <div className="wrap">
                    <a href="/" className="logo-link">
                        <img src={logo} alt="Logo Site" />
                    </a>
                    <div className="seasons">
                        <NavLink to="/winter/2020" className="season" activeClassName="active">
                            <div className="season-name">Winter</div>
                            <div className="season-year">2020</div>
                        </NavLink>
                        <NavLink to="/spring/2020" className="season" activeClassName="active">
                            <div className="season-name">Spring</div>
                            <div className="season-year">2020</div>
                        </NavLink>
                        <NavLink to="/summer/2020" className="season" activeClassName="active">
                            <div className="season-name">Summer</div>
                            <div className="season-year">2020</div>
                        </NavLink>
                        <NavLink to="/fall/2020" className="season" activeClassName="active">
                            <div className="season-name">Fall</div>
                            <div className="season-year">2020</div>
                        </NavLink>
                    </div>
                    <div className="charts">
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
                    </div>
                </div>
            </header>
        );
    }
}
