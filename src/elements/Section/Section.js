import React from 'react';
import Grid from '../Grid/Grid';
import styles from './styles';

export default ({ children, style, bg, padding, top, bottom, spacing }) => (
  <Grid style={styles.section(style, bg, top, bottom, spacing)}>
    <Grid.Cell style={styles.cell(padding)}>
      {children}
    </Grid.Cell>
  </Grid>
);
