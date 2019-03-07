import React, { Component } from 'react';
import Game from './components/Game'
import data from './data.json'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: { fontFamily: "'Questrial', sans-serif", useNextVariants: true },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
        <Game data={data}/>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
