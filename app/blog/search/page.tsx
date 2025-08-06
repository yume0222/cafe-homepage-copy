import { getBlogList } from "@/app/_libs/microcms";
import { BLOG_LIST_LIMIT } from "@/app/_constants";
import BlogList from "@/app/_components/BlogList";
import SearchField from "@/app/_components/SearchField";
import Sheet from "@/app/_components/Sheet";
import SheetStyles from "@/app/_components/Sheet/index.module.css";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: blog } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <Sheet className={SheetStyles.container}>
        <SearchField />
        <BlogList blog={blog} />
      </Sheet>
    </>
  );
}
