import React, { Component } from 'react';
import './item.css'

class GalleryItem extends Component {
    state = {
        reveal: '',
    }
    revealDescription = (event) => {
        this.setState({
            reveal: 'revealDescription',
        })
    }
    render() {
        return (
            <div className={this.state.reveal} key={this.props.i}>
                <img src={this.props.individualData.path} alt={this.props.individualData.description} data-id={this.props.i} onClick={this.revealDescription} />
                <br />
                <div className="description">{this.props.individualData.description}</div>
                <br />
                Likes: {this.props.individualData.likes}
                <br />
                <button data-id={this.props.individualData.id} onClick={this.props.updateLikes}>Love it!</button>
            </div>
        )
    }
}

export default GalleryItem;
