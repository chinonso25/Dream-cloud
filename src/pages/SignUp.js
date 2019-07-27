import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebaseConfig from "../index.js";
import Header from '../components/Header'
import Buttons from '../components/Buttons'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';


const styles = {
  root: {
  },container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  text: {
    textAlign: 'center',
  },

  form: {
    display: 'flex',
    flexDirection:'column',
  }
};


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <Header title='Log In' href='/login'/>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <h1 style={styles.text}>Sign up</h1>
      <div>
      <form style={styles.form} onSubmit={handleSignUp}>
        
      <TextField
        required
        id="standard-required"
        label="Email"
        defaultValue=""
        className={styles.textField}
        margin="normal"
        name="email" type="email" placeholder="Email"
      />

        
<TextField
        required
        id="standard-required"
        label="Password"
        defaultValue=""
        className={styles.textField}
        margin="normal"
        name="password" type="password" placeholder="Password"
      />

<Buttons style={styles.text} type="submit" tag='Sign Up' />      </form>
      </div>
      </Container>
    </React.Fragment>
      
    </div>
  );
};

export default withRouter(SignUp);