import React from 'react';

export default function AppComp07() {
  return (
    <div>
      <Warn text="hello!!!!" />
      <Warn text="hello!!!!" prefix="[긴급]" />
      <Warn text="hello!!!!" prefix="[new]" size="50px" />
    </div>
  );
}

Warn.defaultProps = {
  prefix: '경고',
  size: '20px',
};

function Warn({ text, prefix, size }) {
  return (
    <div style={{ color: 'red', fontSize: size }}>
      {prefix} : {text}
    </div>
  );
}
