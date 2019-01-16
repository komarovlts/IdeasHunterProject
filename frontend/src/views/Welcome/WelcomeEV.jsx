import React, { Component } from 'react';

import Navbar from "../../components/Navbar/Navbar";
import "../../components/Buttons/buttons.css";

class WelcomeEV extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container py-4">
                    <div className="row justify-content-around">
                        <div className="col-4">
                            <center>
                                <div className="card cardTransp" style={style_card}>
                                    <form className="card-body">
                                        <a class="btn btn-primary botonimagen1" style={style_button} href="/indexidea" role="button">Ideas</a>
                                    </form>
                                </div>
                            </center>
                        </div>
                        <div className="col-4">
                            <center>
                                <div className="card cardTransp" style={style_card}>
                                    <form className="card-body">
                                        <a class="btn btn-primary botonimagen2" style={style_button} href="/indexchallenge" role="button">Desafíos</a>
                                    </form>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const style_card = {
    marginLeft: '30px',
    marginRight: '0px',
    border: '0px',
    borderRadius: '0px',
};

const style_button = {
    backgroundColor: '#9f4054',
    height: "300px",
    width: "300px",
    border: 'none',
    marginTop: '100px',
    borderRadius: '33350px',

};

export default WelcomeEV;