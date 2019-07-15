import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Check from '@material-ui/icons/Check'
import Close from '@material-ui/icons/Close'


const styles = theme => ({
  root: {
    color: '#e0e0e0',
  },
  correct: {
    color: '#00ff00',
    fontSize: 100,
    paddingTop: 25,
    paddingLeft: 10
  },
  wrong: {
    color: '#ff0000',
    fontSize: 100,
    paddingTop: 25,
    paddingLeft: 10
  }
});

class Scoreboard extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant='h2' >
          {`${this.props.score}/10`}
        </Typography>
        <Typography variant='h2' >
          {this.props.correct === true ? <Check className={classes.correct}/> : this.props.correct === false ? <Close className={classes.wrong}/> : ''}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Scoreboard)