/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/main.scss"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="main-site relative overflow-hidden">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
