import React, { useEffect } from "react"
// @ts-ignore
import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Title from "../components/Title"
import Tabs from "../components/Tabs"
import Box from "../components/Box"

const ProcessPage = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 10, // offset (in px) from the original trigger point
      delay: 10, // values from 0 to 3000, with step 50ms
      duration: 750, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
    });
  }, [])

  return (
    <Layout>
      <SEO title="Key Points" />
      <section className="bg-brand relative">
        <img
          src={require('../assets/images/process.svg')}
          alt="process"
          className="absolute right-0 pt-32 hidden lg:block"
        />
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-10 lg:py-24 lg:w-1/2">
            <Title
              title="What makes the difference with Qognitiv ?"
              description={`
                We have built Qognitiv banking to speed financial inclusion as this
                is one of the main key driving point in today’s economy.`}
              titleClass="text-3xl text-white lg:text-4xl"
              descriptionClass="text-gray-200"
            />
          </div>
        </div>
      </section>
      <section className="onboarding mt-12 lg:my-24">
        <div className="relative md:w-2/3 lg:w-1/2 m-auto flex items-center">
          <svg
            className="absolute right-0 h-24 w-24"
            viewBox="0 0 104 104"
            xmlns="http://www.w3.org/2000/svg"
            style={{ top: "-30%", right: "30%" }}
          >
            <defs>
              <linearGradient x1="50%" y1="19.737%" x2="64.563%" y2="95.988%" id="a">
                <stop stopColor="#55CFFF" offset="0%" />
                <stop stopColor="#006D86" offset="100%" />
              </linearGradient>
            </defs>
            <circle cx="1023" cy="479" r="52" transform="translate(-971 -427)" fill="url(#a)" fillOpacity=".26" />
          </svg>
          <Title
            title="Fully automated secured customer onboarding"
            description="First class biometric security and smart process for seamless customer onboarding."
            className="mb-8 lg:mb-16 lg:flex lg:flex-col lg:items-center text-center"
            titleClass="text-3xl text-secondary text-center"
            descriptionClass="text-gray-500"
          />
          <svg className="absolute w-12 h-12" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.658 0L30.315 11.66 18.657 30.316 0 18.658z" fill="#1ABFF0" />
          </svg>
          <svg
            className="absolute h-10 w-6"
            viewBox="0 0 40 20"
            style={{ bottom: "10px", right: "10%" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 0L0 21h37z" fill="#F06E9A" />
          </svg>
        </div>
        <Tabs />
      </section>
      <section className="process px-6 lg:mb-20">
        <Title
          title="Other key points"
          description=""
          className="mb-8 lg:mb-16 lg:flex lg:flex-col lg:items-center text-center"
          titleClass="text-3xl text-secondary text-center"
          descriptionClass="text-gray-500"
        />
        <div className="container mx-auto">
          <div className="flex flex-wrap relative z-20">
            <Box
              icon={(
                <span className="icon-application">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                </span>
              )}
              title="Augmented Bank officer with Qognitiv virtual bank officer desk"
              description={`
                Artificial intelligence assisting bank officer, improving efficiency and better customer experience
              `}
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 lg:flex-col lg:p-8`,
              }}
            />
            <Box
              icon={(
                <span className="icon-financial">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                </span>
              )}
              title="Open cross border financial services to your customers"
              description={`
                From strong KYC to worldwide trust, seamless access to cross border financial services
              `}
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 lg:flex-col lg:p-8`,
              }}
            />
            <Box
              icon={<span className="icon-museum" />}
              title="Low investment cost, extremely low operational cost per account per year"
              description={`
                Less than 1$ / year average bank account operational costs
              `}
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 lg:flex-col lg:p-8`,
              }}
            />
            <Box
              icon={(
                <span className="icon-application">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                </span>
              )}
              title="Smart user experience"
              description="Voice recognition and natural language processing supporting your region language accent"
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 lg:flex-col lg:p-8`,
              }}
            />
            <Box
              icon={(
                <span className="icon-financial">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                </span>
              )}
              title="Financial education"
              description="Educate your customer to reach their financial goals with easy to understand credit scoring"
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 lg:flex-col lg:p-8`,
              }}
            />
            <Box
              icon={<span className="icon-museum" />}
              title="Emerging markets"
              description="Out-of-the box special features for emerging markets like mobile money integration and many others"
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 lg:flex-col lg:p-8`,
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProcessPage
