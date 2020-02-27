import React, { Component } from 'react';


class StartPage extends Component {
  constructor() {
    super();

  }

  render() {
    
    
    return (
      <div>
        <h1>Champion Select Helper</h1>
        <button onClick={this.props.buttonClick}>Start</button>
      </div>
    );
  }
}

export default StartPage;