import React from 'react';
import Grid from '../Grid/Grid';
import styles from './styles';


export default ({ children }) => (
  <Grid style={styles.body}>
    <Grid.Cell>
      {children}
    </Grid.Cell>
  </Grid>
);
