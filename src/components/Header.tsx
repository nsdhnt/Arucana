import './Header.css';
import { Link } from 'react-router-dom';
import navIconHome from '../assets/nav-icon-home.png';
import navIconArticle from '../assets/nav-icon-article.png';
import navIconData from '../assets/nav-icon-data.png';
import navIconProduct from '../assets/nav-icon-product.png';

function Header(){
  return(
    <>
      <header>
        <nav>
          <Link to="/" className='nav-link'>
            <img src={navIconHome} alt="ホーム" />
            <p>ホーム</p>
          </Link>
          <Link to="/article" className='nav-link'>
            <img src={navIconArticle} alt="記事一覧" />
            <p>記事一覧</p>
          </Link>
          <Link to="/data" className='nav-link'>
            <img src={navIconData} alt="データ" />
            <p>データ</p>
          </Link>
          <Link to="/product" className='nav-link'>
            <img src={navIconProduct} alt="制作リスト" />
            <p>制作リスト</p>
          </Link>
        </nav>
      </header>
    </>
  )
}

export default Header;