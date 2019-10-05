import React from 'react';
import { Main, Header, Title, Para, Body, Footer, Button } from '../../elements';

export default () => (
  <Main>
    <Header />
    <Body>
      <Title>Reset Your Password</Title>
      <Para color="gray">
        You’re receiving this email because you’ve requested to
        reset your foodstack password.
      </Para>
      <Para fontStyles={{ fontWeight: '600' }}>
        Click the link below to reset your password.
      </Para>
      <Button href={`{{ this.resetPasswordLink }}`}>
        Reset Password
      </Button>
    </Body>
    <Footer />
  </Main>
);
