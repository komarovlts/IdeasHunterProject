import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
var moment = require('moment');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    };
  }

  componentDidMount() {
    axios.get('/ideas')
      .then(res => {
        this.setState({ ideas: res.data });
        console.log(this.state.ideas);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              IDEAS LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Idea</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.ideas.map(i =>
                  <tr>
                    <td><Link to={`/show/${i.id}`}>{i.title}</Link></td>
                    <td>{i.description}</td>
                    <td>{i.category}</td>
                    <td>{moment(i.date).format("MMM Do YY")}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;