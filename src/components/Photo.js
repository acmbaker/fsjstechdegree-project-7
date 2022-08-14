import React, { Component } from 'react';
import Key from '../Config.js';
import axios from 'axios';

class Photo extends Component {

    render() {
        return (
        <ul>
            {/* <li>
              <img src={`https://live.staticflickr.com/${this.state.images.photos.photo[1].server-id}/${this.state.images.photos.photo[1].images[1].id}_${Key}_${this.state.images[1].size-suffix}.jpg`} alt="" />
            </li> */}
            <li>
              <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
            </li>
        </ul>
        );
    }
}

export default Photo;