import React from 'react';

export default function AppComp07() {
  return (
    <div >
      <Warn text="hello!!!!" />
      <Warn text="hello!!!!" prefix="[긴급]" col="blue"/>
      <Warn text="hello!!!!" prefix="[new]" size="50px" />
    </div>
  );
}

///Warn.defaultProps = {
  ///prefix: '경고',
  ///size: '20px',
///};

function Warn({ text, prefix = '경고 ', size, col }) {
  return (
    <div style={{ color: col , fontSize: size }}>
      {prefix} : {text}
    </div>
  );
}
