import { Colors, Borders, Typography } from '../../styles';

export default {
  wrapper: {
    margin: '32px auto',
  },
  buttonContainer: {
    borderRadius: Borders.radius,
  },
  button: {
    fontFamily: Typography.fontFamily,
    borderRadius: Borders.radius,
    backgroundColor: Colors.font,
    color: Colors.white,
    padding: '16px 48px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};
