import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Typography } from '@material-ui/core'

const styles = theme => ({
  score: {
    color: 'white'
  }
});

class Scoreboard extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant='h2' className={classes.score}>
          {`${this.props.score}/10`}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Scoreboard)