import Image from "next/image";
import styles from "./page.module.css";
import { getShoplist } from "../_libs/microcms";
import { SHOPLIST_LIST_LIMIT } from "../_constants";

export default async function Page() {
  const { contents: shoplist } = await getShoplist({
    limit: SHOPLIST_LIST_LIMIT,
  });

  return (
    <ul className={styles.list}>
      {shoplist.map((shoplist) => (
        <li key={shoplist.id} className={styles.item}>
          <div className={styles.image}>
            <Image
              src={shoplist.thumbnail.url}
              alt=""
              width="648"
              height="410"
            />
          </div>
          <div className={styles.info}>
            <h2 className={styles.name}>{shoplist.name}店</h2>
            <p className={styles.adress}>〒{shoplist.adress}</p>
            <p className={styles.tel}>TEL.{shoplist.tel}</p>
            <ul className={styles.detail}>
              <li className={styles.detailItem}>営業時間 / {shoplist.hours}</li>
              <li className={styles.detailItem}>席数 / {shoplist.seats}席</li>
              <li className={styles.detailItem}>喫煙 / {shoplist.smoking}</li>
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
