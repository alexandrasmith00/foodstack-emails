import React from 'react';

export default ({ children, ordered = false }) => {
  const items = children.map((child, index) => <li key={index}>{child}</li>);
  if (ordered) { return <ol className="list">{items}</ol>; }
  return <ul className="list">{items}</ul>;
};
