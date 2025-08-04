import Hero from "./_components/Hero";
import HeroStyles from "./_components/Hero/index.module.css";
import Sheet from "./_components/Sheet";
import styles from "./not-found.module.css";
import SheetStyles from "./_components/Sheet/index.module.css";
import ButtonLink from "./_components/ButtonLink";

export default function NotFound() {
  return (
    <>
      <Hero className={HeroStyles.bgImgError}>404</Hero>
      <Sheet className={SheetStyles.containerSmall}>
        <p className={styles.text}>
          <span>
            申し訳ございません。お探しのページは見つかりませんでした。
          </span>
          <span>
            入力したアドレスが間違っているか、ページが移動・削除された可能性があります。
          </span>
        </p>
        <div className={styles.button}>
          <ButtonLink href="/">more</ButtonLink>
        </div>
      </Sheet>
    </>
  );
}
