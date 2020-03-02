import React from 'react';

function DisplayedChampions(props) {
  

  return (
    <div className="displayedChampions">
      {props.filteredChampions.map((champ, index)=>{
        return (
          <div className={`champBox ${champ.id}`} key={index}>
            <a href="#">
              <h2>{champ.name}</h2>
              <img src={process.env.PUBLIC_URL + `/assets/champImg/${champ.id}_0.jpg`} alt={`${champ.id}, ${champ.title}`} className="champ" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayedChampions;