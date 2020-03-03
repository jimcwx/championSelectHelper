import React ,{Component} from 'react';

class StartPage extends Component {
  //this allows the user to confirm leaving the landing page using tab and enter keys
  keyUpHandler = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.props.buttonClick();
    }
  };

  render() {
    return (
      <div className="startPage">
        <h1>Champion Select Helper</h1>
        <h2>For your League of Legends champion select convenience</h2>
        <button onClick={this.props.buttonClick} tabIndex="1" onKeyUp={this.keyUpHandler}>
          Start
        </button>
      </div>
    );
  }
}

export default StartPage;