import React from 'react';

import Grid from '../layout/Grid';
import Header from '../elements/Header';
import Title from '../elements/Title';
import Body from '../elements/Body';
import Footer from '../elements/Footer';

const style = {

  container: {
    backgroundColor: '#efefef',
    padding: '20px 0',
    fontFamily: 'sans-serif',
  },

  main: {
    maxWidth: '500px',
    width: '100%',
  },

};

export default ({ data }) => (
  <center style={style.container}>
    <Grid style={style.main}>
      <Header />
      <Body>
        <Title>this is different...</Title>
      </Body>
      <Footer />
    </Grid>
  </center>
);
