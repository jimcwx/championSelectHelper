import React, { Component } from 'react';
import './App.css';

import axios from "axios";
import StartPage from "./components/StartPage"
import MainPage from "./components/MainPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      championsToDisplay:{},
      isStartPage: true,
      isMainPage: false,
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
        championsToDisplay: championsArray,
      });
    });
  }
  
  startPageHandleClick = () => {
    this.setState({
      isStartPage: !this.state.isStartPage,
      isMainPage: !this.state.isMainPage,
    })
  }

  render() {
    console.log(this.state.championsToDisplay)
    return (
      <div className="App">
        {this.state.isStartPage ? <StartPage buttonClick={this.startPageHandleClick} /> : null}
        {this.state.isMainPage ? <MainPage  champions={this.state.championsToDisplay}/> : null}
      </div>
    );
  }
}

export default App;