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
          <h3 id="chrisko-headline">Blog Rest API</h3>
          <section className="mb-6">
          Create a robust REST API application for managing blogs with role-based access control, ensuring secure and efficient content management.        </section>
          {/* <section>
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Deployed to:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://rsvina.vercel.app" target="_blank" rel="noopener noreferrer">rsvina.vercel.app</a>
            </div>
          </section> */}
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Code on:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://github.com/wysdi/blogs-rest-api" target="_blank"
                 rel="noopener noreferrer">wysdi/blogs-rest-api</a>
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Built with:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-blue-300 px-3">Laravel</span>
              <span className="rounded-xl bg-blue-300 px-3">PHPUnit</span>

            </div>
          </section>
        </div>
        <div className="mb-16">
          <h3 id="chrisko-headline">PasteBin Clone</h3>
          <section className="mb-6">
          Introducing PasteBinAPI, a RESTful application that replicates the functionality of PasteBin website.          </section>
          {/* <section>
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Deployed to:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://rsvina.vercel.app" target="_blank" rel="noopener noreferrer">rsvina.vercel.app</a>
            </div>
          </section> */}
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Code on:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://github.com/wysdi/FastApi-PasteBin" target="_blank"
                 rel="noopener noreferrer">wysdi/FastApi-PasteBin</a>
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Built with:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-blue-300 px-3">Fast Api</span>
            </div>
          </section>
        </div>
        <div className="mb-16">
          <h3 id="chrisko-headline">Retail Shop</h3>
          <section className="mb-6">
          Create a personalized e-commerce platform with ease using React and FastAPI, seamlessly integrated with Airtable.
          </section>
          <section>
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Deployed to:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://rsvina.vercel.app" target="_blank" rel="noopener noreferrer">rsvina.vercel.app</a>
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Code on:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://github.com/wysdi/react-shop" target="_blank"
                 rel="noopener noreferrer">wysdi/react-shop</a>
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Built with:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-blue-300 px-3 mr-4">React</span>
              <span className="rounded-xl bg-blue-300 px-3">Fast Api</span>
            </div>
          </section>
        </div>
        <div className="mb-16">
          <h3 id="chrisko-headline">Fast Api</h3>
          <section className="mb-6">
          Effortlessly develop a bespoke API for personal project with the FastAPI framework.          </section>
          <section>
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Deployed to:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://wysdi-fastapi.vercel.app/docs" target="_blank" rel="noopener noreferrer">wysdi-fastapi.vercel.app</a>
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Code on:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://github.com/wysdi/fastapi-vercel" target="_blank"
                 rel="noopener noreferrer">wysdi/fastapi-vercel</a>
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Built with:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-blue-300 px-3 mr-4">Python</span>
              <span className="rounded-xl bg-blue-300 px-3">Fast Api</span>
            </div>
          </section>
        </div>
        <div className="mb-16">
          <h3 id="chrisko-headline">Telegram Bot</h3>
          <section className="mb-6">
          Craft a Telegram bot with Python and empower your messaging experience with intelligent automation and custom commands.          </section>
          {/*<section className="mb-6">*/}
          {/*  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">*/}
          {/*    Deployed to:*/}
          {/*  </div>*/}
          {/*  <div className="lg:inline-block lg:w-8/12 w-full">*/}
          {/*    <a href="https://wysdi.github.io/gowes" target="_blank" rel="noopener noreferrer">wysdi.github.io/gowes</a>*/}
          {/*  </div>*/}
          {/*</section>*/}
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Code on:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://github.com/wysdi/wysdi-tbot" target="_blank"
                 rel="noopener noreferrer">GitHub/wysdi-tbot</a>
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Built with:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-blue-300 px-3 mr-4">Python</span>
              <span className="rounded-xl bg-blue-300 px-3">Telegram</span>
            </div>
          </section>
        </div>
        <div className="mb-16">
          <h3 id="chrisko-headline">Salesforce Custom Block</h3>
          <section className="mb-6">
Experience the full potential of Salesforce Marketing Cloud Content Builder with a sample Content Block built using the Block SDK.
          </section>
          {/*<section className="mb-6">*/}
          {/*  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">*/}
          {/*    Deployed to:*/}
          {/*  </div>*/}
          {/*  <div className="lg:inline-block lg:w-8/12 w-full">*/}
          {/*    <a href="https://wysdi.github.io/gowes" target="_blank" rel="noopener noreferrer">wysdi.github.io/gowes</a>*/}
          {/*  </div>*/}
          {/*</section>*/}
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Code on:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://github.com/wysdi/salesforce-custom-block" target="_blank"
                 rel="noopener noreferrer">wysdi/salesforce-custom-block</a>
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Built with:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-blue-300 px-3 mr-4">Alpine Js</span>
              <span className="rounded-xl bg-blue-300 px-3 mr-4">Node Js</span><br/>
              <span className="rounded-xl bg-blue-300 px-3 mr-4">Handlebars</span>
              <span className="rounded-xl bg-blue-300 px-3 mr-4">Express</span><br/>
              <span className="rounded-xl bg-blue-300 px-3 mr-4">Lightning Design System</span>
            </div>
          </section>
        </div>
        <div className="mb-16">
          <h3 id="chrisko-headline">CSV Extractor</h3>
          <section className="mb-6">
          This pipeline is designed to efficiently extract CSV lines from text files.          </section>
          {/*<section className="mb-6">*/}
          {/*  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">*/}
          {/*    Deployed to:*/}
          {/*  </div>*/}
          {/*  <div className="lg:inline-block lg:w-8/12 w-full">*/}
          {/*    <a href="https://wysdi.github.io/gowes" target="_blank" rel="noopener noreferrer">wysdi.github.io/gowes</a>*/}
          {/*  </div>*/}
          {/*</section>*/}
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Code on:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://github.com/wysdi/python-beam" target="_blank"
                 rel="noopener noreferrer">wysdi/python-beam</a>
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Built with:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-blue-300 px-3 mr-4">Apache Beam</span>
              <span className="rounded-xl bg-blue-300 px-3">Python</span>
            </div>
          </section>
        </div>
    
        <div className="mb-16">
          <h3 id="chrisko-headline">Gowes (Personal Sites)</h3>
          <section className="mb-6">
            Fetch video content from youtube channel and show it on React App
          </section>
          <section>
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Deployed to:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://wysdi.github.io/gowes" target="_blank" rel="noopener noreferrer">wysdi.github.io/gowes</a>
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Code on:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <a href="https://github.com/wysdi/gowes" target="_blank"
                 rel="noopener noreferrer">wysdi/gowes</a>
            </div>
          </section>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Built with:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              <span className="rounded-xl bg-blue-300 px-3 mr-4">React</span>
              <span className="rounded-xl bg-blue-300 px-3">YouTube Api</span>
            </div>
          </section>
        </div>

      </div>

    </div>
  </Layout>
)

export default IndexPage
