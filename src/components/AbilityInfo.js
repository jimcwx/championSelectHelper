import React, { Component } from 'react';

class AbilityInfo extends Component {
  render() {
    return (
      <div>
        <h3 className="abilityInfo">{this.props.abilityInfo}</h3>
      </div>
    );
  }
}

export default AbilityInfo;