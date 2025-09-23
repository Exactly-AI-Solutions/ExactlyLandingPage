import { ContentParser } from '@/components/ContentParser/ContentParser'
import { Typography } from '@/components/ui'
import { getBlogPostBySlug } from '@/services/ApiClient'
import Image from 'next/image'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const param = await params
  const post = await getBlogPostBySlug(param.slug)

  return (
    <div className='container py-10 px-4 md:px-10'>
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
      <Image
        src={post.preview?.url}
        alt={post.title}
        fill
      />
      </div>
      <ContentParser content={post.content} />
    </div>
  )
}
