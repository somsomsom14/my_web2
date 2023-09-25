import React from 'react';

export default function AppComp05() {
  return (
    <div>
      <Star num="1" />
      <Star num="3" />
      <Star num="5" />
      <Star num="3" />
      <Star num="1" />
    </div>
  );
}

function Star({ num }) {
  let star = '';
  for (let i = 0; i < num; i++) star += '★';
  return <div>{star}</div>;
}
