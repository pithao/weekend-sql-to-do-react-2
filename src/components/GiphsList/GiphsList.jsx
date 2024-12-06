import {useState, useEffect} from 'react';
import axios from 'axios';
import GiphItem from '../GiphItem/GiphItem';


function GiphsList ( giphs ) {
  
  const [ hook, setHook ] = useState('');

  return (
    <div>
      <h2>Search Results:</h2>
        {
          giphs.giphs.map( ( giph, index )=>( //added another .giphs since it says undefined
            <GiphItem key={ index } giph={ giph }/>
          ))
        }

    </div>
  );

}

export default GiphsList

