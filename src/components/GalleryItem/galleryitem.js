import React, { Component } from 'react';

class GalleryItem extends Component {

render(){
    return(
        <div key={this.props.i}>
                    <img src={this.props.individualData.path} alt={this.props.individualData.description} data-id={this.props.i} onClick={this.revealDescription} />
                    <br />
                    <div>{this.props.individualData.description}</div>
                    <br />
                    Likes: {this.props.individualData.likes}
                    <br />
                    <button data-id={this.props.i} onClick={this.addLike}>Love it!</button>
                </div>
    )
}
}

export default GalleryItem;
