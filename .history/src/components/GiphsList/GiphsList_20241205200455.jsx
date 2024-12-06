import {useState, useEffect} from 'react';
import axios from 'axios';


function GiphsList ( giphs ) {
  
  const [ hook, setHook ] = useState('');

  return (
    <div>
      <h1>Giphy GiphsList</h1>
      <h2>Search Results:</h2>
        {
          giphs.map( ( giph, index )=>(
            <img key={index} src={ giph.images.original.url } />
          ))
        }

      <p>{JSON.stringify( giphs ) }</p>
    </div>
  );

}

export default GiphsList

