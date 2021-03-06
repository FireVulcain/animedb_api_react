import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { bubble as Menu } from "react-burger-menu";

export default class MobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        };
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen });
    }

    closeMenu() {
        this.setState({ menuOpen: false });
    }
    render() {
        const currentYear = new Date().getFullYear();
        return (
            <Menu right isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                <div className="seasonMenu">
                    <NavLink to={`/winter/${currentYear}`} className="season" activeClassName="active" onClick={() => this.closeMenu()}>
                        <svg viewBox="0 0 20 22" style={{ width: 20 }}>
                            <path
                                fill="currentColor"
                                stroke="none"
                                pid="0"
                                d="M19.858 12.961c.131-.22.174-.48.119-.73-.122-.557-.685-.912-1.258-.794l-3.902 1.076L11.786 11l3.03-1.513 3.903 1.076c.573.118 1.136-.237 1.258-.795a1.032 1.032 0 0 0-.817-1.222l-2.12-.307 2.37-1.33c.507-.285.68-.916.388-1.409a1.077 1.077 0 0 0-1.45-.377l-2.369 1.33.787-1.938a1.026 1.026 0 0 0-.68-1.3 1.067 1.067 0 0 0-1.337.662L13.756 7.7l-2.695 1.513V6.187l2.91-2.747a1.011 1.011 0 0 0-.08-1.457 1.082 1.082 0 0 0-1.497.077L11.06 3.692v-2.66C11.06.461 10.586 0 10 0c-.587 0-1.062.462-1.062 1.031v2.66l-1.332-1.63a1.082 1.082 0 0 0-1.498-.078 1.011 1.011 0 0 0-.08 1.457l2.91 2.748v3.026L6.244 7.7 5.25 3.877a1.067 1.067 0 0 0-1.336-.662 1.026 1.026 0 0 0-.68 1.3l.786 1.938-2.37-1.33A1.077 1.077 0 0 0 .202 5.5 1.016 1.016 0 0 0 .591 6.91l2.369 1.33-2.12.307a1.032 1.032 0 0 0-.817 1.223c.122.557.685.912 1.258.794l3.902-1.076L8.214 11l-3.03 1.513-3.903-1.076c-.573-.118-1.136.237-1.258.795a1.032 1.032 0 0 0 .818 1.223l2.12.306-2.37 1.33A1.016 1.016 0 0 0 .202 16.5c.293.493.942.662 1.45.378l2.369-1.33-.787 1.937a1.001 1.001 0 0 0 .09.835c.127.213.331.383.59.465a1.067 1.067 0 0 0 1.337-.662l.993-3.824 2.695-1.513v3.027L6.03 18.56a1.011 1.011 0 0 0 .08 1.457 1.082 1.082 0 0 0 1.497-.077l1.333-1.632v2.66C8.94 21.539 9.414 22 10 22s1.06-.462 1.06-1.031v-2.66l1.333 1.63c.1.108.22.194.357.253a1.089 1.089 0 0 0 1.141-.175c.436-.381.471-1.034.08-1.457l-2.91-2.747v-3.027l2.695 1.513.993 3.824c.18.542.78.838 1.336.662.557-.176.862-.758.68-1.3l-.786-1.938 2.37 1.33a1.077 1.077 0 0 0 1.449-.377 1.016 1.016 0 0 0-.389-1.409l-2.37-1.33 2.12-.307c.307-.063.554-.248.699-.493z"
                                _fill="#fff"
                                fillOpacity=".85"
                            ></path>
                        </svg>
                        <div className="season-name">Winter</div>
                    </NavLink>
                    <NavLink to={`/spring/${currentYear}`} className="season" activeClassName="active" onClick={() => this.closeMenu()}>
                        <svg viewBox="0 0 20 22" style={{ width: 20 }}>
                            <path
                                fill="currentColor"
                                stroke="none"
                                pid="0"
                                d="M2.75 3.125H0C0 8.44 4.31 12.75 9.625 12.75v6.188c0 .378.31.687.688.687h1.374a.69.69 0 0 0 .688-.688V12.75c0-5.315-4.31-9.625-9.625-9.625zm16.5-2.75c-3.618 0-6.763 1.998-8.409 4.95a11.017 11.017 0 0 1 2.535 4.623C18.22 9.446 22 5.355 22 .375h-2.75z"
                                _fill="#fff"
                                fillOpacity=".85"
                            ></path>
                        </svg>
                        <div className="season-name">Spring</div>
                    </NavLink>
                    <NavLink to={`/summer/${currentYear}`} className="season" activeClassName="active" onClick={() => this.closeMenu()}>
                        <svg viewBox="0 0 20 22" style={{ width: 20 }}>
                            <path
                                fill="currentColor"
                                stroke="none"
                                pid="0"
                                d="M11.81.543l1.096 2.681a.773.773 0 0 0 1.122.365l2.463-1.524c.666-.412 1.496.19 1.31.951l-.689 2.814a.773.773 0 0 0 .694.955l2.889.214c.78.058 1.097 1.034.5 1.54l-2.211 1.87a.773.773 0 0 0 0 1.181l2.21 1.871c.598.506.281 1.482-.5 1.54l-2.888.214a.774.774 0 0 0-.694.956l.689 2.813c.186.76-.644 1.363-1.31.951l-2.462-1.524a.773.773 0 0 0-1.123.365l-1.097 2.68c-.296.725-1.322.725-1.618 0l-1.097-2.68a.773.773 0 0 0-1.123-.365l-2.463 1.524c-.665.412-1.495-.19-1.31-.951l.69-2.814a.773.773 0 0 0-.694-.955l-2.889-.214c-.78-.058-1.098-1.034-.5-1.54l2.21-1.87a.774.774 0 0 0 0-1.181L.806 8.538c-.598-.505-.28-1.481.5-1.539l2.889-.214a.773.773 0 0 0 .694-.955l-.69-2.814c-.185-.76.645-1.363 1.31-.951l2.463 1.524a.773.773 0 0 0 1.123-.365l1.097-2.68c.296-.725 1.322-.725 1.618 0zM16.843 11A5.85 5.85 0 0 0 11 5.156 5.85 5.85 0 0 0 5.156 11 5.85 5.85 0 0 0 11 16.844 5.85 5.85 0 0 0 16.844 11zm-1.375 0a4.474 4.474 0 0 1-4.47 4.469A4.474 4.474 0 0 1 6.532 11 4.474 4.474 0 0 1 11 6.531 4.474 4.474 0 0 1 15.469 11z"
                                _fill="#fff"
                                fillOpacity=".85"
                            ></path>
                        </svg>
                        <div className="season-name">Summer</div>
                    </NavLink>
                    <NavLink to={`/fall/${currentYear}`} className="season" activeClassName="active" onClick={() => this.closeMenu()}>
                        <svg viewBox="0 0 20 22" style={{ width: 20 }}>
                            <path
                                fill="currentColor"
                                stroke="none"
                                pid="0"
                                d="M21.808.398c-.224-.513-.863-.533-1.13-.05-1.238 2.211-3.454 3.59-5.986 3.59h-3.194c-4.233 0-7.667 3.527-7.667 7.874 0 .288.032.562.06.841 2.548-1.874 6.225-3.466 11.44-3.466a.65.65 0 0 1 .639.657.65.65 0 0 1-.639.656C5.293 10.5 1.036 16.82.094 19.195c-.264.669.048 1.432.698 1.707.655.278 1.398-.046 1.67-.71.06-.148.834-1.965 2.87-3.716 1.294 1.8 3.754 3.52 6.984 3.166 6.27-.467 10.682-6.242 10.682-13.313 0-2.06-.431-4.192-1.19-5.931z"
                                _fill="#fff"
                                fillOpacity=".85"
                            ></path>
                        </svg>
                        <div className="season-name">Fall</div>
                    </NavLink>
                </div>
                <div className="othersMenu">
                    <NavLink to="/airing" activeClassName="active" onClick={() => this.closeMenu()}>
                        <svg viewBox="0 0 18 18" aria-label="Airing" style={{ width: "18px" }}>
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
                    <NavLink to="/archive" activeClassName="active" onClick={() => this.closeMenu()}>
                        <svg viewBox="0 0 18 18" aria-label="Archive" style={{ width: "18px" }}>
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
                    <NavLink to="/tba" activeClassName="active" onClick={() => this.closeMenu()}>
                        <svg viewBox="0 0 17 15" style={{ width: "18px" }}>
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
                    <NavLink className="tooltip-search" to="/search" activeClassName="active" onClick={() => this.closeMenu()}>
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
            </Menu>
        );
    }
}
