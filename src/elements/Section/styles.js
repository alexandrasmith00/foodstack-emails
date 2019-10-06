import { Colors, Sizing } from '../../styles';

export default {
  section: (style = {}, bg = 'white') => ({
    ...style,
    backgroundColor: Colors[bg],
  }),
  cell: (padding = Sizing.padding) => ({
    padding,
  })
};
