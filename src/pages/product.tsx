import "../pages/product.css";
import Header from "../components/Header";

function Product() {
  return(
    <>
      <Header />
      <main>
        <div className="side-bar">
          <nav className="product-nav">
            <ul>
              <li>Todoリスト</li>
              <li>ポートフォリオ</li>
              <li>模写コーディング</li>
              <li>Todoリスト</li>
              <li>ポートフォリオ</li>
              <li>模写コーディング</li>
              <li>Todoリスト</li>
              <li>ポートフォリオ</li>
              <li>模写コーディング</li>
              <li>Todoリスト</li>
              <li>ポートフォリオ</li>
              <li>模写コーディング</li>
              <li>Todoリスト</li>
              <li>ポートフォリオ</li>
              <li>模写コーディング</li>
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