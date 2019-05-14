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
        className="card-image-top"
        src={this.props.individualData.path}
        alt={this.props.individualData.description}
        data-id={this.props.i}
        />

        if (this.state.clicked == false){
            picHtml = <p>{this.props.individualData.description}</p>;
        }
        return (
            <div className="card" key={this.props.i}>
                <div onClick={this.clickPic}>
                    <div className="card-img-top">
                        {picHtml}
                    </div>
                 </div>
                 <div className="card-body">
                 <h5 className="card-title">
                    Likes: {this.props.individualData.likes}
                 </h5>
                <br />
                <button className="btn btn-primary"
                data-id={this.props.individualData.id} 
                onClick={this.props.updateLikes}>Love it!</button>
                 </div>

            </div>
        )
    }
}

export default GalleryItem;
