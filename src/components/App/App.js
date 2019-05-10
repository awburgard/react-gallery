import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/gallerylist';

class App extends Component {
  state = {
    galleryList: [],
  }

  componentDidMount() {
    this.getGalleryList();
  }

  getGalleryList() {
    Axios.get('/gallery')
      .then((response) => {
        console.log(response);
        this.setState({
          galleryList: response.data,
        })
      })
  } // end getGalleryList

  //use run server on 1.node
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList galleryList={this.state.galleryList} />
      </div>
    );
  }
}

export default App;
