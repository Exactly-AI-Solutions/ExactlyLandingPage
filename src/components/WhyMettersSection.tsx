import {
  GrowIcon,
  PrizeIcon,
  SettingsIcon,
  Typography,
  UserSettingsIcon,
} from './ui'
import { Explanation } from './ui/Explanation'

export const WhyMettersSection = () => (
  <div className="bg-slate-01 pt-60 pb-32 px-5">
    <div className="container flex flex-col gap-10 justify-center items-center">
      <Typography as="h2" size="h1" weight="medium" className="text-center">
        Why this Matters for you:
      </Typography>
      <div className="grid grid-cols-2 gap-10">
        <Explanation
          icon={<SettingsIcon width={40} height={40} />}
          title="Zero execution risk"
          description="We handle strategy, execution, and optimization end to end"
        />
        <Explanation
          icon={<PrizeIcon width={40} height={40} />}
          title="Aligned incentives"
          description="We only win when you grow and hit real business results"
        />
        <Explanation
          icon={<GrowIcon width={40} height={40} />}
          title="Predictable ROI"
          description="You know exactly what success looks like before we start"
        />
        <Explanation
          icon={<UserSettingsIcon width={40} height={40} />}
          title="No vendor management"
          description="One partner, full accountability across all outcomes"
        />
      </div>
      <div className="max-w-[720px] m-auto text-center">
        <Typography color='slate07'>Our AI agents learn with every engagement, improving over time. We focus on real business outcomes - not vanity metrics to deliver predictable, guaranteed results.</Typography>
    </div>
  </div>
  </div>
)
