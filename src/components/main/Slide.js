import React, { Component } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

export default class Slide extends Component {
    render() {
        
        const images = [
            {
                original: '/img/photos/original/a.png',
                thumbnail: '/img/photos/tumblr/a.png',
            },
            {
                original: '/img/photos/original/b.png',
                thumbnail: '/img/photos/tumblr/b.png',
            },
            {
                original: '/img/photos/original/c.png',
                thumbnail: '/img/photos/tumblr/c.png',
            },
            {
                original: '/img/photos/original/d.png',
                thumbnail: '/img/photos/tumblr/d.png',
            },
        ];
     return (
         <ImageGallery items={images} autoPlay={true} />
     )   
    }
        
      }
