import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo-white.svg" alt="" width="200" height="26" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>北千住店</li>
            <li className={styles.item}>代官山店</li>
            <li className={styles.item}>新宿店</li>
            <li className={styles.item}>八王子店</li>
            <li className={styles.item}>銀座店</li>
            <li className={styles.item}>渋谷店</li>
          </ul>
        </nav>
        <div className={styles.info}>
          <span>株式会社 SUPPLE</span>
          <span>〒123-4567 東京都渋谷区ABC</span>
        </div>
        <small className={styles.copyright}>&copy; 2021 SUPPLE</small>
      </div>
    </footer>
  );
}
