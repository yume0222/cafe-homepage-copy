import { getBlogList } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import { BLOG_LIST_LIMIT } from "@/app/_constants";
import Sheet from "@/app/_components/Sheet";
import SheetStyles from "@/app/_components/Sheet/index.module.css";
import BlogList from "@/app/_components/BlogList";
import { notFound } from "next/navigation";
import Pagination from "@/app/_components/Pagination";

type Props = {
  params: {
    current: string;
  }
}

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);
  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  const { contents: blog, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    offset: BLOG_LIST_LIMIT * (current - 1),
  });
  if (blog.length === 0) {
    notFound();
  }

  return (
    <Sheet className={SheetStyles.container}>
      <BlogList blog={blog} />
      <Pagination totalCount={totalCount} current={current} />
    </Sheet>
  );
}
