import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <nav className="navbar navbar-light" style={style_central_navbar}>
                <a className="navbar-brand" href="#">
                    <img id="brand-image" style={style_logo} alt="Website logo" src="logo_alaya_light.png" />
                </a>
                <form className="form-inline">
                    <a className="navbar-brand" style={style_user_name} href="#"> Nombre Usuario</a>
                </form>
            </nav>

        );
    }
}

/* Antiguo buscador de Ideas */

/*
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Buscador de ideas"
                        aria-label="Buscador de ideas"
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" style={style_button_search} type="submit" >
                        <img id="brand-image" style={style_buttonr_search} alt="Website logo" src="alayalogo.png" />
                    </button>

*/

/* Styles */

const style_logo = {
    height: "35px",
};

const style_central_navbar = {
    backgroundColor: '#9f4054',
};

const style_button_search = {
    borderColor: 'white',
    color: 'white',
};


const style_buttonr_search = {
    height: '24px',
};

const style_user_name = {
    marginLeft: '10px',
    color: 'white',
};

export default Navbar;