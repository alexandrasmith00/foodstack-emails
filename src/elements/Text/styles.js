import { Typography, Colors } from '../../styles';

export default {
  text: (style, color = 'font') => ({
    ...Typography.font,
    ...style,
    color: Colors[color],
  }),
};
