import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/galleryitem';


class GalleryList extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    componentDidMount() {
        console.log(this.props);

    }
    render() {
        const htmlList = this.props.galleryList.map((indvItem, i) => {
            return (
                <GalleryItem individualData={indvItem} i={i} key={i}/>
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
