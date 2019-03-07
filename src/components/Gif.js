import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardMedia } from '@material-ui/core/'

const styles = {
  gif: {
    paddingLeft: 30
  },
  imageCard: {
    maxWidth: 400,
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  image: {
    // maxWidth: 'inherit'
  },
  remaining: { 
    width: 20,
    height: 0,
    display: 'inline-flex',
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'transparent',
    border: 'solid #e0e0e0',
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 1,
  }
};


export const Gif = (props) => {
  const {classes} = props
  const remaining = new Array(props.remaining).fill(0)
  return (
    <div className={classes.gif}>
      {
          remaining.map((nothing, i) => {
          return <div className={classes.remaining} id={`remaining-${i}`} key={`remaining-${i}`}></div>
        })
      }
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