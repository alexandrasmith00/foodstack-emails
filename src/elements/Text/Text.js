import React from 'react';
import styles from './styles';

export default ({ children, style = {} }) => (
  <span style={styles.text(style)}>{children}</span>
);
