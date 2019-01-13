import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
var moment = require('moment');

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            challenges: []
        };
    }

    componentDidMount() {
        axios.get('/challenges')
            .then(res => {
                this.setState({ challenges: res.data });
                console.log(this.state.challenges);
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            LISTA DE DESAFÍOS
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/createchallenge"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Añadir Desafío</Link></h4>
                        <table class="table table-stripe">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Descripción</th>
                                    <th>Categoría</th>
                                    <th>Fecha de Inicio</th>
                                    <th>Fecha de Término</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.challenges.map(i =>
                                    <tr>
                                        <td><Link to={`/showchallenge/${i.id}`}>{i.title}</Link></td>
                                        <td>{i.description}</td>
                                        <td>{i.category}</td>
                                        <td>{moment(i.startDate).format("MMM Do YY")}</td>
                                        <td>{moment(i.finishDate).format("MMM Do YY")}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;