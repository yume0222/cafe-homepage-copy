import { getBlogDetail } from "@/app/_libs/microcms";
import Blog from "@/app/_components/Blog";
import Sheet from "@/app/_components/Sheet";
import SheetStyles from "@/app/_components/Sheet/index.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getBlogDetail(params.slug);

  return (
    <Sheet className={SheetStyles.containerSmall}>
      <Blog data={data} />
    </Sheet>
  );
}
