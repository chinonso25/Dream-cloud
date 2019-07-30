import React, { Component } from "react";
import * as firebase from "firebase";
import firebaseConfig from "../index";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  date: {
    marginTop: 10
  },
  dreams: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontSize: 24
  }
};

export class Notes extends Component {
  removeNote(id) {
    let user = firebaseConfig.auth().currentUser;
    firebase
      .database()
      .ref(`users/${user.uid}`)
      .child(id)
      .remove();
  }

  render() {
    console.log(this.props.notes);

    return (
      <div>
        <Divider />
        <section className="notes-wrapper">
          <div style={styles.dreams}>
            <h3>Dreams</h3>
          </div>
          <div className="notes">
            {this.props.notes.map(note => (
              <div className="note" key={note.id}>
                <Card className={styles.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {note.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {note.note}
                      </Typography>
                      <Typography
                        style={styles.date}
                        variant="overline"
                        color="textSecondary"
                        component="p"
                      >
                        - {note.author}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Divider />

                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => this.removeNote(note.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Notes;
