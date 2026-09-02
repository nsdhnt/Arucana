import './index.css';
import Header from '../components/Header.tsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import linkIconSearch from '../assets/link-icon-search.png';
import linkIconProject from '../assets/link-icon-project.png';
import linkIconMemo from '../assets/link-icon-memo.png';
import linkIconHistory from '../assets/link-icon-history.png';
import linkQiita from '../assets/link-qiita.png';
import linkZenn from '../assets/link-zenn.png';

import books from '../assets/books.png';

// import rightAllow from '../assets/right-allow.png';
// import blockIconAbout from '../assets/block-icon-about.png';
// import blockIconArticle from '../assets/block-icon-article.png';
// import blockIconData from '../assets/block-icon-data.png';
// import blockIconLogout from '../assets/block-icon-logout.png';
// import blockIconProduct from '../assets/block-icon-product.png';
// import blockIconUsage from '../assets/block-icon-usage.png';
// import accountIcon from '../assets/account-icon.png';


function Index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  console.log(isSidebarOpen);
  console.log(isMobileSidebarOpen);

  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
      <main>
        <div className='book-shelf'>
          <div className='shelf-content-left'>
            <div className="shelf-saved-article">
              <h2>保存した記事を探す</h2>
              <div className='shelf-wrap'>
                <div className='shelf-content'>
                  <Link to="/search" className="page-link">
                    <img src={linkIconSearch} alt="検索ページリンク" />
                    <p>検索で探す</p>
                  </Link>
                </div>
                <div className='shelf-content'>
                  <Link to="/project" className="page-link">
                    <img src={linkIconProject} alt="プロジェクトページリンク" />
                    <p>プロジェクトから探す</p>
                  </Link>
                </div>
                <div className='shelf-content'>
                  <Link to="/memo" className="page-link">
                    <img src={linkIconMemo} alt="メモページリンク" />
                    <p>メモから探す</p>
                  </Link>
                </div>
                <div className='shelf-content'>
                  <Link to="/history" className="page-link">
                    <img src={linkIconHistory} alt="履歴ページリンク" />
                    <p>履歴から探す</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="shelf-new-article">
              <h2>新しい記事を探す</h2>
              <div className='shelf-wrap'>
                <div className="shelf-content">
                  <a href="https://qiita.com/" target='_blank'>
                    <img src={linkQiita} alt="Qiita" />
                  </a>
                </div>
                <div className="shelf-content">
                  <a href="https://zenn.dev/" target='_blank'>
                    <img src={linkZenn} alt="Zenn" />
                  </a>
                </div>
              </div>
            </div>
            <div className="books">
              <img  src={books} alt="" />
              <img src={books} alt="" />
              <img src={books} alt="" />
            </div>
          </div>
          <div className='shelf-content-right'>
            <div className="shelf-pinned-article">
              <h2>ピン留めしたプロジェクト</h2>
              <div className='pinned-list'>
                <div className='pinned-project'>
                  <div className='project-content'>
                    <h3>Todoリスト</h3>
                    <p>関連記事 <span>12</span> 件</p>
                  </div>
                </div>
                <div className='pinned-project'>
                  <div className='project-content'>
                    <h3>天気予報アプリ</h3>
                    <p>関連記事 <span>6</span> 件</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Index
