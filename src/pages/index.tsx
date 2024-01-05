import React, { useEffect } from "react"
import Typed from "react-typed"
import useModal from "use-react-modal";
// @ts-ignore
import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Box from "../components/Box"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Accordions from "../components/Accordions"
import Carousel from "../components/Carousel"
import Video from "../components/Video"

const IndexPage = () => {
  const { openModal, closeModal, isOpen, Modal } = useModal({ background: "rgba(0, 0, 0, 0.5)" })

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
      <SEO title="Qognitiv" />
      <section className="banner relative sm:px-12 lg:pt-16">
        <div className="ocean hidden lg:block">
          <div className="wave" />
          <div className="wave" />
        </div>
        <div className="container mx-auto">
          <h1 className="text-white font-medium mb-8 text-2xl lg:font-semibold lg:text-4xl">
            360° white label digital banking{" "}
            <br className="hidden sm:block lg:hidden" />
            <Typed
              strings={["Platform", "Mobile App"]}
              typeSpeed={100}
              backSpeed={70}
              loop
            />
          </h1>
          <p className="text-white text-md font-normal text-gray-200 mb-8 sm:mb-6">
            Commercial banks, Fin-techs, bootstrap your digital deployment with
            state-of-the-art ready to use and highly customizable platform and
            drastically shorten your time to market.
          </p>
          <button
            className="bg-transparent text-white py-2 px-4 rounded-full border-white border inline-flex items-center focus:outline-none"
            type="button"
            onClick={openModal}
          >
            <svg
              className="fill-current mr-2"
              width="23"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={`M21.727 7.008a11.986 11.986 0 00-3.396-4.163.455.455 0 00-.655.103.502.502 0 00.098.683 11.015 11.015 0
                013.121 3.824 11.287 11.287 0 011.169 5.045c0 6.078-4.74 11.023-10.564 11.023C5.675 23.523.936 18.578.936
                12.5c0-6.078 4.74-11.023 10.564-11.023a.479.479 0 00.468-.489c0-.27-.21-.488-.468-.488C5.159.5 0 5.883 0
                12.5s5.159 12 11.5 12S23 19.117 23 12.5c0-1.908-.44-3.808-1.273-5.492z
                `}
              />
              <path d={`
                M8.231 7.565A.512.512 0 008 8.001V19c0 .277.205.501.457.501s.457-.224.457-.501V8.883l6.762 4.417-4.973 3.515a.531.531
                0 00-.136.692c.136.233.419.3.631.15l5.593-3.953a.516.516 0 00.209-.43.512.512 0 00-.223-.422L8.69 7.57a.422.422 0
                00-.459-.005z
              `}
              />
            </svg>
            <span className="text-white">Watch Video</span>
          </button>
          <div className="illustration">
            <img
              src={require("../assets/images/illustration.png")}
              alt="Admin panel - Mobile App"
              className="sm:w-full sm:mr-12"
            />
          </div>
        </div>
      </section>

      <section id="features" className="features px-6 lg:mb-20">
        <Title
          subtitle="Our software stack"
          title="Core features"
          description="Achieve operational excellence from day one without any additional development."
          className="lg:mb-16 lg:flex lg:flex-col lg:items-center text-center"
          titleClass="text-secondary lg:text-5xl"
          descriptionClass="text-gray-500"
        />
        <div className="container mx-auto">
          <svg
            className="hidden lg:inline feature-bubble absolute z-10"
            style={{ left: "-154px" }}
            width="399"
            height="345"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="92.714%"
                y1="32.365%"
                x2="36.336%"
                y2="53.797%"
                id="a"
              >
                <stop stopColor="#00FFE5" stopOpacity=".5" offset="0%" />
                <stop stopColor="#008927" stopOpacity=".5" offset="100%" />
              </linearGradient>
            </defs>
            <path
              d={`M402.958 1197.377c0-99.036 87.423-200.152-59.821-208.055-147.244-7.903-345.756
                14.49-302.343 125.168 43.412 110.677 143.728 134.606 196.396
                100.023 52.667-34.584 51.48 6.947 78.713 38.767 27.234 31.82 87.055 43.134 87.055-55.903z
              `}
              transform="rotate(-39 -1088.104 721.716)"
              fill="url(#a)"
              fillOpacity=".29"
            />
          </svg>
          <div className="flex flex-wrap relative z-20">
            <Box
              icon={(
                <span className="icon-application">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                </span>
              )}
              title="Mobile Application"
              description={`
                Fully automated client on boarding, authentication through Face
                and Voice Recognition biometrics used to strengthen security,
                Realtime video chat with bank officers.
              `}
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 lg:flex-col lg:p-8`,
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
              title="Administration"
              description={`
                On boarding management, Customers management, KYC and compliance
                automated processes. Credit applications collection and risk
                assessment management, advanced analytics and reporting.
              `}
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 lg:flex-col lg:p-8`,
              }}
            />
            <Box
              icon={<span className="icon-museum" />}
              title="Core Banking"
              description={`
                Manage digital services exposed to your clients. Integration with your
                existing core banking solution is done via secured API allowing export
                and import data between Qognitiv back office and your core banking software.
              `}
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 lg:flex-col lg:p-8`,
              }}
            />
            <Box
              icon={(
                <svg width="27" height="28" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d={`M20.723 0c1.51 0 2.74 1.399 2.755 3.108v2.068c0 .413-.295.748-.66.748-.365
                      0-.66-.335-.66-.748V3.108c0-.894-.64-1.618-1.43-1.618H5.613c-.79 0-1.429.724-1.429
                      1.618V17.29l1.74-1.97a.602.602 0 01.93 0 .812.812 0 010 1.052L3.99 19.614a.618.618
                      0 01-.467.22.618.618 0 01-.467-.22L.193 16.373a.812.812 0 010-1.052.602.602
                      0 01.93 0l1.734 1.964V3.108C2.857 1.393 4.087 0 5.6 0h15.122zm2.296 8.377a.613.613
                      0 01.924 0l2.864 3.244a.813.813 0 010 1.053.602.602 0 01-.93 0l-1.74-1.972V24.89c0
                      1.716-1.23 3.11-2.746 3.11H6.267c-1.515 0-2.745-1.394-2.745-3.11v-2.07c0-.414.295-.748.66-.748.366
                      0 .661.334.661.748v2.07c0 .894.64 1.619 1.43 1.619h15.129c.79 0
                      1.429-.725 1.429-1.62V10.703l-1.74 1.972a.618.618 0 01-.468.219.618.618 0 01-.468-.22.813.813
                      0 010-1.052l2.864-3.244zm-10.103-.21c.425 0 .763.325.769.722V10h1.412c.425
                      0 .77.325.77.728 0 .402-.345.727-.77.727h-3.043c-.619 0-1.125.539-1.125 1.196 0 .656.506
                      1.195 1.125 1.195h1.725a2.653 2.653 0 012.656 2.644 2.652 2.652 0 01-2.619
                      2.645h-.131v1.136c0 .403-.344.728-.769.728-.425 0-.769-.325-.769-.728v-1.13h-1.474c-.425
                      0-.77-.325-.77-.728 0-.402.345-.727.77-.727h3.1c.618 0 1.124-.533 1.124-1.196
                      0-.656-.506-1.195-1.125-1.195h-1.725a2.657 2.657 0 01-2.656-2.644 2.657 2.657 0
                      012.656-2.645h.1V8.894c0-.402.344-.727.77-.727z
                    `}
                    fill="#405467"
                  />
                </svg>
              )}
              title="Money Transfer"
              description={`
                Allow your customer to use worldwide famous money transfer services
                like Western Union, MoneyGram, RIA and others directly from the
                mobile application, increasing customers acquisition and engagement.
              `}
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 lg:flex-col lg:p-8`,
              }}
            />
          </div>
          <div className="flex flex-wrap relative z-20">
            <Box
              icon={(
                <img
                  src={require("../assets/icons/mobile-money.svg")}
                  alt="bill payment"
                />
              )}
              title="Mobile Money"
              description={`
                Provide cash in and cash out services via connection with mobile money wallets, contributing in bank
                account deposit adoption and mobile money wallet fraud reduction due to extra layer of security for
                mobile money wallet protection.
              `}
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 lg:flex-col lg:p-8`,
              }}
            />
            <Box
              icon={(
                <img
                  src={require("../assets/icons/bill.svg")}
                  alt="bill payment"
                />
              )}
              title="Bill Payment"
              description={`
                Qognitiv smart partner integration allows you to declaratively integrate any
                partner who want to provide bill or service payment to your mobile customers.
                This reduce time to market and simplify partner management.
              `}
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 lg:flex-col lg:p-8`,
              }}
            />
            <Box
              icon={(
                <span className="icon-fraud">
                  <span className="path1" />
                  <span className="path2" />
                </span>
              )}
              title="Fraud Detection"
              description={`
                Qognitiv fraud detection uses advanced in-house artificial intelligence algorithms to predict
                fraudulent transactions. using constantly improved model, the accuracy of fraud detection is
                maintained at a high value among best market standards.
              `}
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 lg:flex-col lg:p-8`,
              }}
            />
            <Box
              icon={(
                <span className="icon-micro-credit">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                </span>
              )}
              title="Micro Credits"
              description={`
                Qognitiv micro credit management allows your financial institution to automatically collect
                and run data mining on diverse sources, provide customer credit risk score using our
                artificial intelligence algorithms.
              `}
              classList={{
                boxClass: `box box-hover flex rounded-lg mb-4 sm:mb-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 lg:flex-col lg:p-8`,
              }}
            />
          </div>
        </div>
        <svg
          className="hidden lg:inline feature-circle absolute z-10"
          style={{ top: "20px", right: "-50px" }}
          width="264"
          height="264"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="19.737%"
              x2="64.563%"
              y2="95.988%"
              id="a"
            >
              <stop stopColor="#55CFFF" offset="0%" />
              <stop stopColor="#006D86" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            cx="1252"
            cy="1729"
            r="132"
            transform="translate(-1120 -1597)"
            fill="url(#a)"
            fillOpacity=".4"
          />
        </svg>
      </section>

      <section className="about-section bg-white py-16">
        <div className="container mx-auto">
          <div className="about-content flex flex-col lg:flex-row lg:items-center">
            <div className="px-6 lg:w-2/6" data-aos="fade-right">
              <h2 className="text-2xl text-secondary font-bold">
                Why Qognitiv
              </h2>
              <small className="text-xs text-secondary">
                Digital Bank Stack
              </small>
              <p className="text-gray-600 text-sm mt-4">
                Qognitiv suite is a financial inclusion accelerator provider to retail banking
                and fintech using state of the art digital technologies with main focus on
                emerging markets.
              </p>
            </div>
            <div className="md:mt-4 lg:w-4/6">
              <div className="px-6 md:flex md:mb-4">
                <Box
                  icon={<span className="icon-rocket" />}
                  title="Data privacy"
                  description={`
                    Data protection and control is critical in banking industry. Qognitiv is deployed on
                    your dedicated infrastructure and provides you full control on your customer data as
                    no public cloud software is needed to run the software, all artificial intelligence
                    algorithms are on premise solution without any third party requirement to run.
                  `}
                  classList={{
                    boxClass: `box flex mb-4 md:w-1/2`,
                  }}
                />
                <Box
                  icon={<span className="icon-modules" />}
                  title="Low capex and opex costs"
                  description={`
                    The conjunction of our powerful artificial intelligence algorithms and human
                    experience driven by bank officer drastically increases the customer management
                    per bank officer ratio, lowering to less than 1$ / year average bank account
                    operational costs, increasing bank account adoption democratization.
                  `}
                  classList={{
                    boxClass: `box flex mb-4 md:w-1/2`,
                  }}
                />
              </div>
              <div className="px-6 md:flex">
                <Box
                  icon={<span className="icon-advertising" />}
                  title="Business alignment"
                  description={`
                    Qognitiv stack has been designed to be completely modular allowing your institution
                    to deploy only required services. Our high class level API provides a powerful
                    interface to your own IT team to interact with Qognitiv suite and align your
                    digital bank with your business strategy.
                  `}
                  classList={{
                    boxClass: `box flex mb-4 md:w-1/2`,
                  }}
                />
                <Box
                  icon={<span className="icon-facial-recognition" />}
                  title="Financial education"
                  description={`
                    Qognitiv carries out a high value added financial learning and savings education solution
                    for unbanked and underbanked people, using social science and artificial intelligence
                    algorithms to propose new modes of engagement using our smart assistant.
                  `}
                  classList={{
                    boxClass: `box flex mb-4 md:w-1/2`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className="technologies mt-20 mb-20">
        <Title
          title="State of the art today’s technologies"
          description="Achieve operational excellence from day one without any additional development."
          className="mb-10 text-center lg:mb-16 lg:flex lg:flex-col lg:items-center"
          titleClass="text-secondary lg:text-5xl"
          descriptionClass="text-gray-500"
        />
        <div className="container mx-auto">
          <Accordions />
        </div>
      </section>

      <section className="branding pb-20">
        <div className="container mx-auto">
          <Title
            title="Your own brand"
            description={`
              Qognitiv Android and IOS mobiles applications are  developed to handle large
              scale deployment, from UI/UX point of view, this has been achieved by building
              our own UI components. The styles are the factored out to be DRY.
            `}
            className="text-left mb-12"
            titleClass="text-secondary lg:text-5xl"
            descriptionClass="text-gray-500"
          />
        </div>
        <div className="app-views relative overflow-hidden">
          <div className="app-images relative z-20 overflow-auto flex px-6 mb-4">
            <img
              className="h-64 mr-3"
              src={require("../assets/images/app/app-2.png")}
              alt="app"
            />
            <img
              className="h-64 mr-3"
              src={require("../assets/images/app/app.png")}
              alt="app"
            />
            <img
              className="h-64 mr-3"
              src={require("../assets/images/app/app-7.png")}
              alt="app"
            />

            <img
              className="h-64 mr-3"
              src={require("../assets/images/app/app-3.png")}
              alt="app"
            />
            <img
              className="h-64 mr-3"
              src={require("../assets/images/app/app-4.png")}
              alt="app"
            />
            <img
              className="h-64 mr-3"
              src={require("../assets/images/app/app-5.png")}
              alt="app"
            />
            <img
              className="h-64 mr-3"
              src={require("../assets/images/app/app-6.png")}
              alt="app"
            />
          </div>
        </div>
      </section>

      <section id="request-demo" className="request-demo mb-24 lg:mb-64">
        <div className="flex flex-wrap relative">
          <div
            className="illustration hidden lg:block lg:w-5/12 bg-white h-64 shadow-2xl rounded absolute inset-0"
            data-aos="fade-in-right"
          />
          <div className="lg:w-6/12 lg:pl-10 lg:ml-auto lg:mt-8">
            <Title
              title={`Request A Demo`.toUpperCase()}
              description={`
                Qognitiv is designed for financial institutions (commercial banks, fintech and others)
                who want to leverage world class digital and artificial intelligence technologies to offer
                their customer powerful and modern digital services. Feel free to contact our team for better
                insights and we will be happy to revert back to you.
              `}
              className="mb-8"
              titleClass="text-secondary lg:text-5xl mb-16"
              descriptionClass="text-gray-500"
            />
            <form action="#" className="px-6 md:flex">
              <div className="w-full mb-4 md:w-2/5 md:mr-2">
                <input
                  className={`bg-gray-200 appearance-none border-2 border-gray-300 rounded-lg w-full
                    py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brand
                  `}
                  placeholder="Organization name"
                  type="text"
                />
              </div>
              <div className="w-full mb-4 md:w-2/5 md:mr-2">
                <input
                  type="email"
                  className={`bg-gray-200 appearance-none border-2 border-gray-300 rounded-lg w-full
                    py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brand
                  `}
                  placeholder="Email Address"
                />
              </div>
              <div className="w-full md:w-1/5">
                <button
                  type="submit"
                  className="bg-brand text-white w-full py-3 rounded-lg"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="hidden lg:block lg:w-1/12" />
        </div>
      </section>

      <section className="tools mb-16 lg:mb-32">
        <Subtitle
          title="Languages and tools Insights"
          subtitle="Modern, up to date cloud development technologies addressing digitalization challenges"
        />
        <div className="relative bg-white py-8 px-8 h-32">
          <Carousel />
        </div>
      </section>

      <section id="team" className="team mb-16">
        <Subtitle
          title="Our Awesome Team"
          subtitle={`
            Sky is the limit, we never doubt ourselves, staying focused, never let anything slow
            or stop us from concurring our goals and making our dreams happen!
          `}
        />
        <div className="flex">
          <img src={require("../assets/images/team.jpg")} alt="Team" className="h-32 sm:h-auto md:h-auto cover-full object-cover w-full" />
        </div>
      </section>
      {isOpen && (
        <Modal>
          <>
            <button className="text-white font-normal text-lg mb-4 hover:text-gray-300" type="button" onClick={closeModal}>
              Close Video
            </button>
            <div className="w-full mx-auto">
              <Video videoSrcURL={require("../assets/qognitiv_prez.webm")} videoTitle="Qognitiv Introduction" />
            </div>
          </>
        </Modal>
      )}
    </Layout>
  )
}

export default IndexPage
