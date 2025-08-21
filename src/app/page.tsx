import {ExamplesSection} from '@/components/ExamplesSection';
import {ExplanationSection} from '@/components/ExplanationSection';
import {FAQs} from '@/components/FAQs';
import {FloatingChat} from '@/components/FloatingChat';
import {Footer} from '@/components/Footer';
import {GuaranteeSection} from '@/components/GuaranteeSection';
import {HeroSection} from '@/components/HeroSection';
import {HowItWorksSection} from '@/components/HowItWorksSection';
import {IsRightForYouSection} from '@/components/IsRightForYouSection';
import {MotivationSection} from '@/components/MotivationSection';
import {QualificationCheck} from '@/components/QualificationCheck';
import {QuestionsSection} from '@/components/QuestionsSection';
import {RichInfoSection} from '@/components/RichInfoSection';
import {WhyMettersSection} from '@/components/WhyMettersSection';


export default function Home() {
  
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
   <FAQs />
   <QuestionsSection />
   <Footer />
   </>
  )
}
