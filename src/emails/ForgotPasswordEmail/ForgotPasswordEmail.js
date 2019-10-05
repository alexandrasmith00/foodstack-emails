import React from 'react';
import { Grid, Header, Title, Body, Footer } from '../../elements';
import styles from './styles';

export default () => (
  <center style={styles.container}>
    <Grid style={styles.main}>
      <Header />
      <Body>
        <Title>Forgot password?</Title>
      </Body>
      <Footer />
    </Grid>
  </center>
);
