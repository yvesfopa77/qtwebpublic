import React, { SyntheticEvent } from "react"

interface Props {
  icon: React.ReactElement
  title: string
  index: number
  current: number
  onClick: () => void
}

export default ({ icon, title, index, current, onClick }: Props) => {
  const active = index === current ? 'border-brand' : 'border-transparent'
  const onLink = index === current ? 'text-gray-600' : 'text-gray-400'

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault()
    onClick()
  }

  return (
    <li className={`block w-full md:w-1/4 lg:w-1/5 h-16 border-b-4 text-center pt-4 ${active}`}>
      <a
        href="/#"
        className={`text-base lg:text-lg font-normal ${onLink} hover:text-gray-600`}
        onClick={handleClick}
      >
        {icon}
        <span className="ml-4">{title}</span>
      </a>
    </li>
  )
}
