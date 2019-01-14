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
                            <div className="card">
                                <form className="card-body">
                                    <a class="btn btn-primary" href="/indexidea" role="button">Ideas</a>
                                </form>
                            </div>
                        </center>
                    </div>
                    <div className="col-4">
                        <center>
                            <div className="card">
                                <form className="card-body">
                                    <a class="btn btn-primary" href="/indexchallengenu" role="button">Desafíos</a>
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

export default WelcomeNU;