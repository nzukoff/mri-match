import React from 'react';

import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing.unit * 4,
      },
      bar: {
        backgroundColor: '#e0e0e0',  
        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2)',
      },
      grow: {
        flexGrow: 1,
        color: '#3e3e3e',
        textDecoration: 'none'
    },
})

export const Header = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Grid container >
            <Grid item xs={2} >
              <Typography variant="h4" className={classes.grow} component="a" href="http://insideinsides.blogspot.com/">
                {`MRI MATCH`}
              </Typography>
            </Grid>
            <Grid item container justify='flex-end' xs={10} >
              <Button onClick={() => props.reset()}>
                {`New Game`}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default (withStyles(styles)(Header))