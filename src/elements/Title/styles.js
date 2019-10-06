import { Text, Colors } from '../../styles';

export default {
  wrapper: (top = 0, bottom = 0) => ({
    margin: `${top} auto ${bottom} auto`,
  }),
  title: (style = {}, color = 'font', align = 'left') => ({
    ...Text.title,
    ...style,
    textAlign: align,
    color: Colors[color],
  }),
};
