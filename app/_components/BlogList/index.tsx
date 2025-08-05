import { Blog } from "@/app/_libs/microcms";
import Image from "next/image";
import Link from "next/link";
import Date from "../Date";
import styles from "./index.module.css";

type Props = {
  blog: Blog[];
};

export default function BlogList({ blog }: Props) {
  if (blog.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className={styles.list}>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <div className={styles.image}>
              <Image src={blog.thumbnail.url} alt="" width="600" height="369" />
            </div>
            <div className={styles.date}>
              <Date date={blog.publishedAt ?? blog.createdAt} />
            </div>
            <h3 className={styles.title}>{blog.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
