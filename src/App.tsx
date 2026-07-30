
import type { QiitaArticle } from './types/Qiita';


import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';import './App.css'
import Index from './pages/index.tsx';
import Article from './pages/article.tsx';
import Data from './pages/data.tsx';
import Product from './pages/product.tsx';

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

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route 
        path="/article" 
        element={<Article articles={articles} loading={loading} />} />
      <Route path="/data" element={<Data />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  )
}

export default App
