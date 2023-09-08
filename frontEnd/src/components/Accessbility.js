import React from 'react'
import "./Privacy"
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
const Accessbility = () => {
  return (
    <>
      <Navbar />

      <div className='textcontainer'>
        <h1>Accessibility Statement</h1>
        <p>Writeophonic Inc. is committed to providing a website and applications that are accessible to the widest possible audience, regardless of technology or ability. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>

        <h3>Measures to support accessibility</h3>
        <p>Writeophonic Inc. takes the following measures to ensure the accessibility of Writeophonic.com and our services:</p>
        <ul>
          <li>Assign clear accessibility objectives and responsibilities</li>
          <li>Provide continual accessibility training for our staff</li>
          <li>Employ accessibility quality assurance methods via automated testing throughout the development process</li>
          <li>Include people with disabilities in our design personas</li>
          <li>Include accessibility within our "definition of done" processes for work</li>
          <li>Include people with disabilities in our research and user testing</li>
        </ul>

        <h3>Feedback</h3>
        <p>As we continue to improve the experience of our website and applications, we welcome your feedback on the accessibility of Writeophonic.com and our services. Please let us know if you encounter accessibility barriers.</p>
        <p>Email: accessibility@Writeophonic.com</p>
        <p>We aim to respond to accessibility feedback within 5 business days and to propose a solution within 14 business days.</p>

        <h3>Compatibility with browsers and assistive technology</h3>
        <p>Writeophonic.com and all Writeophonic browser extensions are designed to be compatible with the following assistive technologies:</p>
        <ul>
          <li>Firefox with NVDA on Windows</li>
          <li>Chrome with JAWS on Windows</li>
          <li>Safari with VoiceOver on macOS</li>
        </ul>
        <p>Writeophonic for Windows and Writeophonic for Mac are designed to be compatible with the following assistive technologies:</p>
        <ul>
          <li>NVDA and/or JAWS on Windows</li>
          <li>VoiceOver on macOS</li>
        </ul>
        <p>Writeophonic.com, Writeophonic for Windows, Writeophonic for Mac, and all Writeophonic browser extensions are tested with the most current operating system with the latest browser and screen reader referenced above.</p>

        <h3>Technical specifications</h3>
        <p>The accessibility of Writeophonic.com and our services relies on the following technologies to work:</p>
        <ul>
          <li>HTML</li>
          <li>WAI-ARIA</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <p>These technologies are relied upon for conformance with the accessibility standards used.</p>

        <h3>Assessment approach</h3>
        <p>Writeophonic Inc. assesses the accessibility of Writeophonic.com and our services by the following approaches:</p>
        <ul>
          <li>Self-evaluation via manual and automated tests</li>
          <li>External evaluation</li>
        </ul>
      </div>
      <Footer />

    </>

  )
}

export default Accessbility