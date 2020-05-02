import React, { Component } from "react";

import { MobileMenu, DesktopMenu } from "./../";

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 800;
        return <div>{isMobile ? <MobileMenu /> : <DesktopMenu />}</div>;
    }
}
