import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
var moment = require('moment');

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            challenge: {}
        };
    }

    componentDidMount() {
        axios.get('/challenges/' + this.props.match.params.id)
            .then(res => {
                this.setState({ challenge: res.data });
                console.log(this.state.challenge);
            });
    }

    delete(id) {
        console.log(id);
        axios.delete('/challenges/' + id)
            .then((result) => {
                this.props.history.push("/indexchallenge")
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Detalle de Desafío
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/indexchallenge"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista de Desafíos</Link></h4>
                        <dl>
                            <dt>Título:</dt>
                            <dd>{this.state.challenge.title}</dd>
                            <dt>Descripción:</dt>
                            <dd>{this.state.challenge.description}</dd>
                            <dt>Categoría:</dt>
                            <dd>{this.state.challenge.category}</dd>
                            <dt>Fecha de Inicio:</dt>
                            <dd>{moment(this.state.challenge.startDate).format("MMM Do YY")}</dd>
                            <dt>Fecha de Término:</dt>
                            <dd>{moment(this.state.challenge.finishDate).format("MMM Do YY")}</dd>
                        </dl>
                        <Link to={`/editchallenge/${this.state.challenge.id}`} class="btn btn-success">Editar</Link>&nbsp;
                        <button onClick={this.delete.bind(this, this.state.challenge.id)} class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;