import React from 'react'
import { withStyles } from '@material-ui/core/styles'

// import { ButtonBase, GridList, GridListTile, Typography, Button, Grid } from '@material-ui/core'
import { Button, Grid } from '@material-ui/core'


const styles = theme => ({
 
});

export const Options = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      {props.game ? 
      <Grid container direction='column'>
      {props.game.options.map((option, i) => {
          return (<Button
            onClick={(e) => {props.checkGuess(e)}}
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

export default withStyles(styles)(Options)