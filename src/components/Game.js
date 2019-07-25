import React, { Component } from 'react'
import Gif from './Gif'
import Options from './Options'
import Scoreboard from './Scoreboard'
import Header from './Header'

import { Grid, Dialog, DialogTitle } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  gif: {
    marginBottom: theme.spacing(4)
  },
  options: {
    marginBottom: theme.spacing(4)
  },
  scoreboard: {
    marginBottom: theme.spacing(4)
  }
});

class Game extends Component {
  constructor(props) {
    super(props)

    const sampledData = this.sampleData()

    this.state = {
      data: sampledData,
      game: null,
      score: 0,
      playedGames: [],
      correct: null
    }
  }

  componentDidMount() {
    this.chooseGame()
  }

  chooseGame = () => {
    
    const possibleGames = this.state.data.filter((g) => !this.state.playedGames.includes(g))
    const index = Math.floor(Math.random() * possibleGames.length)
    const game = possibleGames[index]
    this.setState({game})
  }

  checkGuess = async (e) => {
    const guess = e.target.textContent
    if (guess === this.state.game.correct) {
      this.setState({score: this.state.score+1, correct: true})
    }
    else {
      this.setState({correct: false})
    }
    if (this.state.playedGames.length < 9) {
      const gamePlayed = this.state.data.find((d) => d === this.state.game)
      await this.setState({playedGames: [...this.state.playedGames, gamePlayed]})
      this.chooseGame()
    } else {
      const gamePlayed = this.state.data.find((d) => d === this.state.game)
      await this.setState({playedGames: [...this.state.playedGames, gamePlayed]})
    }
  }

  sampleData = () => {
    const shuffledData = this.props.data.sort(() => 0.5 - Math.random())
    return shuffledData.slice(0, 10)
  }

  reset = async () => {
    const sampledData = this.sampleData()
    await this.setState({
      data: sampledData,
      game: null,
      score: 0,
      playedGames: []
    })
    this.chooseGame()

  }

  render() {
    const { classes } = this.props
    return (
      <div className="Game">
        <Grid container>
          <Header reset={this.reset}/>
        </Grid>
        <Grid container >
          <Grid className={classes.gif} item xs={12} md={4} container justify='space-around'>
            <Gif game={this.state.game} remaining={10 - this.state.playedGames.length}/>
          </Grid>
          <Grid item className={classes.options} xs={12} md={4} container justify='space-around'>
            <Options game={this.state.game} checkGuess={this.checkGuess} chooseGame={this.chooseGame}/>
            {this.state.playedGames.length === 10 ? 
            <Dialog
              open={true}
              onClose={() => this.reset()}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">{`Nice! Your score was ${this.state.score}/10`}</DialogTitle>
            </Dialog>
            : null}
          </Grid>
          <Grid className={classes.scoreboard} item xs={12} md={4} container justify='space-around' >
            <Scoreboard score={this.state.score} correct={this.state.correct}/>
          </Grid>
        </Grid>
        
      </div>
    );
  }
}

export default withStyles(styles)(Game)