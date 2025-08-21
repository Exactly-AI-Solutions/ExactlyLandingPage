import clsx from 'clsx';
import {PropsWithChildren} from 'react'

interface Props extends PropsWithChildren {
  className?: string;
}

export const Card = ({children, className}: Props) => (
  <div className={clsx("container bg-white cards-shadow rounded-xl px-5 py-5! flex flex-col gap-5 justify-center", className)}>
    {children}
  </div>
)
