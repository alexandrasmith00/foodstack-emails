import * as Colors from './colors';
import * as Typography from './typography';

export const title = {
  margin: 0,
  fontFamily: Typography.fontFamily,
  color: Colors.font,
  fontSize: Typography.size.header1,
  fontWeight: 'bold'
};

export const paragraph = {
  ...Typography.font,
  margin: 0,
  color: Colors.gray,
}
