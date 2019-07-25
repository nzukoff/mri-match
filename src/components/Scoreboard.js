import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import Mood from '@material-ui/icons/Mood'
import MoodBad from '@material-ui/icons/MoodBad'


const styles = theme => ({
  root: {
    color: '#e0e0e0',
  },
  correct: {
    color: '#00ff00',
    fontSize: 54,
    paddingLeft: 35
  },
  wrong: {
    color: '#ff0000',
    fontSize: 54,
    paddingLeft: 35
  }
});

class Scoreboard extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container >
          <Grid item xs={6} >
            <Typography variant='h2' >
              {`${this.props.score}/10`}
            </Typography>
          </Grid>
          <Grid item xs={6} >
            <Typography variant='h2' >
              {this.props.correct === true ? <Mood className={classes.correct}/> : this.props.correct === false ? <MoodBad className={classes.wrong}/> : <div></div>}
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Scoreboard)