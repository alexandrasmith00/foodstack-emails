import React from 'react';
import { Section, Main, Header, Title, Para, Body, Footer, Button, List, Text } from '../../elements';

export default () => (
  <Main>
    <Header />
    <Body>
      <Title>Wholesale with {`{{ this.producerName }}`}</Title>
      <Para>Set up your foodstack account to order wholesale from {`{{this.producerName}}`}.</Para>
      <Title size="3" top="32px" color="highlight">Get Started</Title>
      <List ordered>
        <Text>Create your free foodstack account.</Text>
        <Text>Enter the code provided below.</Text>
        <Text>Order from other local producers like {`{{this.producerName}}`}.</Text>
      </List>


      <Section bg="bg">
        <Title size="3">Your Code</Title>
        <Para>
          Enter this code after creating/logging into your account.
        </Para>
        <Title spacing="32px" align="center">
          {`{{this.referralCode}}`}
        </Title>
        <Button href={"https://shop.foodstack.net"} align="center" color="white">
          Create Account or Login
        </Button>
      </Section>
    </Body>
    <Footer />
  </Main>
);
