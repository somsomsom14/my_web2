import React from 'react';

export default function AppComp08() {
  const movie1 = {
    title: '우리가 말하지 않은 것',
    source: 'img/movie1.jpg',
    actor: '오시마 유코, 와카바 류야, 타케다',
  };

  const movie2 = {
    title: '리미트',
    source: 'img/movie2.jpg',
    actor: '문정희,진서연',
  };

  const movie3 = {
    title: '시맨틱 에러: 더 무비',
    source: 'img/movie3.jpg',
    actor: '박재찬, 박서함,김노진',
  };

  return (
    <div>
      <Movie data={movie1} />
      <Movie data={movie2} />
      <Movie data={movie3} />
    </div>
  );
}

function Movie({ data }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <img src={data.source} style={{ width: 200, borderRadius: '10%' }} />
      <div style={{ color: 'orange' }}>{data.title}</div>
      <div>출연배우 : {data.actor}</div>
    </div>
  );
}
