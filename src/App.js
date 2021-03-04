import React from "react";
import * as firebase from "firebase";
import Dreams from "./pages/Dreams";
import { AuthProvider } from "./Auth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Start from "./pages/StartPage";

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

 

  render() {
    return (
        <Router>
          <>
            <Route exact path="/" component={Start} />
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} /> */}
          </>
        </Router>
    );
  }
}

export default App;
