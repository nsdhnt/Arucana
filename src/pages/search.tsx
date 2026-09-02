
import type { QiitaArticle } from '../types/Qiita';

import React, { useState } from 'react';
import './search.css';
import Header from "../components/Header";
import logo from "../assets/logo.png";
import sidebarIcon from "../assets/sidebar-icon.png";
import sideDateArrow from "../assets/side-date-arrow.png";
import btnBookmark from "../assets/btn-bookmark.png";
import btnMemo from "../assets/btn-memo.png";
// import Project from './project';

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

interface Memos {
  // id: number;
  title: string;
  text: string;
  date: string;
}


// Article.tsx の上部でPropsの型を定義
interface ArticleProps {
  articles: QiitaArticle[];
  loading: boolean;
  projects: Projects[];
  setProjects: React.Dispatch<React.SetStateAction<Projects[]>>;
  memos: Memos[];
  setMemos: React.Dispatch<React.SetStateAction<Memos[]>>;
}


function Article({ articles, loading, projects, setProjects, memos, setMemos }: ArticleProps) {
  // 保存先リスト
  const [isSavingList, setIsSavingList] = useState<boolean>(false);

  // メモ記入欄
  const [isMemoArea, setIsMemoArea] = useState<boolean>(false);

  // メモ内容
  const [memoText, setMemoText] = useState<string>("");

  // 今操作中の記事
  const [selectedArticle, setSelectedArticle] = useState<QiitaArticle | null>(null);

  // サイドバー折りたたみ
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // キーワード検索
  const [keyword, setKeyword] = useState<string>("");

  function handleKeyword(e: React.ChangeEvent<HTMLInputElement>){
    setKeyword(e.target.value);
  }

  // タグ検索
  const [selectedTag, setSelectedTag] = useState<string>("");

  // console.log(articles);
  // console.log(loading);

  // タグの種類の重複防止
  const allTags = Array.from(
    new Set(
      articles.flatMap(article => article.tags.map(tag => tag.name))
    )
  );

  function tagFilter(tagName: string){
    // console.log(tagName);

    // selectedTagの値を更新
    if(selectedTag === tagName){
      setSelectedTag("");
    }
    else{
      setSelectedTag(tagName);
    }
    // setSelectedTag([...selectedTag, tagName]);
  }

  // 日付検索
  // const today = new Date().toLocaleDateString("sv-SE");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  function handleFromDate(e: React.ChangeEvent<HTMLInputElement>){
    setFromDate(e.target.value);
    // console.log(from);
  }
  
  function handleToDate(e: React.ChangeEvent<HTMLInputElement>){
    setToDate(e.target.value);
  }
  
  // articles.forEach((article) => {
    //   console.log(new Date(article.created_at));
    
    // });
    

    function resetFilter() {
      setKeyword("");
      setSelectedTag("");
      setFromDate("");
      setToDate("");
    }
  
  // 配列を絞り込む関数
  const filteredArticles = 
    articles.filter(article => {
      // return article.title.includes(keyword);
      const articleDate = new Date(article.created_at);
      const from = new Date(fromDate);
      const to = new Date(toDate);

      // キーワードの条件
      const keywordMatch = article.title.includes(keyword);

      // タグの条件
      const tagMatch = 
        selectedTag === "" ||
        article.tags.some(tag => tag.name === selectedTag);

      // 開始日の条件
      const fromMatch = 
        fromDate === "" ||
        articleDate >= from;
      // 終了日の条件
      const toMatch = 
        toDate === "" ||
        articleDate <= to;

      return (
        keywordMatch &&
        tagMatch &&
        fromMatch &&
        toMatch
      );

    });

    const bookmarkButtonClick = (
      e: React.MouseEvent<HTMLImageElement>,
      // article: QiitaArticle
    ) => {
      e.preventDefault();
      // console.log(article);
      setIsSavingList(true);
    }

    // const judgeSaving = (
    //   article: QiitaArticle
    // ) => {
    //   console.log(article);
    // }

    const saveArticle = (projectId: number) => {
      console.log(selectedArticle);
      if(selectedArticle === null) return;

      const articleToSave: QiitaArticle = selectedArticle;

      setProjects(
        projects.map(project => {
          if(projectId === project.id) {
            // すでに保存されているかチェック
            const alreadySaved = project.articles.some(
              article => article.id === articleToSave.id
            );

            if(alreadySaved) {
              return project;
            }

            return {
              ...project,
              articles: [
                ...project.articles,
                articleToSave
              ]
            };
          }
  
          return project;
        })
      );
    }

    const memoButtonClick = (
      e: React.MouseEvent<HTMLImageElement>,
      article: QiitaArticle
    ) => {
      e.preventDefault();
      console.log(article);
      setIsMemoArea(true);
    }

    const saveMemo = (
      e: React.MouseEvent<HTMLElement>
    ) => {

      const articleToSave: QiitaArticle = selectedArticle;

      console.log(e);
      console.log(articleToSave.title);
      console.log(memoText);
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      console.log(`${year}/${month}/${day}`);
      setMemoText("");

      // メモの保存
      if(memoText) {
        const newMemo = {
          title: articleToSave.title,
          text: memoText,
          date: `${year}/${month}/${day}`
        }
        setMemos([
          ...memos,
          newMemo
        ]);
      }
    }
  

  return(
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
      <main>
        <div className={
          `side-bar 
          ${isSidebarOpen ? "" : "close"}
          ${isMobileSidebarOpen ? "open" : ""}`
        }>
          <div className='filter-wrap'>
            <div className='bar-top'>
              <img className='logo' src={logo} alt="ロゴ" />
              <div 
                className='sidebar-btn' 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <img src={sidebarIcon} alt="折りたたみボタン" />
              </div>
            </div>
            <input type="search" name="" id="" placeholder='キーワードで検索する'
              value={keyword}
              onChange={handleKeyword}
            />
            <section className='tag'>
              <h1>タグ</h1>
              <div className='tag-wrap'>
                {allTags.map(tagName => {
                  const isActive = tagName === selectedTag;
                  return(
                    <p 
                      key={tagName} 
                      onClick={() => tagFilter(tagName)}
                      className={isActive ? 'active' : ''}
                    >
                      {tagName}
                    </p>
                  );
                })}
              </div>
              {/* <p className='more-display'>さらに表示</p> */}
            </section>
            <section className='date'>
              <h1>日付</h1>
              <div className='select-dates froms'>
                <input 
                  className='select-date' 
                  value={fromDate} type="date" name="" id=""
                  onChange={handleFromDate}
                  />
              </div>
              <img className='side-date-arrow' src={sideDateArrow} alt="" />
              <div className='select-dates tos'>
                <input 
                  className='select-date' 
                  value={toDate} type="date" name="" id=""
                  onChange={handleToDate}
                  />
              </div>
            </section>
            <section className='display-order'>
              <h1>表示順</h1>
              <div className='select-order'>
                <select name="" id="">
                  <option value="">最新ブックマーク順</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </section>
          </div>
          <div className={`button-wrap ${isSidebarOpen ? "" : "close"}`}>
            <button type="button" onClick={() => resetFilter()}>条件をクリア</button>
            <button type="button">{filteredArticles.length}件を表示中</button>
          </div>
        </div>

        {isMobileSidebarOpen && (
          <div 
            className="sidebar-overlay"
            onClick={() => setIsMobileSidebarOpen(false)}
          ></div>
        )}

        {isSavingList && (
          <div className="sidebar-overlay">
            <div className='saving-list-card'>
              <h1>保存先を選ぶ</h1>
              <ul className='saving-list'>
                {projects.map((project) => (
                  <li key={project.id}>
                    {project.name}
                    <img 
                      src={btnBookmark} alt="ブックマークボタン"
                      onClick={() => saveArticle(project.id)}
                    />
                  </li>
                ))}
              </ul>
              <div className='save-btn'>
                <button onClick={() => setIsSavingList(false)}>完了</button>
              </div>
            </div>
          </div>
        )}

        {isMemoArea && selectedArticle && (
          <div className="sidebar-overlay">
            <div className="memo-card">
              <h1>記事にメモを残す</h1>
              <div className='memo-area'>
                <h2>{selectedArticle.title}</h2>
                <textarea 
                  name="" id="" value={memoText}
                  onChange={(e) => setMemoText(e.target.value)}
                ></textarea>
              </div>
              <div className="save-btn">
                <button 
                  onClick={(e) => {
                    setIsMemoArea(false);
                    saveMemo(e);
                  }}
                >保存
                </button>
              </div>
            </div>
          </div>
        )}

        <div className='main-block'>
          <div className='article-list'>
            {loading ? (
              <p>読み込み中...</p>
            ) : filteredArticles.length === 0 ? (
              <p>記事が見つかりませんでした。</p>
            ) : (
              filteredArticles.map((article, index) => {
                const date = new Date(article.created_at).toLocaleString('ja-JP');
                // console.log(article.tags);

                return (
                  <article className='article-content' key={article.id}>
                    <a href={article.url} target='_blank' rel="noopener noreferrer">
                      <h1>{String(index + 1).padStart(2, '0')}</h1>
                      <p className='article-title'>{article.title}</p>
                      <p className='article-info'>
                        <time>{date}</time>
                        <span>@{article.user.id}</span>
                        <span>{article.likes_count}いいね</span>
                        <img 
                          className='btn-bookmark' 
                          src={btnBookmark} 
                          alt="ブックマークボタン" 
                          onClick={(e) => {
                            bookmarkButtonClick(e);
                            setSelectedArticle(article);
                          }}
                        />
                        <img 
                          className='btn-memo' 
                          src={btnMemo} 
                          alt="メモボタン" 
                          onClick={(e) => {
                            memoButtonClick(e, article);
                            setSelectedArticle(article);
                          }}
                        />
                      </p>
                      <p className='article-tag'>
                        {article.tags.map((tag) => (
                          <span key={tag.name}>{tag.name}</span>
                        ))}
                      </p>
                    </a>
                  </article>
                )
              })
            )}
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
                  <span></span>
                </p>
              </a>
            </article>
            <article className='article-content'>
              <a href="#">
                <h1>02</h1>
                <p className='article-title'>CSS @keyframes をビジュアル編集するツールを作った — タイムライン UI と「アニメーションを再起動する」CSS のワナ</p>
                <p className='article-info'>
                  <time>2026/5/26</time>
                  <span>@sen-ltd</span>
                  <span>128</span>
                </p>
              </a>
            </article> */}
          </div>
        </div>
      </main>
    </>
  )
}


export default Article