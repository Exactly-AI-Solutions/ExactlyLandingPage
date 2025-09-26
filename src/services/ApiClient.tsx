import { IPagination } from '@/types/Pagination'
import { IPost } from '@/types/Post'
import { ISeo } from '@/types/Seo'

class APIClient {
  baseUrl: string

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || ''
  }

  async get(endpoint: string, params?: Record<string, unknown>) {
    const response = await fetch(`${this.baseUrl}/api${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,
      },
      ...(params && params),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return response.json()
  }

  async post(endpoint: string, data: object) {
    const response = await fetch(`${this.baseUrl}/api${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }
}

export const api = new APIClient()

export const getBlogPosts = async (
  getAll?: boolean,
  params?: Record<string, unknown>
): Promise<{
  data: IPost[]
  meta: { pagination: IPagination }
}> => {
  return api.get(
    `/blogs?populate[author]=true&populate[preview]=true${
      getAll ? '&pagination[pageSize]=-1' : ''
    }`,
    params
  )
}

export const getBlogPostBySlug = async (slug: string): Promise<IPost> => {
  const res = await api.get(
    `/blogs?filters[slug][$eq]=${slug}&populate[author]=true&populate[preview]=true&populate[relatedBlogs]=true`
  )
  return res.data[0]
}

export const getSeo = async (): Promise<{ data: ISeo }> => {
  return api.get('/seo')
}
