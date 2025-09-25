export interface ISeo {
  title: string
  description: string
  jsonLd: JsonLd
  image?: string
}

interface JsonLd {
  name: string
  url: string
  sameAs: string[]
  logo: string
}
