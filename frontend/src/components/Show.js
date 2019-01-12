import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
var moment = require('moment');

class Show extends Component {

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

    delete(id) {
        console.log(id);
        axios.delete('/ideas/' + id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Idea Details
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Ideas List</Link></h4>
                        <dl>
                            <dt>Title:</dt>
                            <dd>{this.state.idea.title}</dd>
                            <dt>Description:</dt>
                            <dd>{this.state.idea.description}</dd>
                            <dt>Category:</dt>
                            <dd>{this.state.idea.category}</dd>
                            <dt>Date:</dt>
                            <dd>{moment(this.state.idea.date).format("MMM Do YY")}</dd>
                        </dl>
                        <Link to={`/edit/${this.state.idea.id}`} class="btn btn-success">Edit</Link>&nbsp;
                        <button onClick={this.delete.bind(this, this.state.idea.id)} class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;