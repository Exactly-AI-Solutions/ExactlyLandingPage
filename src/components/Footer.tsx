import Link from 'next/link'
import { EmailIcon, LinkedinIcon, Logo, PhoneCallIcon } from './icons'
import { Button, Typography } from './ui'
import { Input } from './ui/Input'

export const Footer = () => (
  <div className="pt-32 md:px-5 pb-10">
    <div className="container flex gap-10 flex-col md:flex-row justify-between max-w-[1180px] m-auto">
      <div className="flex flex-col gap-5 max-w-[366px]">
        <div className="w-[230px] md:w-[320px]">
          <Logo fill="black" />
        </div>
        <Typography size="bodyXL" color="slate07">
          Fully-managed AI servises with guaranteed results. Exactly how your
          business needs them
        </Typography>
        <div className="flex gap-10">
          <LinkedinIcon width={32} height={32} fill="var(--color-blue-04)" />
          <EmailIcon width={32} height={32} fill="var(--color-blue-04)" />
          <PhoneCallIcon width={32} height={32} fill="var(--color-blue-04)" />
        </div>
      </div>
      <div className="flex flex-wrap md:flex-col gap-5">
        <Typography size="h6" color="blue04" weight="semibold">
          Explore
        </Typography>
        <Link href="/#why">
          <Typography size="bodyXL" weight="medium">
            WHY
          </Typography>
        </Link>
        <Link href="/#what">
          <Typography size="bodyXL" weight="medium">
            WHAT
          </Typography>
        </Link>
        <Link href="/#how">
          <Typography size="bodyXL" weight="medium">
            HOW
          </Typography>
        </Link>
        <Link href="/#learn">
          <Typography size="bodyXL" weight="medium">
            LEARN
          </Typography>
        </Link>
        <Link href="/#chatbot">
          <Typography size="bodyXL" weight="medium">
            CHATBOT
          </Typography>
        </Link>
      </div>
      <form className="flex flex-col gap-5 w-full max-w-[366px]">
        <Typography size="h6" color="blue04" weight="semibold">
          Stay Connected
        </Typography>
        <Input name="email" placeholder="Enter your email" />
        <Button type="submit" size="large" className="w-full">
          Subscribe
        </Button>
      </form>
    </div>
    <div className="border-t-1 border-slate-05 pt-4 flex flex-col md:flex-row gap-4 items-center justify-between mt-10 px-5  max-w-[1180px] m-auto">
      <Typography color="slate07">
        Copyright © 2025 Exactly AI Solutions
      </Typography>
      <div className="flex justify-end gap-5">
        <a href="https://www.exactlyai.solutions/cookie-policy" target="_blank">
          <Typography color="slate07">Cookie Policy</Typography>
        </a>
        <Typography color="slate07" className="mx-2">
          |
        </Typography>
        <a
          href="https://www.exactlyai.solutions/privacy-policy"
          target="_blank"
        >
          <Typography color="slate07">Privacy Policy</Typography>
        </a>
        <Typography color="slate07" className="mx-2">
          |
        </Typography>
        <a
          href="https://www.exactlyai.solutions/terms-of-service"
          target="_blank"
        >
          <Typography color="slate07">Terms of Service</Typography>
        </a>
      </div>
    </div>
  </div>
)
