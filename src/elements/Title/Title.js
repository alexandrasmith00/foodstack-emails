import React from 'react';
import Grid from '../Grid/Grid';
import styles from './styles';


/**
 * <Title /> component
 *   parameters:
 *   - children (required)
 *   - color (can be primary, highlight, error, font, gray, bg or white)
 *   - top: spacing on top (i.e. '8px')
 *   - bottom: spacing on bottom (i.e. '16px')
 */
export default ({ children, color, align, top, bottom, spacing, size, style = {} }) => (
  <Grid style={styles.wrapper(top, bottom, spacing)}>
    <h1 style={styles.title(style, color, align, size)} className="title-heading">
      {children}
    </h1>
  </Grid>
);
