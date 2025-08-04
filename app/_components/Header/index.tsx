import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">
          <Image src="/logo.svg" alt="" width="200" height="26" />
        </Link>
      </h1>
      <a
        href="https://www.google.com/"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        online shop
      </a>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/concept">concept</Link>
          </li>
          <li className={styles.item}>
            <Link href="/menu">menu</Link>
          </li>
          <li className={styles.item}>
            <Link href="/shoplist">shoplist</Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog">blog&news</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
