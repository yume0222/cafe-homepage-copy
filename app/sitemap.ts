import { MetadataRoute } from 'next';
import { getAllBlogList } from './_libs/microcms';

const buildUrl = (path?: string) => `https://cafe-homepage-copy.vercel.app${path ?? ''}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogContents = await getAllBlogList();

  const blogUrls: MetadataRoute.Sitemap = blogContents.map((content) => ({
    url: buildUrl(`/blog/${content.id}`),
    lastModified: content.revisedAt,
  }));

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl('/concept'),
      lastModified: now,
    },
    {
      url: buildUrl('/menu'),
      lastModified: now,
    },
    {
      url: buildUrl('/shoplist'),
      lastModified: now,
    },
    {
      url: buildUrl('/blog'),
      lastModified: now,
    },
    ...blogUrls,
  ];
}