import React, {useState} from 'react';
import './Api.css';

let countriesArray = [];
function apiCall(){

    const app = document.getElementById('api')

    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    app.appendChild(container)

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)

      if (request.status >= 200 && request.status < 400) {
        data.forEach(country => {


          countriesArray.push(country)
          countriesArray.forEach(countrie =>{
            // console.log(countrie.name)
          })


          const card = document.createElement('div')
          card.setAttribute('class', 'card')

          const img = document.createElement('img')
          img.src = country.flag

          const p4 = document.createElement('p')
          p4.textContent = country.name
          p4.setAttribute('class', 'country-name')

          const p1 = document.createElement('p')
          country.capital = country.capital
          p1.textContent = `Capital: ${country.capital}`
          p1.setAttribute('class', 'capital')

          const p2 = document.createElement('p')
          country.population = country.population
          p2.textContent = `Population: ${country.population}`

          const p3 = document.createElement('p')
          country.region = country.region
          p3.textContent = `Region: ${country.region}`


          container.appendChild(card)
          card.appendChild(img)
          card.appendChild(p4)
          card.appendChild(p2)
          card.appendChild(p3)
          card.appendChild(p1)

        })
      } else {
        console.log('error')
      }
    }

    // Send request
    request.send();

    return (
      <div>
      <p></p>
      </div>

    )
}

export default apiCall;
export {countriesArray};
