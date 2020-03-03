import React, { Component } from 'react';
import './App.css';

import axios from "axios";
import StartPage from "./components/StartPage"
import MainPage from "./components/MainPage";
import ChampDetailed from "./components/ChampDetailed"

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullChampions:[],
      championsToDisplay:[],
      isStartPage: true,
      isMainPage: false,
      isChampDetailPage:false,
      selectedChamp:"",
    }
  }
  componentDidMount() {
    // storing a list of all league of legends champions in state
    axios({
      url: "http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json",
      method: "GET",
      responseType: "json"
    }).then(res => {
      const championsArray = []
      for (let key in res.data.data) {
        championsArray.push(res.data.data[key]);
      }
      this.setState({
        fullChampions: championsArray,
        championsToDisplay: championsArray,
      });
    });
  }
  // function that is passed down to the component to store which champion the user selects to display to them a more detailed description of the champion. The champion selection is then stored in state and passed down to the ChampDetailed component
  userSelectedChampion = (userSelection) => {
    this.setState({
      isMainPage: !this.state.isMainPage,
      isChampDetailPage:!this.state.isChampDetailPage,
      selectedChamp:userSelection
    })
  }
  //function to switch from the landing page to the page where the user can make selections
  startPageHandleClick = () => {
    this.setState({
      isStartPage: !this.state.isStartPage,
      isMainPage: !this.state.isMainPage,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          {this.state.isStartPage ? <StartPage buttonClick={this.startPageHandleClick} /> : null}
          {this.state.isMainPage ? <MainPage  champions={this.state.championsToDisplay} userSelectedChampion={this.userSelectedChampion}/> : null}
          {this.state.isChampDetailPage ? <ChampDetailed selectedChamp={this.state.selectedChamp}/> : null}
        </div>
      </div>
    );
  }
}

export default App;