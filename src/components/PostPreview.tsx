import { IPost } from '@/types/Post'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from './ui'

export const PostPreview = ({ post }: { post: IPost }) => (
  <Link href={`/blog/${post.slug}`}>
    <div className="flex flex-col h-full gap-4 p-5 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
      <div className="rounded-lg w-full aspect-[7/5] overflow-hidden relative object-cover">
        <Image
          src={post.preview?.url}
          alt={post.title}
          fill
          objectFit='cover'
        />
      </div>

      <div className="flex justify-between gap-4">
        <Typography size="bodyS" color="slate07">
          {`${post?.readTime ?? 5} min read`}
        </Typography>
        <Typography size="bodyS" color="slate07">
          {post.date}
        </Typography>
      </div>

      <Typography size="bodyXL" weight="semibold" color="slate10">
        {post.title}
      </Typography>

      <Typography size="body" color="slate07">
        {post.description}
      </Typography>
    </div>
  </Link>
)
