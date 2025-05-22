import React from "react"

import github from "../styles/assets/logo-github.svg";
import linkedin from "../styles/assets/logo-linkedin.svg";
import twitter from "../styles/assets/logo-twitter.svg";
import globe from "../styles/assets/globe-outline.svg";

const Sidebar = () => (
  <aside className="w-full lg:w-64 mb-8 lg:mb-0 bg-muted p-6 rounded-sm">
    <div className="space-y-8">
      {/* Profile */}
      <div className="text-center lg:text-left">
        <h1 className="text-2xl font-bold mb-1">Wayan Sudiarta</h1>
        <p className="text-accent">Software Engineer</p>
      </div>
      
      {/* Social Links */}
      <div>
        <h2 className="section-headline">Connect</h2>
        <ul className="space-y-3">
          <li className="flex items-center">
            <img src={github} className="w-5 h-5 mr-3" alt="GitHub" />
            <a href="https://github.com/wysdi" target="_blank" rel="noopener noreferrer" className="text-sm">GitHub</a>
          </li>
          <li className="flex items-center">
            <img src={linkedin} className="w-5 h-5 mr-3" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/wysdi/" target="_blank" rel="noopener noreferrer" className="text-sm">LinkedIn</a>
          </li>
          <li className="flex items-center">
            <img src={twitter} className="w-5 h-5 mr-3" alt="Twitter" />
            <a href="https://twitter.com/wysdi_" target="_blank" rel="noopener noreferrer" className="text-sm">Twitter</a>
          </li>
          <li className="flex items-center">
            <img src={globe} className="w-5 h-5 mr-3" alt="Playground" />
            <a href="/playground/" target="_blank" rel="noopener noreferrer" className="text-sm">Playground</a>
          </li>
        </ul>
      </div>
      
      {/* Skills */}
      <div>
        <h2 className="section-headline">Skills</h2>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-sm">
              <span>PHP</span>
              <span>90%</span>
            </div>
            <progress max="100" value="90"></progress>
          </div>
          <div>
            <div className="flex justify-between text-sm">
              <span>JavaScript</span>
              <span>80%</span>
            </div>
            <progress max="100" value="80"></progress>
          </div>
          <div>
            <div className="flex justify-between text-sm">
              <span>Python</span>
              <span>70%</span>
            </div>
            <progress max="100" value="70"></progress>
          </div>
        </div>
      </div>
      
      {/* Technologies */}
      <div>
        <h2 className="section-headline">Technologies</h2>
        <div>
          <h3 className="text-sm font-semibold">Frameworks</h3>
          <p className="text-xs">Symfony, Django, React, Vue, FastAPI</p>
        </div>
        <div className="mt-3">
          <h3 className="text-sm font-semibold">Tools</h3>
          <p className="text-xs">Docker, Kubernetes, Git, AWS, GCP</p>
        </div>
      </div>
      
      {/* Education */}
      <div>
        <h2 className="section-headline">Education</h2>
        <div>
          <h3 className="text-sm font-semibold">Bachelor Degree (S.Kom)</h3>
          <p className="text-xs">2006 - 2009 Stikom Bali</p>
        </div>
      </div>
    </div>
  </aside>
)

export default Sidebar
