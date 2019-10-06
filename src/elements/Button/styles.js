import { Typography, Buttons } from '../../styles';

export default {
  wrapper: (top = 0, bottom = 0, spacing = null) => ({
    margin: `${spacing || top} auto ${spacing || bottom} auto`,
  }),
  button: (color = 'dark', size = 'regular', align = 'left') => ({
    display: 'block',
    width: 'fit-content',
    ...Typography.font,
    ...Buttons.universal,
    ...Buttons.colors[color],
    ...Buttons.sizing[size],
    textAlign: align,
    cursor: 'pointer',
    textDecoration: 'none',
    marginLeft: align === 'left' ? 0 : 'auto',
    marginRight: align === 'right' ? 0 : 'auto',
  }),
};
