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
          galleryList: response.data.map((indvItem, i)=>{
            return {
              ...indvItem,
              isHidden: false
            };
          }),
        })
      })
  } // end getGalleryList

  revealDescription = (event) => {
    console.log(event.target.dataset)
    const galleryIndex = parseInt(event.target.dataset.id);
    console.log('galleryIndex', galleryIndex);
    const newGallery = this.state.galleryList.map((indvItem, i) => {
      if (i === galleryIndex) {
        return {
          ...indvItem,
          isHidden: true
        };
      } else {
        return indvItem;
      }
    })
    console.log(newGallery);

    this.setState({
      galleryList: newGallery,
    });
  }

  //use run server on 1.node
  render() {
    const htmlList = this.state.galleryList.map((indvItem, i) => {
      let hiddenCss = 'hideMe';
      if (indvItem.isHidden === false) {
        hiddenCss = '';
      }

      return (
        <div key={i}>
          <img src={indvItem.path} alt={indvItem.description} data-id={i} onClick={this.revealDescription} />
          <br />
          <div className={hiddenCss}>{indvItem.description}</div>
          <br />
          Likes: {indvItem.likes}
          <br />
          <button data-id={i} onClick={this.addLike}>Love it!</button>
        </div>
      )
    })

    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        {htmlList}
        <GalleryList galleryList={this.state.galleryList}/>
      </div>
    );
  }
}

export default App;
