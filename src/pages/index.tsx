import './index.css';
import Header from '../components/Header.tsx';
// import { Link } from 'react-router-dom';
import { useState } from 'react';

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
        <div className="bookshelf">

          <div className="bookshelf-left">

            <h2>保存した記事を探す</h2>

            <div className="shelf">
              <div className="shelf-item">
                <p>検索で探す</p>
              </div>

              <div className="shelf-item">
                <p>プロジェクトから探す</p>
              </div>

              <div className="shelf-item">
                <p>メモから探す</p>
              </div>

              <div className="shelf-item">
                <p>履歴から探す</p>
              </div>
            </div>


            <h2>新しい記事を探す</h2>

            <div className="shelf">
              <div className="shelf-item">
                <p>Qiita</p>
              </div>

              <div className="shelf-item">
                <p>Zenn</p>
              </div>
            </div>

          </div>


          <div className="recent-articles">
            <h2>最近追加した記事</h2>

            <div className="article">
              01　【Tailwind CSS入門 Day16】詳細モーダルを作る
            </div>

            <div className="article">
              02　【Tailwind CSS入門 Day16】詳細モーダルを作る
            </div>

            <div className="article">
              03　【Tailwind CSS入門 Day16】詳細モーダルを作る
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default Index
