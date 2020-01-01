import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </Router>
    )
  }
}

export default App;