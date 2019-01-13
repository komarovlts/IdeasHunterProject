import React, { Component } from 'react';

class Login extends Component {
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
                        <div className="card">
                            <form className="card-body">
                                <a class="btn btn-primary" href="/create" role="button">Usuario Normal</a>

                                <a class="btn btn-primary" href="/create" role="button">Evaluador</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;