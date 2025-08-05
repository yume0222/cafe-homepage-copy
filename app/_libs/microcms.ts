// microCMSと通信処理を行う関数
import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';

// ブログの型定義
export type Blog = {
  title: string;
  content: string;
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;

// メニューの型定義
export type Menu = {
  name: string;
  price: string;
  description: string;
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;

// ショップリストの型定義
export type Shoplist = {
  name: string;
  adress: string;
  tel: string;
  hours: string;
  seats: string;
  smoking: string;
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;

// .env.lacalファイルに設定した環境変数を参照
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// クライアントを作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得する関数
export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: 'blog',
    queries,
  });
  return listData;
};

// ブログ詳細情報の取得（1つのブログ記事を取得する関数）
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: 'blog',
    contentId,
    queries,
    // データ単位でキャッシュを制御
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });
  return detailData;
};

// メニュー一覧を取得する関数
export const getMenuList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Menu>({
    endpoint: 'menu',
    queries,
  });
  return listData;
};

// ショップリスト一覧を取得する関数
export const getShoplist = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Shoplist>({
    endpoint: 'shoplist',
    queries,
  });
  return listData;
};

// ブログのコンテンツを全て取得する関数
export const getAllBlogList = async () => {
  const listData = await client.getAllContents<Blog>({
    endpoint: 'blog',
  });
  return listData;
};