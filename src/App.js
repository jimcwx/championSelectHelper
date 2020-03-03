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

  userSelectedChampion = (userSelection) => {
    this.setState({
      isMainPage: !this.state.isMainPage,
      isChampDetailPage:!this.state.isChampDetailPage,
      selectedChamp:userSelection
    })
  }
  
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