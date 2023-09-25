import React from 'react';

export default function AppComp03() {
  return (
    <div>
      <Star1 />
      <Star2 />
      <Star3 />
      <Star2 />
      <Star1 />
    </div>
  );
}

function Star1() {
  return <div>★</div>;
}

function Star2() {
  return <div>★★</div>;
}

function Star3() {
  return <div>★★★</div>;
}
