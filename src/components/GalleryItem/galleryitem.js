import React, { Component } from 'react';
import './item.css'

class GalleryItem extends Component {
    state = {
        clicked: true,
    }
    clickPic = (event) => {
        this.setState({
            clicked: !this.state.clicked,
        })
    }
    render() {
        let picHtml =  <img
        className="rounded-circle"
        src={this.props.individualData.path}
        alt={this.props.individualData.description}
        data-id={this.props.i}
        />

        if (this.state.clicked == false){
            picHtml = <p>{this.props.individualData.description}</p>;
        }
        return (
            <div key={this.props.i}>
            <div onClick={this.clickPic}>
            {picHtml}
            </div>
                Likes: {this.props.individualData.likes}
                <br />
                <button className="btn btn-primary"data-id={this.props.individualData.id} onClick={this.props.updateLikes}>Love it!</button>
            </div>
        )
    }
}

export default GalleryItem;
