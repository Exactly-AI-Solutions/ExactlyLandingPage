import { ReactNode } from 'react'
import {Typography} from '.'

type Prop = {
  icon: ReactNode
  text: string
}

export const Guarantee = ({ icon, text }: Prop) => (
  <div className="cards-shadow py-2 px-3 rounded-lg flex gap-3 items-center"><div className='grow-1'>{icon}</div>
  <Typography>{text}</Typography>
  </div>
)
