import React from 'react';
import Grid from '../Grid/Grid';
import styles from './styles';


export default ({ href, children }) => (
  <Grid style={styles.wrapper}>
    <Grid.Cell style={styles.buttonContainer}>
      <a href={href} style={styles.button}>
        {children}
      </a>
    </Grid.Cell>
  </Grid>
);
