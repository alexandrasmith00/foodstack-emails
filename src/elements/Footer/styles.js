import { Borders, Colors, Typography, Sizing } from '../../styles';

export default {
  footer: {
    margin: `${Sizing.content.below} auto auto auto`,
  },
  content: {
    ...Typography.font,
    fontSize: Typography.size.small,
    borderTop: Borders.regular,
    color: Colors.primary,
    paddingTop: Sizing.content.below,
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
