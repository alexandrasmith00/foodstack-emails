import React from 'react';
import { Main, Header, Title, Para, Body, Footer, Button } from '../../elements';

export default () => (
  <Main>
    <Header />
    <Body>
      <Title bottom="32px">{`{{ this.producerName }}`} Wholesale Availability</Title>
      <Para bottom="32px">{`{{this.message}}`}.</Para>
      <Button size="large" href={"https://shop.foodstack.net"}>
        Create Your Order
      </Button>
    </Body>
    <Footer />
  </Main>
);
