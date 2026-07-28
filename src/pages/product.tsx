import "../pages/product.css";
import Header from "../components/Header";
import { useState } from "react";

interface Project {
  id: number;
  name: string;
}

function Product() {
  const projects: Project[] = [
    { id: 1, name: "Todoリスト" },
    { id: 2, name: "ポートフォリオ" },
    { id: 3, name: "カフェサイト" },
    { id: 4, name: "ECサイト" },
    { id: 5, name: "天気予報アプリ" },
    { id: 6, name: "チャットアプリ" },
    { id: 7, name: "家計簿アプリ" },
    { id: 8, name: "タスク管理アプリ" },
    { id: 9, name: "スケジュール管理" },
    { id: 10, name: "レシピ検索サイト" },
    { id: 11, name: "映画レビューサイト" },
    { id: 12, name: "ブログサイト" },
    { id: 13, name: "SNSクローン" },
    { id: 14, name: "旅行予約サイト" },
    { id: 15, name: "音楽プレイヤー" },
    { id: 16, name: "メモアプリ" },
    { id: 17, name: "掲示板サイト" },
    { id: 18, name: "模写コーディング" },
    { id: 19, name: "React学習" },
    { id: 20, name: "JavaScript復習" },
  ];

  const [selectedId, setSelectedId] = useState<number>(1)

  function handleProjectClick(id: number){
    console.log(id);
    setSelectedId(id);
  }


  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  // function openMenu(){
  //   console.log("open");
    
  // }

  return(
    <>
      <Header />
      <main>
        <div className="side-bar">
          <nav className="product-nav">
            <ul>
              {projects.map((project) => (
                <li 
                  key={project.id} 
                  onClick={() => handleProjectClick(project.id)}
                  className={selectedId === project.id ? "active" : ""}
                >
                  <span className="project-name">{project.name}</span>
                  <button 
                    className="menu-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenuId(
                        openMenuId === project.id ? null : project.id
                      );
                    }}
                  >
                    <span></span>
                  </button>
                  {openMenuId === project.id && (
                    <div className="popup-menu">
                      <button>＋ 記事を追加</button>
                      <button>✏ 名前を変更</button>
                      <button>🗑 削除</button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="main-block">
          <div className="article-list">
            <article className='article-content'>
              <a href="#">
                <h1>01</h1>
                <p className='article-title'>【Tailwind CSS入門 Day16】詳細モーダルを作る</p>
                <p className='article-info'>
                  <time>2026/5/26</time>
                  <span>@honda-dev-jp</span>
                  <span>128</span>
                </p>
                <p className='article-tag'>
                  <span>CSS</span>
                </p>
              </a>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}

export default Product