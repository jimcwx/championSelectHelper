import React, { Component } from 'react';

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
    } else {
      this.props.userUnselectClassType(this.state.champType);
    }

    this.setState({
      isChecked: !this.state.isChecked,
    })
  }

  render() {
    return (
      <label htmlFor={`checkbox${this.props.index}`}>
        <div className={this.state.isChecked===true ? "unclicked":"clicked"}></div>
        <h3>{this.state.champType}</h3>
        <img src={this.props.url} alt={`icon for ${this.state.champType} class`} />
        <input type="checkbox" name={`checkbox${this.props.index}`} id={`checkbox${this.props.index}`} value={this.state.champType} onClick={this.userClick} />
      </label>
    );
  }
}

export default ChampCheckBox;