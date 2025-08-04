import type { Blog } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import Image from "next/image";
import Date from "../Date";

type Props = {
  data: Blog;
};

export default function Blog({ data }: Props) {
  return (
    <article>
      <div>
        <Image src={data.thumbnail.url} alt="" width="1920" height="1180" />
      </div>
      <div className={styles.date}>
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      <h1 className={styles.title}>{data.title}</h1>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </article>
  );
}
