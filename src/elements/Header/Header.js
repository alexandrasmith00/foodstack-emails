import React from 'react';
import Grid from '../Grid/Grid';
import Img from '../Img/Img';
import styles from './styles';

// pulls image from sendgrid
const logoSrc = 'https://marketing-image-production.s3.amazonaws.com/uploads/65ad698360ba407391e0bb4cc4357354ac97168381b96f62b6ced6231dd93437b99f9bef1e1e768d651c4fca293e2c896f886fdd91d4f282e47b068275d4d684.png';

function Header() {
  return (
    <Grid style={styles.header} className="header-grid">
      <Grid.Cell className="header-cell">
        <Img style={styles.logo} src={logoSrc} alt="logo" className="header-logo" />
      </Grid.Cell>
    </Grid>
  );
}

export default Header;
