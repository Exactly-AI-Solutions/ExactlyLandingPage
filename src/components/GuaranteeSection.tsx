import {Guarantee} from './ui/Guarantee'
import { BagIcon, ChartIcon, MoneyIcon, TargetIcon, Typography } from './ui'

export const GuaranteeSection = () => (
  <div className="bg-slate-01 pt-32 md:pt-60 pb-32 px-5">
    <div className="container flex flex-col gap-10 justify-center items-center">
      <div>
        <Typography as="h2" size="h1" weight="medium" className="text-center">
          How We Guarantee Results
        </Typography>
        <Typography
          as="h2"
          size="h1"
          weight="medium"
          className="text-center mb-10"
          color="blue04"
        >
          (And Why Others Don&apos;t)
        </Typography>
      </div>
      <div className="max-w-[720px] m-auto">
        <Typography
          size="body"
          weight="regular"
          className="text-center"
          color="slate07"
        >
          Most AI companies won&apos;t guarantee outcomes because they can&apos;t control
          them. They sell tools, advice, or &ldquo;best practices&ldquo; — then hope for the
          best.
        </Typography>
      </div>
      <div className="max-w-[720px] m-auto">
        <Typography size="body" weight="regular" className="text-center">
          We&apos;re different. We don&apos;t just implement AI — we operate it, optimize
          it, and own the results.
        </Typography>
      </div>
      <Typography size="h6" weight="semibold" className="text-center">
        Our guarantee is simple:
      </Typography>
      <div className="flex gap-5 flex-col md:flex-row">
        <Guarantee icon={<BagIcon width={24} height={24} />} text="We make clear, measurable promises for your business" />
        <Guarantee icon={<ChartIcon width={24} height={24} />} text="You pay just 20% upfront to get started" />
        <Guarantee icon={<TargetIcon width={24} height={24} />} text="The remaining 80% is due only if we deliver" />
        <Guarantee icon={<MoneyIcon width={24} height={24} />} text="If we miss targets, you pay only for what we achieve" />
      </div>
    </div>
  </div>
)
