import './index.css';
import Header from '../components/Header.tsx';
import { Link } from 'react-router-dom';
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
        <div className='book-shelf'>
          <div className='shelf-content-left'>
            <div className="shelf-saved-article">
              <h2>保存した記事を探す</h2>
              <Link to="/search" className="shelf-content">
                <a href="">検索で探す</a>
              </Link>
              <Link to="/project" className="shelf-content">
                <a href="">プロジェクトから探す</a>
              </Link>
              <div className="shelf-content">
                <a href="">メモから探す</a>
              </div>
              <div className="shelf-content">
                <a href="">履歴から探す</a>
              </div>
            </div>
            <div className="shelf-new-article">
              <h2>新しい記事を探す</h2>
              <div className="shelf-content">
                <a href=""></a>
              </div>
              <div className="shelf-content">
                <a href=""></a>
              </div>
            </div>
          </div>
          <div className='shelf-content-right'>
            <div className="shelf-add-article">
              <h2>最近追加した記事</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Index
