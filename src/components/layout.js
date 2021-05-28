/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "./sidebar"
import avatar from "../images/avatar.jpeg"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container mx-auto max-w-screen-xl">
        <main id="wrapper" className="flex flex-col sm:flex-row sm:m-12 shadow-2xl">
          <Sidebar />
          {children}
          </main>
        <footer className="mt-12 text-center flex justify-center flex-col md:flex-row mx-12">
          {/*<a href="https://chrisko.io/"*/}
          {/*   className="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0">Made with ❤️*/}
          {/*  by Chrisko</a>*/}
          {/*<a href="https://tailwindcss.com/"*/}
          {/*   className="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0">TailwindCSS</a>*/}
          {/*<a href="https://vitejs.dev/"*/}
          {/*   className="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0">Vite</a>*/}
          {/*<a href="https://github.com/L33T-KR3W/push-dir"*/}
          {/*   className="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0">Push Dir</a>*/}
          {/*<a href="https://ionicons.com/"*/}
          {/*   className="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0">Ionicons</a>*/}
          {/*<a*/}
          {/*  href="https://unsplash.com/@jackofallstreets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"*/}
          {/*  className="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0">*/}
          {/*  Photo by Jack Finnigan*/}
          {/*</a>*/}
        </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
