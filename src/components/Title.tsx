import React from "react"

interface Props {
  subtitle?: string
  title: string
  description: string
  className?: string
  titleClass?: string
  descriptionClass?: string
}

export default ({
  subtitle,
  title,
  description,
  className,
  titleClass,
  descriptionClass,
}: Props) => {
  return (
    <div className={`px-6 mb-5 ${className || ""}`} data-aos="fade-up">
      {subtitle && (
        <small className="uppercase text-secondary lg:text-sm">
          {subtitle}
        </small>
      )}
      <h1
        className={`text-3xl font-medium mb-2 ${titleClass ||
          ""}`}
      >
        {title}
      </h1>
      <p
        className={`text-sm lg:text-base lg:max-w-xl ${descriptionClass ||
          ""}`}
      >
        {description}
      </p>
    </div>
  )
}
