import './Header.css';
import { NavLink } from 'react-router-dom';
import navIconHome from '../assets/nav-icon-home.png';
import navIconSearch from '../assets/nav-icon-search.png';
import navIconProject from '../assets/nav-icon-project.png';
import navIconMemo from '../assets/nav-icon-memo.png';
import navIconHistory from '../assets/nav-icon-history.png';
// import { useState } from 'react';

// propsの受け取り
interface HeaderProps {
  // isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ setIsMobileSidebarOpen }: HeaderProps){
  // const url = location.pathname;

  return(
    <>
      <header>
        <div 
          className='mobile-sidebar-btn'
          onClick={() => setIsMobileSidebarOpen(prev => !prev)}
        >
          <span></span>
        </div>
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
            <img src={navIconSearch} alt="検索" />
            <p>検索</p>
          </NavLink>
          <NavLink 
            to="/product" 
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            <img src={navIconProject} alt="プロジェクト" />
            <p>プロジェクト</p>
          </NavLink>
          <NavLink 
            to="/memo" 
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <img src={navIconMemo} alt="メモ" />
            <p>メモ</p>
          </NavLink>
          <NavLink 
            to="/history" 
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <img src={navIconHistory} alt="履歴" />
            <p>履歴</p>
          </NavLink>
        </nav>
      </header>
    </>
  )
}

export default Header;