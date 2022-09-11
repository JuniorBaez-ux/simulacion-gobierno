import React from 'react';

function Gobierno(props){

      return (
        <div>
            <h1>Gobierno</h1>
            <h2>Partido: {props.partido}</h2>
            <h2>Politica: {props.politica}</h2>
        </div>
      );
}

export default Gobierno;