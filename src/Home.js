import React from 'react';
import { Link } from 'react-router-dom';
import ExampleEmail from './emails/ExampleEmail/ExampleEmail';
import emails from './emails';

class Home extends React.Component {
  renderLinks = () => (
    Object.keys(emails).map(key => (
      <Link key={key} to={key} style={{ display: 'block', padding: '8px 0' }}>
        {emails[key].name}
      </Link>
    ))
  );

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Emails</h1>
        {this.renderLinks()}

        <ExampleEmail />
      </div>
    );
  }
}

export default Home;

// if (this.state.email) {
//   return this.renderEmail();
// }
//
