import React from 'react';
import "./GrammarlyGo.css";
import g1 from "../images4/p1.png";
import g2 from "../images4/p2.png";
import FAQ from './FAQ';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
const WriteophonicGo = () => {
  return (
    <>
    <Navbar/>
    <div className='divmain'>
    <div className="background-div">
      <div className="center-heading">Coming Soon: </div>
      <div className="center-heading2">A New Generation in Writing</div>
      <p className="sub-heading">Introducing WriteophonicGO, the suite of generative AI capabilities from the leader in AI communication assistance. To start using WriteophonicGO when it becomes available, sign up or sign in to Writeophonic — or request early access for your team.</p>
      <div className="buttonsgo">
        <button className="get-grammarly">Get Writeophonic</button>
        <button className="get-early-access">Get Early Access for Teams</button>
      </div>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Pnr8dbT20ZE?list=TLGGxN1xAbDWeC4xMzA2MjAyMw"
          title="WriteophonicGO Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="grammarlyGo-heading">WriteophonicGO</div>
    </div>
    </div>
   
    <div>
        <img src={g1} alt="" />
    </div>
    <div className='Personalized'>
  <div className='columns'>
    <div className='leftone'>
      <div className='column1'>
        <img className='img1' src={g2} alt="" />
      </div>
    </div>
    <div className='rightone'>
      <div className='column2'>
        <h2>Personalized, High-Quality Generative AI</h2>
        <p>The next evolution of communication assistance helps you at every step of the writing process, not just revision. WriteophonicGO expands on our mission with innovation that maintains Writeophonic’s high standards for quality, security, and user experience. Learn more about the product vision for WriteophonicGO and how it solves for real customer needs.
</p>
      </div>
    </div>
  </div>
</div>
<div className="white-background">
  <h2>Our Principles of AI Development</h2>
  <p>
    We are guided by the belief that technology should serve people and society, not the other way around. Learn about our pillars of responsible product development and the design principles we uphold to ensure our AI matches our values.
  </p>
  <button className="learn-more-button">Learn More</button>
  <p>
    Visit our Trust Center to explore the measures we take to protect your information, backed by globally recognized compliance standards.
  </p>
</div>
<div className="faq-div">
  <FAQ/>
</div>

    <div>
    <div className="lastdiv">
      <div className="center-heading">You’ll Be Amazed at What You Can Do </div>
      
      <p className="sub-heading">Start getting Writeophonic’s AI-enabled communication assistance today to experience WriteophonicGO as soon as it’s available. Stay tuned for updates about the upcoming beta launch.</p>
      <div className="buttonsgoo">
        <button className="get-grammarly">Get Writeophonic</button>
        <button className="get-early-access">Get Early Access for Teams</button>
      </div>
    
      <div className="grammarlyGo-headingg">WriteophonicGO</div>
    </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default WriteophonicGo;
