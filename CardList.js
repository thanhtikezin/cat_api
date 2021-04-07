import React, { Component } from 'react';
import CatCard from './CatCard';

export default class CardList extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch('https://api.thecatapi.com/v1/breeds?api_key=a148ff22-917a-42f1-bf01-60640d892b0a')
    .then(response => response.json())
    .then(users => this.setState({cats: users}));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchfield !== this.props.searchfield) {
      console.log(this.props.searchfield)
      this.setState({searchfield: this.props.searchfield});
    }
  }

  render() {
    const {cats, searchfield} = this.state;

    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
      filteredCats.map((user, i) => {
        return (
          <CatCard
            key={filteredCats[i].id}
            id={filteredCats[i].id}
            name= {filteredCats[i].name}
            img={filteredCats[i].reference_image_id}
            weight={filteredCats[i].weight.imperial}
            weight1={filteredCats[i].weight.metric}
            temp={filteredCats[i].temperament}
            origin={filteredCats[i].origin}
            description={filteredCats[i].description}
            life={filteredCats[i].life_span}
            wiki={filteredCats[i].wikipedia_url}
          />
        );
      })
    );
  }
}