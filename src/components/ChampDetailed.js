import React, {Component} from "react";
import axios from "axios";

import AbilityInfo from "./AbilityInfo"

class ChampDetailed extends Component {
  constructor() {
    super();
    this.state={
      champDetails:{},
      champPassive:{},
      champSpell0:{},
      champSpell1:{},
      champSpell2:{},
      champSpell3:{},
      isHovering: false,
      abilityInfo: "",
      champPassiveImg:"",
      champSpell0Img:"",
      champSpell1Img:"",
      champSpell2Img:"",
      champSpell3Img:"",
    }
  }

  componentDidMount() {
    axios({
      url: `http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion/${this.props.selectedChamp}.json`,
      method: "GET",
      responseType: "json"
    }).then(res => {
      this.setState({
        champDetails: res.data.data[this.props.selectedChamp],
        champPassive: res.data.data[this.props.selectedChamp].passive,
        champSpell0: res.data.data[this.props.selectedChamp].spells[0],
        champSpell1: res.data.data[this.props.selectedChamp].spells[1],
        champSpell2: res.data.data[this.props.selectedChamp].spells[2],
        champSpell3: res.data.data[this.props.selectedChamp].spells[3],
        champPassiveImg: res.data.data[this.props.selectedChamp].passive.image.full,
        champSpell0Img:res.data.data[this.props.selectedChamp].spells[0].image.full,
        champSpell1Img:res.data.data[this.props.selectedChamp].spells[1].image.full,
        champSpell2Img:res.data.data[this.props.selectedChamp].spells[2].image.full,
        champSpell3Img:res.data.data[this.props.selectedChamp].spells[3].image.full,
      });
    })
  }

  toggleHoverState = () => {
    this.setState({
      isHovering: !this.state.isHovering
    })
  }

  handleMouseHover = e => {
    e.preventDefault();
    this.toggleHoverState();
    if (e.target.id==="passive") {
      this.setState({
        abilityInfo: this.state.champPassive.name
      })
    } else {
      this.setState({
        abilityInfo: this.state[e.target.id].description
      })
    }
  }


  render() {
    return ( this.state.champDetails && 
      <div className="champDetailed">
        <h1 className="champDetailed">Champion Select Helper</h1>
        <div className="textAndImgContainer">
          <div className="textBox">
            <h2>{this.state.champDetails.name}</h2>
            <h3>{this.state.champDetails.title}</h3>
            <p>{this.state.champDetails.lore}</p>
          </div>
          <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.state.champDetails.id}_0.jpg`} alt={`${this.state.champDetails.name}, ${this.state.champDetails.title}`} />
        </div>
        <div className="abilities">
          <h2>Champion Passive and Abilities</h2>
          <div className="icons">
            <img src={`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/passive/${this.state.champPassiveImg}`} alt={`The passive of ${this.state.champDetails.name}, ${this.state.champPassive.name}`} id="passive" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} tabIndex="0"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/${this.state.champSpell0Img}`} alt={`First ability of ${this.state.champDetails.name}, ${this.state.champSpell0.name}`} id="champSpell0" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} tabIndex="0"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/${this.state.champSpell1Img}`} alt={`Second ability of ${this.state.champDetails.name}, ${this.state.champSpell1.name}`} id="champSpell1" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} tabIndex="0"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/${this.state.champSpell2Img}`} alt={`Third ability of ${this.state.champDetails.name}, ${this.state.champSpell2.name}`} id="champSpell2" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} tabIndex="0"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/${this.state.champSpell3Img}`} alt={`Ultimate ability of ${this.state.champDetails.name}, ${this.state.champSpell3.name}`} id="champSpell3" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} tabIndex="0"/>
          </div>
          <div className="abilityInfo">
            {
              this.state.isHovering &&
              <AbilityInfo abilityInfo={this.state.abilityInfo}/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ChampDetailed