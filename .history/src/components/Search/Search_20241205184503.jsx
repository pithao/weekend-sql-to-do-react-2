import {useState, useEffect} from 'react';
import axios from 'axios';


function Search () {
  
  function searchNow(){
    console.log('in searchNow:', searchText);
  }

  const [ searchText, setSearchText] = useState('');
} 

  return (
    <div>
      <h1>Giphy Search</h1>
      <input type='text' placeholder='find this' onChange={ (e) =>setSearchText( e.target.value ) }/>
      <button onClick={ searchNow }>Search</button>
      <div>
        <p>{ searchText }</p>
      </div>
    </div>
  );

}

export default Search
