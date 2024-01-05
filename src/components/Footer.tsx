import { Link } from "gatsby"
import React from "react"

export default () => {
  return (
    <>
      <div className="integration-box relative z-auto bg-white shadow-lg text-center p-8 mb-8 md:m-auto md:-mb-20 lg:flex lg:text-left lg:py-16 lg:px-12 lg:items-center rounded-lg">
        <div className="mb-6">
          <h4 className="font-medium text-secondary mb-4 text-2xl">
            Want to get more insights ?
          </h4>
          <p className="text-gray-600 text-base font-normal lg:pr-12">
            We are happy to welcome all your queries, from simple product demonstration
            request to full project study, feel free to contact us.
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="block rounded text-white bg-brand py-3 px-4 m-auto text-center hover:bg-default-900"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <footer className="footer bg-secondary px-6 text-gray-600 md:pt-20">
        <div className="container mx-auto">
          <div className="footer-content py-12 flex lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="footer-item mb-6 w-full lg:w-4/12">
                <img
                  className="h-8 mb-4"
                  src={require(`../assets/images/logo-lg.svg`)}
                  alt="Qognitiv"
                />
                <p>
                  Commercial banks, Fin-techs, bootstrap your digital deployment
                  with state-of-the-art ready to use and highly customizable
                  platform and drastically shorten your time to market.
                </p>
                <p className="flex mt-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white h-8 w-8 justify-center flex items-center rounded-full mr-3 hover:bg-gray-200"
                  >
                    <span className="icon-facebook" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white h-8 w-8 justify-center flex items-center rounded-full mr-3 hover:bg-gray-200"
                  >
                    <span className="icon-linkedin" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white h-8 w-8 justify-center flex items-center rounded-full mr-3 hover:bg-gray-200"
                  >
                    <span className="icon-twitter" />
                  </a>
                  <a
                    href="https://github.com/qognitiv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white h-8 w-8 justify-center flex items-center rounded-full mr-3 hover:bg-gray-200"
                  >
                    <span className="icon-github" />
                  </a>
                </p>
              </div>
              <div className="w-full md:flex lg:w-6/12 lg:ml-auto">
                <div className="footer-item mb-6 w-full md:w-1/3">
                  <h4 className="text-white font-medium mb-4">Company</h4>
                  <ul className="list-none">
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Team</Link></li>
                    <li><Link to="/">Careers</Link></li>
                    <li><Link to="/">Brand</Link></li>
                    <li><Link to="/services">Services</Link></li>
                  </ul>
                </div>
                <div className="footer-item mb-6 w-full md:w-1/3">
                  <h4 className="text-white font-medium mb-4">Resources</h4>
                  <ul className="list-none">
                    <li><Link to="/process">Key Points</Link></li>
                    <li><Link to="/">Documentation</Link></li>
                    <li>
                      <a
                        href="https://github.com/qognitiv"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Terms of services</Link></li>
                  </ul>
                </div>
                <div className="footer-item w-full md:w-1/3">
                  <h4 className="text-white font-medium mb-4">Contact Us</h4>
                  <ul className="list-none">
                    <li><Link to="/">Live Chat</Link></li>
                    <li><Link to="/">Join Slack</Link></li>
                    <li><Link to="/">Contact us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            Copyright ©{new Date().getFullYear()} Qognitiv Technologies. All
            right reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
