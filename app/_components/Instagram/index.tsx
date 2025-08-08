import Image from "next/image";
import SubTitle from "../SubTitle";
import styles from "./index.module.css";
import ButtonLink from "../ButtonLink";

export default function Instagram() {
  return (
    <section className={styles.bg}>
      <SubTitle>instagram</SubTitle>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Image
            src="/pic-instagram-post.jpg"
            alt=""
            width="402"
            height="402"
          />
        </li>
        <li className={styles.item}>
          <Image
            src="/pic-instagram-post02.jpg"
            alt=""
            width="402"
            height="402"
          />
        </li>
        <li className={styles.item}>
          <Image
            src="/pic-instagram-post03.jpg"
            alt=""
            width="402"
            height="402"
          />
        </li>
        <li className={styles.item}>
          <Image
            src="/pic-instagram-post04.jpg"
            alt=""
            width="402"
            height="402"
          />
        </li>
        <li className={styles.item}>
          <Image
            src="/pic-instagram-post05.jpg"
            alt=""
            width="402"
            height="402"
          />
        </li>
        <li className={styles.item}>
          <Image
            src="/pic-instagram-post06.jpg"
            alt=""
            width="402"
            height="402"
          />
        </li>
      </ul>
      <div className={styles.button}>
        <ButtonLink
          href="https://www.instagram.com/?hl=ja"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </ButtonLink>
      </div>
    </section>
  );
}
