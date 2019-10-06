import React from 'react';
import { Main, Header, Title, Para, Body, Footer, Button, Text } from '../../elements';

export default () => (
  <Main>
    <Header />
    <Body>
      <Title>Colors</Title>
      <Para>
        <Text color="font">font (default) &nbsp;</Text>
        <Text color="primary">primary &nbsp;</Text>
        <Text color="error">error &nbsp;</Text>
        <Text color="highlight">highlight &nbsp;</Text>
        <Text color="gray">gray &nbsp;</Text>
      </Para>

      <Title top="36px">Headers</Title>
      <Title top="24px">Header #1 (default)</Title>
      <Title top="24px" size="3">Header #3</Title>

      <Para color="gray">
        Paragraphs can come in gray or regular font colors.  They can be
        nudged right up against the header up there.
      </Para>
      <Para style={{ fontWeight: '600' }} spacing="24px">
        You can pass in custom styles for the font. Notice how this
        paragraph has spacing around it.
      </Para>
      <Title align="center" bottom="16px">
        Need something in the middle?
      </Title>
      <Button spacing="8px" size="small">Small Buttons</Button>
      <Button spacing="16px">Regular Buttons</Button>
      <Button spacing="24px" size="large">Large Buttons</Button>

      <Button spacing="24px" size="large" align="right">To the right</Button>
      <Button spacing="24px" size="large" align="right">To the right</Button>

    </Body>
    <Footer />
  </Main>
);
