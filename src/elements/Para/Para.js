import React from 'react';
import Grid from '../Grid/Grid';
import styles from './styles';

export default ({ children, top, bottom, spacing, color, align, style }) => (
  <Grid style={styles.wrapper(top, bottom, spacing)}>
    <p style={styles.paragraph(style, color, align)}>
      {children}
    </p>
  </Grid>
);
