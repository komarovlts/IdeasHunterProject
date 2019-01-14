import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
var moment = require('moment');


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ideas: []
        };
    }

    componentDidMount() {
        axios.get('/ideas')
            .then(res => {
                this.setState({ ideas: res.data });
                console.log(this.state.ideas);
            });
    }

    render() {
        return (
            <div className="App">
            <Navbar />
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            LISTA DE IDEAS
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/createidea"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Añadir Idea</Link></h4>
                        <table class="table table-stripe">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Descripción</th>
                                    <th>Categoría</th>
                                    <th>Fecha de publicación</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.ideas.map(i =>
                                    <tr>
                                        <td><Link to={`/showidea/${i.id}`}>{i.title}</Link></td>
                                        <td>{i.description}</td>
                                        <td>{i.category}</td>
                                        <td>{moment(i.date).format("MMM Do YY")}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Index;