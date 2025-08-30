interface IFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface IStrapiImage {
  id: number
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: string | null
  createdAt: string
  updatedAt: string
  documentId: string
  publishedAt: string
  formats: {
    large: IFormat
    small: IFormat
    medium: IFormat
    thumbnail: IFormat
  }
}
