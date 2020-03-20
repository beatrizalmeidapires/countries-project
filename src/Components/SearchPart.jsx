import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './SearchPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Api from './Api.jsx';
import Header from './Header.jsx';
import {Link} from 'react-router-dom';


const search  = <FontAwesomeIcon icon={faSearch} />

let region;
function handleClick(e){
  region = e.target.name;
  console.log(region)
}
// function handleChange(e){
//
//   countriesArray.forEach(country =>
//     console.log(country.region)
//   )
//
//   let currentList = [];
//   let newlist = [];
//
//   if(e.target.value !== ""){
//     currentList = countriesArray;
//     newlist = currentList.filter((item) => {
//       const filter = e.target.value;
//       if(item.name.toLocaleLowerCase().includes(filter)){
//         // console.log("item: " + item.name);
//         // console.log("filter: " + filter)
//       }
      // console.log(item.name.toLocaleUpperCase());
      // console.log(item.name.toLocaleLowerCase().includes(filter))
      // const lc = item;
      // console.log(lc.includes(filter));
//     })
//   }
//   console.log(e.target.value)
// }
/* {countriesArray.map(country => (<Dropdown.Item href="#/action-1">{country.region}</Dropdown.Item>))}*/

class SearchPart extends React.Component {

  render(){
  return (
    <div>
    <Header/>
    <div className="search-container">
      <div className="search-div"> {search} <input className="search-field" type="text" placeholder="Search for a country..." /*onChange={handleChange}*/></input></div>
      <Dropdown>
         <Dropdown.Toggle variant="dark" id="dropdown-basic">
           Filter by Region
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Link to="/region">
        <Dropdown.Item href="#/action-1" name="Asia" onClick={handleClick}>Asia</Dropdown.Item>
        <Dropdown.Item href="#/action-2" name="America" onClick={handleClick}>America</Dropdown.Item>
        <Dropdown.Item href="#/action-3" name="Europe" onClick={handleClick}>Europe</Dropdown.Item>
        <Dropdown.Item href="#/action-4" name="Africa" onClick={handleClick}>Africa</Dropdown.Item>
        <Dropdown.Item href="#/action-5" name="Oceania" onClick={handleClick}>Oceania</Dropdown.Item>
        </Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
      <Api/>
    </div>
  )}
}

export default SearchPart;
export {region};

// {items.map((item) => (
//   <Dropdown.Item href="#/action-1">{item.region}</Dropdown.Item>
// ))}
