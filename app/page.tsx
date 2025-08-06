import Image from "next/image";
import styles from "./page.module.css";
import Sheet from "./_components/Sheet";
import SheetStyles from "./_components/Sheet/index.module.css";
import SubTitle from "./_components/SubTitle";
import SubTitleStyles from "./_components/SubTitle/index.module.css";
import ButtonLink from "./_components/ButtonLink";
import ButtonLinkStyles from "./_components/ButtonLink/index.module.css";
import BlogList from "./_components/BlogList";
import { getBlogList, getMenuList, getShoplist } from "./_libs/microcms";
import {
  SHOPLIST_LIST_LIMIT,
  TOP_BLOG_LIMIT,
  TOP_MENU_LIMIT,
} from "./_constants";

export default async function Home() {
  const { contents: shoplist } = await getShoplist({
    limit: SHOPLIST_LIST_LIMIT,
  });
  const { contents: menu } = await getMenuList({
    limit: TOP_MENU_LIMIT,
  });
  const { contents: blog } = await getBlogList({
    limit: TOP_BLOG_LIMIT,
  });

  return (
    <>
      <div className={styles.bg}></div>
      {/* コンセプト */}
      <section>
        <Sheet className={SheetStyles.containerSmall}>
          <SubTitle>concept</SubTitle>
          <div className={`${styles.conseptImage} ${styles.mt}`}>
            <Image
              src="/pic-top-consept.jpg"
              alt=""
              width="1920"
              height="954"
            />
          </div>
          <p className={`${styles.conseptText} ${styles.mt}`}>
            一杯一杯まごころをこめて調製し、新鮮な香りと豊かな
            風味のコーヒーを提供します。
          </p>
          <p className={styles.conseptText02}>
            <span>親譲りの無鉄砲で小供の時から損ばかりしている。</span>
            <span>
              小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。
            </span>
            <span>なぜそんな無闇をしたと聞く人があるかも知れぬ。</span>
          </p>
          <div className={styles.mt}>
            <ButtonLink href="/concept">MORE</ButtonLink>
          </div>
        </Sheet>
      </section>
      {/* メニュー */}
      <section className={styles.menuBg}>
        <Sheet className={SheetStyles.container}>
          <SubTitle className={SubTitleStyles.titleWhite}>menu</SubTitle>
          <div className={`${styles.menuBody} ${styles.mt}`}>
            <div>
              <h3 className={styles.menuTitle}>drip</h3>
              <ul className={styles.menuList}>
                {menu.map((menu) => (
                  <li key={menu.id} className={styles.menuItem}>
                    <span>{menu.name}</span>
                    <span>¥{menu.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.menuTitle}>espresso</h3>
              <ul className={styles.menuList}>
                {menu.map((menu) => (
                  <li key={menu.id} className={styles.menuItem}>
                    <span>{menu.name}</span>
                    <span>¥{menu.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.mt}>
            <ButtonLink href="/menu" className={ButtonLinkStyles.buttonWhite}>
              MORE
            </ButtonLink>
          </div>
        </Sheet>
      </section>
      {/* ショップリスト */}
      <section>
        <Sheet className={SheetStyles.containerSmall}>
          <SubTitle>shop list</SubTitle>
          <p className={`${styles.shoplistText} ${styles.mt}`}>
            <span>首都圏を中心に6店舗展開しています。</span>
            <span>お近くの店舗でお待ちしています。</span>
          </p>
          <div className={styles.mt}>
            <ul className={styles.shoplistList}>
              {shoplist.map((shoplist) => (
                <li key={shoplist.id} className={styles.shoplistItem}>
                  {shoplist.name}店
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mt}>
            <ButtonLink href="/shoplist">MORE</ButtonLink>
          </div>
        </Sheet>
      </section>
      {/* ブログ */}
      <section>
        <Sheet className={SheetStyles.containerSmall}>
          <SubTitle>blog & news</SubTitle>
          <div className={styles.mt}>
            <BlogList blog={blog} />
          </div>
          <div className={styles.mt}>
            <ButtonLink href="/blog">MORE</ButtonLink>
          </div>
        </Sheet>
      </section>
    </>
  );
}
