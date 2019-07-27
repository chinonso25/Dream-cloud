import React from 'react';
import * as firebase from 'firebase';
import firebaseConfig from "../index.js";
import NotesForm from '../components/NotesForm';
import Notes from '../components/Notes';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { tsConstructorType } from '@babel/types';


class Dreams extends React.Component {
  constructor () {
    super();

    this.state={
      notes: [],
      username: '',
      
    }
  }

  componentDidMount(){
    this.db= firebase.database();
    let user = firebaseConfig.auth().currentUser;
    this.setState({
        username: user.uid,

    })
    console.log(this.state.username)

    
    
    this.listenforChange();
    
  }

  

  listenforChange() {
    let user = firebaseConfig.auth().currentUser;

    this.db.ref(`users/${user.uid}`).on('child_added', snapshot => {
      let note = {
        id: snapshot.key,
        title: snapshot.val().title,
        note: snapshot.val().note,
        date: snapshot.val().date,

      }
      let notes = this.state.notes;
      notes.push(note)

      this.setState({
        notes: notes
      });

    })


    this.db.ref(`users/${user.uid}`).on('child_removed', snapshot => {
      let notes = this.state.notes;
      notes = notes.filter(note => note.id !== snapshot.key)
      this.setState({
        notes: notes
      });

    })
  }

render(){

  return (
    <Router>
    <div className="App">
      <main>
          
        <NotesForm />
        <Notes notes={this.state.notes}/>
      </main>
    </div>
    </Router>
  );
}
}

export default Dreams;
