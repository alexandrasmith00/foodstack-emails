import React from 'react';
import { Main, Header, Title, Para, Body, Footer, Button } from '../../elements';

export default () => (
  <Main>
    <Body>
      <Title bottom="32px">
        {`{{ this.producerName }}`} Wholesale Availability for {`{{ this.period }}`}
      </Title>
      <Para bottom="32px">{`{{this.message}}`}.</Para>
    </Body>
    <Footer />
  </Main>
);
