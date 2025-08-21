import { Typography } from './ui'

export const IsRightForYouSection = () => (
  <div className="pt-32 md:pt-60 pb-32 px-5">
    <div className="max-w-[720px] m-auto">
      <Typography as="h2" size="h1" weight="medium" className="text-center">
        Is Exactly AI Right for You?
      </Typography>
      <Typography
        size="body"
        weight="regular"
        className="text-center mt-10"
        color="slate07"
      >
        We're built for growing B2B companies doing $10M-$1B in revenue, or
        funded startups with serious growth potential. If you're trying to scale
        without bloating your team, we're your secret weapon.
      </Typography>
    </div>
  </div>
)
