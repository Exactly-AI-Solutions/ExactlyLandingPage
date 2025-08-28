import { ReactNode } from 'react'
import Typography from './Typography'
import Button from './Button'

interface Props {
  icon: ReactNode
  title: string
  description: string
  buttonText: string
}

export const ExampleCard = ({
  icon,
  title,
  description,
  buttonText,
}: Props) => (
  <div className="p-4 flex flex-col justify-between gap-10 example-card-clamp">
    <div className="flex flex-col gap-10">
      <div className="w-16 min-w-5 h-16 min-h-5 flex items-center justify-center bg-white border-1 border-slate-02 grow-1 shrink-0">
        {icon}
      </div>
      <div>
        <Typography size="bodyXL" weight="medium" className="mb-2">
          {title}
        </Typography>
        <Typography size="body" weight="regular" color="slate07">
          {description}
        </Typography>
      </div>
    </div>

    <Button hierarchy="primary-stroke" className="w-full">
      {buttonText}
    </Button>
  </div>
)
