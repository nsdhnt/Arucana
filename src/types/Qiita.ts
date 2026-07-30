export interface QiitaTag {
  name: string;
}

export interface QiitaUser {
  id: string;
}

export interface QiitaArticle {
  id: string;
  title: string;
  url: string;
  created_at: string;
  likes_count: number;
  user: QiitaUser;
  tags: QiitaTag[];
}