import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Wayan Sudiarta | Software Engineer" />
    
    <div className="space-y-12">
      {/* Profile Section */}
      <section>
        <h2 className="section-headline">About Me</h2>
        <div className="prose prose-sm sm:prose">
          <p>
            Software engineer with over 8 years of experience in web development, 
            mobile applications, and data processing. I focus on creating clean, 
            efficient, and maintainable solutions to complex problems.
          </p>
        </div>
      </section>
      
      {/* Experience Section */}
      <section>
        <h2 className="section-headline">Experience</h2>
        
        <div className="space-y-6">
          {/* OFLOAD */}
          <div className="card">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <h3 className="font-bold">OFLOAD</h3>
              <span className="text-sm text-gray-500">Remote</span>
            </div>
            <p className="text-sm text-accent mb-2">Software Engineer</p>
            <p className="text-sm text-gray-600 mb-4">Jan 2024 - Present</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Developing scalable systems and technical solutions for logistics operations</li>
              <li>Implementing Domain-Driven Design principles and design patterns</li>
              <li>Managing and optimizing services using Docker, Laravel, React, and Kubernetes</li>
              <li>Collaborating with cross-functional teams to deliver high-quality software</li>
            </ul>
          </div>
          
          {/* VAFE - ROCKET LAB */}
          <div className="card">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <h3 className="font-bold">VAFE - ROCKET LAB</h3>
              <span className="text-sm text-gray-500">Remote</span>
            </div>
            <p className="text-sm text-accent mb-2">Software Engineer</p>
            <p className="text-sm text-gray-600 mb-4">May 2023 - Jan 2024</p>
            <ul role="list" className="list-disc pl-5 text-sm space-y-1">
              <li>
                Continuously maintaining and enhancing the existing legacy codebase of the Custom CMS.
              </li>
              <li>
                Providing support for the development process by contributing to the implementation of new features and enhancements to legacy code.
              </li>
              <li>
                Integrating disparate code repositories into a unified repository to facilitate streamlined management and ease of maintenance in the long term
              </li>
            </ul>
          </div>
          
          {/* TIX Co */}
          <div className="card">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <h3 className="font-bold">TIX Co</h3>
              <span className="text-sm text-gray-500">Remote</span>
            </div>
            <p className="text-sm text-accent mb-2">Senior Fullstack Developer</p>
            <p className="text-sm text-gray-600 mb-4">Apr 2014 - Jan 2023</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Developed and maintained a custom CMS system tailored to TIX's unique needs</li>
              <li>Built integrations between TIX CMS and third-party systems</li>
              <li>Designed and developed mobile apps using React Native</li>
              <li>Created API platform services using Symfony and FastAPI</li>
              <li>Implemented scraping tools using Python</li>
            </ul>
          </div>
          
          {/* Egomedia Bali */}
          <div className="card">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <h3 className="font-bold">Egomedia Bali</h3>
              <span className="text-sm text-gray-500">Bali, Indonesia</span>
            </div>
            <p className="text-sm text-accent mb-2">Web Developer</p>
            <p className="text-sm text-gray-600 mb-4">Sep 2011 - Apr 2014</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Developed websites using custom themes in WordPress</li>
              <li>Built custom plugins for advanced features in WordPress</li>
              <li>Implemented responsive designs and user interfaces</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section>
        <h2 className="section-headline">Get In Touch</h2>
        <p className="mb-4">Interested in working together? Feel free to reach out.</p>
        <a href="mailto:wynsudiarta87@gmail.com" className="btn">
          Contact Me
        </a>
      </section>
    </div>
  </Layout>
)

export default IndexPage
