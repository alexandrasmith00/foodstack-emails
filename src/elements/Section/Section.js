import React from 'react';
import Grid from '../Grid/Grid';
import styles from './styles';

export default ({ children, style, bg, padding }) => (
  <Grid style={styles.section(style, bg)}>
    <Grid.Cell style={styles.cell(padding)}>
      {children}
    </Grid.Cell>
  </Grid>
);
