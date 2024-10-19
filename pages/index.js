import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>카드 뉴스</title>
        <meta name="description" content="카드 뉴스 웹앱" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* 히어로 섹션 */}
        <div className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">오늘의 뉴스</h1>
            <p className="hero-subtitle">최신 뉴스를 한눈에 확인하세요</p>
          </div>
        </div>

        {/* 카드 섹션 */}
        <div className="container">
          {Array.from({ length: 9 }, (_, index) => (
            <div className="card" key={index}>
              <img src="https://via.placeholder.com/300x200" alt={`뉴스 이미지 ${index + 1}`} />
              <div className="card-content">
                <h2 className="card-title">뉴스 제목 {index + 1}</h2>
                <p className="card-description">이것은 뉴스 설명입니다. 더 많은 정보를 여기에 추가할 수 있습니다.</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        .hero {
          background-image: url('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1');
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          flex-direction: column;
        }
        .hero-title {
          font-size: 3em;
          margin: 0;
        }
        .hero-subtitle {
          font-size: 1.5em;
          margin: 10px 0 20px;
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 20px;
        }
        .card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin: 10px;
          width: 300px;
          overflow: hidden;
          transition: transform 0.2s;
        }
        .card:hover {
          transform: scale(1.05);
        }
        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-content {
          padding: 15px;
        }
        .card-title {
          font-size: 1.5em;
          margin: 0 0 10px;
        }
        .card-description {
          font-size: 1em;
          color: #555;
        }
      `}</style>
    </div>
  );
}
