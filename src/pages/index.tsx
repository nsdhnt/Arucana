import './index.css';
import Header from '../components/Header.tsx';

import rightAllow from '../assets/right-allow.png';
import blockIconAbout from '../assets/block-icon-about.png';
import blockIconArticle from '../assets/block-icon-article.png';
import blockIconData from '../assets/block-icon-data.png';
import blockIconLogout from '../assets/block-icon-logout.png';
import blockIconProduct from '../assets/block-icon-product.png';
import blockIconUsage from '../assets/block-icon-usage.png';
import accountIcon from '../assets/account-icon.png';


function Index() {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div className='about'>
            <div className='block-name'>
              <p>ABOUT</p>
              <img src={rightAllow} alt="右矢印" />
            </div>
            <img className='block-icon' src={blockIconAbout} alt="ABOUT" />
          </div>

          <div className='product'>
            <div className='block-name'>
              <p>制作リスト</p>
              <img src={rightAllow} alt="右矢印" />
            </div>
            <img className='block-icon' src={blockIconProduct} alt="ABOUT" />
          </div>

          <div className='account'>
            <img src={accountIcon} alt="" />
            <p className='account-name'>@hinata_html</p>
            <p className='keep-article-num'>保存数<span>48</span>記事</p>
          </div>

          <div className='usage'>
            <div className='block-name'>
              <p>使い方</p>
              <img src={rightAllow} alt="右矢印" />
            </div>
            <img className='block-icon' src={blockIconUsage} alt="ABOUT" />
          </div>

          <div className='article'>
            <div className='block-name'>
              <p>記事一覧</p>
              <img src={rightAllow} alt="右矢印" />
            </div>
            <img className='block-icon' src={blockIconArticle} alt="ABOUT" />
          </div>

          <div className='data'>
            <div className='block-name'>
              <p>データ</p>
              <img src={rightAllow} alt="右矢印" />
            </div>
            <img className='block-icon' src={blockIconData} alt="ABOUT" />
          </div>

          <div className='zenn'>
            <div className='block-name'>
              <p>Zennへ</p>
              <img src={rightAllow} alt="右矢印" />
            </div>
          </div>

          <div className='qiita'>
            <div className='block-name'>
              <p>Qiitaへ</p>
              <img src={rightAllow} alt="右矢印" />
            </div>
          </div>

          <div className='logout'>
            <div className='block-name'>
              <p>ログアウト</p>
              <img src={rightAllow} alt="右矢印" />
            </div>
            <img className='block-icon' src={blockIconLogout} alt="ABOUT" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Index
