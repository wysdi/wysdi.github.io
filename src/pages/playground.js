import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Playground" />
    <div className="content w-full p-12">
      <div id="projects" className="prose">
        <h2 className="section-headline">Playground</h2>
        <div className="mb-16">
          <h3 id="chrisko-headline">Fast Api Projects</h3>
          <section className="mb-6">
              Build custom api using Fast Api Framework
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Deployed to:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://wysdi-fastapi.vercel.app" target="_blank" rel="noopener noreferrer">wysdi-fastapi.vercel.app</a>
            </div>
          </section>
          {/*<section className="mb-6">*/}
          {/*  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">*/}
          {/*    Code on:*/}
          {/*  </div>*/}
          {/*  <div className="lg:inline-block lg:w-8/12 w-full">*/}
          {/*    <a href="https://github.com/christiankozalla/nextjs-blog" target="_blank"*/}
          {/*       rel="noopener noreferrer">GitHub/nextjs-blog</a>*/}
          {/*  </div>*/}
          {/*</section>*/}
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Built with:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-blue-300 px-3">Python</span>
              <span className="rounded-xl bg-blue-300 px-3">Fast Api</span>
            </div>
          </section>
        </div>
        <div className="mb-16">
          <h3 id="chrisko-headline">Gowes Site</h3>
          <section className="mb-6">
            Fetch video content from youtube and show it on specific sites
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Deployed to:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://wysdi.github.io/gowes" target="_blank" rel="noopener noreferrer">wysdi.github.io/gowes</a>
            </div>
          </section>
          {/*<section className="mb-6">*/}
          {/*  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">*/}
          {/*    Code on:*/}
          {/*  </div>*/}
          {/*  <div className="lg:inline-block lg:w-8/12 w-full">*/}
          {/*    <a href="https://github.com/christiankozalla/nextjs-blog" target="_blank"*/}
          {/*       rel="noopener noreferrer">GitHub/nextjs-blog</a>*/}
          {/*  </div>*/}
          {/*</section>*/}
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Built with:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-blue-300 px-3">Python</span>
              <span className="rounded-xl bg-blue-300 px-3">Fast Api</span>
            </div>
          </section>
        </div>

      </div>

    </div>
  </Layout>
)

export default IndexPage
