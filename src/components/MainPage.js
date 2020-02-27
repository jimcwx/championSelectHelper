import React, { Component } from 'react';

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      championsArray: this.props.championsArray
    }
  }

  render() {
    return (
      <div>
        <h1>Champion Select Helper</h1>
      </div>
    );
  }
}

export default MainPage;