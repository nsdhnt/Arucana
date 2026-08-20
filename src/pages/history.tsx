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
    </>
  )
}

export default History