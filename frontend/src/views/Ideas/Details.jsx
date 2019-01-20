import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
var moment = require('moment');

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idea: {},
        };
    }

    componentDidMount() {
        axios.get('/ideas/' + this.props.match.params.id)
            .then(res => {
                this.setState({ idea: res.data });
                console.log(this.state.idea);
            });
    }

    onChange = (e) => {
        const state = this.state.idea
        state[e.target.name] = e.target.value;
        this.setState({ idea: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, description, category, valuation, date, comments } = this.state.idea;

        axios.put('/ideas/' + this.props.match.params.id, {valuation})
            .then((result) => {
                this.props.history.push("/indexidea/" + this.props.match.params.id)
            });
    }

    render() {
        return (
            <div className="App">
                <div class="container">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                Detalles de Idea
                            </h3>
                        </div>
                        <div class="panel-body">
                            <h4><Link to={'/indexidea/'}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Lista de Ideas</Link></h4>
                            <form onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <label for="title">Título:</label>
                                    <label for="title">{this.state.idea.title}</label>
                                </div>
                                <div class="form-group">
                                    <label for="description">Descripción:</label>
                                    <label for="description">{this.state.idea.description}</label>
                                </div>
                                <div class="form-group">
                                    <label for="category">Categoría:</label>
                                    <label for="category">{this.state.idea.category}</label>
                                </div>

                                <div class="form-group">
                                <label for="category">Valoracion: </label>
                                <label for="category">{this.state.idea.valuation}</label>
                                <input type="number" class="form-control" name="valuation" value={this.state.idea.valuation} onChange={this.onChange} placeholder="Valuation" />
                                </div>
                                <h4><Link to={'/indexidea/'}><button type="submit" class="btn btn-default">Aceptar</button></Link></h4>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;