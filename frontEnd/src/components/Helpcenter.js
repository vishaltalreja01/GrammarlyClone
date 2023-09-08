import React from 'react';
import "./Helpcenter.css"


import accountbasic from "../images4/accountbilling.png"
import subscription from "../images4/subscription.png"
import resolveissues from "../images4/resolveissue.png"
import aboutWriteophonic from "../images4/aboutgrammarly.png"
import tips from "../images4/tips.png"
import school from "../images4/school.png"
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
const Helpcenter = () => {
    return (
        <>
        <Navbar/>
            <div style={{ backgroundColor: "#F7F7FA", display: "flex", flexDirection: "column", alignItems: "center", height: "200px", padding: "200px" }}>
                <h1>Hi! How can we help?</h1>
                <div style={{}}>
                    {/* <svg style={{ marginLeft:"500px",width: '30px', height: "30px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg> */}

                    <input type="text" placeholder="Search for news" style={{ width: "600px", height: "35px", borderRadius: "50px" }}

                    />

                </div>
                <div className="featured-article">
                    <div className="line"></div>
                    <p className="article-text">FEATURED ARTICLE</p>
                    <div className="line"></div>
                </div>
                <div className="clickable-text">
                    <h5>Problems signing in<p style={{ color: "gray" }}>Account Basics</p></h5>
                    <h5>How do I cancel my Writeophonic subscription?<p style={{ color: "gray" }}>Billing & Subscription</p></h5>
                    <h5>Writeophonic doesn’t recognize my paid account<p style={{ color: "gray" }}>Resolve Issues</p></h5>
                    <h5>Writeophonic’s product offerings<p style={{ color: "gray" }}>About Writeophonic</p></h5>
                </div>
                <div>
                   <div style={{width:"1200px"}}>
                   <img src={accountbasic} alt="Image" style={{ width: "200px", height: "200px",padding:"60px" }} />
                        <img src={subscription} alt="Image" style={{ width: "200px", height: "200px",padding:"60px" }} />
                        <img src={resolveissues} alt="Image" style={{ width: "200px", height: "200px",padding:"60px" }} />
                        <img src={aboutWriteophonic} alt="Image" style={{ width: "200px", height: "200px",padding:"60px" }} />
                        <img src={tips} alt="Image" style={{ width: "200px", height: "200px",padding:"60px" }} />
                        <img src={school} alt="Image" style={{ width: "200px", height: "200px",padding:"60px" }} />
                   </div>
                  

                    
                </div>


            </div>

<Footer/>



        </>
    );
}

export default Helpcenter;
