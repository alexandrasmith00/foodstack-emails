import React from 'react';

export default ({ children }) => (
  <ul className="bulleted-list">
    {children.map((child, index) => <li key={index}>{child}</li>)}
  </ul>
);
