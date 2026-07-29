// Article.tsx の上部でPropsの型を定義
interface ArticleProps {
  articles: QiitaArticle[];
  loading: boolean;
}

import { useState } from 'react';
import './article.css';
import Header from "../components/Header";
import sideDateArrow from "../assets/side-date-arrow.png";


function Article({ articles, loading }: ArticleProps) {
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

      // if(selectedTag === '') return true  
      //   && article.title.includes(keyword)
      //   && fromDate === "" && toDate === ""
      //   || articleDate >= from && toDate === ""
      //   || fromDate === "" && articleDate <= to
      //   || articleDate >= from && articleDate <= to;

      // return article.tags.some(tag => tag.name === selectedTag) 
      //   && article.title.includes(keyword)
      //   && articleDate >= from && articleDate <= to;
    });
  

  return(
    <>
      <Header />
      <main>
        <div className='side-bar'>
          <div className='filter-wrap'>
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
          <div className='button-wrap'>
            <button type="button">条件をクリア</button>
            <button type="button">{filteredArticles.length}件を表示</button>
          </div>
        </div>
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