import React from 'react';
import axios from 'axios';
import Card from '../components/card/card/Card';
import './service.css'

export default class API extends React.Component {
  constructor(props) {
    super(props);
    this.favorites = props.favorites;
    this.state = {
      capitulos: localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : [],
    };
  }

  componentDidMount() {
    if (!this.state.capitulos.length)
    axios.get(`https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`)
      .then(res => {
        const capitulos = res.data._embedded.episodes;
        capitulos.forEach((capitulo, i) => capitulo.index = i);
        this.setState({ capitulos });
      });
  }

  componentDidUpdate() {
    console.log(this.state.capitulos);
    if (!this.state.capitulos.length)
    axios.get(`https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`)
      .then(res => {
        const capitulos = res.data._embedded.episodes;
        capitulos.forEach((capitulo, i) => capitulo.index = i);
        this.setState({ capitulos });
      });
  }

  starChange(i) {
    this.state.capitulos[i].favorite = !this.state.capitulos[i].favorite;
    this.setState({});
    localStorage.setItem('cards', JSON.stringify(this.state.capitulos));
  }

  render() {
    return (
      <div className='wraper'>
        {
          this.favorites ?
          this.state.capitulos.filter(o => o.favorite).map((capitulo) => <Card key={capitulo.index} click={() => this.starChange(capitulo.index)} {...capitulo} />)
          :
          this.state.capitulos.map((capitulo) => <Card key={capitulo.index} click={() => this.starChange(capitulo.index)} {...capitulo} />)
        }
      </div>
    )
  }

}