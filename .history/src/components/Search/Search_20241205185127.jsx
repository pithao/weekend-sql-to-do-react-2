import {useState, useEffect} from 'react';
import axios from 'axios';


function Search () {
  
  function searchNow(){
    console.log('in searchNow:', searchText);
    // axios call to giphy
    const url = "https://api.giphy.com/v1/gifs/search?api_key=84QiQD0CU1Ep4qL3Z904TnFon6vVuKep&q=magneto&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
    axios.get( url ).then(function(response){
      console.log(response.data);
    }).catch(function(err){
      console.log(err);
      alert('error getting Gifphs')
      
    })
    }
  }

  const [ searchText, setSearchText] = useState('');

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
