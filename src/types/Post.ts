import { IAuthor } from './Author'
import { IStrapiImage } from './StrapiImage'

export interface IContentBlock {
  type: 'heading' | 'paragraph' | 'image' | 'quote' | 'list'
  level?: number
  format?: 'ordered' | 'unordered'
  children: {
    type: 'text' | 'link' | 'list-item'
    text: string
    url?: string
    bold?: boolean
    italic?: boolean
    strikethrough?: boolean
    children?: IContentBlock['children']
  }[]
  image?: IStrapiImage
}

export interface IPost {
  id: number
  readTime: number
  slug: string
  title: string
  date: string
  description: string
  preview: IStrapiImage
  content: IContentBlock[]
  author: IAuthor
  relatedBlogs: IPost[]
}
