import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './SearchPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Api, {countriesArray} from './Api.jsx';


const search  = <FontAwesomeIcon icon={faSearch} />

function SearchPart(props){




  function handleChange(e){

    countriesArray.forEach(country =>
      console.log(country.region)
    )

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
      <Dropdown>
         <Dropdown.Toggle variant="dark" id="dropdown-basic">
           Filter by Region
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {countriesArray.forEach(country =>{
          return <Dropdown.Item href="#/action-1">{country.region}</Dropdown.Item>
        })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
    </div>
  )}

export default SearchPart;
