import Sheet from "../_components/Sheet";
import SheetStyles from "../_components/Sheet/index.module.css";
import BlogList from "../_components/BlogList";
import { getBlogList } from "../_libs/microcms";
import { BLOG_LIST_LIMIT } from "../_constants";
import Pagination from "../_components/Pagination";

export default async function Page() {
  const { contents: blog, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
  });

  return (
    <Sheet className={SheetStyles.container}>
      <BlogList blog={blog} />
      <Pagination totalCount={totalCount} />
    </Sheet>
  );
}
