import React from 'react';

export default function AppComp01() {
  return (
    <div>
      <div>Hello React Native Programming</div>
      <MyComponent />
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  return <div>Hello!</div>;
}
