import { PostPreview } from '@/components/PostPreview'
import { getBlogPosts } from '@/services/ApiClient'

import { Typography } from '@/components/ui'

export const metadata = {
  title: 'The Complete Guide to Agentic AI for SMBs | Best AI Agent',
  description:
    'Discover how SMBs use agentic AI for growth. Real-world examples, no-code workflows, and pay-for-performance models — with guaranteed outcomes.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="container bg-white cards-shadow rounded-xl px-5 py-5! flex flex-col gap-5 justify-center">
      <Typography as="h2" size="h1" weight="medium" className="text-center">
        Blog
      </Typography>
      <Typography size="body" weight="regular" className="text-center">
        Some recent posts
      </Typography>
      <div className="flex flex-col md:flex-row gap-5">
        {posts.data.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
