import Image from 'next/image'
import { Advantage, Button, Card, Typography } from './ui'

export const QualificationCheck = () => (
  <div className="two-colors-background p-5">
    <Card className="grid gap-10 grid-cols-1 md:grid-cols-2 py-5!">
      <Image src="/robot.png" width={460} height={460} alt="robot" />
      <div className="flex flex-col gap-10 w-full">
        <Typography as="h6" size="h6" weight="semibold">
          Quick Qualification Check
        </Typography>
        <div className="flex flex-col gap-5">
          <Advantage text="B2B company with growth ambitions?" />
          <Advantage text="Doing outbound sales (or want to start)?" />
          <Advantage text="Want results without hiring entire teams?" />
          <Advantage text="Believe AI is the future but need execution help?" />
          <Advantage text="Tired of tools that promise everything and deliver little?" />
        </div>
        <div className="flex gap-5 flex-col md:flex-row items-center">
          <Typography size="body" color="slate07" weight="regular">
            If you mentally checked all (or most) of the above, maybe we should
            talk.
          </Typography>
          <Button size="large" className="w-full md:w-max grow shrink-0 height-[48px]">
            Book a Consultation
          </Button>
        </div>
      </div>
    </Card>
  </div>
)
