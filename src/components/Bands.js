import React from 'react';
import Band from "./Band"

const Bands = (props) =>
  <div>
    {props.bands.map(band => {
          return <Band key={band.id} band={band} deleteBand={props.deleteBand}/>
        })}
  </div>;

export default Bands;