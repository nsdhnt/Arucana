
import type { QiitaArticle } from './types/Qiita';


import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';import './App.css'
import Index from './pages/index.tsx';
import Search from './pages/search.tsx';
import Project from './pages/project.tsx';
import Memo from './pages/memo.tsx';
import History from './pages/history.tsx';

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


function App() {
  // 取得したデータを保存するstate
  const [articles, setArticles] = useState<QiitaArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // APIの情報を定義
  const TOKEN = import.meta.env.VITE_QIITA_TOKEN;
  const USER_ID = 'hinata_html';
  const URL = `https://qiita.com/api/v2/users/${USER_ID}/stocks`;
  // console.log("読み込めているトークン:", TOKEN);

  // 初回レンダリング時に一回だけAPIを叩く
  useEffect(() => {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if(!response.ok){
        throw new Error('データの取得に失敗しました');
      }
      return response.json();
    })
    .then(data => {
      // console.log(data);
      
      setArticles(data); // stateに保存
      setLoading(false); // ローディング完了
    })
    .catch(error => {
      console.error('API Error:', error);
      setLoading(false);
    });
  }, []) // 空の配列で一度だけ実行

  const [projects, setProjects] = useState<Projects[]>(() => {
    
    const savedProjects = localStorage.getItem("projects");
    
    if(savedProjects) {
      return JSON.parse(savedProjects);
    }
    
    return [
      {
        id: 1, 
        name: "Todoリスト", 
        articles: []
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


  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route 
        path="/search" 
        element={<Search articles={articles} loading={loading} projects={projects} setProjects={setProjects} />} />
      <Route 
        path="/project" 
        element={<Project projects={projects} setProjects={setProjects} />} 
      />
      <Route path="/memo" element={<Memo />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}

export default App
