import React, { Component } from 'react';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className="container py-4">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <center>
                            <div className="card">
                                <form className="card-body">
                                    <a class="btn btn-primary" href="/index" role="button">Usuario Normal</a>
                                </form>
                            </div>
                            <div className="card">
                                <form className="card-body">
                                    <a class="btn btn-primary" href="/create" role="button">Evaluador</a>
                                </form>
                            </div>
                        </center>
                    </div>
                </div>
            </div>

        )
    }
}

export default Welcome;