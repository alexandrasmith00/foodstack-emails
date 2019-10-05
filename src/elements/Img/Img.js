import React from 'react';
import styles from './styles';

function Img({ src, alt, className = '', style = {} }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ ...styles.img, ...style }}
      className={className}
    />
  );
}

export default Img;
