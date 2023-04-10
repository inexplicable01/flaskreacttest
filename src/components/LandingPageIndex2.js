import React, {Component} from 'react';

import NavbarPage from "./LandingPage/Navbar/Navbar_Page";
import Section from './LandingPage/section';
import Service from "./LandingPage/Service/service";
import AboutUs from "./LandingPage/AboutUs/AboutUs";
import WebsiteDesc from "./LandingPage/WebsiteDesc/WebsiteDesc";
import Pricing from "./LandingPage/Pricing/pricing";
import Team from './LandingPage/Team/Team';
import Process from "./LandingPage/Process/Process";
import Testimonials from "./LandingPage/Testimonials/Testimonials"
import GetStart from "./LandingPage/GetStart/GetStart"
import Blog from "./LandingPage/Blog/Blog"
import Contact from "./LandingPage/Contact/Contact";
import Social from "./LandingPage/Social/Social";
import Footer from "./LandingPage/Footer/footer";
import AuthModal from "./authentication/AuthModal";

class Index2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                {id: 1, idnm: "home", navheading: "Home"},
                {id: 2, idnm: "services", navheading: "Services"},
                {id: 3, idnm: "features", navheading: "Features"},
                {id: 4, idnm: "pricing", navheading: "Pricing"},
                {id: 5, idnm: "team", navheading: "Team"},
                {id: 6, idnm: "blog", navheading: "Blog"},
                {id: 7, idnm: "contact", navheading: "Contact"}

            ],
            navClass: "",
            showModal: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {

        this.setState((prevState) => {
            return {showModal: !prevState.showModal};
        });
    }

    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                <NavbarPage navItems={this.state.navItems}
                            navClass={this.state.navClass}
                            toggleModal={this.toggleModal}
                />

                {/* section */}
                <Section/>

                {/* services */}
                <Service sectionClass="pt-5"/>

                {/* about us */}
                <AboutUs/>

                {/* website description */}
                <WebsiteDesc/>

                {/* pricing */}
                <Pricing/>

                {/* team */}
                <Team/>

                {/* process */}
                <Process/>

                {/* testimonial */}
                <Testimonials/>

                {/* get started */}
                <GetStart/>

                {/* blog */}
                <Blog/>

                {/* contact */}
                <Contact/>

                {/* social */}
                <Social/>

                {/* footer */}
                <Footer/>
                {this.state.showModal && (
                    <AuthModal show={this.state.showModal} closeModal={this.toggleModal}/>
                )}
            </React.Fragment>
        );
    }
}

export default Index2;