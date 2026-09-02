import "../pages/project.css";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { createPortal } from 'react-dom';

import logo from "../assets/logo.png";
import sidebarIcon from "../assets/sidebar-icon.png";

interface Article {
  id: string;
  title: string;
  url: string;
  created_at: string;
  likes_count: number;
  user: {
    id: string;
  };
  tags: {
    name: string;
  }[];
}

interface Projects {
  id: number;
  name: string;
  articles: Article[];
}

interface ProjectProps {
  projects: Projects[];
  setProjects: React.Dispatch<React.SetStateAction<Projects[]>>;
}

function Project({projects, setProjects}: ProjectProps) {
  // サイドバー折りたたみ
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);


  useEffect(() => {
    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );
  }, [projects]);
  console.log(projects);
  

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

    // TypeScriptエラー回避のため存在確認を追加
    if (project) {
      setEditText(project.name);
    }
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
  

  const selectedProject = projects.find(
    project => project.id === selectedId
  );
  console.log(selectedProject);


  return(
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
      <main onClick={() => setOpenMenuId(null)}>
        <div className={
          `side-bar 
          ${isSidebarOpen ? "" : "close"} 
          ${isMobileSidebarOpen ? "open" : ""}`
        }>
          <div className='project-bar-top'>
            <img className='logo' src={logo} alt="ロゴ" />
            <div 
              className='sidebar-btn' 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <img src={sidebarIcon} alt="折りたたみボタン" />
            </div>
          </div>

          <nav className="product-nav">
            <ul>
              {/* <li>新しい制作物</li> */}
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

        {isMobileSidebarOpen && (
          <div 
            className="sidebar-overlay"
            onClick={() => setIsMobileSidebarOpen(false)}
          ></div>
        )}

        <div className="main-block">
          <div className="article-list">
            {/* selectedProject?.articles に変更して undefined エラーを回避 */}
            {selectedProject?.articles.map((article, index) => {
              return (
                <article className='article-content' key={article.id}>
                  <a href={article.url} target='_blank' rel="noopener noreferrer">
                    <h1>{String(index + 1).padStart(2, '0')}</h1>
                    <p className='article-title'>{article.title}</p>
                    <p className='article-info'>
                      <time>{article.created_at}</time>
                      <span>@{article.user.id}</span>
                      <span>{article.likes_count}いいね</span>
                    </p>
                    <p className='article-tag'>
                      {article.tags.map((tag) => (
                        <span key={tag.name}>{tag.name}</span>
                      ))}
                    </p>
                  </a>
                </article>
              )
            })}
            {/* <article className='article-content'>
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
            </article> */}
          </div>
        </div>
      </main>
    </>
  )
}

export default Project