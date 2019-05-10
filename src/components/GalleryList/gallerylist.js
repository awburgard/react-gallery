import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/galleryitem';


class GalleryList extends Component {
    render() {
        const htmlList = this.props.galleryList.map((indvItem, i) => {
            return (
                <GalleryItem individualData={indvItem} i={i} key={i} updateLikes={this.props.updateLikes} />
            )
        })
        return (
            <div>
                {htmlList}
            </div>
        )
    }

}

export default GalleryList;
