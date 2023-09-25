import React from 'react';

export default function AppComp04() {
  return (
    <div>
      <Warn text="hello!!!!" />
    </div>
  );
}

function Warn({ text }) {
  return <div style={{ color: 'red' }}>경고 : {text}</div>;
}
