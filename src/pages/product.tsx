import "../pages/product.css";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { createPortal } from 'react-dom';

interface Project {
  id: number;
  name: string;
}

function Product() {
  const [projects, setProjects] = useState<Project[]>(() => {
    const savedProjects = localStorage.getItem("projects");

    if(savedProjects) {
      return JSON.parse(savedProjects);
    }

    return [
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
  });

  useEffect(() => {
    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );
  }, [projects]);

  const [selectedId, setSelectedId] = useState<number>(1)

  function handleProjectClick(id: number){
    console.log(id);
    setSelectedId(id);
  }

  const [menuPos, setMenuPos] = useState({
    top: 0,
    left: 0,
  });

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  // console.log(openMenuId);

  
  const [editingId, setEditingId] = useState<number | null>(null);
  
  const [editText, setEditText] = useState("");
  // console.log(editText);
  

  // 名前を変更する ボタンを押された時
  function changeName(id: number) {
    setEditingId(id);
    if(openMenuId !== null) {
      // メニューを開いたリストを編集対象に指定する
      setEditingId(openMenuId);
      setOpenMenuId(null);
    }

    const project = projects.find(project => project.id === id);

    setEditText(project.name);
  }

  // プロジェクト名を保存
  function saveProjectName() {
    // 編集していた文字が空なら、プロジェクト名を保存せずに編集を終了する
    if(editText.trim() === "") {
      setEditingId(null);
      return;
    }

    // プロジェクト名を保存する
    setProjects(
      projects.map(project => {
        // 編集中のリストだけ名前を変更する
        if(editingId === project.id) {
          return {
            ...project,
            name: editText
          }
        }

        return project;
      })
    );

    setEditingId(null);
  }
  
  // function changeName(){
  //   console.log(openMenuId);
  //   // setEditName("true");
  // }
  // function changeName() {
  //   const project = projects.find(
  //     project => project.id === openMenuId
  //   );

  //   console.log(project?.name);
  //   setProjects(
  //     projects.map(project => {
  //       if(project.id === openMenuId) {
  //         return {
  //           ...project,
  //           name: "aaa"
  //         }
  //       }

  //       return project;
  //     })
  //   );
  // }


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
              <li>新しい制作物</li>
              {projects.map((project) => (
                <li 
                  key={project.id} 
                  onClick={() => handleProjectClick(project.id)}
                  className={selectedId === project.id ? "active" : ""}
                >
                  {editingId === project.id ? (
                    <input
                      autoFocus
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onBlur={saveProjectName}
                      onKeyDown={(e) => {
                        if(e.key === "Enter") {
                          saveProjectName();
                        }
                        else if(e.key === "Escape") {
                          setEditingId(null);
                        }
                      }}
                    />
                  ) : (
                    <span 
                      className="project-name"
                      onDoubleClick={() => changeName(project.id)}
                    >
                      {project.name}
                    </span>
                  )}
                  <button 
                    className="menu-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      // console.log(project.id);

                      const rect = e.currentTarget.getBoundingClientRect();

                      setMenuPos({
                        top: rect.bottom + window.scrollY,
                        left: rect.left + window.scrollX,
                      });

                      setOpenMenuId(
                        openMenuId === project.id ? null : project.id
                      );
                    }}
                  >
                    <span></span>
                  </button>
                </li>
              ))}
            </ul>
            {openMenuId !== null && (
              createPortal(
                <div 
                  className="popup-menu"
                  style={{
                    position: "absolute",
                    top: menuPos.top,
                    left: menuPos.left,
                  }}
                >
                  <button>記事を追加</button>
                  <button onClick={() => changeName(openMenuId)}>名前を変更</button>
                  <button>削除</button>
                </div>,
                document.body
              )
            )}
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