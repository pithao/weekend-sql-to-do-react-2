import {useState, useEffect} from 'react';
import axios from 'axios';


function Search () {
  
  const [ searchText setsearchText ] = useState('');

  return (
    <div>
      <h1>Giphy Search</h1>
      <input type='text' placeholder='find this' />
      <button>Search</button>
    </div>
  );

}

export default Search
