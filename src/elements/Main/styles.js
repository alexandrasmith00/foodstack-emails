import { Sizing, Typography } from '../../styles';

export default {
  page: (pageStyles, align) => ({
    textAlign: 'align',
    padding: Sizing.padding,
    paddingTop: '32px',
    ...Typography.font,
    ...pageStyles, // overwrite with any passed styles
  }),
  container: {
    maxWidth: Sizing.max,
    width: '100%',
    margin: 'auto',
  },
};
