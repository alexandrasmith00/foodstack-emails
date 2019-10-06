import React from 'react';
import { Main, Header, Title, Para, Body, Footer, Button } from '../../elements';

export default () => (
  <Main>
    <Header />
    <Body>
      <Title>{`{{ this.producerName }}`} Wholesale Availability</Title>
      <Para>{`{{this.message}}`}.</Para>
      <Button href={"https://shop.foodstack.net"}>
        Create Your Order
      </Button>
    </Body>
    <Footer />
  </Main>
);
