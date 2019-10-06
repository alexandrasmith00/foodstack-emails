import { Borders, Colors, Sizing } from '../../styles';

export default {
  section: (style = {}, bg = 'white', top = 0, bottom = 0, spacing = null) => ({
    ...style,
    margin: `${spacing || top } auto ${spacing || bottom} auto`,
    backgroundColor: Colors[bg],
    borderRadius: Borders.radius,
  }),
  cell: (padding = Sizing.padding) => ({
    padding,
  })
};
