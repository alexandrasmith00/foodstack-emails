import { Text, Colors } from '../../styles';

export default {
  wrapper: (top = 0, bottom = 0, spacing = null) => ({
    margin: `${spacing || top} auto ${spacing || bottom} auto`,
  }),
  paragraph: (styles = {}, color = 'font', align = 'left') => ({
    margin: 0,
    ...Text.paragraph,
    ...styles,
    color: Colors[color],
    textAlign: align,
  }),
};
