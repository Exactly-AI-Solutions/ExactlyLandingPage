import { PostPreview } from '@/components/PostPreview'
import { getBlogPosts } from '@/services/ApiClient'

export default async function BlogPage() {
  const posts = await getBlogPosts()
  console.log(posts)

  return (
    <div className="w-full flex flex-col gap-5">
      {posts.data.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  )
}
