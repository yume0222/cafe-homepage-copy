import Image from "next/image";
import styles from "./page.module.css";
import { getMenuList } from "../_libs/microcms";
import { MENU_LIST_LIMIT } from "../_constants";

export default async function Page() {
  const { contents: menu } = await getMenuList({
    limit: MENU_LIST_LIMIT,
  });

  return (
    <>
      <p className={styles.text}>使用しているコーヒー豆を紹介します</p>
      <p className={styles.text02}>
        <span>SUPPLEでは上質なコーヒー豆を</span>
        <span>世界中から直接輸入しています。</span>
      </p>
      <ul className={styles.list}>
        {menu.map((menu) => (
          <li key={menu.id} className={styles.item}>
            <div className={styles.image}>
              <Image src={menu.thumbnail.url} alt="" width="560" height="560" />
            </div>
            <div className={styles.info}>
              <h2 className={styles.name}>{menu.name}</h2>
              <p className={styles.price}>¥{menu.price}</p>
              <p className={styles.desc}>{menu.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
