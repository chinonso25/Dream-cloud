import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from "../../index.js";
import Header from "../../components/Header";
import Buttons from "../../components/Buttons";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {},
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  text: {
    textAlign: "center"
  },

  form: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  }
};

const Login = ({ history }) => {
//   const handleLogin = useCallback(
//     async event => {
//       event.preventDefault();
//       const { email, password } = event.target.elements;
//       try {
//         await firebaseConfig
//           .auth()
//           .signInWithEmailAndPassword(email.value, password.value);
//         history.push("/");
//       } catch (error) {
//         alert(error);
//       }
//     },
//     [history]
//   );

//   const { currentUser } = useContext(AuthContext);

//   if (currentUser) {
//     return <Redirect to="/" />;
//   }

  return (
    <div>
      <Header title="Sign Up" href="/signup" />

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <h1 style={styles.text}>Log in</h1>
          <div style={styles.form}>
            <form style={styles.form} onSubmit={null}>
              <TextField
                required
                id="standard-required"
                label="Room Key"
                defaultValue=""
                className={styles.textField}
                margin="normal"
                name="Room Key"
                type="Room Key"
                placeholder="Room Key"
              />
              <div style={styles.button}>
                <Buttons type="submit" tag="Enter Room" />
              </div>
            </form>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default withRouter(Login);
