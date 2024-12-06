import {useState, useEffect} from 'react';
import axios from 'axios';


function Search () {
  
  const [ searchText setSearchText ] = useState('');

  return (
    <div>
      <h1>Giphy Search</h1>
      <input type='text' placeholder='find this' />
      <button>Search</button>
      <div>
        <p>{ }</p>
      </div>
    </div>
  );

}

export default Search
