import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import "../../components/Forms/forms.css";
import "../../components/Links/links.css";

class Create extends Component {

    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            email: '',
            userType: '',
            creationDate: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { userName } = this.state;

        axios.post('/users', { userName })
            .then((result) => {
                this.props.history.push("/postlogin")
            });
    }

    render() {
        const { userName } = this.state;
        return (
            <div className="App">
                <Navbar />
                <div class="container">
                    <form >
                        <div class="form-group row marginone" >
                            <label for="name" class="col-md-4 col-form-label text-md-right">Nombre: </label>

                            <div class="col-md-6">
                                <input type="text" class="form-control marginetwo" name="userName" value={userName} onChange={this.onChange} placeholder="Nombre Usuario" />
                            </div>
                            <label for="name" class="col-md-4 col-form-label text-md-right">Tipo: </label>
                            <div class="col-md-6">
                            </div>
                        </div>
                        <button type="submit" class="buttonBasic">Enviar</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default Create;