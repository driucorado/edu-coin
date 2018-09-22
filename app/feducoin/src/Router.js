import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './Login'
import App from './App'

export default class Router extends Component {
  render() {
    return <div>
        <Route path="/login" component={Login} exact={true}/>
        <Route path="/profile" component={App} exact={true} />
    </div>
  }
}
