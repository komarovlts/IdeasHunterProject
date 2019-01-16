import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
var moment = require('moment');

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idea: {},
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

        axios.put('/ideas/' + this.props.match.params.id, { title, description, category, valuation, date, comments })
            .then((result) => {
                this.props.history.push("/indexidea/")
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
                                Detalles de Idea
                            </h3>
                        </div>
                        <div class="panel-body">
                            <h4><Link to={'/indexidea/'}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Lista de Ideas</Link></h4>
                            <form onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <label for="title">Título:</label>
                                    <label for="valuation">{this.state.idea.title}</label>
                                    <input type="hidden" class="form-control" name="title" value={this.state.idea.title} onChange={this.onChange} placeholder="Title" />
                                </div>
                                <div class="form-group">
                                    <label for="description">Descripción:</label>
                                    <label for="description">{this.state.idea.description}</label>
                                    <input type="hidden" class="form-control" name="description" value={this.state.idea.description} onChange={this.onChange} placeholder="Description" />
                                </div>
                                <div class="form-group">
                                    <label for="category">Categoría:</label>
                                    <label for="category">{this.state.idea.category}</label>
                                    <input type="hidden" class="form-control" name="category" value={this.state.idea.category} onChange={this.onChange} placeholder="Category" />
                                </div>
                                <div class="form-group">
                                    <label for="valuation">Valoración:</label>
                                    <label for="valuation">{this.state.idea.valuation}</label>
                                    <input type="number" class="form-control disable" name="valuation" value={this.state.count} onChange={this.onChange} placeholder="Valuation" />
                                    <button type="button" className="btn btn-danger" onClick={this.incrementCount}>+</button>
                                </div>
                                <div class="form-group">
                                    <label for="date">Fecha de publicación:</label>
                                    <label for="date">{moment(this.state.idea.date).format("MMM Do YY")}</label>
                                    <input type="hidden" class="form-control" name="date" value={this.state.idea.date} onChange={this.onChange} placeholder="Date" />
                                </div>
                                <div class="form-group">
                                    <label for="comments">Comentarios:</label>
                                    <label for="comments">{this.state.idea.comments}</label>
                                    <input type="text" class="form-control" name="date" value={this.state.idea.comments} onChange={this.onChange} placeholder="Comentarios" />
                                </div>
                                <button type="submit" class="btn btn-default">Aceptar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;