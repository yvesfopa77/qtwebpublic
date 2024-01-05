import React from "react"

interface Props {
  title: string
  content: string
  index: number
  current: number
  onPress: (key: number) => void
}

export default ({ title, content, index, current, onPress }: Props) => {
  return (
    <div className="accordion pt-2 pb-4">
      <div
        className="accordion-header cursor-pointer flex items-center justify-between"
        onClick={() => onPress(index)}
        onKeyPress={() => onPress(index)}
      >
        <div className="flex items-center">
          <svg
            className={`bubble fill-current text-brand h-3 w-3 ${
              index === current ? "svg" : ""
            }`}
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="12" r="4" transform="translate(0 -8)" />
          </svg>
          <span
            className={`font-medium text-base lg:text-xl ${
              index === current ? "ml-3 text-gray-900 " : "text-gray-600 "
            }`}
          >
            {title}
          </span>
        </div>
        {index !== current && (
          <div>
            <span className="bg-gray-400 flex items-center justify-center p-1 w-6 h-6 rounded-lg">
              <svg width="8" height="14" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.876 0l6.705 6.57L8 7l-.42.43L.877 14 0 13.141 6.266 7 0 .859z"
                  fill="#67758D"
                />
              </svg>
            </span>
          </div>
        )}
      </div>
      <div
        className={`accordion-body ${
          index === current ? "accordion-display" : "accordion-hidden"
        }`}
      >
        <p className="mt-3 text-gray-600 text-sm lg:pr-8">{content}</p>
      </div>
    </div>
  )
}
