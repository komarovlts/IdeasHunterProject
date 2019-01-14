import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";

var localdate = new Date();

class Create extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            category: '',
            startDate: '',
            finishDate: '',
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const startDate = localdate.getTime();

        const { title, description, category, finishDate } = this.state;

        axios.post('/challenges', { title, description, category, startDate, finishDate })
            .then((result) => {
                this.props.history.push("/indexchallenge")
            });
    }

    render() {
        const { title, description, category, startDate, finishDate } = this.state;
        return (
            <div className="App">
                <Navbar />
                <div class="container">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                AÑADIR DESAFÍO
                        </h3>
                        </div>
                        <div class="panel-body">
                            <h4><Link to="/indexchallenge"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista de Desafíos</Link></h4>
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
                                    <input type="hidden" class="form-control" name="startDate" value={startDate} onChange={this.onChange} placeholder="Fecha de inicio de desafío" />
                                </div>
                                <div class="form-group">
                                    <label for="finishDate">Fecha de término de desafío:</label>
                                    <input type="date" class="form-control" name="finishDate" value={finishDate} onChange={this.onChange} placeholder="Fecha de término de desafío" />
                                </div>
                                <button type="submit" class="btn btn-default">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;