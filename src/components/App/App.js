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
        this.setState({
          galleryList: response.data,
        })
      })
  } // end getGalleryList

  updateLikes = (event) => {
    Axios.put('/gallery/like/' + event.target.dataset.id)
      .then((response) => {
        this.getGalleryList();
      })
  }

  //use run server on 1.node
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
       <GalleryList galleryList={this.state.galleryList} updateLikes={this.updateLikes}/>
      </div>
    );
  }
}

export default App;
