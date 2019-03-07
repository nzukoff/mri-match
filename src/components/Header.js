import React from 'react';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing.unit * 4,
      },
      bar: {
        backgroundColor: 'white',  
        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2)',
      },
      grow: {
        flexGrow: 1,
    },
})

export const Header = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          {/* <Grid container >
            <Grid item xs> */}
              <Typography variant="h4" className={classes.grow}>
                {`MRI MATCH`}
              </Typography>
            {/* </Grid> */}

            {/* <Grid item container xs justify='flex-end'>   */}
              <Button onClick={() => props.reset()}>
                {`New Game`}
              </Button>
            {/* </Grid> */}
          {/* </Grid> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default (withStyles(styles)(Header))