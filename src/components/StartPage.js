import React from 'react';


function StartPage(props) {
  return (
    <div className="startPage">
      <h1>Champion Select Helper</h1>
      <button onClick={props.buttonClick}>Start</button>
    </div>
  );
}

export default StartPage;