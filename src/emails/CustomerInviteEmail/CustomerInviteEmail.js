import React from 'react';
import { Main, Header, Title, Para, Body, Footer, Button, List, Text } from '../../elements';

export default () => (
  <Main>
    <Header />
    <Body>
      <Title>Wholesale with {`{{ this.producerName }}`}</Title>
      <Para>Set up your foodstack account to order wholesale from {`{{this.producerName}}`}.</Para>
      <Para fontStyles={{ fontWeight: '800' }}>Get Started</Para>
      <List>
        <Text style={{ fontWeight: 600 }}>Create your free foodstack account.</Text>
        <Text style={{ fontWeight: 600 }}>Enter the code provided below.</Text>
        <Text style={{ fontWeight: 600 }}>Order from other local producers like {`{{this.producerName}}`}.</Text>
      </List>
      <Para fontStyles={{ fontWeight: '800' }}>Your Code</Para>
      <Para>Enter this code after creating/logging into your account.</Para>
      <Title>{`{{this.referralCode}}`}</Title>

      <Button href={"https://shop.foodstack.net"}>
        Create Account or Login
      </Button>


    </Body>
    <Footer />
  </Main>
);
