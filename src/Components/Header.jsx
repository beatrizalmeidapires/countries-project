import React, {useState} from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const moon  = <FontAwesomeIcon icon={faMoon} />

function Header(props){
  const [isLight, setIsLight] = useState(false)
  const [text, setText] = useState("Dark Mode")

  function handleClick(){
    setText("Light Mode")
    setIsLight(true)
    document.body.classList.add('light-mode');
  }

  return (
    <div className={isLight ? "white" + " header-container" : "header-container"}>
      <h5 className="text-left"><b>Where in the world?</b></h5>
      <h6 className="text-right"><b><a onClick={handleClick}>{moon} </a>{text}</b></h6>
    </div>
  )}

export default Header;
