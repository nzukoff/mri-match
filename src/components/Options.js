import React from 'react'
import { withStyles } from '@material-ui/core/styles'

// import { ButtonBase, GridList, GridListTile, Typography, Button, Grid } from '@material-ui/core'
import { Fab, Grid, Typography } from '@material-ui/core'


const styles = theme => ({
  button: {
    backgroundColor: 'transparent',
    border: 'solid white',
    marginTop: 5,
    width: 210
  },
  option: {
    color: 'white'
  }
});

export const Options = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      {props.game ? 
      <Grid container direction='column'>
        {props.game.options.map((option, i) => {
            return (<Fab
              onClick={(e) => {props.checkGuess(e)}}
              key={i}
              variant="extended"
              className={classes.button}
          > 
            <Typography variant='subtitle1' className={classes.option}>
              {option}
            </Typography>
          </Fab>)
          })
        }
      </Grid> 
      : null }
    </div>
  );
}

export default withStyles(styles)(Options)