import React, { Component } from 'react';


// import tank from "../assets/Tank.png"
// import mage from "../assets/Mage.png"
// import assassin from "../assets/Mage.png"
// import support from "../assets/Support.png"
// import marksman from "../assets/Marksman.png"
import ChampCheckBox from "../components/ChampCheckBox"


class MainPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      championsToDisplay: this.props.champions,
      userSelection: [],
      availableClasses: ["Fighter", "Tank", "Mage", "Assassin", "Support", "Marksman"],
    }
  }

  componentDidMount() {
    console.log(this.state.championsToDisplay);
  }

  creatingClasses = (classesArray) => {
    let jsxToAdd = classesArray.map((champType, index)=>{
      return <ChampCheckBox key={index} type={champType} index={index + 1} url={process.env.PUBLIC_URL + `/assets/${champType}.png`} userSelectClassType={this.userSelectClassType}/>;
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

  

  componentDidUpdate() {
    console.log("this is the userSelection Array", this.state.userSelection)
  }

  render() {
    
    return (
      <main className="mainPage">
        <div className="wrapper">
          <h1>Champion Select Helper</h1>
          <form action="submit">
            {this.creatingClasses(this.state.availableClasses)}
          </form>
        </div>
      </main>
    );
  }
}

export default MainPage;