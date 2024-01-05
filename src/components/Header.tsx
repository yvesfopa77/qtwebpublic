import { Link } from "gatsby"
import React, { useState, SyntheticEvent } from "react"
import Headroom from "react-headroom"
// @ts-ignore
import scrollToElement from "scroll-to-element"

declare var window

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (e: SyntheticEvent, target: string) => {
    // NODE-SAFE CODE
    // Gatsby uses Node to generate our pages.
    // Node doesn't know what a window is.
    // Be sure to wrap any of your browser interactions
    // in some sort of node-safe if statement like this:

    if (typeof window !== 'undefined') {

      // First, are we on the home page?
      // If so, let's scroll to the desired block,
      // which was passed in as an onClick method on our <Link />.
      // If an event was also passed, we'll preventDefault()

      if (window.location.pathname === '/') {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: 0, // Offset a fixed header if you please
          duration: 1000,
        })
      }
    }
  }

  return (
    <div className="site-header">
      <header className="header hidden lg:block py-6 bg-brand text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center px-8">
            <div>
              <Link to="/">
                <img
                  className="h-8"
                  src={require("../assets/images/logo-lg.svg")}
                  alt="Qognitiv"
                />
              </Link>
            </div>
            <nav className="flex items-center">
              <Link
                className="mr-4 text-white hover:text-secondary"
                onClick={e => handleLinkClick(e, '#features')}
                to="/#features"
              >
                Features
              </Link>
              <Link
                to="/#technologies"
                className="mr-4 text-white hover:text-secondary"
                onClick={e => handleLinkClick(e, '#technologies')}
              >
                Technologies
              </Link>
              <Link
                to="/#team"
                className="mr-4 text-white hover:text-secondary"
                onClick={e => handleLinkClick(e, '#team')}
              >
                Team
              </Link>
              <Link
                to="/our-vision"
                className="mr-4 text-white hover:text-secondary"
                activeClassName="active"
              >
                Our Vision
              </Link>
              <Link
                to="/process"
                className="mr-4 text-white hover:text-secondary"
                activeClassName="active"
              >
                Key points
              </Link>
              <Link
                to="/#request-demo"
                className="inline-block bg-white shadow-md text-brand px-4 py-2 max-w-xs rounded"
                onClick={e => handleLinkClick(e, '#request-demo')}
              >
                Request Demo
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <Headroom>
        <header className="mobile-header bg-brand shadow-xl lg:hidden overflow-hidden">
          <div className="mobile-header-top flex items-center justify-between">
            <div>
              <Link to="/">
                <img
                  className="h-8"
                  src={require("../assets/images/logo-lg.svg")}
                  alt="Qognitiv"
                />
              </Link>
            </div>
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="block text-gray-200 hover:text-white focus:outline-none"
              >
                {!isOpen && (
                  <svg
                    className="fill-current"
                    height="29"
                    width="27"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.143 18.52H1c-.39 0-.705.582-.705 1.298 0 .716.316 1.297.705 1.297h21.142c.389 0 .704-.58.704-1.297 0-.716-.315-1.297-.704-1.297zM1.217 11.98h25.99c.478 0 .866-.58.866-1.297 0-.716-.389-1.297-.867-1.297H1.217c-.478 0-.866.581-.866 1.297s.388 1.298.866 1.298zM1.161 2.846h17.301c.478 0 .865-.582.865-1.298 0-.716-.387-1.297-.865-1.297h-17.3C.683.251.295.832.295 1.548c0 .717.388 1.298.865 1.298z" />
                  </svg>
                )}
                {isOpen && (
                  <svg
                    className="fill-current"
                    height="29"
                    width="27"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.778.808L.808 17.778a1 1 0 001.414 1.414l16.97-16.97A1 1 0 1017.778.808z" />
                    <path d="M2.222.808l16.97 16.97a1 1 0 01-1.414 1.414L.808 2.222A1 1 0 112.222.808z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`mobile-header-menu bg-brand fixed right-0 left-0 z-50 h-screen ${
              isOpen ? "block" : "hidden"
              }`}
          >
            <nav className="py-10 flex text-center flex-col">
              <Link
                to="/"
                className="menu-mobile-item text-white hover:text-secondary"
              >
                Features
              </Link>
              <Link
                to="/"
                className="menu-mobile-item text-white hover:text-secondary"
              >
                Technologies
              </Link>
              <Link
                to="/"
                className="menu-mobile-item text-white hover:text-secondary"
              >
                Team
              </Link>
              <Link
                to="/our-vision"
                className="menu-mobile-item text-white hover:text-secondary"
                activeClassName="active"
              >
                Our Vision
              </Link>
              <Link
                to="/process"
                className="menu-mobile-item text-white hover:text-secondary"
                activeClassName="active"
              >
                Key Points
              </Link>
              <Link to="/#request-demo" className="button-demo">
                Request Demo
              </Link>
            </nav>
          </div>
        </header>
      </Headroom>
    </div>
  )
}

export default Header
