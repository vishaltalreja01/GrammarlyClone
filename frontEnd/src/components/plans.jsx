import React from 'react';
import "./premium.css"
import i1 from "../images4/p1.png"
import i2 from "../images4/p2.png"
import i3 from "../images4/p3.png"
import i4 from "../images4/p4.png"
import i5 from "../images4/p5.png"
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const WriteophonicPremium = () => {
  return (

    <div className="main-div">
      <Navbar />
      <h1 className="heading">Aim High With Brilliant Writing</h1>
      <button className="upgrade-btn">Upgrade to Writeophonic Premium</button>
      <div><img src={i1} alt="" /></div>
      <div ><img className='img2' src={i2} alt="" /></div>
      <div><img src={i3} alt="" /></div>
      <div><img src={i4} alt="" /></div>
      <div class="communication-div">
        <h2>Up-Level Your Communication</h2>
        <p>Unlock Writeophonic Premium’s advanced features and suggestions.</p>
        <div class="content-wrapper">
          <div class="leftdiv">
            <h3>FOR CASUAL WRITING</h3>
            <h4>Free</h4>
            <ul>
              <li>Basic writing suggestions.</li>
              <button class="premium-btnn">Premium</button>
              <li>Spelling</li>
              <li>Grammar</li>
              <li>Punctuation</li>
              <li>Conciseness</li>
            </ul>
          </div>
          <div class="rightdiv">
            <h3>FOR WORK OR SCHOOL</h3>
            <h4>Premium</h4>
            <ul>
              <li>Style, tone, and clarity improvements for writing at work and school.</li>
              <button class="upgrade-btn">Upgrade to Premium</button>
              <li>Everything in Free</li>
              <li>Clarity-focused sentence rewrites</li>
              <li>Tone adjustments</li>
              <li>Plagiarism detection</li>
              <li>Word choice</li>
              <li>Formality level</li>
              <li>Fluency</li>
              <li>Additional advanced suggestions</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="communication-container">
        <div class="left-side-content">
          <h2>Get the Job Done</h2>
          <p>Effective communication is the key to making things happen.</p>
        </div>
        <div class="right-side-content">
          <iframe width="560" height="515" src="https://www.youtube.com/embed/37CSi47T4rA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>


      <div><img src={i5} alt="" /></div>
      <section className="_2Zae4-wrapper _3IUe0-sectionContainer __ycx-swoosh">
        <div className="_2dxF1-content">
          <h1 style={{ color: '#0E101A', textAlign: 'center', fontSize: '48px', marginTop: "50px" }} className="_3zjMM-h1">
            Take Your Writing from Good to Great
          </h1>
          <div style={{ height: '24px', flexShrink: 0 }}></div>
          <div style={{ color: '#0E101A', textAlign: 'center', fontSize: "16px", marginTop: "20px" }} className="_1ohL3-lead">
            Unlock Writeophonic Premium’s advanced features to up-level your communication.
          </div>
          <div style={{ height: '24px', flexShrink: 0 }}></div>
          <a
            href="/upgrade?utm_campaign=funnelOnboarding&utm_medium=internal&utm_source=funnel"
            style={{ width: '284px' }}
            className="_2vXY_-basic _3Y7Vy-sizeLarge _2Vu_8-fontWeightBold _2O_7o-colorGreen _1Ey-7-minimumPadding"
            data-cy="button-component"
          >
            <span className="_1vpLY-content">
              <button className='upgrade-btn' style={{ marginBottom: "100px" }}><span className="o9viu-text">Upgrade to Writeophonic Premium</span></button>
            </span>
          </a>
        </div>
      </section>
      <Footer />
    </div>

  );
}

export default WriteophonicPremium;
