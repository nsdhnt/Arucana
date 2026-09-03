import "../pages/history.css";
import Header from "../components/Header";
import { useState } from 'react';


function History() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  console.log(isSidebarOpen);
  console.log(isMobileSidebarOpen);

  return(
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
      <main>
        <div className="book-shelf">
          <div className="shelf-content-left">
            <div className="ranking">
              <h2>よく読んだ記事ランキング</h2>
              <div className="shelf-wrap">
                <article className='shelf-content'>
                  <a href="#">
                    <p className="ranking-id">1</p>
                    <div>
                      <p className='article-title'>【Tailwind CSS入門 Day16】詳細モーダルを作る</p>
                      <p className='article-info'>
                        <time>2026/5/26</time>
                        <span>@honda-dev-jp</span>
                        <span>128いいね</span>
                      </p>
                      <p className="count">開いた回数 <span>72</span> 回</p>
                    </div>
                  </a>
                </article>
                <article className='shelf-content'>
                  <a href="#">
                    <p className="ranking-id">2</p>
                    <div>
                      <p className='article-title'>手軽に使えるCSSアニメーション</p>
                      <p className='article-info'>
                        <time>2026/5/26</time>
                        <span>@honda-dev-jp</span>
                        <span>128いいね</span>
                      </p>
                      <p className="count">開いた回数 <span>64</span> 回</p>
                    </div>
                  </a>
                </article>
                <article className='shelf-content'>
                  <a href="#">
                    <p className="ranking-id">3</p>
                    <div>
                      <p className='article-title'>useEffectをとりあえず理解する</p>
                      <p className='article-info'>
                        <time>2026/5/26</time>
                        <span>@honda-dev-jp</span>
                        <span>128いいね</span>
                      </p>
                      <p className="count">開いた回数 <span>45</span> 回</p>
                    </div>
                  </a>
                </article>
                <article className='shelf-content'>
                  <a href="#">
                    <p className="ranking-id">4</p>
                    <div>
                      <p className='article-title'>useStateで配列要素を追加・削除・変更する方法</p>
                      <p className='article-info'>
                        <time>2026/5/26</time>
                        <span>@honda-dev-jp</span>
                        <span>128いいね</span>
                      </p>
                      <p className="count">開いた回数 <span>31</span> 回</p>
                    </div>
                  </a>
                </article>
                <article className='shelf-content'>
                  <a href="#">
                    <p className="ranking-id">5</p>
                    <div>
                      <p className='article-title'>PHPでフォームからデータ送る</p>
                      <p className='article-info'>
                        <time>2026/5/26</time>
                        <span>@honda-dev-jp</span>
                        <span>128いいね</span>
                      </p>
                      <p className="count">開いた回数 <span>16</span> 回</p>
                    </div>
                  </a>
                </article>
              </div>
            </div>
          </div>
          <div className="shelf-content-right">
            <h2>閲覧履歴</h2>
            <div className="article-list">
              <article className='article-content'>
                <a href="#">
                  <h1>01</h1>
                  <p className='article-title'>【Tailwind CSS入門 Day16】詳細モーダルを作る</p>
                  <p className='article-info'>
                    <time>2026/5/26</time>
                    <span>@honda-dev-jp</span>
                    <span>128いいね</span>
                  </p>
                  <p className='article-tag'>
                    <span>CSS</span>
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
                    <span>128いいね</span>
                  </p>
                </a>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default History