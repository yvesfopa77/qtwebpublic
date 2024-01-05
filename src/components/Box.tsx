import React from "react"

interface Props {
  key?: number
  icon: React.ReactElement
  title: string
  description: string
  classList?: {
    boxClass?: string
    boxIconClass?: string
    boxBodyClass?: string
  }
}

const Box = ({ icon, title, description, classList }: Props) => {
  const { boxClass, boxIconClass, boxBodyClass } = classList

  return (
    <div className={boxClass} data-aos="fade-up">
      <div className="mr-4 lg:mb-4">
        <div className={`icon ${boxIconClass}`}>{icon}</div>
      </div>
      <div className={`box-body ${boxBodyClass}`}>
        <h4 className="text-secondary text-base mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

Box.defaultProps = {
  classList: {
    boxClass: `box flex rounded-lg mb-4`,
    boxIconClass: ``,
    boxBodyClass: ``,
  },
}

export default Box
