import React from 'react';
import { Main, Header, Title, Para, List, Body, Footer, Text } from '../../elements';

export default () => (
  <Main>
    <Header />
    <Body>
      <Title>Your Password Reset Request</Title>
      <Para color="gray">
        There is no foodstack account associated with this e-mail. If you did
        not request to reset your password, you can ignore this e-mail.
      </Para>
      <Para fontStyles={{ fontWeight: '600' }}>
        To fix this, try one of the following:
        <List>
          <Text style={{ fontWeight: 600 }}>Make sure you have an existing account</Text>
          <Text style={{ fontWeight: 600 }}>Create a foodstack account</Text>
        </List>
      </Para>
    </Body>
    <Footer />
  </Main>
);
