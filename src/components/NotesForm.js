import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseConfig from '../index';

var moment = require('moment');

export class NotesForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      note: '', 
      date: ''
    }

    this.createNote = this.createNote.bind(this);
  }

  onChangeHandler (evt, key) {
    this.setState({
      [key]: evt.target.value
    });
  }

  componentDidMount(){
    this.db= firebase.database();
    let user = firebaseConfig.auth().currentUser;
    this.setState({
        username: user.uid,

    })
    
    
    
    
  }

  createNote () {
    if (this.state.title !== '' && this.state.note !== '') {
      firebase.database().ref(`users/${this.state.username}`).push({
        title: this.state.title,
        note: this.state.note,
        date: moment().format('MMMM Do YYYY')
      })
    }
  }

  render() {
    return (
      <section className="noteform">
        <h3>Add Dream to Journal</h3>
        <div className="form-group">
          <label htmlFor="noteform-title">Dream Title</label>
          <input type="text" id="noteform-title" name="noteform-title" value={this.state.title} onChange={(evt) => this.onChangeHandler(evt, 'title')} />
        </div>
        <div className="form-group">
          <label htmlFor="noteform-note">Dream</label>
          <textarea name="noteform-note" id="noteform-note" value={this.state.note} onChange={(evt) => this.onChangeHandler(evt, 'note')}></textarea>
        </div>
        
        <button onClick={this.createNote}>Add Dream To Journal</button>
      </section>
    )
  }
}

export default NotesForm;