import Image from 'next/image'
import {
  Advantage,
  AiIcon,
  BrowserIcon,
  BuildingIcon,
  Button,
  Card,
  DesktopIcon,
  FilterIcon,
  MeetingIcon,
  MessagesIcon,
  ThinkingIcon,
  ToolsIcon,
  Typography,
} from './ui'
import { ReactNode } from 'react'

export const RichInfoSection = () => (
  <div className="px-5 py-32 md:py-60">
    <div className="container flex flex-col gap-10 justify-center items-center">
      <div className="max-w-[720px] m-auto text-center">
        <Typography size="h1" weight="medium">
          Chatbots That{' '}
          <Typography as="span" size="h1" weight="medium" color="blue04">
            Feel Human - and Convert
          </Typography>
        </Typography>
      </div>
      <div className="max-w-[720px] m-auto text-center">
        <Typography color="slate07">
          We custom-build and manage an AI chat agent trained on your products,
          site, and FAQs.<br /> Live on your site in 7-14 days with simple monthly
          pricing.
        </Typography>
      </div>
      <div className="max-w-[720px] m-auto flex flex-col gap-5">
        <Advantage text="Turn more clicks into conversations — the chatbot books demos, answers questions, and makes sure no lead slips away." />
        <Advantage text="Fewer drop-offs, more sign-ups — instant answers, easy demo booking, and a smooth human handoff mean more visitors become customers." />
        <Advantage text="Every question becomes an opportunity — instead of bouncing, visitors get what they need and move one step closer to saying “yes.”" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="cards-shadow rounded-xl p-5 flex flex-col md:flex-row gap-10 w-full">
          <div className="relative w-full min-w-[300px] max-w-[530px] aspect-square">
            <Image
              src="/girl.png"
              layout="responsive"
              width={530}
              height={510}
              alt="girl"
            />
          </div>
          <div>
            <Typography size="h6" weight="semibold" className="mb-5">
              What you Get:
            </Typography>
            <div className="flex flex-col gap-5">
              <InfoCard
                icon={<ThinkingIcon />}
                text="Custom-trained agent on your content, products, and policies"
              />
              <InfoCard
                icon={<AiIcon />}
                text="Booking & handoff: qualifies leads, schedules meetings, and hands to a human when needed"
              />
              <InfoCard
                icon={<DesktopIcon />}
                text="Continuous optimization: we monitor, improve, and update weekly"
              />
              <InfoCard
                icon={<MeetingIcon />}
                text="Integrations: website, help center, calendar, and your CRM"
              />
              <InfoCard
                icon={<ToolsIcon />}
                text="Analytics: conversations, qualified leads, and common questions in one dashboard"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cards-shadow rounded-xl p-5 flex flex-col md:flex-row gap-10 w-full items-center">
        <div className="w-full">
          <Typography size="h6" weight="semibold" className="mb-5">
            Perfect for:
          </Typography>
          <div className="flex flex-col gap-5">
            <InfoCard
              icon={<FilterIcon />}
              text="Teams that need conversions now (not in 4-6 months)"
            />
            <InfoCard
              icon={<BrowserIcon />}
              text="High-traffic pages with low conversion rates"
            />
            <InfoCard
              icon={<MessagesIcon />}
              text="Support teams buried in repetitive questions"
            />
            <InfoCard
              icon={<BuildingIcon />}
              text="Orgs piloting AI safely before a larger rollout"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="w-[260px] h-[88px] flex justify-center items-center border-2 border-yellow-06 rounded-full">
            TRY OUR CHATBOT
          </button>
        </div>
      </div>
      <Card className="flex flex-col items-center gap-5 p-10">
        <Typography size="h1" weight="medium" className="text-center">
          PRICING & TIMELINE
        </Typography>

        <Typography color="slate07" className="text-center">
          Transparent monthly plans — based on traffic and complexity.
          <br />
          Go live in 7-14 days.
        </Typography>
      </Card>
      <div className="flex justify-center gap-5 flex-col w-full">
        <Button className="w-full md:w-[400px]">Find out more</Button>
        <Button hierarchy="primary-stroke" className="w-full md:w-[400px]">
          Talk to our chatbot
        </Button>
      </div>
    </div>
  </div>
)

const InfoCard = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="flex gap-4 border-1 rounded-lg border-slate-02 p-4 items-center w-full">
    <div className="w-6 h-6 grow-1">{icon}</div>
    <Typography weight="medium" color="slate07">
      {text}
    </Typography>
  </div>
)
