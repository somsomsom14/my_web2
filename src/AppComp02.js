import React from 'react';

export default function AppComp02() {
  return (
    <div>
      <MyComponent1 />
      <MyComponent2 />
      <MyComponent3 />
    </div>
  );
}

function MyComponent1() {
  return <div>Hello!</div>;
}

const MyComponent2 = () => {
  return <div>Hello!</div>;
};

const MyComponent3 = () => <div>Hello!</div>;
