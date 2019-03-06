import React, { Component } from 'react'
import Gif from './Gif'
import Options from './Options'
import Scoreboard from './Scoreboard'

import { Grid } from '@material-ui/core/'
import { timingSafeEqual } from 'crypto';

class Game extends Component {
  constructor(props) {
    super(props)

    const shuffledData = this.props.data.sort(() => 0.5 - Math.random())
    const sampledData = shuffledData.slice(0, 10)

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
      console.log(g)
      if (!this.state.playedGames.includes(g)) {
        return g
      }
    })
    console.log("PG", possibleGames)
    const index = Math.floor(Math.random() * possibleGames.length)
    const game = possibleGames[index]
    this.setState({
      game, 
      playedGames: [...this.state.playedGames, game]
    })
  }

  checkGuess = (e) => {
    console.log("GUESS", e.target.textContent)
    if (e.target.textContent === this.state.game.correct) {
      console.log("CORRECT")
      this.setState({score: this.state.score+1})
    }
    else {
      console.log("WRONG")
    }


  }


  render() {
    console.log("PLAYED", this.state.playedGames)
    return (
      <div className="Game">
        <Grid container >
          <Grid item xs>
            <Gif game={this.state.game}/>
          </Grid>
          <Grid item xs>
            <Options game={this.state.game} checkGuess={this.checkGuess} chooseGame={this.chooseGame}/>
          </Grid>
          <Grid item xs>
            <Scoreboard score={this.state.score}/>
          </Grid>
        </Grid>
        
      </div>
    );
  }
}

export default Game;
