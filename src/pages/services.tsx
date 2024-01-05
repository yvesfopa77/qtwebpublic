import React, { useEffect } from "react"
// @ts-ignore
import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Title from "../components/Title"

const ServicesPage = () => {
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
      <SEO title="Services" />
      <div className="container mx-auto px-6 lg:max-w-6xl">
        <div className="relative w-full lg:w-1/2 m-auto mt-16 pt-2 flex items-center">
          <Title
            title="Our Services"
            description="We provide a lots of services to help your business to grow-up with all our experiences."
            className="mb-8 lg:mb-16 lg:flex lg:flex-col lg:items-center text-center z-20"
            titleClass="text-secondary text-center lg:text-4xl"
            descriptionClass="text-gray-500"
          />
          <svg className="absolute w-12 h-12 z-10 text-brand" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.658 0L30.315 11.66 18.657 30.316 0 18.658z" fill="currentColor" />
          </svg>
          <svg
            className="absolute h-10 w-6 z-10"
            viewBox="0 0 40 20"
            style={{ bottom: "10px", right: "10%" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 0L0 21h37z" fill="#F06E9A" />
          </svg>
        </div>
      </div>
      <section className="services px-6">
        <div className="container mx-auto lg:max-w-5xl">
          <div className="flex pt-24 pb-12 items-center">
            <div className="w-1/2 hidden lg:flex items-center justify-center" data-aos="fade-up">
              <img src={require("../assets/images/services/ui-design.svg")} alt="UI/UX" />
            </div>
            <div className="w-full lg:w-1/2 lg:pr-16" data-aos="fade-up">
              <div className="w-13 h-13 flex justify-center items-center bg-brand-100 rounded mb-2">
                <svg width="25" height="22" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(-13 -14)" fill="none" fillRule="evenodd">
                    <g fillRule="nonzero">
                      <g fill="#3A4D51">
                        <path d="M33.887 18.933a11.347 11.347 0 00-4.232-2.935h5.628a.367.367 0 000-.733h-8.644a.367.367 0 00-.077.007l-.006.002a.357.357 0 00-.029.007l-.016.006-.017.006-.02.01-.012.005-.02.012-.01.006-.018.014-.01.007-.015.013-.012.011-.01.012-.014.014-.008.01-.013.019-.006.01-.013.02-.005.01-.01.022-.005.014-.007.02c-.003.006-.004.013-.006.02l-.004.014-.004.027-.001.01-.001.015-.001.023v.002c0 .012 0 .024.002.035l.001.01a.38.38 0 00.004.026l.005.02.004.015a.389.389 0 00.009.025c0 .003.002.005.003.008l.013.028.002.004.016.027.002.003a.395.395 0 00.018.025l.003.003a.402.402 0 00.02.022c0 .002.002.003.003.005a.359.359 0 00.021.019l.005.005a.35.35 0 00.023.017l.005.004a.358.358 0 00.027.016l.003.002c.043.024.091.04.142.044a10.583 10.583 0 016.744 3.43 10.586 10.586 0 012.746 7.122.367.367 0 00.733 0c0-2.821-1.043-5.526-2.936-7.615zM24.613 15.857a.356.356 0 00.016-.023l.004-.005a.361.361 0 00.015-.025l.003-.007a.36.36 0 00.012-.025l.004-.01.008-.023.005-.02.003-.014a.36.36 0 00.005-.032v-.004a.37.37 0 00.001-.068v-.007c0-.007-.002-.013-.003-.019l-.003-.018-.006-.024-.003-.01a.37.37 0 00-.011-.032l-.001-.002a.366.366 0 00-.103-.14h-.002a.368.368 0 00-.024-.019l-.004-.003a.354.354 0 00-.024-.014l-.007-.004a.365.365 0 00-.025-.012l-.007-.003a.362.362 0 00-.028-.011l-.005-.002a.366.366 0 00-.112-.016h-8.644a.367.367 0 000 .733h5.628a11.347 11.347 0 00-4.233 2.935 11.318 11.318 0 00-2.936 7.615.367.367 0 00.734 0c0-2.64.975-5.169 2.746-7.123a10.583 10.583 0 016.743-3.429.363.363 0 00.142-.043l.005-.003a.375.375 0 00.025-.016l.007-.005a.384.384 0 00.021-.016l.007-.006a.376.376 0 00.019-.018l.005-.006a.345.345 0 00.019-.02l.004-.006z" />
                      </g>
                      <g fill="#415467">
                        <path d="M14.522 14.076c-.84 0-1.522.682-1.522 1.521 0 .84.683 1.522 1.522 1.522s1.521-.683 1.521-1.522-.682-1.521-1.521-1.521zM36.438 14.076c-.84 0-1.522.682-1.522 1.521 0 .84.683 1.522 1.522 1.522s1.521-.683 1.521-1.522-.682-1.521-1.521-1.521z" />
                      </g>
                      <g fill="#00ACC1">
                        <path d="M15.678 26.195h-2.311a.367.367 0 00-.367.367v2.31c0 .203.164.367.367.367h2.31a.367.367 0 00.367-.366v-2.311a.367.367 0 00-.366-.367zM37.633 26.195h-2.31a.367.367 0 00-.367.367v2.31c0 .203.164.367.366.367h2.311a.367.367 0 00.367-.366v-2.311a.367.367 0 00-.367-.367zM32.132 27.21l-6.337-10.645a.367.367 0 00-.63 0L18.827 27.21a.367.367 0 000 .374l2.658 4.473c.066.111.186.18.315.18h7.36c.129 0 .249-.07.315-.18l2.657-4.473a.367.367 0 000-.374zm-6.652-2.017a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
                      </g>
                      <path d="M32.132 27.21l-6.337-10.645a.367.367 0 00-.63 0l-.51.855 5.94 9.977-2.875 4.84h1.44c.129 0 .249-.07.315-.18l2.657-4.473a.367.367 0 000-.374z" fill="#44D7B6" />
                      <path d="M30.28 31.502h-9.6a.367.367 0 00-.367.367v2.929c0 .202.164.367.367.367h9.6a.367.367 0 00.367-.367v-2.929a.367.367 0 00-.367-.367z" fill="#546F7A" />
                      <path d="M30.28 31.502h-1.222v3.663h1.222a.367.367 0 00.367-.367v-2.93a.367.367 0 00-.367-.366z" fill="#475D63" />
                      <path d="M25.424 16.39a.381.381 0 00-.032.007c-.004 0-.008.002-.011.003a.361.361 0 00-.037.012l-.004.001a.374.374 0 00-.04.02l-.007.004a.384.384 0 00-.064.048l-.007.006c-.01.01-.02.02-.028.032l-.006.008a.364.364 0 00-.075.221v8.441c0 .02.002.041.006.061a1.097 1.097 0 01.722 0 .37.37 0 00.005-.06v-8.442a.364.364 0 00-.074-.22l-.007-.01a.361.361 0 00-.028-.03l-.006-.007a.375.375 0 00-.065-.048l-.007-.004a.365.365 0 00-.04-.02h-.003a.369.369 0 00-.037-.013l-.011-.003a.36.36 0 00-.033-.007l-.011-.001a.364.364 0 00-.088 0l-.012.001z" fill="#44D7B6" />
                      <path d="M25.424 16.39l-.015.003-.017.004c-.004 0-.008.002-.011.003h-.003a.364.364 0 00-.034.012l-.004.001a.374.374 0 00-.04.02l-.007.004-.02.013-.008.006-.01.007a.374.374 0 00-.026.022l-.007.006c-.01.01-.019.02-.028.032l-.006.008-.011.017-.009.011a.364.364 0 00-.055.193v1.437l.733 1.232v-2.669c0-.07-.02-.136-.055-.193l-.008-.011-.011-.017-.006-.008a.362.362 0 00-.029-.032l-.006-.005-.016-.014-.01-.009a.359.359 0 00-.01-.007l-.009-.006-.02-.013-.007-.004a.365.365 0 00-.04-.02h-.003l-.021-.008-.016-.005-.011-.003a.363.363 0 00-.033-.007l-.011-.001a.365.365 0 00-.088 0l-.012.001z" fill="#44D7B6" />
                      <path d="M26.635 14.027h-2.31a.367.367 0 00-.367.366v2.312c0 .202.164.366.366.366h2.311a.367.367 0 00.367-.366v-2.312a.367.367 0 00-.367-.366z" fill="#00ACC1" />
                    </g>
                  </g>
                </svg>
              </div>
              <h2 className="text-2xl text-brand mb-4 font-medium">UX/UI Design</h2>
              <p className="text-secondary font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, dolor delectus
                quidem voluptates ipsa aliquam incidunt beatae iste et dolorem harum impedit est
                unde quaerat nulla magnam at! Ea.
              </p>
            </div>
          </div>
          <div className="flex py-12 items-center">
            <div className="w-full lg:w-1/2 lg:pl-16 text-right" data-aos="fade-up">
              <div className="w-13 h-13 flex justify-center items-center bg-brand-100 rounded mb-2 ml-auto">
                <svg width="29" height="26" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.785.5C27.558.5 29 1.91 29 3.641v18.718c0 1.732-1.442 3.141-3.215 3.141H3.215C1.442 25.5 0 24.091 0 22.359V3.641C0 1.909 1.442.5 3.215.5h22.57zm2.257 7.49H.957v14.369c0 1.216 1.013 2.205 2.258 2.205h22.57c1.245 0 2.257-.989 2.257-2.205V7.99zm-12.61 2.747a.468.468 0 01.37.554l-1.93 8.957a.476.476 0 01-.568.362.468.468 0 01-.37-.555l1.931-8.957a.479.479 0 01.567-.361zm-3.625 2.023a.46.46 0 01-.054.66l-2.67 2.22 2.67 2.222a.46.46 0 01.054.66.483.483 0 01-.675.053l-3.098-2.578a.463.463 0 010-.712l3.098-2.578a.487.487 0 01.675.053zm6.061-.053l3.098 2.578a.463.463 0 010 .712l-3.098 2.578a.484.484 0 01-.675-.053.46.46 0 01.054-.66l2.67-2.221-2.67-2.222a.46.46 0 01-.054-.66.486.486 0 01.675-.052zm7.917-11.271H3.215C1.97 1.436.958 2.425.958 3.64L.957 7.055h27.085V3.641c0-1.216-1.012-2.205-2.257-2.205zm-12.95 1.37c.836 0 1.516.664 1.516 1.48s-.68 1.48-1.515 1.48c-.836 0-1.515-.664-1.515-1.48s.68-1.48 1.515-1.48zM8.18 2.792c.836 0 1.515.664 1.515 1.48s-.68 1.48-1.515 1.48c-.835 0-1.515-.664-1.515-1.48s.68-1.48 1.515-1.48zm-4.655-.015c.836 0 1.515.664 1.515 1.48 0 .817-.68 1.481-1.515 1.481-.835 0-1.515-.664-1.515-1.48 0-.817.68-1.48 1.515-1.48zm9.31.964a.552.552 0 00-.557.545c0 .3.25.545.558.545a.552.552 0 00.557-.545c0-.3-.25-.545-.557-.545zM8.18 3.727a.552.552 0 00-.557.545c0 .3.25.545.557.545a.552.552 0 00.558-.545c0-.3-.25-.545-.558-.545zm-4.655-.014a.552.552 0 00-.558.545c0 .3.25.544.558.544a.552.552 0 00.558-.544c0-.3-.25-.545-.558-.545z" fill="#00ACC1" />
                </svg>
              </div>
              <h2 className="text-2xl text-brand mb-4 font-medium">Front-end development and integration</h2>
              <p className="text-secondary font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, dolor delectus
                quidem voluptates ipsa aliquam incidunt beatae iste et dolorem harum impedit est
                unde quaerat nulla magnam at! Ea.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex items-center justify-center" data-aos="fade-up">
              <img src={require("../assets/images/services/frontend.svg")} alt="Front-end" />
            </div>
          </div>
          <div className="flex pt-24 pb-12 items-center">
            <div className="w-1/2 hidden lg:flex items-center justify-center" data-aos="fade-up">
              <img src={require("../assets/images/services/backend.svg")} alt="Backend" />
            </div>
            <div className="w-full lg:w-1/2 lg:pr-16" data-aos="fade-up">
              <div className="w-13 h-13 flex justify-center items-center bg-brand-100 rounded mb-2">
                <svg width="27" height="27" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.261.026c.959 0 1.739.78 1.739 1.74l-.03 19.12c0 .823-.576 1.514-1.346 1.693v.186a.778.778 0 01-.777.777h-7.305v.5h1.193c.796 0 1.443.647 1.443 1.443v.854a.66.66 0 01-.658.658H7.45a.66.66 0 01-.658-.658v-.854c0-.796.647-1.443 1.443-1.443h1.193v-1.418h-3.8a.395.395 0 110-.79h8.468v-.99c0-.428.349-.777.777-.777h.314v-.68H.79v1.498a.95.95 0 00.95.95h1.486a.395.395 0 010 .79H1.74c-.959 0-1.739-.78-1.739-1.74V1.765C0 .807.78.027 1.74.027zm-6.526 24.806h-10.5a.654.654 0 00-.653.653v.722h11.806v-.722a.654.654 0 00-.653-.653zm-4.639-2.208h-3.878v1.418h6.534v-.5h-1.879a.778.778 0 01-.777-.777v-.14zm10.738-1.766h-9.947v1.894h9.947v-1.894zm-7.015.552a.395.395 0 110 .79h-1.902a.395.395 0 010-.79zm5.984 0a.395.395 0 110 .79h-2.684a.395.395 0 110-.79zm-4.027 0a.395.395 0 110 .79h-.615a.395.395 0 110-.79zm6.404-2.024h-1.646v.681h.313c.429 0 .777.349.777.777v.904a.949.949 0 00.556-.863v-1.499zm-2.437-.15h-7.766v.831h7.766v-.831zM26.18 5.402H.79v13.194h13.32c-.007-.034-.011-1.22-.013-1.775v-.283c0-.428.348-.777.776-.777h.314v-.831h-.314a.778.778 0 01-.777-.778v-1.92c0-.429.349-.777.777-.777h5.283a.395.395 0 110 .79h-5.27v1.894h9.948v-1.894h-2.219a.395.395 0 110-.79h2.232c.429 0 .777.348.777.777v1.92a.778.778 0 01-.777.778h-.313v.831h.313c.429 0 .777.349.777.777 0 0-.005 2.013-.013 2.058h.569V5.402zm-1.346 11.15h-9.947v1.894h9.947V16.55zm-7.015.551a.395.395 0 110 .79h-1.902a.395.395 0 110-.79zm5.984 0a.395.395 0 110 .79h-2.684a.395.395 0 110-.79zm-4.027 0a.395.395 0 110 .79h-.615a.395.395 0 110-.79zm3.967-2.173h-7.766v.831h7.766v-.831zm-10.627-.103a.395.395 0 010 .79H9.64a.395.395 0 110-.79zm-4.825 0a.395.395 0 010 .79H5.629a.395.395 0 110-.79zm-3.872 0a.395.395 0 110 .79H2.373a.395.395 0 110-.79zm-.912-1.653a.395.395 0 010 .79H2.373a.395.395 0 110-.79zm6.905 0a.395.395 0 110 .79h-.69a.395.395 0 110-.79zm-2.126 0a.395.395 0 010 .79H4.894a.395.395 0 110-.79zm4.672 0a.395.395 0 110 .79h-1.293a.395.395 0 010-.79zm4.86-.377a.395.395 0 110 .79h-1.9a.395.395 0 010-.79zm5.985 0a.395.395 0 110 .79h-2.684a.395.395 0 010-.79zm-4.027 0a.395.395 0 110 .79h-.615a.395.395 0 110-.79zm-14.74-1.29a.395.395 0 010 .79H2.373a.395.395 0 110-.79zm6.13 0a.395.395 0 110 .79h-4.68a.395.395 0 010-.79zm3.267-1.896a.395.395 0 110 .79h-1.159a.395.395 0 110-.79zm-2.476 0a.395.395 0 010 .79h-2.84a.395.395 0 110-.79zm7.113 0a.395.395 0 010 .79h-3.372a.395.395 0 010-.79zM5.03 6.962a.395.395 0 11.736.289l-.973 2.478a.395.395 0 01-.736-.29zm1.041-.135a.395.395 0 01.559 0l1.239 1.24a.395.395 0 010 .558l-1.24 1.239a.394.394 0 01-.558 0 .395.395 0 010-.559l.96-.96-.96-.96a.395.395 0 010-.558zm-2.962 0a.395.395 0 01.56.56l-.96.958.96.96a.395.395 0 01-.56.559L1.87 8.625a.395.395 0 010-.559zm7.373 1.045a.395.395 0 110 .79H9.118a.395.395 0 110-.79zm9.852 0a.395.395 0 110 .79H12.01a.395.395 0 110-.79zM25.231.817H1.768a.95.95 0 00-.949.948v2.846h25.36V1.766a.95.95 0 00-.948-.95zm-22.317.726c.64 0 1.16.52 1.16 1.16a1.161 1.161 0 01-2.32 0c0-.64.52-1.16 1.16-1.16zm2.953 0a1.161 1.161 0 010 2.32 1.161 1.161 0 010-2.32zm2.952 0c.64 0 1.16.52 1.16 1.16a1.161 1.161 0 01-2.32 0c0-.64.52-1.16 1.16-1.16zm-5.905.79a.37.37 0 10.001.74.37.37 0 000-.74zm2.953 0a.37.37 0 100 .74.37.37 0 000-.74zm2.952 0a.37.37 0 10.001.74.37.37 0 00-.001-.74z" fill="#00ACC1" />
                </svg>
              </div>
              <h2 className="text-2xl text-brand mb-4 font-medium">Backend-end development and integration</h2>
              <p className="text-secondary font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, dolor delectus
                quidem voluptates ipsa aliquam incidunt beatae iste et dolorem harum impedit est
                unde quaerat nulla magnam at! Ea.
              </p>
            </div>
          </div>
          <div className="flex py-12 items-center">
            <div className="w-full lg:w-1/2 lg:pl-16 text-right" data-aos="fade-up">
              <div className="w-13 h-13 flex justify-center items-center bg-brand-100 rounded mb-2 ml-auto">
                <svg width="27" height="27" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.661 0c.72 0 1.307.586 1.307 1.306v8.71c0 .72-.587 1.307-1.307 1.307H3.92v1.306h3.229c.28-.168.588-.295.919-.366a3.503 3.503 0 013.256-2.247c.49 0 .973.105 1.42.305a3.497 3.497 0 012.934-1.611 3.488 3.488 0 013.481 3.613c.48.143.907.402 1.254.742h1.798V8.71h-2.178v-.871h.871v-.871h-1.306c-.72 0-1.307-.587-1.307-1.307V1.306c0-.72.587-1.306 1.307-1.306h6.097C26.414 0 27 .586 27 1.306v4.355c0 .72-.586 1.307-1.306 1.307h-1.307v.87h.871v.872h-2.177v5.225h-2.05c.132.273.226.565.271.871h2.65v4.355H27V27h-6.968v-7.839h3.049v-3.484h-1.777a3.05 3.05 0 01-3.014 2.613H8.71a3.052 3.052 0 01-3.049-3.048h-.87v3.92h2.612c.72 0 1.307.586 1.307 1.306v3.92h.87v1.306c0 .72-.586 1.306-1.306 1.306H1.306C.586 27 0 26.414 0 25.694v-1.307h.871v-3.92c0-.72.586-1.306 1.306-1.306H3.92v-4.79h1.879c.094-.315.238-.607.423-.871H3.048v-2.177H1.306c-.72 0-1.306-.587-1.306-1.307v-8.71C0 .586.586 0 1.306 0zM8.71 25.258H.87v.436c0 .24.195.435.435.435h6.968c.24 0 .436-.195.436-.435v-.436zm17.419-1.742h-5.226v2.613h5.226v-2.613zm-.87.871v.871h-.872v-.87h.871zm-1.743 0v.871h-1.742v-.87h1.742zM7.403 20.032H2.177a.436.436 0 00-.435.436v3.92h6.097v-3.92a.436.436 0 00-.436-.436zm18.726 0h-5.226v2.613h5.226v-2.613zm-3.484.871v.871h-.87v-.87h.87zm2.613 0v.871h-1.742v-.87h1.742zm-9.58-11.322a2.622 2.622 0 00-2.366 1.51l-.207.442-.416-.256a2.606 2.606 0 00-1.366-.39 2.625 2.625 0 00-2.508 1.884l-.08.277-.287.034a2.176 2.176 0 00.262 4.337h9.58a2.18 2.18 0 002.178-2.177 2.19 2.19 0 00-1.847-2.15l-.43-.065.065-.43c.023-.155.034-.283.034-.403a2.615 2.615 0 00-2.613-2.613zM6.096 7.839H.87v2.177c0 .24.195.436.435.436h4.355c.24 0 .436-.196.436-.436V7.84zm-1.742.87v.872H2.613V8.71h1.742zm19.161-1.741h-1.742v.87h1.742v-.87zM6.096 2.613H.872v4.355h5.226V2.613zM26.13 5.226h-6.968v.435c0 .24.195.436.436.436h6.097c.24 0 .435-.195.435-.436v-.435zM25.694.87h-6.097a.436.436 0 00-.436.435v3.049h6.968V1.306a.436.436 0 00-.435-.435zM5.66.871H1.306a.436.436 0 00-.435.435v.436h5.226v-.436A.436.436 0 005.66.871z" fill="#00ACC1" />
                </svg>
              </div>
              <h2 className="text-2xl text-brand mb-4 font-medium">Devops</h2>
              <p className="text-secondary font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, dolor delectus
                quidem voluptates ipsa aliquam incidunt beatae iste et dolorem harum impedit est
                unde quaerat nulla magnam at! Ea.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex items-center justify-center" data-aos="fade-up">
              <img src={require("../assets/images/services/devops.svg")} alt="Devops" />
            </div>
          </div>
          <div className="flex pt-24 pb-12 items-center">
            <div className="w-1/2 hidden lg:flex items-center justify-center" data-aos="fade-up">
              <img src={require("../assets/images/services/code-quality.svg")} alt="Code Quality" />
            </div>
            <div className="w-full lg:w-1/2 lg:pr-16" data-aos="fade-up">
              <div className="w-13 h-13 flex justify-center items-center bg-brand-100 rounded mb-2">
                <svg width="25" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.335 6.666l.031.006c.056.008.11.023.162.047.01.006.021.006.03.012a.32.32 0 01.042.042l.042.03 4.167 4.583a.41.41 0 01.045.073.341.341 0 01.031.051c.02.05.031.101.032.154v.003l-.006.028a.415.415 0 01-.025.122c-.01.02-.02.04-.033.058a.384.384 0 01-.037.063l-4.41 5.145h1.177a.417.417 0 110 .834h-1.891l-.714.833h1.355a.417.417 0 110 .833h-2.07l-3.445 4.021c-.007.008-.017.011-.024.018a.412.412 0 01-.093.07c-.015.008-.027.017-.042.023a.38.38 0 01-.317 0c-.015-.006-.027-.015-.041-.022a.418.418 0 01-.094-.07l-.023-.019-3.447-4.02h-2.07a.417.417 0 110-.834h1.355l-.714-.833H5.417a.417.417 0 110-.834h1.177l-4.41-5.146a.392.392 0 01-.037-.063.368.368 0 01-.033-.058.414.414 0 01-.025-.122c0-.01-.006-.018-.006-.027a.418.418 0 01.033-.157.375.375 0 01.032-.051.422.422 0 01.045-.073L6.36 6.803a.403.403 0 01.041-.03.319.319 0 01.042-.042c.01-.006.02-.006.03-.012a.538.538 0 01.162-.047c.011 0 .02-.006.032-.006h11.668zM22.917 0A2.086 2.086 0 0125 2.083v18.334a2.086 2.086 0 01-2.083 2.083h-7.084a.417.417 0 010-.833h7.084c.69 0 1.25-.56 1.25-1.25V5.833H.833V8.75a.417.417 0 11-.833 0V2.083A2.086 2.086 0 012.083 0zM.417 11.667c.23 0 .416.186.416.416v8.334c0 .69.56 1.25 1.25 1.25h7.084a.417.417 0 010 .833H2.083A2.086 2.086 0 010 20.417v-8.334c0-.23.187-.416.417-.416zm21.177.416h-5.853l-2.408 9.638 8.261-9.638zm-12.336 0H3.406l8.26 9.638-2.408-9.638zm5.625 0h-4.766l2.383 9.532 2.383-9.532zM5 18.75a.417.417 0 110 .833H2.083a.417.417 0 110-.833zm17.917 0a.417.417 0 110 .833H20a.417.417 0 110-.833zM3.75 17.083a.417.417 0 010 .834H2.083a.417.417 0 110-.834zm19.167 0a.417.417 0 110 .834H21.25a.417.417 0 010-.834zM3.75 15.417a.417.417 0 010 .833H2.083a.417.417 0 110-.833zm19.167 0a.417.417 0 110 .833H21.25a.417.417 0 010-.833zM6.608 7.767L3.442 11.25h5.382L6.608 7.766zm11.784 0l-2.216 3.483h5.382l-3.166-3.483zM12.5 7.86l-2.159 3.39h4.317L12.5 7.86zm5.074-.359H13.26l2.158 3.39 2.157-3.39zm-5.833 0H7.426l2.157 3.39 2.158-3.39zM.417 10a.64.64 0 01.083.008.263.263 0 01.075.025.31.31 0 01.075.038l.063.05a.423.423 0 010 .591.439.439 0 01-.296.121.42.42 0 01-.159-.033.425.425 0 01-.137-.088.425.425 0 010-.591A.437.437 0 01.417 10zm22.5-9.167H2.083c-.69 0-1.25.56-1.25 1.25V5h23.334V2.083c0-.69-.56-1.25-1.25-1.25zm-20 .834a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.333 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm3.333 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM2.917 2.5a.417.417 0 100 .833.417.417 0 000-.833zm3.333 0a.417.417 0 100 .834.417.417 0 000-.834zm3.333 0a.417.417 0 100 .833.417.417 0 000-.833zm8.334 0a.417.417 0 010 .833H13.75a.417.417 0 110-.833zm4.583 0a.417.417 0 010 .833h-2.917a.417.417 0 010-.833z" fill="#00ACC1" />
                </svg>
              </div>
              <h2 className="text-2xl text-brand mb-4 font-medium">Code quality</h2>
              <p className="text-secondary font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, dolor delectus
                quidem voluptates ipsa aliquam incidunt beatae iste et dolorem harum impedit est
                unde quaerat nulla magnam at! Ea.
              </p>
            </div>
          </div>
          <div className="flex py-12 items-center">
            <div className="w-full lg:w-1/2 lg:pl-16 text-right" data-aos="fade-up">
              <div className="w-13 h-13 flex justify-center items-center bg-brand-100 rounded mb-2 ml-auto">
                <svg width="27" height="27" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.33 1.58a2.83 2.83 0 111.76 4.003l-1.002 2.43a6.12 6.12 0 012.862 2.85l2.426-1.011a2.834 2.834 0 11.252.607l-2.425 1.01a6.08 6.08 0 01.008 4.039l2.43 1a2.83 2.83 0 11-.25.608l-2.431-1a6.118 6.118 0 01-2.85 2.86l1.011 2.427a2.83 2.83 0 11-.607.252l-1.01-2.425a6.079 6.079 0 01-4.04.008l-1 2.43a2.83 2.83 0 11-.607-.25v-.001l1-2.43a6.118 6.118 0 01-2.86-2.85l-2.427 1.01a2.83 2.83 0 11-.253-.606l2.426-1.01a6.08 6.08 0 01-.008-4.04l-2.43-1a2.83 2.83 0 11.25-.607l2.43 1a6.12 6.12 0 012.85-2.861l-1.01-2.426a2.839 2.839 0 11.606-.253l1.011 2.426a6.079 6.079 0 014.039-.008l1-2.43a2.83 2.83 0 01-1.15-3.752zM9.918 22.132a2.176 2.176 0 101.182 2.837 2.16 2.16 0 00-1.182-2.837zm7.978-.182a2.173 2.173 0 102.009 1.338 2.16 2.16 0 00-2.01-1.338zM4.855 17.09a2.173 2.173 0 10-1.17 2.841 2.176 2.176 0 001.17-2.842zm20.086-1.213a2.173 2.173 0 00-2.836 1.178 2.173 2.173 0 004.02 1.655 2.173 2.173 0 00-1.184-2.833zm-11.468-7.8a5.422 5.422 0 100 10.844 5.422 5.422 0 000-10.843zm1.847 2.684c.177 0 .348.066.348.223v4.351c0 .151-.171.23-.348.23-.171 0-.349-.079-.349-.23v-4.35c0-.158.178-.224.349-.224zm-2.63-.04c.198 0 .395.08.448.237l1.3 4.259a.194.194 0 01.014.059c0 .164-.243.29-.44.29-.112 0-.204-.04-.237-.146l-.27-.933h-1.623l-.269.933c-.033.106-.125.145-.243.145-.19 0-.434-.118-.434-.289a.184.184 0 01.007-.06l1.308-4.258c.052-.157.243-.236.44-.236zm0 .953l-.656 2.255h1.314l-.657-2.255zM4.036 7.307a2.173 2.173 0 10-2.407 3.62 2.173 2.173 0 002.407-3.62zm22.068.932a2.173 2.173 0 00-2.842-1.171 2.162 2.162 0 00-1.17 2.842 2.173 2.173 0 104.012-1.671zM11.053 2.04a2.173 2.173 0 00-4.012 1.672 2.16 2.16 0 002.842 1.17 2.174 2.174 0 001.17-2.842zM18.684.85a2.174 2.174 0 10-1.655 4.02 2.174 2.174 0 001.656-4.02z" fill="#00ACC1" />
                </svg>
              </div>
              <h2 className="text-2xl text-brand mb-4 font-medium">Artificial intelligence</h2>
              <p className="text-secondary font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, dolor delectus
                quidem voluptates ipsa aliquam incidunt beatae iste et dolorem harum impedit est
                unde quaerat nulla magnam at! Ea.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex items-center justify-center" data-aos="fade-up">
              <img width="350px" src={require("../assets/images/ai.svg")} alt="Artificial intelligence" />
            </div>
          </div>
          <div className="flex pt-24 pb-12 items-center">
            <div className="w-1/2 hidden lg:flex items-center justify-center" data-aos="fade-up">
              <img src={require("../assets/images/blockchain.svg")} width="350px" alt="Blockchain" />
            </div>
            <div className="w-full lg:w-1/2 lg:pr-16" data-aos="fade-up">
              <div className="w-13 h-13 flex justify-center items-center bg-brand-100 rounded mb-2">
                <svg width="26" height="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.74.072a.538.538 0 01.539 0l8.823 5.094c.412-.429.99-.697 1.63-.697a2.263 2.263 0 012.261 2.261 2.264 2.264 0 01-1.723 2.196V19.11c0 .192-.102.37-.269.466l-8.821 5.093a2.263 2.263 0 01-2.17 2.892 2.263 2.263 0 01-2.171-2.893l-8.82-5.092a.539.539 0 01-.27-.466V8.926A2.264 2.264 0 01.027 6.73a2.263 2.263 0 012.26-2.26c.64 0 1.22.267 1.63.696zm.27 24.044c-.654 0-1.185.531-1.185 1.184a1.185 1.185 0 002.369 0c0-.653-.532-1.184-1.185-1.184zm0-22.956L4.458 6.097a2.264 2.264 0 01-1.632 2.828V18.8l8.553 4.938a2.254 2.254 0 013.262 0l8.553-4.938V8.926a2.264 2.264 0 01-1.632-2.829L13.01 1.16zm-.27 3.088a.538.538 0 01.539 0l7.106 4.103c.166.096.269.274.269.466v8.204c0 .193-.103.37-.27.467L13.28 21.59a.539.539 0 01-.538 0l-7.106-4.102a.538.538 0 01-.269-.467V8.817c0-.192.103-.37.27-.466zm6.837 5.501l-6.298 3.636a.539.539 0 01-.538 0L6.443 9.75v6.962l6.029 3.48v-2.427a.538.538 0 111.076 0v2.428l6.03-3.481V9.749zm-6.568 5.054a.542.542 0 01.539.539.542.542 0 01-.539.538.542.542 0 01-.381-.919c.101-.1.24-.158.381-.158zm0-9.467l-6.028 3.48 6.029 3.482 6.029-3.481-6.03-3.48zm-10.721.21a1.185 1.185 0 000 2.368c.653 0 1.184-.531 1.184-1.184 0-.653-.531-1.184-1.184-1.184zm21.444 0c-.653 0-1.184.53-1.184 1.184 0 .653.531 1.184 1.184 1.184.653 0 1.184-.531 1.184-1.184 0-.653-.53-1.184-1.184-1.184z" fill="#00ACC1" />
                </svg>
              </div>
              <h2 className="text-2xl text-brand mb-4 font-medium">Blockchain</h2>
              <p className="text-secondary font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, dolor delectus
                quidem voluptates ipsa aliquam incidunt beatae iste et dolorem harum impedit est
                unde quaerat nulla magnam at! Ea.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
