import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Button, Logo, Typography } from './ui'

export const Header = () => (
  <header className="p-5 shadow-md header-background flex items-center justify-between">
    <Logo width={230} height={40} fill="white" />
    <nav>
      <ul className="flex items-center justify-center gap-8">
        <li>
          <a href="/">
            <Typography size="bodyXL" color="white">
              Why
            </Typography>
          </a>
        </li>
        <li>
          <a href="/">
            <Typography size="bodyXL" color="white">
              What
            </Typography>
          </a>
        </li>
        <li>
          <a href="/">
            <Typography size="bodyXL" color="white">
              How
            </Typography>
          </a>
        </li>
      </ul>
    </nav>
    <Button hierarchy="accented-bold">Start conversation</Button>
  </header>
)
