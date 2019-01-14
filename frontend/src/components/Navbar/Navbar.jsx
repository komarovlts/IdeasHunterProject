import React, { Component } from 'react';
import './Navbar.css';

var style_logo = {
    maxwidth: '100px',
    height: '100px',
  };

var style_navbar = {
    backgroundColor: '#9f4054',
  };

var style_button_search = {
    borderColor: 'white',
    color: 'white',
    
  };

var style_buttonr_search = {
    maxwidth: '30px',
    height: '24px',
  };

var style_name_user = {
    marginLeft: 40,
    color: 'white',
    
  };
  
  

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav className="navbar navbar-light" style={style_navbar}>
                <a className="navbar-brand"  href="#">
                    <img id="brand-image" alt="Website logo" src="logo_alaya_light.png" style={style_logo} />
                </a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscador de ideas" aria-label="Buscador de ideas" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={style_button_search}>
                    <img id="brand-image" alt="Website logo" src="alayalogo.png" style={style_buttonr_search} />
                    </button>
                    <a className="navbar-brand"  href="#" style={style_name_user}> Nombre Usuario</a>
                </form>
            </nav>
        );
    }
}

export default Navbar;