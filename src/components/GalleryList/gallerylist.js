import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/galleryitem';

class GalleryList extends Component {
    render() {
        const htmlList = this.props.galleryList.map((indvItem, i) => {
            return (
                <div className="col-md-3">
                <GalleryItem individualData={indvItem} i={i} key={i} updateLikes={this.props.updateLikes} />
                </div>
            )
        })
        return (
            <div className="row">
                {htmlList}
            </div>
        )
    }

}

export default GalleryList;
