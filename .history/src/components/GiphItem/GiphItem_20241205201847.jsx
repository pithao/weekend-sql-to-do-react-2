import {useState, useEffect} from 'react';
import axios from 'axios';


function GiphItem (giph) {
  
  const [ hook, setHool ] = useState('');

  return (
    <div>
      <h1>{ JSON.stringify( giph.giph)}</h1>
    </div>
  );

}

export default GiphItem

