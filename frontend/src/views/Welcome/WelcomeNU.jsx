import React, { Component } from 'react';

import Navbar from "../../components/Navbar/Navbar";

class WelcomeNU extends Component {
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
                                <div className="card" style={style_card}>
                                    <form className="card-body">
                                        <a class="btn btn-primary" style={style_button} href="/indexidea" role="button">Ideas</a>
                                    </form>
                                </div>
                            </center>
                        </div>
                        <div className="col-4">
                            <center>
                                <div className="card" style={style_card}>
                                    <form className="card-body">
                                        <a class="btn btn-primary" style={style_button} href="/indexchallengenu" role="button">Desafíos</a>
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

/* Styles */

const style_card = {
    border: '0px',
    borderRadius: '0px',
};

const style_button = {
    backgroundColor: '#9f4054',
    border: 'none',
    marginTop: '100px',
};

export default WelcomeNU;