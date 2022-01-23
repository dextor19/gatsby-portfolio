import React from 'react';

export function LineNumber({ children }) {
  return (
    <span
      style={{
        display: 'table-cell',
        textAlign: 'right',
        paddingRight: '1.5rem',
        userSelect: 'none',
        opacity: '0.5',
      }}
    >
      {children}
    </span>
  );
}

export function Line({ children }) {
  return (
    <div
      style={{
        display: 'table-row',
      }}
    >
      {children}
    </div>
  );
}

export function LineContent({ children }) {
  return (
    <span
      style={{
        display: 'table-cell',
      }}
    >
      {children}
    </span>
  );
}
