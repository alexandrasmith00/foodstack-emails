import React from 'react';
import styles from './styles';

export default ({ children, style = {}, color }) => (
  <span style={styles.text(style, color)}>{children}</span>
);
