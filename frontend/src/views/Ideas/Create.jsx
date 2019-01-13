import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

var localdate = new Date();

class Create extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            category: '',
            date: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const date = localdate.getTime();

        const { title, description, category } = this.state;

        axios.post('/ideas', { title, description, category, date })
            .then((result) => {
                this.props.history.push("/indexideas")
            });
    }

    render() {
        const { title, description, category, date } = this.state;
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            AÑADIR IDEA
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/indexidea"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista de Ideas</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="title">Título:</label>
                                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Título" />
                            </div>
                            <div class="form-group">
                                <label for="description">Descripción:</label>
                                <input type="text" class="form-control" name="description" value={description} onChange={this.onChange} placeholder="Descripción" />
                            </div>
                            <div class="form-group">
                                <label for="category">Categoría:</label>
                                <input type="text" class="form-control" name="category" value={category} onChange={this.onChange} placeholder="Categoría" />
                            </div>
                            <div class="form-group">
                                <input type="hidden" class="form-control" name="date" value={date} onChange={this.onChange} placeholder="Fecha de publicación" />
                            </div>
                            <button type="submit" class="btn btn-default">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;