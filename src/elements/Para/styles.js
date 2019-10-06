import { Text, Colors } from '../../styles';

export default {
  wrapper: (top = 0, bottom = 0, spacing = null) => ({
    margin: `${spacing || top} auto ${spacing || bottom} auto`,
  }),
  paragraph: (styles = {}, color = 'font', align = 'left') => ({
    ...Text.paragraph,
    ...styles,
    color: Colors[color],
    textAlign: align,
  }),
};
