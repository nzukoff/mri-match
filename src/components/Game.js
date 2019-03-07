import React, { Component } from 'react'
import Gif from './Gif'
import Options from './Options'
import Scoreboard from './Scoreboard'
import Header from './Header'

import { Grid, Dialog, DialogTitle } from '@material-ui/core/'

class Game extends Component {
  constructor(props) {
    super(props)

    const sampledData = this.sampleData()

    this.state = {
      data: sampledData,
      game: null,
      score: 0,
      playedGames: []
    }
  }

  componentDidMount() {
    this.chooseGame()
  }

  chooseGame = () => {
    
    const possibleGames = this.state.data.filter((g) => {
      console.log("1 data ", this.state.data); 
      console.log("2 played g", this.state.playedGames);
      console.log("3 game", g);
      return !this.state.playedGames.includes(g)})
    console.log("POS G", possibleGames)
    const index = Math.floor(Math.random() * possibleGames.length)
    const game = possibleGames[index]
    this.setState({game})
  }

  checkGuess = async (e) => {
    const guess = e.target.textContent
    if (guess === this.state.game.correct) {
      console.log("CORRECT")
      this.setState({score: this.state.score+1})
    }
    else {
      console.log("WRONG")
    }
    if (this.state.playedGames.length < 9) {
      const gamePlayed = this.state.data.find((d) => d === this.state.game)
      await this.setState({playedGames: [...this.state.playedGames, gamePlayed]})
      this.chooseGame()
    } else {
      const gamePlayed = this.state.data.find((d) => d === this.state.game)
      await this.setState({playedGames: [...this.state.playedGames, gamePlayed]})
      console.log("END")
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
    console.log("STATE", this.state)
    return (
      <div className="Game">
        <Grid container>
          <Header reset={this.reset}/>
        </Grid>
        <Grid container >
          <Grid item xs container justify='space-around'>
            <Gif game={this.state.game}/>
          </Grid>
          <Grid item xs container justify='space-around'>
            <Options game={this.state.game} checkGuess={this.checkGuess} chooseGame={this.chooseGame}/>
            {this.state.playedGames.length === 10 ? 
            <Dialog
              open={true}
              onClose={() => this.reset()}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">{"GAME OVER"}</DialogTitle>
            </Dialog>
            : null}
          </Grid>
          <Grid item xs container justify='space-around'>
            <Scoreboard score={this.state.score}/>
          </Grid>
        </Grid>
        
      </div>
    );
  }
}

export default Game;
