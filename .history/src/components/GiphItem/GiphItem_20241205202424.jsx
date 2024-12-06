import {useState, useEffect} from 'react';
import axios from 'axios';


function GiphItem (giph) {
  
  const [ hook, setHook ] = useState('');

  return (
    <div>
      {/* <h1>{ JSON.stringify( giph.giph)}</h1>
       */}
       <h2>{ giph.giph.title</h2>
       <img src = { giph.giph.images.original.url} />
    </div>
  );

}

export default GiphItem

