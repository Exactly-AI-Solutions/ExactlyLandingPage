import { ReactNode } from 'react'
import Typography from './Typography'

type Prop = {
  icon: ReactNode
  title: string
  description: string
}

export const Explanation = ({ icon, title, description }: Prop) => (
  <div className="flex gap-5 items-center">
    <div className="cards-shadow w-16 h-16 rounded-lg flex justify-center items-center">
      {icon}
    </div>
    <div className="flex gap-1 flex-col">
      <Typography size="bodyXL" weight="medium">
        {title}
      </Typography>
      <Typography color="slate07">{description}</Typography>
    </div>
  </div>
)
