import { Borders, Colors } from '../../styles';

const footerFontSize = '12px';

export default {
  footer: {
    margin: '32px auto',
  },
  content: {
    borderTop: Borders.regular,
    color: Colors.primary,
    paddingTop: '32px',
    width: '100%',
    margin: 'auto',
    fontSize: footerFontSize,
    textAlign: 'center',
  },
  link: {
    fontSize: footerFontSize,
  },
  subfooter: {
    fontSize: footerFontSize,
    paddingTop: '8px',
    textAlign: 'center',
    color: Colors.gray,
    opacity: .5,
  },
}
