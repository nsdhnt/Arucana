import "../pages/memo.css";
import Header from "../components/Header";
import React, { memo, useState } from 'react';

interface Memos {
  // id: number;
  title: string;
  text: string;
  date: string;
}

interface MemoProps {
  memos: Memos[];
  setMemos: React.Dispatch<React.SetStateAction<Memos[]>>;
}


function Memo({ memos, setMemos }: MemoProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // console.log(isSidebarOpen);
  // console.log(isMobileSidebarOpen);

  console.log(memos);
  console.log(setMemos);
  

  return(
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
      <main>
        <ul className="memo-shelf-list">
          {[...memos].reverse().map((memo) => (
            <li className="memo-shelf">
              <div className="memo-content">
                <h3>{memo.title}</h3>
                <p className="memo-txt">{memo.text}</p>
                <p className="memo-date">{memo.date}</p>
              </div>
            </li>
          ))}
          {/* <li className="memo-shelf">
            <div className="memo-content">
              <h3>【Tailwind CSS入門 Day16】詳細モーダルを作る</h3>
              <p className="memo-txt">複雑そうに見えて、思ったより簡単だった</p>
              <p className="memo-date">2026/09/04</p>
            </div>
          </li>
          <li className="memo-shelf">
            <div className="memo-content">
              <h3>【Tailwind CSS入門 Day16】詳細モーダルを作る</h3>
              <p className="memo-txt">複雑そうに見えて、思ったより簡単だった複雑そうに見えて、思ったより簡単だった複雑そうに見えて、思ったより簡単だった複雑そうに見えて、思ったより簡単だった複雑そうに見えて、思ったより簡単だった複雑そうに見えて、思ったより簡単だった</p>
              <p className="memo-date">2026/09/04</p>
            </div>
          </li> */}
        </ul>
      </main>
    </>
  )
}

export default Memo