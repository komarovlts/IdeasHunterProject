import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
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
                <nav className="navbar navbar-light" style={style_central_navbar}>
                    <a className="navbar-brand" href="/">
                        <img id="brand-image" style={style_logo} alt="Website logo" src="logo_alaya_light.png" />
                    </a>
                    <form className="form-inline">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Buscador de ideas"
                            aria-label="Buscador de ideas"
                            onChange={this.searchHandler}
                            value={term}
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" style={style_button_search} type="submit" >
                            <img id="brand-image" style={style_buttonr_search} alt="Website logo" src="alayalogo.png" />
                        </button>
                        <a className="navbar-brand" style={style_user_name} href="#"> Nombre Usuario</a>
                    </form>
                </nav>
                <div class="container">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                LISTA DE IDEAS
                        </h3>
                        </div>

                        <div class="panel-body">
                            <h4><Link to="/createidea"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Añadir Idea</Link></h4>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/* Styles */

const style_logo = {
    height: "35px",
};

const style_central_navbar = {
    backgroundColor: '#9f4054',
};

const style_button_search = {
    borderColor: 'white',
    color: 'white',
};


const style_buttonr_search = {
    height: '24px',
};

const style_user_name = {
    marginLeft: '10px',
    color: 'white',
};

export default Index;