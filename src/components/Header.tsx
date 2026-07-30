import './Header.css';
import { NavLink } from 'react-router-dom';
import navIconHome from '../assets/nav-icon-home.png';
import navIconArticle from '../assets/nav-icon-article.png';
import navIconData from '../assets/nav-icon-data.png';
import navIconProduct from '../assets/nav-icon-product.png';

function Header(){
  // const url = location.pathname;
  return(
    <>
      <header>
        <nav>
          <NavLink 
            to="/" 
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            <img src={navIconHome} alt="ホーム" />
            <p>ホーム</p>
          </NavLink>
          <NavLink 
            to="/article" 
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            <img src={navIconArticle} alt="記事一覧" />
            <p>記事一覧</p>
          </NavLink>
          <NavLink 
            to="/data" 
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            <img src={navIconData} alt="データ" />
            <p>データ</p>
          </NavLink>
          <NavLink 
            to="/product" 
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <img src={navIconProduct} alt="制作リスト" />
            <p>制作リスト</p>
          </NavLink>
        </nav>
      </header>
    </>
  )
}

export default Header;