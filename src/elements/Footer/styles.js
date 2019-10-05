import { Borders, Colors, Typography } from '../../styles';

export default {
  footer: {
    margin: '32px auto',
  },
  content: {
    ...Typography.font,
    fontSize: Typography.size.small,
    borderTop: Borders.regular,
    color: Colors.primary,
    paddingTop: '32px',
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
  },
  link: {
    fontSize: Typography.size.small,
  },
  subfooter: {
    ...Typography.font,
    fontSize: Typography.size.small,
    paddingTop: '8px',
    textAlign: 'center',
    color: Colors.gray,
    opacity: .5,
  },
}
