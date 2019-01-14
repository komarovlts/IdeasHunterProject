import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";

class Edit extends Component {

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

        const { title, description, category, date } = this.state.idea;

        axios.put('/ideas/' + this.props.match.params.id, { title, description, category, date })
            .then((result) => {
                this.props.history.push("/showidea/" + this.props.match.params.id)
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
                                Editar Idea
                        </h3>
                        </div>
                        <div class="panel-body">
                            <h4><Link to={`/showidea/${this.state.idea.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Lista de Ideas</Link></h4>
                            <form onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <label for="title">Título:</label>
                                    <input type="text" class="form-control" name="title" value={this.state.idea.title} onChange={this.onChange} placeholder="Title" />
                                </div>
                                <div class="form-group">
                                    <label for="description">Descripción:</label>
                                    <input type="text" class="form-control" name="description" value={this.state.idea.description} onChange={this.onChange} placeholder="Description" />
                                </div>
                                <div class="form-group">
                                    <label for="category">Categoría:</label>
                                    <input type="text" class="form-control" name="category" value={this.state.idea.category} onChange={this.onChange} placeholder="Category" />
                                </div>
                                <button type="submit" class="btn btn-default">Actualizar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;