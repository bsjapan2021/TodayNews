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
        <div className="container">
          <div className="card">
            <img src="https://via.placeholder.com/300x200" alt="뉴스 이미지" />
            <div className="card-content">
              <h2 className="card-title">뉴스 제목 1</h2>
              <p className="card-description">이것은 뉴스 설명입니다. 더 많은 정보를 여기에 추가할 수 있습니다.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300x200" alt="뉴스 이미지" />
            <div className="card-content">
              <h2 className="card-title">뉴스 제목 2</h2>
              <p className="card-description">이것은 뉴스 설명입니다. 더 많은 정보를 여기에 추가할 수 있습니다.</p>
            </div>
          </div>
          {/* 추가 카드를 여기에 추가하세요 */}
        </div>
      </main>

      <style jsx>{`
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
