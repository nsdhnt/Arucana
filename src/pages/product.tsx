import "../pages/product.css";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { createPortal } from 'react-dom';

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

interface Project {
  id: number;
  name: string;
  articles: Article[];
}

function Product() {
  const [projects, setProjects] = useState<Project[]>(() => {
    
    const savedProjects = localStorage.getItem("projects");
    
    if(savedProjects) {
      return JSON.parse(savedProjects);
    }
    
    return [
      {
        id: 1, 
        name: "Todoリスト", 
        articles: [
          {
            id: "article-001",
            title: "Reactの基本を学ぶ",
            url: "https://example.com",
            created_at: "2026-08-18",
            likes_count: 10,
            user: {
              id: "test-user"
            },
            tags: [
              {
                name: "React"
              }
            ]
          }, 
          {
            id: "article-001",
            title: "Reactの基本を学ぶ",
            url: "https://example.com",
            created_at: "2026-08-18",
            likes_count: 10,
            user: {
              id: "test-user"
            },
            tags: [
              {
                name: "React"
              }
            ]
          }, 
        ]
      },
      {
        id: 2, 
        name: "ポートフォリオ", 
        articles: []
      },
      {
        id: 3, 
        name: "カフェサイト", 
        articles: []
      },
      {
        id: 4, 
        name: "ECサイト", 
        articles: []
      },
      {
        id: 5, 
        name: "天気予報アプリ",
        articles: []
      },
      {
        id: 6, 
        name: "チャットアプリ",
        articles: []
      },
      { 
        id: 7, 
        name: "家計簿アプリ",
        articles: []
      },
      { 
        id: 8, 
        name: "タスク管理アプリ", 
        articles: []
      },
      { 
        id: 9, 
        name: "スケジュール管理", 
        articles: []
      },
      { 
        id: 10, 
        name: "レシピ検索サイト", 
        articles: []
      },
      { 
        id: 11, 
        name: "映画レビューサイト", 
        articles: []
      },
      { 
        id: 12, 
        name: "ブログサイト", 
        articles: []
      },
      { 
        id: 13, 
        name: "SNSクローン", 
        articles: []
      },
      { 
        id: 14, 
        name: "旅行予約サイト", 
        articles: []
      },
      { 
        id: 15, 
        name: "音楽プレイヤー", 
        articles: []
      },
      { 
        id: 16, 
        name: "メモアプリ", 
        articles: []
      },
      { 
        id: 17, 
        name: "掲示板サイト", 
        articles: []
      },
      { 
        id: 18, 
        name: "模写コーディング", 
        articles: []
      },
      { 
        id: 19, 
        name: "React学習", 
        articles: []
      },
      { 
        id: 20, 
        name: "JavaScript復習", 
        articles: []
      },
    ];
  });

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

  const selectedProject = projects.find(
    project => project.id === selectedId
  );
  console.log(selectedProject);


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
            {selectedProject.articles.map((article, index) => {
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

export default Product