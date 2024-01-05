/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const scrollToElement = require('scroll-to-element')

const checkHash = location => {
  let { hash } = location
  if (hash) {
    scrollToElement(hash, {
      offset: -95,
      duration: 1000,
    })
  }
}

exports.onRouteUpdate = ({ location }) => {
  checkHash(location)
}
