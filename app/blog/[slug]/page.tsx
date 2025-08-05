import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBlogDetail } from "@/app/_libs/microcms";
import Blog from "@/app/_components/Blog";
import Sheet from "@/app/_components/Sheet";
import SheetStyles from "@/app/_components/Sheet/index.module.css";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getBlogDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.content,
    openGraph: {
      title: data.title,
      description: data.content,
      images: data.thumbnail,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getBlogDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  
  return (
    <Sheet className={SheetStyles.containerSmall}>
      <Blog data={data} />
    </Sheet>
  );
}
