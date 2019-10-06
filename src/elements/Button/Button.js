import React from 'react';
import Grid from '../Grid/Grid';
import styles from './styles';

export default ({ href, top, bottom, spacing, children, color, size, align }) => (
  <Grid style={styles.wrapper(top, bottom, spacing)}>
    <Grid.Cell>
      <a href={href} style={styles.button(color, size, align)}>
        {children}
      </a>
    </Grid.Cell>
  </Grid>
);
