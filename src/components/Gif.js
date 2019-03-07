import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardMedia } from '@material-ui/core/'

const styles = {
  imageCard: {
    // backgroundColor: 'transparent',
    // boxShadow: 'none',
    maxWidth: 300
  },
  image: {
    height: 'auto',
    width: 'auto',
    maxWidth: 300
    // maxHeight: 150,
  },
};

export const Gif = (props) => {
  // constructor(props) {
  //   super(props)
  // }
  // render() {
    const {classes} = props
    return (
      <div className="Gif">
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
  // }
}

export default withStyles(styles)(Gif)