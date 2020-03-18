import React from 'react';
import './SearchPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Api, {countriesArray} from './Api.jsx';


const search  = <FontAwesomeIcon icon={faSearch} />

function SearchPart(props){

    countriesArray.forEach(country =>{
      console.log(country.name)
    })

  function handleChange(e){
    let currentList = [];
    let newlist = [];

    if(e.target.value !== ""){
      currentList = countriesArray;
      newlist = currentList.filter((item) => {
        const filter = e.target.value;
        if(item.name.toLocaleLowerCase().includes(filter)){
          console.log("item: " + item.name);
          console.log("filter: " + filter)
        }
        // console.log(item.name.toLocaleUpperCase());
        // console.log(item.name.toLocaleLowerCase().includes(filter))
        // const lc = item;
        // console.log(lc.includes(filter));
      })
    }
    console.log(e.target.value)
  }


  return (
    <div>
    <Api/>
    <div className="search-container">
      <div className="search-div">{search} <input className="search-field" type="text" placeholder="Search for a country..." onChange={handleChange}></input></div>
      <div className="filter">Filter by region v</div>
    </div>
    </div>
  )}

export default SearchPart;
