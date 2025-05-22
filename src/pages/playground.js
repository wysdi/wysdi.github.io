import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PlaygroundPage = () => (
  <Layout>
    <SEO title="Projects | Wayan Sudiarta" />
    <div className="space-y-12">
      <section>
        <h2 className="section-headline">Featured Projects</h2>
        <p className="mb-6 text-sm">A selection of my most significant technical projects.</p>
        
        {/* Project 1: Retail Shop */}
        <div className="card mb-10">
          <h3 className="text-xl font-bold mb-3">Retail Shop</h3>
          <p className="text-sm mb-4">
            A full-featured e-commerce platform built with React and FastAPI, seamlessly integrated with Airtable 
            for content management. Features include product catalog, shopping cart, and checkout functionality.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Live Demo</h4>
              <a 
                href="https://rsvina.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                rsvina.vercel.app
              </a>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Repository</h4>
              <a 
                href="https://github.com/wysdi/react-shop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                github.com/wysdi/react-shop
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">React</span>
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">FastAPI</span>
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">Airtable</span>
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">Vercel</span>
          </div>
        </div>
        
        {/* Project 2: Blog REST API */}
        <div className="card mb-10">
          <h3 className="text-xl font-bold mb-3">Blog REST API</h3>
          <p className="text-sm mb-4">
            A robust REST API application for managing blogs with role-based access control. 
            Features include user authentication, content management, and comprehensive test coverage.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Repository</h4>
              <a 
                href="https://github.com/wysdi/blogs-rest-api" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                github.com/wysdi/blogs-rest-api
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">Laravel</span>
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">PHPUnit</span>
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">MySQL</span>
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">JWT</span>
          </div>
        </div>
        
        {/* Project 3: FastAPI Deployment */}
        <div className="card">
          <h3 className="text-xl font-bold mb-3">FastAPI Serverless</h3>
          <p className="text-sm mb-4">
            A production-ready FastAPI implementation deployed as a serverless application on Vercel.
            Demonstrates API development best practices including documentation, validation, and error handling.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Live Demo</h4>
              <a 
                href="https://wysdi-fastapi.vercel.app/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                wysdi-fastapi.vercel.app/docs
              </a>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Repository</h4>
              <a 
                href="https://github.com/wysdi/fastapi-vercel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                github.com/wysdi/fastapi-vercel
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">Python</span>
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">FastAPI</span>
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">Serverless</span>
            <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded">Vercel</span>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default PlaygroundPage
