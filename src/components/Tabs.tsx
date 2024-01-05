import React, { useState } from "react"

import Tab from "./Tab"

export default () => {
  const [current, setCurrent] = useState(1);

  return (
    <>
      <div className="tabs-container bg-white shadow-xl h-16">
        <div className="container mx-auto lg:px-6 overflow-x-scroll">
          <ul className="tabs flex lg:items-center lg:justify-between">
            <Tab
              icon={<span className="icon-phone" />}
              title="Phone Verification"
              index={1}
              current={current}
              onClick={() => setCurrent(1)}
            />
            <Tab
              icon={(
                <span className="icon-identity">
                  <span className="path1" />
                  <span className="path2" />
                </span>
              )}
              title="Identity Verification"
              index={2}
              current={current}
              onClick={() => setCurrent(2)}
            />
            <Tab
              icon={(
                <span className="icon-face-scan">
                  <span className="path1" />
                  <span className="path2" />
                </span>
              )}
              title="Anti-Spoofing"
              index={3}
              current={current}
              onClick={() => setCurrent(3)}
            />
            <Tab
              icon={(
                <span className="icon-video-call">
                  <span className="path1" />
                  <span className="path2" />
                </span>
              )}
              title="Video Interview"
              index={4}
              current={current}
              onClick={() => setCurrent(4)}
            />
          </ul>
        </div>
      </div>
      <div className="content-tab pt-16">
        <div className="container m-auto">
          <div className={`content-tab-one px-6 ${current === 1 ? "block lg:flex" : "hidden"}`}>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src={require("../assets/images/1-phone-verification.png")} alt="Phone verification" />
            </div>
            <div className="w-full lg:w-1/2 pt-12 text-gray-600 lg:pl-16">
              <p>
                The human face is a dynamic object and has a high degree of variability in its appearance,
                which makes face detection a difficult problem in computer vision. Qognitiv face detection
                system achieves the task regardless of illumination, orientation, and camera distance.
                Qognitiv liveness detector is capable of spotting fake faces and performing anti-face spoofing
                in face recognition systems.
              </p>
            </div>
          </div>
          <div className={`content-tab-one px-6 ${current === 2 ? "block lg:flex" : "hidden"}`}>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src={require("../assets/images/2-identity-verification.png")} alt="Identity verification" />
            </div>
            <div className="w-full lg:w-1/2 pt-12 text-gray-600 lg:pl-16">
              <p>
                Every country has its own requirements that bank accounts must meet, regardless of the country,
                he broad requirements are collecting information about the individual and verifying the information
                is accurate. Qognitiv combine "KYC" identification practices and biometric enrollment to eliminate
                the risk that banking application face when customer's phones are lost or stolen.
              </p>
            </div>
          </div>
          <div className={`content-tab-one px-6 ${current === 3 ? "block lg:flex" : "hidden"}`}>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src={require("../assets/images/3-anti-spoofing.png")} alt="Anti spoofing" />
            </div>
            <div className="w-full lg:w-1/2 pt-12 text-gray-600 lg:pl-16">
              <p>
                Banking applications using face recognition are highly exposed to online fraud and identity theft each day,
                Qognitiv banking uses advanced anti-spoofing artificial intelligence techniques to avoid such compromission.
                Anti-spoofing liveness detection is required especially in unsupervised authentication situations. Qognitiv
                banking prevents sophisticated spoofing challenges from replay attacks and determine the user's presence.
              </p>
            </div>
          </div>
          <div className={`content-tab-one px-6 ${current === 4 ? "block lg:flex" : "hidden"}`}>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src={require("../assets/images/4-interview.png")} alt="Interview" />
            </div>
            <div className="w-full lg:w-1/2 pt-12 text-gray-600 lg:pl-16">
              <p>
                Both human and bot interview can be conducted to validate customer onboarding request. This add an extra layer
                of security and provide confidence to the both bank and customer. Interviews are continuously by Qognitiv banking
                artificial intelligence algorithm to constantly improve security and customer experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
