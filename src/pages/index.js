import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <div className="content w-full p-12">
      <div id="profile" className="prose">
        <h2 className="section-headline">Profile</h2>
        <p>
          I am a qualified and professional web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail.
      </p>
      </div>
      <hr className="mt-8 mb-12"/>
      <div id="experience" className="prose">
        <h2 className="section-headline">Experience</h2>
        <div>
          <h3>Tix Co</h3>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              2014 - Presents
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Developer
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Task:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Develop and Maintain a custom CMS system built for the needs of TIX<br/>
              Develop and Maintain integrations between TIX CMS and third party systems<br/>
              Develop the Mobile App & API Platform Service

             </div>
          </section>

          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Tools:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-gray-300 px-3">PHP</span>
              <span className="rounded-xl bg-gray-300 px-3">Python</span>
              <span className="rounded-xl bg-gray-300 px-3">React</span>
              <span className="rounded-xl bg-gray-300 px-3">React Native</span>
              <span className="rounded-xl bg-gray-300 px-3">Git</span>
              <span className="rounded-xl bg-gray-300 px-3">Bitbucket</span>
              <span className="rounded-xl bg-gray-300 px-3">Jira</span>
            </div>
          </section>
        </div>
        <div>
          <h3>Egomedia Bali</h3>
          <section className="mb-3">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              2011 -2014
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Web  Developer
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Task:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              Develop a custom Wordpress themes for several client<br/>
              BDevelop custom plugin to build some functional features<br/>
              Build custom mail client using for a community
            </div>
          </section>

          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Tools:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-gray-300 px-3">PHP</span>
              <span className="rounded-xl bg-gray-300 px-3">CSS</span>
              <span className="rounded-xl bg-gray-300 px-3">Wordpress</span><br/>
              <span className="rounded-xl bg-gray-300 px-3">Python</span>
              <span className="rounded-xl bg-gray-300 px-3">Git</span>
              <span className="rounded-xl bg-gray-300 px-3">Bitbucket</span>
            </div>
          </section>
        </div>
      </div>

      {/*<hr className="mt-8 mb-12"/>*/}
      {/*<div id="projects" className="prose">*/}
      {/*  <h2 className="section-headline">Projects</h2>*/}
      {/*  <div className="mb-16">*/}
      {/*    <h3 id="chrisko-headline">Chrisko.io</h3>*/}
      {/*    <section className="mb-6">*/}
      {/*      <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">*/}
      {/*        Personal blog:*/}
      {/*      </div>*/}
      {/*      <div className="lg:inline-block lg:w-8/12 w-full">*/}
      {/*        My blog is the center of my online presence. Here, I share posts about what I've learnt, tutorials and my*/}
      {/*        thoughts on web development in general.*/}
      {/*      </div>*/}
      {/*    </section>*/}
      {/*    <section className="mb-6">*/}
      {/*      <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">*/}
      {/*        Deployed to:*/}
      {/*      </div>*/}
      {/*      <div className="lg:inline-block lg:w-8/12 w-full">*/}
      {/*        <a href="https://chrisko.io" target="_blank" rel="noopener noreferrer">chrisko.io</a>*/}
      {/*      </div>*/}
      {/*    </section>*/}
      {/*    <section className="mb-6">*/}
      {/*      <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">*/}
      {/*        Code on:*/}
      {/*      </div>*/}
      {/*      <div className="lg:inline-block lg:w-8/12 w-full">*/}
      {/*        <a href="https://github.com/christiankozalla/nextjs-blog" target="_blank"*/}
      {/*           rel="noopener noreferrer">GitHub/nextjs-blog</a>*/}
      {/*      </div>*/}
      {/*    </section>*/}
      {/*    <section className="mb-6">*/}
      {/*      <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">*/}
      {/*        Features:*/}
      {/*      </div>*/}
      {/*      <div className="lg:inline-block lg:w-8/12 w-full">*/}
      {/*        <ul>*/}
      {/*          <li>Static generation</li>*/}
      {/*          <li>Blog content written in Markdown</li>*/}
      {/*          <li>Counter for pageviews and likes</li>*/}
      {/*          <li>My latest tweets</li>*/}
      {/*          <li>Featured images made with Inkscape</li>*/}
      {/*          <li>SEO</li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*    </section>*/}

      {/*    <section className="mb-6">*/}
      {/*      <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">*/}
      {/*        Built with:*/}
      {/*      </div>*/}
      {/*      <div className="lg:inline-block lg:w-8/12 w-full">*/}
      {/*        <span className="rounded-xl bg-gray-300 px-3">Next.js</span>*/}
      {/*        <span className="rounded-xl bg-gray-300 px-3">CSS</span>*/}
      {/*        <span className="rounded-xl bg-gray-300 px-3">styled-jsx</span>*/}
      {/*        <span className="rounded-xl bg-gray-300 px-3">DynamoDB</span>*/}
      {/*        <span className="rounded-xl bg-gray-300 px-3">Vercel</span>*/}
      {/*      </div>*/}
      {/*    </section>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<hr className="mt-8 mb-12"/>*/}
      {/*<div id="projects" className="prose">*/}
      {/*  <h2 className="section-headline">Expand my skills</h2>*/}
      {/*  <div className="mb-16">*/}
      {/*    <h4 id="expand-knowledge-headline">*/}
      {/*      I'd like to expand my skills and knowledge in several fields*/}
      {/*    </h4>*/}
      {/*    <ul>*/}
      {/*      <li>TypeScript</li>*/}
      {/*      <li>Testing, e.g. with Mocha, Chai, Jest</li>*/}
      {/*      <li>Web Components, e.g. with StencilJS, LitElement</li>*/}
      {/*      <li>Prototyping and Wireframing, e.g. with Figma, Adobe XD</li>*/}
      {/*      <li>Scalable Vector Graphics</li>*/}
      {/*      <li>Databases</li>*/}
      {/*      <li>Mobile development</li>*/}
      {/*      <li>*/}
      {/*        Backend development, e.g. learn additional language like Go, Python, PHP, Ruby, Java, Rust*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  </Layout>
)

export default IndexPage
