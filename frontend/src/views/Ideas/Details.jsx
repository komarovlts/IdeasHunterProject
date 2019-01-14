import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";

class Details extends Component {

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
                this.props.history.push("/ideadetails/" + this.props.match.params.id)
            });
    }

    incrementCount() {
        this.setState({
            valuation: this.state.valuation + 1
        });
    }

    getInitialState() {
        return {
            valuation: this.idea.valuation
        }
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <div class="container">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                Editar Idea
                        </h3>
                        </div>
                        <div class="panel-body">
                            <h4><Link to={`/indexidea/${this.state.idea.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Lista de Ideas</Link></h4>
                            <form onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <label for="title">Título:</label>
                                    <input type="hidden" class="form-control" name="title" value={this.state.idea.title} onChange={this.onChange} placeholder="Title" />
                                </div>
                                <div class="form-group">
                                    <label for="description">Descripción:</label>
                                    <input type="hidden" class="form-control" name="description" value={this.state.idea.description} onChange={this.onChange} placeholder="Description" />
                                </div>
                                <div class="form-group">
                                    <label for="category">Categoría:</label>
                                    <input type="hidden" class="form-control" name="category" value={this.state.idea.category} onChange={this.onChange} placeholder="Category" />
                                </div>
                                <div class="form-group">
                                    <label for="valuation">Valoración:</label>
                                    <input type="hidden" class="form-control" name="valuation" value={this.state.idea.valuation} onChange={this.onChange} placeholder="Valuation" />
                                    <button className="btn" onClick={this.incrementCount}>Increment</button>
                                </div>
                                <div class="form-group">
                                    <label for="date">Fecha de publicación:</label>
                                    <input type="hidden" class="form-control" name="date" value={this.state.idea.date} onChange={this.onChange} placeholder="Date" />
                                </div>
                                <div class="form-group">
                                    <label for="comments">Comentarios:</label>
                                    <input type="text" class="form-control" name="date" value={this.state.idea.comments} onChange={this.onChange} placeholder="Comments" />
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