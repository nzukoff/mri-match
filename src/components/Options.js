import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { GridList, Button } from '@material-ui/core'


const styles = theme => ({
  root: {
    width: 320,
  },
  button: {
    backgroundColor: 'transparent',
    border: 'solid #e0e0e0',
    marginTop: 5,
    borderRadius: 12,
    color: 'white',
    [theme.breakpoints.up('md')]: {
      fontSize: 24
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    },
  },
});

export const Options = (props) => {
  const { classes } = props
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  let col
  if (matches) {
    col = 1
  }
  else {
    col = 2
  }

  return (
    <div className={classes.root}>
      {props.game ? 
      <GridList cellHeight='auto' cols={col} className={classes.root}>
        {props.game.options.map((option, i) => {
            return (
              <Button 
                onClick={(e) => {props.checkGuess(e)}}
                key={i}
                className={classes.button}
                >
                  {option}
              </Button>
            )
          })
        }
      </GridList> 
      : null }
    </div>
  );
}

export default withStyles(styles)(Options)