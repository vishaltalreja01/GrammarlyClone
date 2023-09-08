import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Footer.js
  return (
    <footer className="footer">
      <div className="footer__content">
        <ul
          className="footer__Links"
          style={{
            display: "flex",
            listStyle: "none",
           
            // justifyContent:"center",
            gap: "80px",
            padding: "30px",
          }}
        >
          <li className="footer__Link">
            <h3 style={{ marginBottom: "35px" }}> Get Writeophonic </h3>
            <ul>
              <li>
                <Link className="navigate" to="/desktop">Writeophonic for your Desktop</Link>
              </li>
              <li>
                <Link className="navigate" to="/windows">Writeophonic for Windows</Link>
              </li>
              <li>
                <Link className="navigate" to="/mac">Writeophonic for MAC</Link>
              </li>
              <li>
                <Link className="navigate" to="/browser">Writeophonic for Browser Extension</Link>
              </li>
              <li>
                <Link className="navigate" to="/chrome">Writeophonic for Chrome</Link>
              </li>
              <li>
                <Link className="navigate" to="/safari">Writeophonic for Safari</Link>
              </li>
              <li>
                <Link className="navigate" to="/fireFox">Writeophonic for Firefox</Link>
              </li>
              <li>
                <Link className="navigate" to="/edge">Writeophonic for Edge</Link>
              </li>
              <li>
                <Link className="navigate" to="/office">Writeophonic for MS Office</Link>
              </li>
              <li>
                <Link className="navigate" to="/googledocs">Writeophonic for Google Docs</Link>
              </li>
              <li>
                <Link className="navigate" to="/mobile">Writeophonic for Mobile</Link>
              </li>
              <li>
                <Link className="navigate" to="/iphone">Writeophonic for iphone</Link>
              </li>
              <li>
                <Link className="navigate" to="/ipad">Writeophonic for ipad</Link>
              </li>
              <li>
                <Link className="navigate" to="/android">Writeophonic for Android</Link>
              </li>
            </ul>
          </li>
          <li className="footer__Link">
            <h3 style={{ marginBottom: "35px" }}> Learn More </h3>
            <ul>
              {/* <li>Plans</li> */}
              <li>
                <Link className="navigate" to="/plans">Writeophonic Premium</Link>
              </li>
              <li>
                <Link className="navigate" to="/buisnessBlog">Writeophonic Buisness</Link>
              </li>
              <li>
                <Link className="navigate" to="/institutions">Writeophonic for Education</Link>
              </li>
              {/* <li>
                <Link className="navigate" to="/api">Writeophonic API</Link>
              </li> */}
              <li>
                <Link className="navigate" to="/generative">WriteophonicGo</Link>
              </li>
              <li>
                <Link className="navigate" to="/blog">Blog</Link>
              </li>
              <li>
                <Link className="navigate" to="/techBlog">Tech Blog</Link>
              </li>
              <li>
                <Link className="navigate" to="/educationBlog">Educational Blog</Link>
              </li>
              <li>
                <Link className="navigate" to="/buisnessBlog">Buisness Blog</Link>
              </li>
              <li>
                <Link className="navigate" to="/developerBlog">Developers Blog</Link>
              </li>
            </ul>
          </li>
          <li className="footer__Link">
            <h3 style={{ marginBottom: "35px" }}> Features </h3>
            <ul>
              <li>
                <Link  className="navigate"  to="/grammar">Grammar Checker</Link>
              </li>
              <li>
                <Link  className="navigate" to="/plagirism">Plagiarism Checker</Link>
              </li>
              <li>
                <Link  className="navigate" to="/citation">Citation Generator</Link>
              </li>
              <li>
                <Link className="navigate"  to="/eassay">Essay Checker</Link>
              </li>
              <li>
                <Link  className="navigate" to="/paraphrasing">Paraphrasing Tool</Link>
              </li>
              <li>
                <Link className="navigate"  to="/toneDetector">Tone Detector</Link>
              </li>
              <li>
                <Link className="navigate"  to="/guide">Style Guide</Link>
              </li>
              <li>
                <Link className="navigate"  to="/snippest">Snippets</Link>
              </li>
              <li>
                <Link className="navigate"  to="/analytics">Analytic</Link>
              </li>
              <li>
                <Link className="navigate"  to="/brandTone">Brand Tones</Link>
              </li>
            </ul>
          </li>
          <li className="footer__Link">
            <h3 style={{ marginBottom: "35px" }}> Company </h3>
            <ul>
              <li>
                <Link  className="navigate"  to="/about">About</Link>
              </li>
              <li>
                <Link className="navigate"  to="/responsible">Responsible AI</Link>
              </li>
              {/* <li>
                <Link className="navigate"  to="/careers">Careers & Cultures</Link>
              </li> */}
              <li>
                <Link className="navigate"  to="/press">Press</Link>
              </li>
              <li>
                <Link className="navigate"  to="/affiliates">Affiliates</Link>
              </li>
              <li>
                <Link className="navigate"  to="/partners">Partners</Link>
              </li>
              <li>
                <Link  className="navigate" to="/trust">Trust Centers</Link>
              </li>
              <li>
                <Link className="navigate"  to="/privacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link className="navigate"  to="/terms">Terms of Services</Link>
              </li>
              <li>
                <Link className="navigate"  to="/buisness">Customer Buisness Agreement</Link>
              </li>
              <li>
                <Link className="navigate"  to="/CAprivacy">CA Privacy Notice</Link>
              </li>
              <li>
                <Link className="navigate"  to="/security">Security</Link>
              </li>
              <li>
                <Link className="navigate"  to="/accessibility">Accessibilty</Link>
              </li>
            </ul>
          </li>
          <li className="footer__Link">
            <h3 style={{ marginBottom: "35px" }}> Connect </h3>
            <ul>
              <li>
                <Link className="navigate" to="/help">Help Center</Link>
              </li>
              <li>
                <Link className="navigate" to="/contact">Contact Us</Link>
              </li>
              <li>
                <a href="#"  className="navigate footer__social-Link">
                  <i className="twitter">
                    <FaTwitter />
                  </i>
                  <span> Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="navigate footer__social-Link">
                  <i className="facebook-f">
                    <FaFacebookSquare />
                  </i>
                  <span> Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer__social-Link navigate">
                  <i className="Linkedin">
                    <FaLinkedinIn />
                  </i>
                  <span> LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer__social-Link navigate">
                  <i className="instagram">
                    <FaInstagram />
                  </i>
                  <span> Instagram</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">© 2023 Writeophonic. All rights reserved.</p>
        <ul className="footer__terms">
          <li className="footer__term"><Link to="/terms" className="navigate">Terms of Service</Link></li>
          <li className="footer__term"><Link to="/privacy" className="navigate">Privacy Policy</Link></li>
          <li className="footer__term"><Link to="" className="navigate">Cookie Policy</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
