import { getSeo } from '@/services/ApiClient'
import { DefaultSeo, OrganizationJsonLd } from 'next-seo'

export interface ISeo {
  title: string
  description: string
  jsonLd: string
  image?: string
}

interface JsonLd {
  name: string
  url: string
  sameAs: string[]
  logo: string
}

export const Seo = async () => {
  const seo = await getSeo()
  const { title, description, jsonLd } = seo
  const parsedJsonLd = JSON.parse(jsonLd) as JsonLd

  return (
    <>
      <DefaultSeo
        title={title}
        description={description}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: parsedJsonLd.url,
          siteName: parsedJsonLd.name,
        }}
      />
      <OrganizationJsonLd
        id={`${parsedJsonLd.url}/`}
        logo={parsedJsonLd.logo}
        legalName={parsedJsonLd.name}
        name={parsedJsonLd.name}
        sameAs={parsedJsonLd.sameAs}
        url={parsedJsonLd.url}
      />
    </>
  )
}
