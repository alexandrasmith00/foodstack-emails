import React from 'react';
import { Main, Title, Para, Body, Footer } from '../../elements';

export default () => (
  <Main>
    <Body>
      <Title bottom="32px" size="3">
        {`{{ this.producerName }}`} Wholesale Availability for {`{{ this.period }}`}
      </Title>
      <Para bottom="32px">{`{{{this.message}}}`}</Para>
    </Body>
    <Footer unsubscribe />
  </Main>
);
