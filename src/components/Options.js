import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'

import { ButtonBase, GridList, GridListTile, Typography, Button, Grid } from '@material-ui/core'

const styles = theme => ({
 
});

class Options extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        {this.props.game ? 
        <Grid container direction='column'>
        {this.props.game.options.map((option, i) => {
            return (<Button
              onClick={(e) => {this.props.checkGuess(e); this.props.chooseGame()}}
              key={i}  
          > 
            {option}
          </Button>)
          })
        }
        </Grid> 
        : null }
      </div>
    );
  }
}

export default withStyles(styles)(Options)