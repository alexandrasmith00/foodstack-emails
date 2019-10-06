import { Text, Colors, Typography } from '../../styles';

export default {
  wrapper: (top = 0, bottom = 0, spacing = null) => ({
    margin: `${spacing || top} auto ${spacing || bottom} auto`,
  }),
  title: (style = {}, color = 'font', align = 'left', size = '1') => ({
    ...Text.title,
    ...style,
    textAlign: align,
    color: Colors[color],
    fontSize: Typography.size[`header${size}`],
  }),
};
