import { getBlogPosts } from '@/services/ApiClient'
import { Card, Typography } from './ui'
import { PostPreview } from './PostPreview'

export const BlogSection = async () => {
  const posts = await getBlogPosts()

  return (
    <div className="two-colors-background p-5">
      <Card>
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
      </Card>
    </div>
  )
}
