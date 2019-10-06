import ForgotPasswordEmail from './ForgotPasswordEmail/ForgotPasswordEmail';
import NoAssociatedAccountEmail from './NoAssociatedAccountEmail/NoAssociatedAccountEmail';

export default {
  noAssociatedAccount: {
    name: 'Forgot Password - No Account',
    email: NoAssociatedAccountEmail,
  },
  forgotPassword: {
    name: 'Forgot Password',
    email: ForgotPasswordEmail,
  },
};
