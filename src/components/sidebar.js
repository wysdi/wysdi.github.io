import React from "react"

import github from "../styles/assets/logo-github.svg";
import linkedin from "../styles/assets/logo-linkedin.svg";
import twitter from "../styles/assets/logo-twitter.svg";
import globe from "../styles/assets/globe-outline.svg";

const Sidebar = () => (
  <aside className="w-full lg:w-80 mb-12 lg:mb-0">
    <div className="sticky top-8 space-y-8">
      {/* Profile */}
      <div className="text-center lg:text-left card-modern">
        <h1 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Wayan Sudiarta</h1>
        <p className="text-accent font-medium text-lg">Software Engineer</p>
      </div>
      
      {/* Social Links */}
      <div className="card-modern">
        <h2 className="section-headline">Connect</h2>
        <ul className="space-y-4">
          <li className="flex items-center group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
              <img src={github} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" alt="GitHub" />
            </div>
            <a href="https://github.com/wysdi" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium group-hover:text-accent transition-colors">GitHub</a>
          </li>
          <li className="flex items-center group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
              <img src={linkedin} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" alt="LinkedIn" />
            </div>
            <a href="https://www.linkedin.com/in/wysdi/" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium group-hover:text-accent transition-colors">LinkedIn</a>
          </li>
          <li className="flex items-center group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
              <img src={twitter} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" alt="Twitter" />
            </div>
            <a href="https://twitter.com/wysdi_" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium group-hover:text-accent transition-colors">Twitter</a>
          </li>
          <li className="flex items-center group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
              <img src={globe} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" alt="Playground" />
            </div>
            <a href="/playground/" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium group-hover:text-accent transition-colors">Playground</a>
          </li>
        </ul>
      </div>
      
      {/* Skills */}
      <div className="card-modern">
        <h2 className="section-headline">Skills</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-secondary">PHP</span>
              <span className="text-accent">90%</span>
            </div>
            <progress max="100" value="90"></progress>
          </div>
          <div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-secondary">JavaScript</span>
              <span className="text-accent">80%</span>
            </div>
            <progress max="100" value="80"></progress>
          </div>
          <div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-secondary">Python</span>
              <span className="text-accent">70%</span>
            </div>
            <progress max="100" value="70"></progress>
          </div>
        </div>
      </div>
      
      {/* Technologies */}
      <div className="card-modern">
        <h2 className="section-headline">Technologies</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-primary mb-2">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {['Symfony', 'Django', 'React', 'Vue', 'FastAPI'].map((tech) => (
                <span key={tech} className="badge">{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'Kubernetes', 'Git', 'AWS', 'GCP'].map((tech) => (
                <span key={tech} className="badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Education */}
      <div className="card-modern">
        <h2 className="section-headline">Education</h2>
        <div>
          <h3 className="text-sm font-semibold text-primary">Bachelor Degree (S.Kom)</h3>
          <p className="text-xs text-muted mt-1">2006 - 2009 · Stikom Bali</p>
        </div>
      </div>
    </div>
  </aside>
)

export default Sidebar
