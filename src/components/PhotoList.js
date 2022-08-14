import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound.js';

const PhotoList = props => {

  const results = props.data;
  let images = results.map((image, index) => 
    <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`} key={index} />
    );

    if (results.length !== 0) {
      return (
        <ul>
          {images}
        </ul>
      );
    } else {
      return (<NotFound />);
    }
}

export default PhotoList;