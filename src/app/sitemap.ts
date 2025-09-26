import { getBlogPosts } from '@/services/ApiClient'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts(true, {
    next: { revalidate: 60 * 60 * 24 },
  })
  return [
    {
      url: `${process.env.NEXT_PUBLIC_LANDING_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${process.env.NEXT_PUBLIC_LANDING_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...posts.data.map((post) => ({
      url: `${process.env.NEXT_PUBLIC_LANDING_URL}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency:
        'daily' as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority: 0.7,
    })),
  ]
}
