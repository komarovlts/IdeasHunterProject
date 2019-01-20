import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
var moment = require('moment');

function searchingFor(term) {
    return function (x) {
        return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            challenges: [],
            term: '',
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount() {
        axios.get('/challenges')
            .then(res => {
                this.setState({ challenges: res.data });
                console.log(this.state.challenges);
            });
    }

    searchHandler(event) {
        this.setState({ term: event.target.value })
    }

    render() {
        const { term, challenges } = this.state;
        return (
            <div className="App">
                <div class="container">
                    <form className="form-inline">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Buscador de desafíos"
                            aria-label="Buscador de desafíos"
                            onChange={this.searchHandler}
                            value={term}
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" style={style_button_search} type="submit" >
                            <img id="brand-image" style={style_buttonr_search} alt="Website logo" src="alayalogo.png" />
                        </button>
                    </form>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                LISTA DE DESAFÍOS
                        </h3>
                        </div>
                        <div class="panel-body">
                            <h4><Link to="/createchallenge"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Añadir Desafío</Link></h4>
                            <table class="table table-stripe">
                                <thead>
                                    <tr>
                                        <th>Título</th>
                                        <th>Descripción</th>
                                        <th>Categoría</th>
                                        <th>Fecha de Inicio</th>
                                        <th>Fecha de Término</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        challenges.filter(searchingFor(term)).map(i =>
                                            <tr>
                                                <td><Link to={`/showchallenge/${i.id}`}>{i.title}</Link></td>
                                                <td>{i.description}</td>
                                                <td>{i.category}</td>
                                                <td>{moment(i.startDate).format("MMM Do YY")}</td>
                                                <td>{moment(i.finishDate).format("MMM Do YY")}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/* Styles */

const style_button_search = {
    borderColor: 'white',
    color: 'white',
};

const style_buttonr_search = {
    height: '24px',
};

export default Index;