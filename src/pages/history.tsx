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
                    <p>1</p>
                    <div>
                      <p className='article-title'>【Tailwind CSS入門 Day16】詳細モーダルを作る</p>
                      <p className='article-info'>
                        <time>2026/5/26</time>
                        <span>@honda-dev-jp</span>
                        <span>128</span>
                      </p>
                      <p>開いた回数 72回</p>
                    </div>
                  </a>
                </article>
                <article className='shelf-content'>
                  <a href="#">
                    <p>2</p>
                    <div>
                      <p className='article-title'>【Tailwind CSS入門 Day16】詳細モーダルを作る</p>
                      <p className='article-info'>
                        <time>2026/5/26</time>
                        <span>@honda-dev-jp</span>
                        <span>128</span>
                      </p>
                      <p>開いた回数 72回</p>
                    </div>
                  </a>
                </article>
                <article className='shelf-content'>
                  <a href="#">
                    <p>3</p>
                    <div>
                      <p className='article-title'>【Tailwind CSS入門 Day16】詳細モーダルを作る</p>
                      <p className='article-info'>
                        <time>2026/5/26</time>
                        <span>@honda-dev-jp</span>
                        <span>128</span>
                      </p>
                      <p>開いた回数 72回</p>
                    </div>
                  </a>
                </article>
                <article className='shelf-content'>
                  <a href="#">
                    <p>4</p>
                    <div>
                      <p className='article-title'>【Tailwind CSS入門 Day16】詳細モーダルを作る</p>
                      <p className='article-info'>
                        <time>2026/5/26</time>
                        <span>@honda-dev-jp</span>
                        <span>128</span>
                      </p>
                      <p>開いた回数 72回</p>
                    </div>
                  </a>
                </article>
                <article className='shelf-content'>
                  <a href="#">
                    <p>5</p>
                    <div>
                      <p className='article-title'>【Tailwind CSS入門 Day16】詳細モーダルを作る</p>
                      <p className='article-info'>
                        <time>2026/5/26</time>
                        <span>@honda-dev-jp</span>
                        <span>128</span>
                      </p>
                      <p>開いた回数 72回</p>
                    </div>
                  </a>
                </article>
              </div>
            </div>
          </div>
          <div className="shelf-content-right"></div>
        </div>
      </main>
    </>
  )
}

export default History