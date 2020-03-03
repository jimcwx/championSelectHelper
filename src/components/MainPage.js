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
      userSelectedChampion: this.props.userSelectedChampion
    };
    this.displayChampRef = React.createRef();
  }
  // using the map method to dynamically generate user choices based on choices available, this is for flexibility purposes in case riot adds a new champion class or takes one away
  creatingClasses = classesArray => {
    let jsxToAdd = classesArray.map((champType, index) => {
      return <ChampCheckBox key={index} type={champType} url={process.env.PUBLIC_URL + `/assets/${champType}.png`} userSelectClassType={this.userSelectClassType} userUnselectClassType={this.userUnselectClassType} index={index + 1} />;
    });
    return jsxToAdd;
  };
  //function to add the class selection to an array stored in the state which is passed down to the ChampCheckBox component
  userSelectClassType = classType => {
    const newSelection = this.state.userSelection;
    newSelection.push(classType);
    this.setState({
      userSelection: newSelection
    });
  };
  //function to delete a class selection from the array stored in the state which is passed down to the ChampCheckBox component
  userUnselectClassType = classType => {
    const oldSelection = this.state.userSelection;
    const newSelection = oldSelection.filter(champType => {
      return champType !== classType;
    });
    this.setState({
      userSelection: newSelection
    });
  };
  //function that runs when the user confirms their champion class selection
  userConfirmClassSelect = e => {
    e.preventDefault();
    this.filterChampionsToDisplay(this.state.userSelection, this.state.championsToDisplay);
  };
  //A function that scrolls down after the some champions are displayed based on the user champion class selection
  scrollAfterDisplay = () => {
      window.scrollTo(0, this.displayChampRef.current.offsetTop);
  };
  //The function that filters down the array of all champions to an array of champions that fits the user's selection
  filterChampionsToDisplay = (userSelection, champsToFilter) => {
    const champsTest = champsToFilter.filter(champ => {
      for (let selection of userSelection) {
        if (!champ.tags.includes(selection)) {
          return false;
        }
      }
      return true;
    });
    this.setState(
      {
        filteredChampions: champsTest
      },
      this.checkIfArrayIsEmpty
    );
  };
  //function that fires a warning if the filtered down champions array is empty, if it's not empty, switch the state which allows the displaying of champions on the page to the user
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
      }, this.scrollAfterDisplay);
    }
  };

  render() {
    return (
      <main className="mainPage">
        <div className="wrapper">
          <h1>Champion Select Helper</h1>
          <p>Note: Select up to two class types!</p>
          <p>Select nothing if you just want to see all the Champions!</p>
          <form action="submit" className="classSelect" onSubmit={this.userConfirmClassSelect}>
            {this.creatingClasses(this.state.availableClasses)}
            <button tabIndex="0">Confirm Selection</button>
          </form>
          <div ref={this.displayChampRef}>
            {this.state.hasUserMadeSelection ? (
              <DisplayedChampions 
                filteredChampions={this.state.filteredChampions} id="displayedChampions" userSelectedChampion={this.state.userSelectedChampion}/>) 
            : 
              null}
          </div>
        </div>
      </main>
    );
  }
}

export default MainPage;