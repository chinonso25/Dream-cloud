import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseConfig from '../index';
import Buttons from '../components/Buttons'
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';



var moment = require('moment');
const styles = {
  
  text: {
    textAlign: 'center',
  },

};

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
      [key]: evt.target.value,    
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
      this.setState({
        title: '',
        note: '', 
  
      });
         }
    
  }

  render() {
    return (
      

<React.Fragment>
<CssBaseline />
<Container maxWidth="sm">
<section className="noteform">
        <h1 style={styles.text}>Add Dream to Journal</h1>
        <div className="form-group">
          <TextField
        required
        id="noteform-title"
        label="Dream Title"
        defaultValue=""
        margin="normal"
        type="text"  name="noteform-title" value={this.state.title} onChange={(evt) => this.onChangeHandler(evt, 'title')}
      />
        </div>
        <div className="form-group">
          <TextField
        required
        id="noteform-note"
        label=""
        multiline
        rows="4"
        defaultValue=""
        margin="normal"
        type="text"  name="noteform-note" value={this.state.note} onChange={(evt) => this.onChangeHandler(evt, 'note')}
      />
        </div>
        
        <Buttons onClick={this.createNote} tag='Add Dream To Journal'/>
        <Divider />
      </section>

</Container>
</React.Fragment>
    )
  }
}

export default NotesForm;