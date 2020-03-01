import React, { Component } from 'react';


class StartPage extends Component {
  

  render() {
    return (
      <div className="startPage">
        <h1>Champion Select Helper</h1>
        <button onClick={this.props.buttonClick}>Start</button>
      </div>
    );
  }
}

export default StartPage;