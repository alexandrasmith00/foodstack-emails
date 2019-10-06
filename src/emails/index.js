import ForgotPasswordEmail from './ForgotPasswordEmail/ForgotPasswordEmail';
import NoAssociatedAccountEmail from './NoAssociatedAccountEmail/NoAssociatedAccountEmail';
import CustomerInviteEmail from './CustomerInviteEmail/CustomerInviteEmail';
import AvailabilityEmail from './AvailabilityEmail/AvailabilityEmail';

export default {
  noAssociatedAccount: {
    name: 'Forgot Password - No Account',
    email: NoAssociatedAccountEmail,
  },
  forgotPassword: {
    name: 'Forgot Password',
    email: ForgotPasswordEmail,
  },
  customerInvite: {
    name: 'Customer Invite',
    email: CustomerInviteEmail,
  },
  availabilityEmail: {
    name: 'Availability Email',
    email: AvailabilityEmail,
  },
};
