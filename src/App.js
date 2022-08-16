import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList'
import Key from './Config.js';
import axios from 'axios';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
        images: [],
        searchTerm: 'Dancing, Cars, Computers, Ferrari',
        loading: true
    };
  }

  Search() {
    this.setState({loading: true});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Key}&tags=${this.state.searchTerm}&safe_search=1&content_type=1&media=photos&per_page=24&format=json&nojsoncallback=1`)    
      .then(responseData => {this.setState({images: responseData.data.photos.photo});})
      .finally(() => this.setState({loading: false}));
  }

  componentDidMount() {
    this.Search();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.Search();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let term = document.querySelector('input').value.toString();
    this.setState({searchTerm: term});
  }

  render() {
    console.log(this.state.loading);
    return (
      <div class="container">
  
        <form class="search-form" onSubmit={e => this.handleSubmit(e)}>
          <input type="search" name="search" placeholder="Search" required/>
          <button type="submit" class="search-button">
            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
        </form>

        <nav class="main-nav">
          <Nav />
        </nav>
        
        <div class="photo-container">
          <h2>Results for {this.state.searchTerm}</h2>
          <PhotoList data={this.state.images} />
        </div>

      </div>
    );
  }

}