import React from 'react';

export default function AppComp06() {
  return (
    <div>
      <Warn text="hello!!!!" prefix="경고" />
      <Warn text="hello!!!!" prefix="[긴급공지]" />
    </div>
  );
}

function Warn({ text, prefix }) {
  return (
    <div style={{ color: 'red' }}>
      {prefix} : {text}
    </div>
  );
}
