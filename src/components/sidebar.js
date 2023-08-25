import React from "react"

import mail from "../styles/assets/mail-outline.svg";
import home from "../styles/assets/home-outline.svg";
import github from "../styles/assets/logo-github.svg";
import linkedin from "../styles/assets/logo-linkedin.svg";
import twitter from "../styles/assets/logo-twitter.svg";
import globe from "../styles/assets/globe-outline.svg";

import avatar from "../images/avatar.jpeg"

const Sidebar = ({ }) => (
  <div id="sidebar" className="w-full sm:max-w-sm p-8 bg-gradient-to-b from-gray-200  to-white-500">
    <div className="px-2 mb-12">
      {/*<img src={avatar} alt="Profile Picture"*/}
      {/*     className="rounded-full w-48 mx-auto mb-2"/>*/}
      <h1 className="text-center text-3xl font-semibold mb-2">Wayan Sudiarta</h1>
      <h2 className="text-center text-xl font-light">Software Engineer</h2>
    </div>

    <div className="font-light text-lg px-2 mb-12">
      <h2 className="text-xl font-semibold mb-4">Contact</h2>
      <div className="flex items-center my-3">
        <img src={mail} className="inline w-6 mr-4" alt="Mail icon" />
        <a href="mailto:zerofroxy@gmail.com">wynsudiarta87@gmail.com</a>
      </div>
      {/*<div className="flex items-center my-3">*/}
      {/*  <img src={phone} className="inline w-6 mr-4" alt="Phone icon"/>*/}
      {/*  <a href="tel:">0123 456 789</a>*/}
      {/*</div>*/}
      <div className="flex items-center my-3">
        <img src={home} className="inline w-6 pb-1 mr-4" alt="House icon" />
        <div>
          <p>Badung, Bali</p>
        </div>
      </div>
    </div>

    {/*<div className="font-light text-lg px-2 mb-12">*/}
    {/*  <h2 className="text-xl font-semibold mb-4">Personal</h2>*/}
    {/*  <div className="flex items-center my-3">*/}
    {/*    <img src={egg} className="inline w-6 mr-4" alt="Egg Icon"/>*/}
    {/*    <span>Born on 27th of May 2000</span>*/}
    {/*  </div>*/}
    {/*  <div className="flex items-center my-3">*/}
    {/*    <img src={person} className="inline w-6 mr-4" alt="Two Persons Icon"/>*/}
    {/*    <span>Married, one kids</span>*/}
    {/*  </div>*/}
    {/*</div>*/}

    <div className="font-light text-lg px-2 mb-12">
      <h2 className="text-xl font-semibold mb-4">On the Web</h2>
      <div className="flex items-center my-3">
        <img src={github} className="inline w-6 mr-4" alt="GitHub Logo" />
        <a href="https://github.com/wysdi" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>

      <div className="flex items-center my-3">
        <img src={linkedin} className="inline w-6 mr-4" alt="LinkedIn Logo" />
        <a href="https://www.linkedin.com/in/wysdi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="flex items-center my-3">
        <img src={twitter} className="inline w-6 mr-4" alt="Twitter Logo" />
        <a href="https://twitter.com/wysdi_" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      {/*<div className="flex items-center my-3">*/}
      {/*  <img src="./assets/logo-codepen.svg" className="inline w-6 mr-4" alt="CodePen Logo"/>*/}
      {/*  <a href="#" target="_blank" rel="noopener noreferrer">CodePen</a>*/}
      {/*</div>*/}
      <div className="flex items-center my-3">
        <img src={globe} className="inline w-6 mr-4" alt="Globe icon" />
        <a href="/playground/" target="_blank" rel="noopener noreferrer">Playground</a>
      </div>
    </div>

    <div className="font-light text-lg px-2 mb-12">
      <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
      <ul className="list-none">
        <li>
          <label htmlFor="php-skill">PHP</label>
          <progress id="php-skill" max="100" value="90"></progress>
        </li>
        <li>
          <label htmlFor="python-skill">Python</label>
          <progress id="python-skill" max="100" value="70"></progress>
        </li>
        <li>
          <label htmlFor="js-skill">Javascript</label>
          <progress id="js-skill" max="100" value="80"></progress>
        </li>
        <li>
          <div className="mt-2 text-xl font-semibold">Frameworks</div>
          <p className="leading-8">
            <span className="rounded-xl bg-gray-300 px-3">Wordpress</span>
            <span className="rounded-xl bg-gray-300 px-3">Symfony</span>
            <span className="rounded-xl bg-gray-300 px-3">Django</span><br />
            <span className="rounded-xl bg-gray-300 px-3">FastApi</span>
            <span className="rounded-xl bg-gray-300 px-3">Vue</span>
            <span className="rounded-xl bg-gray-300 px-3">React</span><br />
            <span className="rounded-xl bg-gray-300 px-3">React Native</span>

          </p>
        </li>
        <li>
          <div className="mt-4 text-xl font-semibold">Infrastructure / Hosting / DB</div>
          <p className="leading-8">
            <span className="rounded-xl bg-gray-300 px-3">Mysql</span>
            <span className="rounded-xl bg-gray-300 px-3">Google Cloud Platform </span> <br />
            <span className="rounded-xl bg-gray-300 px-3">Heroku</span>
            <span className="rounded-xl bg-gray-300 px-3">Netlify</span>
            <span className="rounded-xl bg-gray-300 px-3">Vercel</span>

          </p>
        </li>
      </ul>
    </div>

    <div className="font-light text-lg px-2 mb-12">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      <h3 className="font-semibold">Bachelor Degree (S.Kom)</h3>
      <p>2006 - 2009 Stikom Bali</p>
    </div>

    <div className="font-light text-lg px-2 mb-12">
      <h2 className="text-xl font-semibold mb-4">Languages</h2>

      <h3 className="font-semibold">English</h3>
      <p>Conversational</p>
    </div>
  </div>
)


export default Sidebar
