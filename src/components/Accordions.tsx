import React, { useState, useEffect } from "react"

import Accordion from "./Accordion"

export default () => {
  const [current, setCurrent] = useState(1)
  const [selected, setSelected] = useState(1)

  const select = (index: number) => {
    setCurrent(index)
    setSelected(index)
  }

  useEffect(() => {
    select(1);
  }, [])

  return (
    <div className="flex lg:pb-20">
      <div className="px-6 lg:w-5/12">
        <div className="accordion pt-2 pb-4">
          <Accordion
            index={1}
            current={current}
            title="Facial Recognition"
            content={`
              The human face is a dynamic object and has a high degree of
              variability in its appearance, which makes face detection a
              difficult problem in computer vision. Qognitiv face detection
              system achieves the task regardless of illumination, orientation,
              and camera distance. Qognitiv liveness detector is capable of
              spotting fake faces and performing anti-face spoofing in face
              recognition systems.
            `}
            onPress={() => select(1)}
          />
          <Accordion
            index={2}
            current={current}
            title="Artificial Intelligence"
            content={`
              Artificial intelligence (AI) and Machine learning are taking the place
              of a human analyst very fast as inaccuracies which are involved in human
              selection may be very costly. Qognitiv AI is built upon machine learning
              which learns over time, less possibility of mistake and analyzing vast
              volumes of data to provide risk assessment and fraud detection and management services.
            `}
            onPress={() => select(2)}
          />
          <Accordion
            index={3}
            current={current}
            title="Blockchain"
            content={`
              Know Your Customer (KYC), transactions, smart contracts and secure money transfer
              remittance relies on our in-house blockchain system which uses current state-of-the-art
              blockchain implementation, allowing secure transactions with external parties like money
              transfer services or mobile money partners.
            `}
            onPress={() => select(3)}
          />
        </div>
      </div>
      <div className="hidden lg:block lg:w-2/12" />
      <div className="hidden lg:block lg:w-5/12">
        {selected === 1 && (
          <img
            src={require("../assets/images/facial-recognition.svg")}
            alt="Facial"
          />
        )}
        {selected === 2 && (
          <img src={require("../assets/images/ai.svg")} alt="AI" />
        )}
        {selected === 3 && (
          <img
            src={require("../assets/images/blockchain.svg")}
            alt="Blockchain"
          />
        )}
      </div>
    </div>
  )
}
