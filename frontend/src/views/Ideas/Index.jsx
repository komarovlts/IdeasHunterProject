import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../../components/Panels/panels.css";

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
            ideas: [],
            term: '',
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount() {
        axios.get('/ideas')
            .then(res => {
                this.setState({ ideas: res.data });
                console.log(this.state.ideas);
            });
    }

    searchHandler(event) {
        this.setState({ term: event.target.value })
    }

    render() {
        const { term, ideas } = this.state;
        return (
            <div className="App">
                <div class="container">
                    <form className="form-inline buscador">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Buscador de ideas"
                            aria-label="Buscador de ideas"
                            onChange={this.searchHandler}
                            value={term}
                        />
                    </form>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                LISTA DE IDEAS
                        </h3>
                        </div>

                        <div class="panel-body">
                            <h4><Link to="/createidea"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Añadir Idea</Link></h4>
                        </div>

                        <table className="table_props">
                            <thead>
                                <tr>
                                    <th>Título</th><th>Descripción</th>
                                    <th>Categoría</th>
                                    <th>Valoración</th>
                                    <th>Fecha Publicación</th>
                                    <th>Ver más</th>
                                </tr>
                            </thead>

                            {
                                ideas.filter(searchingFor(term)).map(i =>
                                    <tr>
                                        <td>{i.title}</td>
                                        <td>{i.description}</td>
                                        <td>{i.category}</td>
                                        <td>{i.valuation}</td>
                                        <td>{moment(i.date).format("MMM Do YY")}</td>
                                        <td><Link to={`/ideadetails/${i.id}`}>{'Ver más'}</Link></td>
                                    </tr>
                                )

                            }
                        </table>
                    </div>
                </div>

            </div>

        );
    }
}

/*
<table class="table table-stripe">
                                <thead>
                                    <tr>
                                        <th>Título</th>
                                        <th>Descripción</th>
                                        <th>Categoría</th>
                                        <th>Valoración</th>
                                        <th>Fecha de publicación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ideas.filter(searchingFor(term)).map(i =>
                                            <tr>
                                                <td><Link to={`/showidea/${i.id}`}>{i.title}</Link></td>
                                                <td>{i.description}</td>
                                                <td>{i.category}</td>
                                                <td>{i.valuation}</td>
                                                <td>{moment(i.date).format("MMM Do YY")}</td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
*/

// Detaills, Likes System ->   <td><Link to={`/ideadetails/${i.id}`}>{'Ver más'}</Link></td>

/* Styles */

const style_button_search = {
    borderColor: 'white',
    color: 'white',
};


const style_buttonr_search = {
    height: '24px',
};

export default Index;