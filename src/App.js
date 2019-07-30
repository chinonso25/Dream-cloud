import React from "react";
import * as firebase from "firebase";
import Dreams from "./pages/Dreams";
import { AuthProvider } from "./Auth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./constants/PrivateRoute";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      username: "Chinonso"
    };
  }

  componentDidMount() {
    this.db = firebase.database();
  }

  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Dreams} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
