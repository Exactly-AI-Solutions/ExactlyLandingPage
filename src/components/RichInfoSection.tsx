import Image from 'next/image'
import {
  AiIcon,
  BrowserIcon,
  BuildingIcon,
  Button,
  Card,
  DesktopIcon,
  FilterIcon,
  MeetingIcon,
  MessagesIcon,
  PriceIcon,
  ThinkingIcon,
  TimeIcon,
  ToolsIcon,
  Typography,
} from './ui'
import { ReactNode } from 'react'

export const RichInfoSection = () => (
  <div className="px-5 py-60">
    <div className="container flex flex-col gap-10 justify-center items-center">
      <div className="w-[720px] m-auto text-center">
        <Typography size="h1" weight="medium">
          Need a Chatbot That Feels Like{' '}
          <Typography as="span" size="h1" weight="medium" color="blue04">
            Talking to a Real Person?
          </Typography>
        </Typography>
      </div>
      <div className="w-[720px] m-auto text-center">
        <Typography color="slate07">
          Unlike our other services, our DFY chatbots are available immediately
          with simple monthly pricing.
        </Typography>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="cards-shadow rounded-xl p-5 flex flex-col gap-10">
          <Image src="/girl.png" width={530} height={530} alt="girl" />
          <Typography size="h6" weight="semibold">
            What you Get:
          </Typography>
          <div className="flex flex-col gap-5">
            <InfoCard
              icon={<ThinkingIcon />}
              text="Experience conversations that feel natural and personal - our AI chatbots understand you like a real friend would"
            />
            <InfoCard
              icon={<AiIcon />}
              text="Custom-built AI agent trained on your business, products, and customer data"
            />
            <InfoCard
              icon={<DesktopIcon />}
              text="Ongoing optimization — we monitor, improve, and update constantly"
            />
            <InfoCard
              icon={<MeetingIcon />}
              text="Lead qualification & scheduling — your chatbot books meetings automatically"
            />
            <InfoCard
              icon={<ToolsIcon />}
              text="Human handoff protocols — seamless transitions when needed"
            />
          </div>
        </div>
        <div className="cards-shadow rounded-xl p-5 flex flex-col gap-10">
          <Image src="/growth.png" width={530} height={530} alt="growth" />
          <Typography size="h6" weight="semibold">
            Perfect for:
          </Typography>
          <div className="flex flex-col gap-5">
            <InfoCard
              icon={<FilterIcon />}
              text="Companies that need conversions now - not in 4 to 6 months"
            />
            <InfoCard
              icon={<BrowserIcon />}
              text="Businesses with high website traffic but low conversion rates"
            />
            <InfoCard
              icon={<MessagesIcon />}
              text="Teams overwhelmed by constant, repetitive customer questions"
            />
            <InfoCard
              icon={<BuildingIcon />}
              text="Organizations wanting to test AI capabilities before larger commitments"
            />
          </div>
        </div>
      </div>
      <Card className="grid grid-cols-2 gap-10 p-10">
        <div className="flex flex-col gap-5">
          <div className="flex gap-1 items-center">
            <div className="w-6 h-6">
              <PriceIcon />
            </div>
            <Typography size="h6" weight="semibold">
              Pricing:
            </Typography>
          </div>
          <Typography color="slate07">
            Simple monthly fee based on traffic and complexity.
          </Typography>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-1 items-center">
            <div className="w-6 h-6">
              <TimeIcon />
            </div>
            <Typography size="h6" weight="semibold">
              Timeline:
            </Typography>
          </div>
          <Typography color="slate07">
            Live on your site in 7-14 days.
          </Typography>
        </div>
      </Card>
    <div className="flex justify-center gap-5">
      <Button className="w-[390px]">Experience our chatbot</Button>
      <Button hierarchy="primary-stroke" className="w-[390px]">
        Get Pricing for your Site
      </Button>
    </div>
    </div>
  </div>
)

const InfoCard = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="flex gap-4 border-1 rounded-lg border-slate-02 p-4 items-center">
    <div className="w-6 h-6 grow-1">{icon}</div>
    <Typography weight="medium" color="slate07">
      {text}
    </Typography>
  </div>
)
