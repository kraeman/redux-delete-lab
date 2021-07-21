// import React, { Component } from 'react';

// class Band extends Component {

//   render() {
//     return(
//       <div>
//         <li>{this.props.band.name}</li>
//         <button onClick={() => this.props.deleteBand(this.props.band.id)}>Gwar</button>
//       </div>
//     );
//   }
// };



import React from 'react'

const Band = props => {
  return (
    <div>
        <li>{props.band.name}</li>
        <button onClick={() => props.deleteBand(props.band.id)}>Gwar</button>
      </div>
  )
}


export default Band;
