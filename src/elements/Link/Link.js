import React from 'react';
import styles from './styles';

export default ({ href, children, color = 'primary', style = {} }) => (
  <a href={href} style={styles.a(color, style)}>{children}</a>
);
