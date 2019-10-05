import { Text, Colors } from '../../styles';

export default {
  paragraph: (styles, color) => ({
    ...Text.paragraph,
    ...styles,
    color: Colors[color],
    margin: '8px auto',
  }),
};
