import React from 'react';

export default function({ children }) {
  return (
    <p style={{ lineHeight: '1.7', maxWidth: '750px', margin: '30px auto' }}>
      {children}
    </p>
  );
}
