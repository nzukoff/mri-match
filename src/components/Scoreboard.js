import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Typography } from '@material-ui/core'

const styles = theme => ({
  score: {
    color: '#e0e0e0'
  }
});

class Scoreboard extends Component {
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