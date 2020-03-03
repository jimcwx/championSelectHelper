import React ,{Component} from 'react';

class StartPage extends Component {
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
        <button onClick={this.props.buttonClick} tabIndex="1" onKeyUp={this.keyUpHandler}>
          Start
        </button>
      </div>
    );
  }
}

export default StartPage;