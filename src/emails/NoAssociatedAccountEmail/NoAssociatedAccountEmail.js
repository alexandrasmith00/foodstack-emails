import React from 'react';
import { Main, Header, Title, Para, Body, Footer, Button } from '../../elements';

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
        <ul>
          <li>Make sure you have a foodstack account.</li>
          <li>Create a foodstack account.</li>
        </ul>
      </Para>
    </Body>
    <Footer />
  </Main>
);
