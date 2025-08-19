import {PropsWithChildren} from 'react'


export const Card = ({children}: PropsWithChildren) => (
  <div className="container bg-white cards-shadow rounded-xl p-5 flex flex-col gap-5 justify-center">
    {children}
  </div>
)
