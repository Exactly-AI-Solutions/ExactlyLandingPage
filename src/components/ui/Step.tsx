import {
  ChevronIcon,
  Dark1Icon,
  Dark2Icon,
  Dark3Icon,
  Dark4Icon,
} from '../icons'
import Typography from './Typography'

interface Props {
  stepNumber: number
  title: string
  description: string
}

const getIcon = (stepNumber: number) => {
  switch (stepNumber) {
    case 1:
      return <Dark1Icon width={20} height={20} fill="var(--color-blue-04)" />
    case 2:
      return <Dark2Icon width={20} height={20} fill="var(--color-blue-04)" />
    case 3:
      return <Dark3Icon width={20} height={20} fill="var(--color-blue-04)" />
    case 4:
      return <Dark4Icon width={20} height={20} fill="var(--color-blue-04)" />
    default:
      return <Dark1Icon width={20} height={20} fill="var(--color-blue-04)" />
  }
}

export const Step = ({ stepNumber, title, description }: Props) => (
  <div className="rounded-lg border-1 border-slate-02 p-4 w-full">
    <div className="flex items-center justify-between gap-2 mb-[60px]">
      <div className="rounded-lg border-1 border-slate-02 p-2 gap-2 flex items-center">
        <Typography size="body" weight="medium">
          Step
        </Typography>
        {getIcon(stepNumber)}
      </div>
      <ChevronIcon width={20} height={20} fill="var(--color-blue-04)" />
    </div>
    <Typography size="bodyXL" weight="medium" className="mb-2">
      {title}
    </Typography>
    <Typography size="body" weight="regular" color="slate07">
      {description}
    </Typography>
  </div>
)
