import React from 'react';

export default function({ children }) {
  return (
    <code style={{ background: '#00000018', padding: '0 0.2rem' }}>
      {children}
    </code>
  );
}
