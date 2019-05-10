import React, { Component } from 'react';


class GalleryList extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return ('your mom')
    }
    componentDidMount(){
        console.log(this.props);
        
    }

}

export default GalleryList;
