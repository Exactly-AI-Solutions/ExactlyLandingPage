import {getImageUrl} from '@/services/getImageUrl'
import { IPost } from '@/types/Post'
import Image from 'next/image'
import Link from 'next/link'

export const PostPreview = ({ post }: { post: IPost }) => (
  <Link href={`/blog/${post.slug}`}>
      <div className="flex gap-5 p-5">
        <Image
          src={getImageUrl(post.preview?.formats.medium.url)}
          alt={post.title}
          width={150}
          height={150}
          className="object-cover"
        />
        <div>
          <h2>{post.title}</h2>
          <small>{post.date}</small>
          <p>{post.description}</p>
          <small>{post.author?.name}</small>
        </div>
      </div>
  </Link>
)
