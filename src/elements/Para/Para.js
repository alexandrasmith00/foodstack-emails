import React from 'react';
import Grid from '../Grid/Grid';
import styles from './styles';

export default ({ children, wrapperStyles = {}, fontStyles = {}, color = 'font' }) => (
  <Grid style={wrapperStyles}>
    <p style={styles.paragraph(fontStyles, color)}>
      {children}
    </p>
  </Grid>
);
