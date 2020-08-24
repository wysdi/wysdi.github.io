import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <h1>portofolio</h1>
      <section id="works">
          <div className="works--card">
              <h3>Sample Sites 1</h3>
              <div className="works--card--screenshot">
                  <div className="works--card--screenshot--overlay">
                      <Link className="works--card--screenshot--overlay--code--link" href={''} target="_blank">CODE</Link>
                      <Link className="works--card--screenshot--overloy-live-link" href="https://keen-nobel-02e821.netlify.com/" target="_blank">LIVE</Link>
                  </div>
                  <img src="https://picsum.photos/642/899?random=1" alt="Project image for clof" />
              </div>
              <p>Tech Used : Next.js (React), Express, MongoDB</p>
          </div>
          <div className="works--card">
              <h3>Sample Sites 2</h3>
              <div className="works--card--screenshot">
                  <div className="works--card--screenshot--overlay">
                      <Link className="works--card--screenshot--overlay--code--link" href={''} target="_blank">CODE</Link>
                      <Link className="works--card--screenshot--overloy-live-link" href="https://keen-nobel-02e821.netlify.com/" target="_blank">LIVE</Link>
                  </div>
                  <img src="https://picsum.photos/642/899?random=2" alt="Project image for clof" />
              </div>
              <p>Tech Used : Vue, Express, MongoDB</p>

          </div>
          <div className="works--card">
              <h3>Sample Sites 3</h3>
              <div className="works--card--screenshot">
                  <div className="works--card--screenshot--overlay">
                      <Link className="works--card--screenshot--overlay--code--link" href={''} target="_blank">CODE</Link>
                      <Link className="works--card--screenshot--overloy-live-link" href="https://keen-nobel-02e821.netlify.com/" target="_blank">LIVE</Link>
                  </div>
                  <img src="https://picsum.photos/642/899?random=3" alt="Project image for clof" />
              </div>
              <p>Tech Used : HTML, CSS, Javascript</p>
          </div>
         </section>

  </Layout>
)

export default IndexPage
