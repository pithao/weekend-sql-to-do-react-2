import {useState, useEffect} from 'react';
import axios from 'axios';


function GiphsList ( giphs ) {
  
  const [ hook, setHool ] = useState('');

  return (
    <div>
      <h1>Giphy GiphsList</h1>
      <p>{JSON.stringify( giphs ) }</p>
    </div>
  );

}

export default GiphsList

