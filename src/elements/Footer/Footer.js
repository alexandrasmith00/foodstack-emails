import React from 'react';
import Grid from '../Grid/Grid';
import Link from '../Link/Link';
import styles from './styles';

export default ({ top, border, unsubscribe = false }) => (
  <Grid style={styles.footer(top)}>
    <Grid.Cell style={styles.content(border)}>
      <Link style={styles.link}>Privacy Policy</Link>
      &nbsp; | &nbsp;
      <Link style={styles.link}>Terms of Service</Link>
    </Grid.Cell>
    <Grid.Cell style={styles.subfooter}>
      © 2019 Natured, Inc. DBA foodstack. All Rights Reserved.
    </Grid.Cell>
    {unsubscribe ? (
      <Grid.Cell style={styles.subfooter}>
        {`<%asm_group_unsubscribe_url%>`}
      </Grid.Cell>
    ) : null}
  </Grid>
);;
