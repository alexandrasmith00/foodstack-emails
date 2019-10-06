import { Borders, Colors, Typography, Sizing } from '../../styles';

export default {
  footer: (top = null) => ({
    margin: `${top || Sizing.content.below} auto auto auto`,
  }),
  content: (border = true) => ({
    ...Typography.font,
    fontSize: Typography.size.small,
    borderTop: border ? Borders.regular : 'none',
    color: Colors.primary,
    paddingTop: Sizing.content.below,
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
  }),
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
