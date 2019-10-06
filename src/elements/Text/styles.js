import { Text, Typography, Colors } from '../../styles';

export default {
  text: (style) => ({
    ...Typography.font,
    ...style,
  }),
};
