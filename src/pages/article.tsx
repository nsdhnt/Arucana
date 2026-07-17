import './article.css';
import Header from "../components/Header";
import sideDateArrow from "../assets/side-date-arrow.png";


function Article({ articles, loading }) {
  console.log(articles);
  console.log(loading);
  
  return(
    <>
      <Header />
      <main>
        <div className='side-bar'>
          <div className='filter-wrap'>
            <input type="search" name="" id="" placeholder='キーワードで検索する' />
            <section className='tag'>
              <h1>タグ</h1>
              <div className='tag-wrap'>
                <p>初心者</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>個人開発</p>
                <p>React</p>
                <p>Github</p>
              </div>
              <p className='more-display'>さらに表示</p>
            </section>
            <section className='date'>
              <h1>日付</h1>
              <div className='select-dates froms'>
                <div className='select-date from'>
                  <select name="" id="">
                    <option value="2026">2026年</option>
                    <option value="2025">2025年</option>
                    <option value="2024">2024年</option>
                  </select>
                </div>
                <div className='select-date from'>
                  <select name="" id="">
                    <option value="">1月</option>
                    <option value="">2月</option>
                    <option value="">3月</option>
                    <option value="">4月</option>
                    <option value="">5月</option>
                    <option value="">6月</option>
                    <option value="">7月</option>
                    <option value="">8月</option>
                    <option value="">9月</option>
                    <option value="">10月</option>
                    <option value="">11月</option>
                    <option value="">12月</option>
                  </select>
                </div>
                <div className='select-date from'>
                  <select name="" id="">
                    <option value="">1日</option>
                    <option value="">2日</option>
                    <option value="">3日</option>
                    <option value="">4日</option>
                    <option value="">5日</option>
                    <option value="">6日</option>
                    <option value="">7日</option>
                    <option value="">8日</option>
                    <option value="">9日</option>
                    <option value="">10日</option>
                    <option value="">11日</option>
                    <option value="">12日</option>
                    <option value="">13日</option>
                    <option value="">14日</option>
                    <option value="">15日</option>
                  </select>
                </div>
              </div>
              <img className='side-date-arrow' src={sideDateArrow} alt="" />
              <div className='select-dates tos'>
                <div className='select-date to'>
                  <select name="" id="">
                    <option value="2026">2026年</option>
                    <option value="2025">2025年</option>
                    <option value="2024">2024年</option>
                  </select>
                </div>
                <div className='select-date to'>
                  <select name="" id="">
                    <option value="">1月</option>
                    <option value="">2月</option>
                    <option value="">3月</option>
                    <option value="">4月</option>
                    <option value="">5月</option>
                    <option value="">6月</option>
                    <option value="">7月</option>
                    <option value="">8月</option>
                    <option value="">9月</option>
                    <option value="">10月</option>
                    <option value="">11月</option>
                    <option value="">12月</option>
                  </select>
                </div>
                <div className='select-date to'>
                  <select name="" id="">
                    <option value="">1日</option>
                    <option value="">2日</option>
                    <option value="">3日</option>
                    <option value="">4日</option>
                    <option value="">5日</option>
                    <option value="">6日</option>
                    <option value="">7日</option>
                    <option value="">8日</option>
                    <option value="">9日</option>
                    <option value="">10日</option>
                    <option value="">11日</option>
                    <option value="">12日</option>
                    <option value="">13日</option>
                    <option value="">14日</option>
                    <option value="">15日</option>
                  </select>
                </div>
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
            <button type="button">〇〇件を表示</button>
          </div>
        </div>
        <div className='main-block'>
          <div className='article-list'>
            {loading ? (
              <p>読み込み中...</p>
            ) : articles.length === 0 ? (
              <p>記事が見つかりませんでした。</p>
            ) : (
              articles.map((article, index) => {
                const date = new Date(article.created_at).toLocaleString('ja-JP');

                return (
                  <article className='article-content' key={article.id}>
                    <a href={article.url} target='_blank' rel="noopener noreferrer">
                      <h1>{String(index + 1).padStart(2, '0')}</h1>
                      <p className='article-title'>{article.title}</p>
                      <p className='article-info'>
                        <time>{date}</time>
                        <span>@{article.user.id}</span>
                        <span>{article.likes_count}</span>
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