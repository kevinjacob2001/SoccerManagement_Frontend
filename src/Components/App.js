import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';
import PlayerForm from './Player/PlayerForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
    }
this.updateCurrentPlayer=this.updateCurrentPlayer.bind(this);
   
  }

  componentDidMount() {
    const url = 'http://localhost:8000/players';

    axios.get(url)
      .then((Response) => {
        this.setState({
          players: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateCurrentPlayer(item){
    this.setState({
      currentPlayer: item,
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
         
          <nav>
            <div className="nav-wrapper deep-purple darken-2 ">
              <a href="/" className="brand-logo">Soccer Management</a>
            </div>
          </nav>
        
        </div>
        <div className="row">
          <div className="col s3"><PlayerList players={this.state.players}
            updateCurrentPlayer={this.updateCurrentPlayer}/>
          </div>
          <div className="col s9"><PlayerSingle player={this.state.currentPlayer}/></div>
        </div>
        <div className="row">
          <div className="col s12"><PlayerForm /></div>
        </div>
      </div>
    );
  }
}

export default App;
