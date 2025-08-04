import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <div>
        <Image src="/pic-consept.jpg" alt="" width="2160" height="540" />
      </div>
      <p className={`${styles.text} ${styles.mt}`}>
        一杯一杯まごころをこめて調製し、新鮮な香りと豊かな風味のコーヒーを提供します。
      </p>
      <p className={styles.text02}>
        <span>親譲りの無鉄砲で小供の時から損ばかりしている。</span>
        <span>
          小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。
        </span>
        <span>なぜそんな無闇をしたと聞く人があるかも知れぬ。</span>
      </p>
      <div className={styles.mt}>
        <Image src="/pic-consept02.jpg" alt="" width="2160" height="540" />
      </div>
    </>
  );
}
