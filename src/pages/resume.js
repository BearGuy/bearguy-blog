import React from 'react'

import './index.css'
import './resume.css'
import '../layouts/index.css'

const Resume = () => (
  <div className="contentContainer">
    <div className="resumeContainer">
      <div>
        <h2>Technical Experience</h2>
        <ul>
          <li>Programming Languages: Javascript, Python, Java (familiar with C#, C/C++)</li>
          <li>Web Technologies: HTML, CSS, Node.js, React</li>
          <li>Machine Learning: Tensorflow, Keras</li>
          <li>Cloud Computing: 1yr Experience with AWS and DigitalOcean</li>
          <li>Mobile Development: React Native</li>
          <li>Operating Systems: Windows, Mac OS, Linux (Debian)</li>
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        <h3 style={{marginBottom: "10px"}}>B.Sc, Bachelor of Science in Engineering</h3>
        <h4 style={{marginBottom: "10px"}}>Engineering Physics</h4>
        <h4 style={{marginBottom: "10px"}}><a href="https://queensu.ca" style={{color: "blue"}}>
            Queen's University</a></h4>
        <h6 style={{marginBottom: "15px", color: "#868e96"}}>2013-2018</h6>
        <ul>
          <li>Major in Engineering Physics with a specialization in Computing</li>
        </ul>
      </div>

      <div>
        <h2>Work Experience</h2>

        <div>
          <h3 style={{marginBottom: "10px"}}>Director of Product - <a href="http://queensevents.ca" style={{color: "#2f9acc"}}>QueensEvents.ca</a>
          </h3>
          <h6 style={{marginBottom: "15px", color: "#868e96"}}>May 2017 - September 2017</h6>
          <ul>
            <li>Responsible for creating and leading a development team to build a new web platform for an event marketing service</li>
            <li>Currently QueensEvents.ca has 5000+ unique visitors per month and promotes over 1500+ events annually</li>
            <li>Architected NodeJS backend connected to a MySQL database to store user and event information</li>
            <li>Built Facebook Messenger app for more efficient delivery of event information</li>
            <li>Developing frontend app with React & Redux using React-Static for static site generation</li>
          </ul>
        </div>

        <div>
          <h3 style={{marginBottom: "10px"}}>Software Developer Co-op - <a href="https://assentcompliance.com" style={{color: "#E23232"}}>Assent Compliance</a>
          </h3>
          <h6 style={{marginBottom: "15px", color: "#868e96"}}>May 2017 - September 2017</h6>
          <ul>
            <li>Extended CI/CD pipeline functionality by writing a pipeline library for Jenkins</li>
            <li>Created internal dashboard to visualize success of Jenkins deployments, as well as keep track of code
            versions deployed across multiple environments</li>
            <li>Prototyped Consul and NGINX services running in Docker containers to optimize microservice discovery
            and management of company's API Gateway across multiple environments</li>
            <li>Built audit and inspections application using NodeJS backend and Angular 4 frontend, wrapped with
            Cordova for mobile compatibility and offline support</li>
          </ul>
        </div>

        <div>
          <h3 style={{marginBottom: "10px"}}>Software Developer Intern - <a href="https://shopify.com" style={{color: "#50B83C"}}>Shopify</a>
          </h3>
          <h6 style={{marginBottom: "15px", color: "#868e96"}}>September 2016 - December 2016</h6>
          <ul>
            <li>Worked on API Team to help extend the API for over 30,000 3rd party app developing partners</li>
            <li>Contributed to development of Draft Orders to be used by over 300,000 merchants, including contributing
            to Checkout, Orders, and Payment systems for Shopify’s core Ruby on Rails application</li>
            <li>Created automated scripts (rake tasks) to make testing more productive and efficient for the entire team</li>
            <li>Experienced agile process for app development, as well as the team process and mindset for rapid
            development of high-quality code</li>
          </ul>
        </div>

        <div>
          <h3 style={{marginBottom: "10px"}}>Junior Software Developer - <a href="http://www.transformix.com/" style={{color: "blue"}}>Transformix Engineering</a>
          </h3>
          <h6 style={{marginBottom: "15px", color: "#868e96"}}>May 2016 - August 2016</h6>
          <ul>
            <li>Development of Django Application (Machine Gateway) to pull and set tags, attributes, instances and
            classes of PLC’s remotely</li>
            <li>Creating Machine Gateway’s Django API</li>
            <li>Created front end with HMTL, CSS, jQuery and Bootstrap</li>
            <li>Integrated Ethernet/IP python module with Machine Gateway</li>
            <li>Created C wrappers for use of OpENer libraries to allow UDP communication with machines</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Resume