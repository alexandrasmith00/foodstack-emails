import React from 'react';
import Grid from '../Grid/Grid';
import styles from './styles';

// given page styles and container styles
// page styles get applied to the entire email
// container styles are applied to the inner width
export default (props) => {
  // sets defaults for props
  const {
    pageStyles = {},
    containerStyles = {},
    align = 'center',
    children,
  } = props;

  return (
    <center style={styles.page(pageStyles, align)} className="email-page">
      <Grid style={{ ...styles.container, ...containerStyles }}>
        {children}
      </Grid>
    </center>
  )
};
