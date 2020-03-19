import React from 'react';
import './Api.css';

const URL = 'https://restcountries.eu/rest/v2/all'

class apiCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (<div className="container">
        {items.map((item) => (
          <div className="card">
            <img src={item.flag}/>
            <p>{item.name}</p>
            <p><b>Population: </b>{item.population}</p>
            <p className="capital"><b>Capital: </b> {item.capital}</p>
          </div>

        ))}
        </div>);
    }
  }
}

export default apiCall;
