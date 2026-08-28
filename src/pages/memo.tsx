import "../pages/memo.css";
import Header from "../components/Header";
import { useState } from 'react';


function Memo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  console.log(isSidebarOpen);
  console.log(isMobileSidebarOpen);

  return(
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
      <main>
        <ul className="memo-shelf-list">
          <li className="memo-shelf">
            <div className="memo-content">
              <h3>【Tailwind CSS入門 Day16】詳細モーダルを作る</h3>
              <p className="memo-txt">複雑そうに見えて、思ったより簡単だった</p>
              <p className="memo-date">2026/09/04</p>
            </div>
          </li>
          <li className="memo-shelf">
            <div className="memo-content">
              <h3>【Tailwind CSS入門 Day16】詳細モーダルを作る</h3>
              <p className="memo-txt">複雑そうに見えて、思ったより簡単だった</p>
              <p className="memo-date">2026/09/04</p>
            </div>
          </li>
        </ul>
      </main>
    </>
  )
}

export default Memo