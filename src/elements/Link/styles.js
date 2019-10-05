import { Colors, Typography } from '../../styles';

export default {
  a: (color, style) => ({
    fontFamily: Typography.fontFamily,
    color: Colors[color],
    cursor: 'pointer',
    ...style,
  }),
};
