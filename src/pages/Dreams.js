import React from "react";
import * as firebase from "firebase";
import firebaseConfig from "../index.js";
import PropTypes from "prop-types";

import NotesForm from "../components/NotesForm";
import Notes from "../components/Notes";
import Header from "../components/Header";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { BrowserRouter as Router } from "react-router-dom";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

class Dreams extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      username: ""
    };
  }

  componentDidMount() {
    this.db = firebase.database();
    let user = firebaseConfig.auth().currentUser;
    this.setState({
      username: user.uid
    });

    this.listenforChange();
  }

  logoutUser() {
    firebaseConfig.auth().signOut();
  }

  listenforChange() {
    let user = firebaseConfig.auth().currentUser;

    this.db.ref(`users/${user.uid}`).on("child_added", snapshot => {
      let note = {
        id: snapshot.key,
        title: snapshot.val().title,
        note: snapshot.val().note,
        date: snapshot.val().date
      };
      let notes = this.state.notes;
      notes.push(note);

      this.setState({
        notes: notes
      });
    });

    this.db.ref(`users/${user.uid}`).on("child_removed", snapshot => {
      let notes = this.state.notes;
      notes = notes.filter(note => note.id !== snapshot.key);
      this.setState({
        notes: notes
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <NotesForm />
            <Notes notes={this.state.notes} />
          </main>
        </div>
      </Router>
    );
  }
}

export default Dreams;
