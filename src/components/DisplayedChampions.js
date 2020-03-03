import React, {Component} from 'react';

class DisplayedChampions extends Component {

  clickHandler = (e) => {
    e.preventDefault();
    this.props.userSelectedChampion(e.target.id)
  }

  keyUpHandler = (e) => {
    if (e.keyCode === 13) {
      this.clickHandler(e);
    } 
  }
  
  render() {
    return (
      <div className="displayedChampions">
        {this.props.filteredChampions.map((champ, index)=>{
          return (
            <div className={`champBox ${champ.id}`} key={index} onClick={this.clickHandler} id={champ.id} tabIndex="0" onKeyUp={this.keyUpHandler}>
              <a href="#" id={champ.id}>
                <h2 id={champ.id}>{champ.name}</h2>
                <img src={process.env.PUBLIC_URL + `/assets/champImg/${champ.id}_0.jpg`} alt={`${champ.id}, ${champ.title}`} className="champ" id={champ.id}/>
              </a>
            </div>
          );
        })}
      </div>
    );

  }
}

export default DisplayedChampions;