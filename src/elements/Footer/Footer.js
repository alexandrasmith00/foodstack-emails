import React from 'react';
import Grid from '../Grid/Grid';
import Link from '../Link/Link';
import styles from './styles';

export default () => (
  <Grid style={styles.footer}>
    <Grid.Cell style={styles.content}>
      <Link style={styles.link}>Privacy Policy</Link>
      &nbsp; | &nbsp;
      <Link style={styles.link}>Terms of Service</Link>
    </Grid.Cell>
    <Grid.Cell style={styles.subfooter}>
      © 2019 Natured, Inc. DBA foodstack. All Rights Reserved.
    </Grid.Cell>
  </Grid>
);;
