import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../components/Panels/panels.css";
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
                    <form className="form-inline buscador">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Buscador de desafíos"
                            aria-label="Buscador de desafíos"
                            onChange={this.searchHandler}
                            value={term}
                        />
                    </form>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                LISTA DE DESAFÍOS
                        </h3>
                        </div>
                        <div class="panel-body">
                            <h4><Link to="/createchallenge"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Añadir Desafío</Link></h4>
                            
                            <table className="table_props">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Descripción</th>
                                    <th>Categoría</th>
                                    <th>Fecha Inicio</th>
                                    <th>Fecha Término</th>
                                    <th>Ver más</th>
                                </tr>
                            </thead>

                            {
                                challenges.filter(searchingFor(term)).map(i =>
                                <tr>
                                    <td>{i.title}</td>
                                    <td>{i.description}</td>
                                    <td>{i.category}</td>
                                    <td>{moment(i.startDate).format("MMM Do YY")}</td>
                                    <td>{moment(i.finishDate).format("MMM Do YY")}</td>
                                    <td><Link to={`/showchallenge/${i.id}`}>{'Ver más'}</Link></td>
                                </tr>
                                )

                            }
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