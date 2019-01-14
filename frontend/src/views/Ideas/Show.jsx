import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
var moment = require('moment');


class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idea: {}
        };
    }

    componentDidMount() {
        axios.get('/ideas/' + this.props.match.params.id)
            .then(res => {
                this.setState({ idea: res.data });
                console.log(this.state.idea);
            });
    }

    delete(id) {
        console.log(id);
        axios.delete('/ideas/' + id)
            .then((result) => {
                this.props.history.push("/indexidea")
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
                                Detalle de Idea
                        </h3>
                        </div>
                        <div class="panel-body">
                            <h4><Link to="/indexidea"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista de Ideas</Link></h4>
                            <dl>
                                <dt>Título:</dt>
                                <dd>{this.state.idea.title}</dd>
                                <dt>Descripción:</dt>
                                <dd>{this.state.idea.description}</dd>
                                <dt>Categoría:</dt>
                                <dd>{this.state.idea.category}</dd>
                                <dt>Valoración:</dt>
                                <dd>{this.state.idea.valuation}</dd>
                                <dt>Comentarios:</dt>
                                <dd>{this.state.idea.comments}</dd>
                                <dt>Fecha de publicación:</dt>
                                <dd>{moment(this.state.idea.date).format("MMM Do YY")}</dd>
                            </dl>
                            <Link to={`/editidea/${this.state.idea.id}`} class="btn btn-success">Editar</Link>&nbsp;
                        <button onClick={this.delete.bind(this, this.state.idea.id)} class="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;