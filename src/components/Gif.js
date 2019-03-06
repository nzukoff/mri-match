import React, { Component } from 'react'
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

class Gif extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {classes} = this.props
    return (
      <div className="Gif">
        {this.props.game ? 
        <Card 
          className={classes.imageCard} 
          >
          <CardMedia
            className={classes.image}
            image={this.props.game.link}
            component='img'
          />
        </Card> 
        : null }
      </div>
    );
  }
}

export default withStyles(styles)(Gif)