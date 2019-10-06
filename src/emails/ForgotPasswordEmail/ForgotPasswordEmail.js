import React from 'react';
import { Main, Header, Title, Para, Body, Footer, Button } from '../../elements';

export default () => (
  <Main>
    <Header />
    <Body>
      <Title bottom="16px">
        Reset Your Password
      </Title>
      <Para color="gray" bottom="16px">
        You’re receiving this email because you’ve requested to
        reset your foodstack password.
      </Para>
      <Para style={{ fontWeight: '600' }} bottom="16px">
        Click the link below to reset your password.
      </Para>
      <Button href={`{{ this.resetPasswordLink }}`} top="16px">
        Reset Password
      </Button>
    </Body>
    <Footer />
  </Main>
);
