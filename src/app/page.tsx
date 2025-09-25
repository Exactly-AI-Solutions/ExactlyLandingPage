import { BlogSection } from '@/components/BlogSection'
import { ExamplesSection } from '@/components/ExamplesSection'
import { ExplanationSection } from '@/components/ExplanationSection'
import { FAQs } from '@/components/FAQs'
import { FloatingChat } from '@/components/FloatingChat'
import { Footer } from '@/components/Footer'
import { GuaranteeSection } from '@/components/GuaranteeSection'
import { HeroSection } from '@/components/HeroSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { IsRightForYouSection } from '@/components/IsRightForYouSection'
import { MotivationSection } from '@/components/MotivationSection'
import { QualificationCheck } from '@/components/QualificationCheck'
import { QuestionsSection } from '@/components/QuestionsSection'
import { RichInfoSection } from '@/components/RichInfoSection'
import { WhyMettersSection } from '@/components/WhyMettersSection'
import { getSeo } from '@/services/ApiClient'
import { Metadata } from 'next'
import { Suspense } from 'react'

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo()
  const { title, description } = seo.data
  return {
    title,
    description,
  }
}

export default async function Home() {
  const seo = await getSeo()
  const { jsonLd } = seo.data

  const jsonLds = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    id: `${jsonLd.url}/`,
    legalName: jsonLd.name,
    name: jsonLd.name,
    sameAs: jsonLd.sameAs,
    url: jsonLd.url,
  }

  return (
    <>
      <HeroSection />
      <MotivationSection />
      <FloatingChat />
      <HowItWorksSection />
      <ExamplesSection />
      <IsRightForYouSection />
      <QualificationCheck />
      <GuaranteeSection />
      <WhyMettersSection />
      <ExplanationSection />
      <RichInfoSection />
      <Suspense>
        <BlogSection />
      </Suspense>
      <FAQs />
      <QuestionsSection />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLds).replace(/</g, '\\u003c'),
        }}
      />
    </>
  )
}
