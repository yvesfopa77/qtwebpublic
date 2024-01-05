import React from "react"

interface Props {
  title: string
  subtitle: string
}

export default ({ subtitle, title }: Props) => {
  return (
    <div className="px-6 mb-5 text-center lg:mb-12">
      <h3 className="text-lg text-secondary font-bold mb-2 lg:text-3xl">
        {title}
      </h3>
      <h5 className="text-xs text-gray-600 lg:max-w-md lg:m-auto">
        {subtitle}
      </h5>
    </div>
  )
}
