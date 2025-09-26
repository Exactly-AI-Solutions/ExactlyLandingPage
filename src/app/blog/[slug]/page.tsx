import { ContentParser } from '@/components/ContentParser/ContentParser'
import { Typography } from '@/components/ui'
import { getBlogPostBySlug, getBlogPosts } from '@/services/ApiClient'
import {IPost} from '@/types/Post'
import { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const param = await params
  const post = await getBlogPostBySlug(param.slug)
  const { title, description } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_LANDING_URL}/blog/${param.slug}`,
    },
  }
}

export async function generateStaticParams(): Promise<{
    slug: string;
}[]> {
  const posts = await getBlogPosts(true, {
    next: { revalidate: 60 * 60 * 24 }, 
  })

  return posts.data.map((post: IPost) => ({
    slug: post.slug,
  }))
}

export const revalidate = 86400

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const param = await params
  const post = await getBlogPostBySlug(param.slug)

  return (
    <div className="container py-10 px-4 md:px-10">
      <Typography as="h2" size="h1" weight="medium" className="text-center">
        {post.title}
      </Typography>
      <div className="flex justify-between gap-4">
        <Typography size="bodyS" color="slate07">
          {`${post?.readTime ?? 5} min read`}
        </Typography>
        <Typography size="bodyS" color="slate07">
          {post.date}
        </Typography>
      </div>
      <div className="rounded-lg w-full aspect-[7/5] overflow-hidden relative object-cover">
        <Image src={post.preview?.url} alt={post.title} fill />
      </div>
      <ContentParser content={post.content} />
    </div>
  )
}
