import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardMedia } from '@material-ui/core/'

const styles = {
  gif: {
    paddingLeft: 30
  },
  imageCard: {
    maxWidth: 'inherit',
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  image: {
    // maxWidth: 'inherit'
  },
};

export const Gif = (props) => {
  const {classes} = props
  return (
    <div className={classes.gif}>
      {props.game ? 
      <Card 
        className={classes.imageCard} 
        >
        <CardMedia
          className={classes.image}
          image={props.game.link}
          component='img'
        />
      </Card> 
      : null }
    </div>
  );
}

export default withStyles(styles)(Gif)