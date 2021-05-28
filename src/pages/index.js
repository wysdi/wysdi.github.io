import React from "react"

import avatar from "../images/avatar.jpeg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <article>
        <section>
          <h2><a id="inlines" href="#inlines" aria-hidden="true"></a>About
          </h2>
          <p><img src={avatar} alt="Wayan Sudiarta" width="200"/>
          Developer from Bali with 7 Years experience with PHP. Build some projects over the years using Symfony for
          <br/>Content Management System.
          </p>
          <p>
            Currently using Python to playing with Data Analysis and Machine Learning.
          </p>
        </section>
        <section>
          <h2><a id="wtf" href="#wtf" aria-hidden="true"></a>The Experience:
          </h2>
          <dl>
            <dt>TIX (2014 - Present)</dt>
            <dd>
              <ul style={{ paddingLeft: 0}}>
                <li>Develop and maintain a custom CMS system built for the needs of TIX.</li>
                <li>Develop and maintain integrations between TIX CMS and third party systems.</li>
                <li>Develop the Mobile app using react native.</li>
                <li>Develop api platform using Django.</li>
                <li>Develop scraping tools using Python.</li>
              </ul>
            </dd>
            <dt>Egomedia Bali (2011 - 2014)</dt>
            <dd>
              <ul style={{ paddingLeft: 0}}>
                <li>Develop an website using custom themes in Wordpress.</li>
                <li>Build Custom plugins for advanced featured in Wordpress</li>
              </ul>
            </dd>
            {/*<dt>CV. Mertabali (2009 - 2010)</dt>*/}
            {/*<dd>*/}
            {/*  <ul style={{ paddingLeft: 0}}>*/}
            {/*    <li>Working with WebErp to customize the system following the company requirement.</li>*/}
            {/*  </ul>*/}
            {/*</dd>*/}
          </dl>
        </section>
        <section>
          <h2><a id="usage" href="#usage" aria-hidden="true"></a>The Stack
          </h2>
          <dl>
              <dt>PHP</dt>
              <dd>Using on Wordpress and Symfony</dd>
              <dt>Javascript</dt>
              <dd>Using on React and React Native</dd>
              <dt>Python</dt>
              <dd>Using on Fast API, Scrapy and Django Framework</dd>
          </dl>
        </section>

        <br/>
      </article>
  </Layout>
)

export default IndexPage
