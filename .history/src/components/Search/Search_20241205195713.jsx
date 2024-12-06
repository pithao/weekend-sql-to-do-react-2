import {useState, useEffect} from 'react';
import axios from 'axios';
import GiphsList from '../GiphsList/GiphsList';

function Search () {
    const [ searchText, setSearchText] = useState('');
    const [ giphs, setGiphs ] = useState( [] );

  function searchNow(){
    console.log('in searchNow:', searchText);
    // axios call to giphy

    const url = `https://api.giphy.com/v1/gifs/search?api_key=84QiQD0CU1Ep4qL3Z904TnFon6vVuKep&q= ${searchText} &limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    axios.get( url ).then(function(response){
      console.log(response.data);
      setGiphs(response.data.data); //specific to giphy
    }).catch(function(err){
      console.log(err);
      alert('error getting Giphs')
      
    })
    }
  

  return (
    <div>
      <h1>Giphy Search</h1>
      <input type='text' placeholder='find this' onChange={ (e) =>setSearchText( e.target.value ) }/>
      <button onClick={ searchNow }>Search</button>
      <div>
        <h2>Search Results:</h2>
        {
          giphs.map( ( giph, index )=>(
            <img key={index} src={ giph.images.original.url } />
          ))
        }
        {/* <p>{ searchText }</p>
        <p>{JSON.stringify(giphs)}</p> */}
      </div>
      <GiphsList giphs={ giphs/>
    </div>
  );

}

export default Search

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function Search () {
  
//   function searchNow(){
//     console.log( 'in searchNow:', searchText );
//     // axios call to giphy
//     const url = `https://api.giphy.com/v1/gifs/search?api_key=o2scmkIZPtYY63Yq8bXVhlRFkM1JM9X6&q=${ searchText }&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
//     axios.get( url ).then( function ( response ){
//       console.log( response.data );
//       setGiphs( response.data.data ); // specific to giphy
//     }).catch( function( err ){
//       console.log( err );
//       alert( 'error getting Giphs' );
//     })
//   }

//   const [ searchText, setSearchText ] = useState( '' );
//   const [ giphs, setGiphs ] = useState( [] );

//   return (
//     <div>
//       <h1>Giphy Search</h1>
//       <input type='text' placeholder='find this' onChange={ ( e )=>setSearchText( e.target.value ) }/>
//       <button onClick={ searchNow }>Search</button>
//       <div>
//         <h2>Search Results:</h2>
//         {
//           giphs.map( ( giph, index )=>(
//             <img key={index} src={ giph.images.original.url } />
//           ))
//         }
//       </div>
//     </div>
//   );

// }

// export default Search