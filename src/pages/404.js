import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="content w-full p-12">
      <div id="profile" className="prose">
        <h3>NOT FOUND</h3>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

      </div>
    </div>
  </Layout>
)

export default NotFoundPage
