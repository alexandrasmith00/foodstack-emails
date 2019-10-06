import React from 'react';
import { Main, Header, Title, Para, List, Body, Footer, Text, Button } from '../../elements';

export default () => (
  <Main>
    <Header />
    <Body>
      <Title top="8px" bottom="16px">
        Your Password Reset Request
      </Title>
      <Para color="gray" bottom="32px">
        There is no foodstack account associated with this e-mail. If you did
        not request to reset your password, you can ignore this e-mail.
      </Para>
      <Para style={{ fontWeight: '600' }}>
        To fix this, try one of the following:
        <List>
          <Text style={{ fontWeight: 600 }}>Make sure you have an existing account</Text>
          <Text style={{ fontWeight: 600 }}>Create a foodstack account</Text>
        </List>
      </Para>
      <Button spacing="24px" size="large" align="left">Return to foodstack</Button>
    </Body>
    <Footer />
  </Main>
);



// <Para color="gray" bottom="16px">
//   You’re receiving this email because you’ve requested to
//   reset your foodstack password.
// </Para>
// <Para style={{ fontWeight: '600' }} bottom="16px">
//   Click the link below to reset your password.
// </Para>
// <Button href={`{{ this.resetPasswordLink }}`} spacing="32px">
//   Reset Password
// </Button>
