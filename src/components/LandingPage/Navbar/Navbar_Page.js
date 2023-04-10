import React, {Component, useState} from "react";
import {
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Container,
    Collapse,
    Button,
} from "reactstrap";

import ScrollspyNav from "./scrollSpy";

class NavbarPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false,
            navClass: ""
        };
    }


    toggle = () => {
        this.setState({isOpenMenu: !this.state.isOpenMenu});
    };

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        console.log("scrollup", scrollup)
        if (scrollup > 50) {
            this.setState({navClass: "is-sticky"});
        } else {
            this.setState({navClass: ""});
        }
    }

    render() {
        //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
        let targetId = this.props.navItems.map((item) => {
            return item.idnm;
        });
        return (
            <React.Fragment>
                <div id="navbar" className={this.state.navClass}>
                    <nav
                        className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark"
                    >
                        <Container>
                            <NavbarBrand className="logo text-uppercase" href="/">
                                Dorsin
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggle}>
                                <i className="mdi mdi-menu"></i>
                            </NavbarToggler>

                            <Collapse
                                id="navbarCollapse"
                                isOpen={this.state.isOpenMenu}
                                navbar
                            >
                                <ScrollspyNav
                                    scrollTargetIds={targetId}
                                    scrollDuration="800"
                                    headerBackground="true"
                                    activeNavClass="active"
                                    className="navbar-collapse"
                                >
                                    <Nav navbar className="navbar-center" id="mySidenav">
                                        {this.props.navItems.map((item, key) => (
                                            <NavItem
                                                key={key}
                                                className={item.navheading === "Home" ? "active" : ""}
                                            >
                                                <NavLink href={"#" + item.idnm}>
                                                    {" "}
                                                    {item.navheading}
                                                </NavLink>
                                            </NavItem>
                                        ))}
                                    </Nav>
                                    <div className="nav-button ms-auto">
                                        <Nav navbar className="navbar-end">
                                            <li>
                                                <Button
                                                    onClick={this.props.toggleModal}
                                                    color="none"
                                                    type="button"
                                                    className="btn btn-primary navbar-btn btn-rounded waves-effect waves-light"
                                                >
                                                    Sign In!
                                                </Button>
                                            </li>
                                        </Nav>
                                    </div>
                                </ScrollspyNav>
                            </Collapse>
                        </Container>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default NavbarPage;
