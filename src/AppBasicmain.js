import React from 'react';

function App() {
  // 이미지 및 링크 데이터
  const imageSrc =
    'https://t1.kakaocdn.net/thumb/R1920x0.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa85d0594017900001.jpg';
  const linkIds = ['Gk8QQdSrxRo', 'Mhx8XVMJvbQ', 'kagoEGKHZvU'];
  const movieTitles = ['최소미', '정하은', '이승민'];
  const imageSrcs = [
    'img2.png',
    'img1.png',
    'https://item.kakaocdn.net/do/d656a50c45c900cf6c99c3831c098df541d1a2caccd0c566eab28b91e2e5d306',
  ];

  return (
    <div className="center">
      <h1 id="title">코드프렌즈</h1>
      <table>
        <tr>
          <td>
            <div id="imageContainer" className="image-container">
              <img
                className="zoom round"
                id="image"
                src={imageSrc}
                width={400}
                height={400}
                alt="이미지"
              />
              <div id="imageDescription" className="description">
                이미지 설명
              </div>
            </div>
          </td>
          <td>
            <table id="grid">
              <tr>
                <td>
                  <a href={`https://www.youtube.com/watch?v=${linkIds[0]}`}>
                    <img
                      className="zoom round"
                      width={60}
                      height={80}
                      src={imageSrcs[0]}
                      alt="영화 이미지"
                    />
                  </a>
                </td>
                <td>
                  <span>{movieTitles[0]}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <a href={`https://www.youtube.com/watch?v=${linkIds[1]}`}>
                    <img
                      className="zoom round"
                      width={60}
                      height={80}
                      src={imageSrcs[1]}
                      alt="영화 이미지"
                    />
                  </a>
                </td>
                <td>
                  <span>{movieTitles[1]}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <a href={`https://www.youtube.com/watch?v=${linkIds[2]}`}>
                    <img
                      className="zoom round"
                      width={60}
                      height={80}
                      src={imageSrcs[2]}
                      alt="영화 이미지"
                    />
                  </a>
                </td>
                <td>
                  <span>{movieTitles[2]}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      Address : 경기도 용인시 기흥구 강남로 40(구갈동) 우(16979), 대표전화 :
      031-280-3114, 031-280-3500, 팩스번호 : 031-280-3173
    </div>
  );
}

export default App;
