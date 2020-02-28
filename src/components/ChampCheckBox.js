import React, { Component } from 'react';
import { StyleSheet, css } from "aphrodite";

class ChampCheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      champType: this.props.type,
      isChecked: true,
    }
  }

  userClick = () => {
    if (this.state.isChecked) {
      this.props.userSelectClassType(this.state.champType);
    }
    console.log(this.state.isChecked);

    this.setState({
      isChecked: !this.state.isChecked,
    })
    
  }

  render() {
    
    
    const styles = StyleSheet.create({
      notChecked: {
        backgroundColor:"(0,0,0,0.0)"
      },
      checked: {
        backgroundColor:"(0,255,0,1)"
      }
    })

    

    const visualClickQue = css(
      this.state.isChecked ? styles.checked : styles.notChecked
    )
    
    return (
      
      <label htmlFor={`checkbox${this.props.index}`} className={visualClickQue}>
        <h3>{this.state.champType}</h3>
        <img src={this.props.url} alt={`icon for ${this.state.champType} class`} />
        <input type="checkbox" name={`checkbox${this.props.index}`} id={`checkbox${this.props.index}`} value={this.state.champType} onClick={this.userClick} />
      </label>
    );
  }
}

export default ChampCheckBox;