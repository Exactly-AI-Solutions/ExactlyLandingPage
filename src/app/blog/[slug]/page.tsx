// import { ContentParser } from '@/components/ContentParser/ContentParser'
// import { getBlogPostBySlug } from '@/services/ApiClient'
// import { getImageUrl } from '@/services/getImageUrl'
// import Image from 'next/image'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const param = await params
  // const post = await getBlogPostBySlug(param.slug)

  return (
    <div>
      {/* <h1>{post.title}</h1>
      <small>{post.date}</small>
      <small>{post.author?.name}</small>
      <Image
        src={getImageUrl(post.preview?.formats.medium.url)}
        alt={post.title}
        width={600}
        height={400}
      />
      <ContentParser content={post.content} /> */}
    </div>
  )
}
