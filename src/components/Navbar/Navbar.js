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
                        <NavLink to="/Winter-2020" className="season" activeClassName="active">
                            <div className="season-name">Winter</div>
                            <div className="season-year">2020</div>
                        </NavLink>
                        <NavLink to="/Spring-2020" className="season" activeClassName="active">
                            <div className="season-name">Spring</div>
                            <div className="season-year">2020</div>
                        </NavLink>
                        <NavLink to="/Summer-2020" className="season" activeClassName="active">
                            <div className="season-name">Summer</div>
                            <div className="season-year">2020</div>
                        </NavLink>
                        <NavLink to="/Fall-2020" className="season" activeClassName="active">
                            <div className="season-name">Fall</div>
                            <div className="season-year">2020</div>
                        </NavLink>
                    </div>
                </div>
            </header>
        );
    }
}
