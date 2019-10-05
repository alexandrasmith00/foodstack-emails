import React from 'react';
import Grid from '../Grid/Grid';
import styles from './styles';

export default ({ children, wrapperStyles = {}, titleStyles = {} }) => (
  <Grid style={{ ...styles.wrapper, ...wrapperStyles }}>
    <h1 style={{ ...styles.title, ...titleStyles }} className="title-heading">
      {children}
    </h1>
  </Grid>
);
