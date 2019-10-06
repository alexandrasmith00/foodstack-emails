import * as Colors from './colors';
import * as Borders from './borders';
import * as Typography from './typography';

export const weight = '600';

export const universal = {
  fontWeight: '600',
  borderRadius: Borders.radius,
  border: Borders.regular,
};

export const sizing = {
  small: {
    fontSize: Typography.size.small,
    padding: '8px 16px',
  },
  regular: {
    fontSize: Typography.size.regular,
    padding: '12px 32px',
  },
  large: {
    fontSize: Typography.size.large,
    padding: '16px 48px',
  },
};

export const colors = {
  dark: {
    backgroundColor: Colors.font,
    borderColor: Colors.font,
    color: Colors.white,
  },
  primary: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    color: Colors.white,
  },
  highlight: {
    backgroundColor: Colors.highlight,
    borderColor: Colors.highlight,
    color: Colors.white,
  },
  error: {
    backgroundColor: Colors.error,
    borderColor: Colors.error,
    color: Colors.white,
  },
  white: {
    backgroundColor: Colors.white,
    color: Colors.font,
  },
  gray: {
    backgroundColor: Colors.bg,
  },
};
