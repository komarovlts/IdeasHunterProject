import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav className="navbar navbar-light logo-navbar">
                <a className="navbar-brand"  href="#">
                    <img id="brand-image central-navbar" alt="Website logo" src="logo_alaya_light.png"/>
                </a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscador de ideas" aria-label="Buscador de ideas" />
                    <button className="btn btn-outline-success my-2 my-sm-0 button-search" type="submit" >
                    <img id="brand-image buttonr-search" alt="Website logo" src="alayalogo.png"/>
                    </button>
                    <a className="navbar-brand name-user"  href="#"> Nombre Usuario</a>
                </form>
            </nav>

        );
    }
}

export default Navbar;