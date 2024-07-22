import { Component } from 'react';

class ImagePreloader extends Component {
  componentDidMount() {
    const { src } = this.props;
    this.preloadImage(src).then(() => console.log('Image preloaded'));
  }

  preloadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
    });
  };

  render() {
    return null; 
  }
}

export default ImagePreloader;
