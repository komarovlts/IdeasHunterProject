import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class Edit extends Component {

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

    onChange = (e) => {
        const state = this.state.challenge
        state[e.target.name] = e.target.value;
        this.setState({ challenge: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, description, category, finishDate } = this.state.challenge;

        axios.put('/challenges/' + this.props.match.params.id, { title, description, category, finishDate })
            .then((result) => {
                this.props.history.push("/showchallange/" + this.props.match.params.id)
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Editar Desafío
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to={`/showchallenge/${this.state.challenge.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Lista de Desafíos</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="title">Título:</label>
                                <input type="text" class="form-control" name="title" value={this.state.challenge.title} onChange={this.onChange} placeholder="Title" />
                            </div>
                            <div class="form-group">
                                <label for="description">Descripción:</label>
                                <input type="text" class="form-control" name="description" value={this.state.challenge.description} onChange={this.onChange} placeholder="Description" />
                            </div>
                            <div class="form-group">
                                <label for="category">Categoría:</label>
                                <input type="text" class="form-control" name="category" value={this.state.challenge.category} onChange={this.onChange} placeholder="Category" />
                            </div>
                            <div class="form-group">
                                <label for="category">Fecha de Término:</label>
                                <input type="date" class="form-control" name="finishDate" value={this.state.challenge.finishDate} onChange={this.onChange} placeholder="finishDate" />
                            </div>
                            <button type="submit" class="btn btn-default">Actualizar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;