import React, { Component } from 'react';

import ChampCheckBox from "../components/ChampCheckBox";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DisplayedChampions from "../components/DisplayedChampions"

const MySwal = withReactContent(Swal);

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      championsToDisplay: this.props.champions,
      filteredChampions: [],
      userSelection: [],
      availableClasses: ["Fighter", "Tank", "Mage", "Assassin", "Support", "Marksman"],
      hasUserMadeSelection: false,
    }
  }

  componentDidMount() {
    
  }

  creatingClasses = (classesArray) => {
    let jsxToAdd = classesArray.map((champType, index)=>{
      return (
        <ChampCheckBox 
          key={index} 
          type={champType} 
          url={process.env.PUBLIC_URL + `/assets/${champType}.png`} 
          userSelectClassType={this.userSelectClassType} 
          userUnselectClassType={this.userUnselectClassType} 
          index={index+1}
        />
      );
    })
    return jsxToAdd
  }

  userSelectClassType = (classType) => {
    const newSelection = this.state.userSelection
    newSelection.push(classType)
    this.setState({
      userSelection: newSelection,
    })
    console.log(this.state.userSelection)
  }

  userUnselectClassType = (classType) => {
    const oldSelection = this.state.userSelection
    const newSelection = oldSelection.filter((champType)=>{
      return champType !== classType
    })
    this.setState({
      userSelection: newSelection,
    })
  }

  userConfirmClassSelect = (e) => {
    e.preventDefault();
    this.filterChampionsToDisplay(this.state.userSelection, this.state.championsToDisplay);
  }

  filterChampionsToDisplay = (userSelection, champsToFilter) => {
    const champsTest = champsToFilter.filter(champ => {
      for (let selection of userSelection) {
        if (!champ.tags.includes(selection)) {
          return false;
        }
      }
      return true;
    });
    this.setState({
      filteredChampions: champsTest,
    }, this.checkIfArrayIsEmpty)
  }

  checkIfArrayIsEmpty = () => {
    if (!this.state.filteredChampions.length) {
      MySwal.fire({
        icon: "error",
        title: "Attention!",
        text: "After looking through all 148 champions, we have found ZERO champions that matched your selection, that's right, ZERO. Please refine your search parameters and remember to select to a maximum of 2"
      });
    } else {
      this.setState({
        hasUserMadeSelection: true
      })
    }
  }

  componentDidUpdate () {
    console.log("I UPDATED")
  }

  render() {
    return (
      <main className="mainPage">
        <div className="wrapper">
          <h1>Champion Select Helper</h1>
          <p>Note: Select up to two class types!</p>
          <form action="submit" className="classSelect" onSubmit={this.userConfirmClassSelect}>
            {this.creatingClasses(this.state.availableClasses)}
            <button>Confirm Selection</button>
          </form>
          {this.state.hasUserMadeSelection ? <DisplayedChampions filteredChampions={this.state.filteredChampions}/> : null}
        </div>
      </main>
    );
  }
}

export default MainPage;