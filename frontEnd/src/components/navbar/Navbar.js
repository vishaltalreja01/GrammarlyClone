import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

const Navbar = () => {
  const [li1, setLi1] = useState(false);
  const [li2, setLi2] = useState(false);
  const [li3, setLi3] = useState(false);
  const [li4, setLi4] = useState(false);

  const handleLi1 = (e) => {
    e.preventDefault();
    setLi1(!li1);
    setLi2(false);
    setLi3(false);
    setLi4(false);
  };

  const handleLi2 = (e) => {
    e.preventDefault();
    setLi2(!li2);
    setLi1(false);

    setLi3(false);
    setLi4(false);
  };
  const handleLi3 = (e) => {
    e.preventDefault();
    setLi3(!li3);
    setLi1(false);
    setLi2(false);

    setLi4(false);
  };
  const handleLi4 = (e) => {
    e.preventDefault();
    setLi4(!li4);
    setLi1(false);
    setLi2(false);
    setLi3(false);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <a class="headerItemLink_CLKm5yp3 headerItemLogo_CLKm5yp3" href="/">
            {/* <svg
              width="122"
              height="32"
              viewBox="0 0 122 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Writeophonic Home</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M36.917 22.95c-.446-.17-.738-.53-.738-1.01 0-.581.48-1.06 1.064-1.06.172 0 .31.034.43.085a5.965 5.965 0 0 0 2.541.548c1.787 0 2.628-.855 2.628-2.499v-.445c-.773.925-1.614 1.49-3.005 1.49-2.147 0-4.088-1.558-4.088-4.28v-.033c0-2.739 1.975-4.279 4.088-4.279 1.425 0 2.266.6 2.97 1.37v-.018c0-.702.584-1.283 1.306-1.283.72 0 1.304.581 1.304 1.3v5.905c0 1.643-.394 2.84-1.167 3.61-.859.857-2.181 1.233-3.967 1.233a8.841 8.841 0 0 1-3.366-.634zm5.925-7.17v-.034c0-1.25-.98-2.123-2.25-2.123s-2.232.873-2.232 2.123v.034c0 1.266.962 2.122 2.232 2.122 1.27 0 2.25-.873 2.25-2.122zm4.053-2.944c0-.719.584-1.3 1.305-1.3.722 0 1.305.581 1.305 1.3v.41c.378-.889.996-1.71 1.77-1.71.807 0 1.27.53 1.27 1.266 0 .684-.446 1.095-.979 1.215-1.322.309-2.06 1.318-2.06 3.166v2.43c0 .719-.584 1.301-1.306 1.301a1.302 1.302 0 0 1-1.305-1.3v-6.778zm5.341 5.34v-.034c0-2.003 1.528-2.927 3.71-2.927.927 0 1.597.154 2.25.376v-.154c0-1.077-.67-1.677-1.975-1.677a6.01 6.01 0 0 0-1.804.257 1.108 1.108 0 0 1-.377.069 1.062 1.062 0 0 1-1.082-1.062c0-.462.29-.855.704-1.01.824-.308 1.717-.478 2.936-.478 1.425 0 2.456.376 3.108 1.026.687.684.997 1.695.997 2.927v4.175c0 .702-.567 1.25-1.271 1.25-.756 0-1.254-.53-1.254-1.078v-.018c-.635.702-1.51 1.164-2.782 1.164-1.734 0-3.16-.992-3.16-2.806zm5.994-.6v-.461a4.061 4.061 0 0 0-1.666-.343c-1.117 0-1.803.445-1.803 1.267v.034c0 .702.584 1.113 1.425 1.113 1.22 0 2.044-.668 2.044-1.61zm3.864-4.74c0-.719.584-1.3 1.306-1.3.721 0 1.305.581 1.305 1.3v.103c.6-.77 1.391-1.472 2.713-1.472 1.202 0 2.112.53 2.593 1.455.807-.941 1.77-1.455 3.022-1.455 1.941 0 3.11 1.164 3.11 3.372v4.774c0 .719-.585 1.301-1.306 1.301a1.303 1.303 0 0 1-1.306-1.3v-3.92c0-1.232-.55-1.865-1.528-1.865-.979 0-1.58.633-1.58 1.865v3.92c0 .718-.583 1.3-1.305 1.3a1.303 1.303 0 0 1-1.305-1.3v-3.92c0-1.232-.55-1.865-1.528-1.865-.98 0-1.58.633-1.58 1.865v3.92c0 .718-.584 1.3-1.305 1.3a1.302 1.302 0 0 1-1.306-1.3v-6.778zm15.457 0c0-.719.584-1.3 1.305-1.3.722 0 1.306.581 1.306 1.3v.103c.6-.77 1.39-1.472 2.713-1.472 1.202 0 2.112.53 2.593 1.455.807-.941 1.769-1.455 3.022-1.455 1.941 0 3.109 1.164 3.109 3.372v4.774c0 .719-.584 1.301-1.306 1.301a1.303 1.303 0 0 1-1.305-1.3v-3.92c0-1.232-.55-1.865-1.528-1.865-.98 0-1.58.633-1.58 1.865v3.92c0 .718-.584 1.3-1.305 1.3a1.302 1.302 0 0 1-1.305-1.3v-3.92c0-1.232-.55-1.865-1.529-1.865-.979 0-1.58.633-1.58 1.865v3.92c0 .718-.583 1.3-1.305 1.3a1.302 1.302 0 0 1-1.305-1.3v-6.778zm14.907 5.34v-.034c0-2.003 1.529-2.927 3.71-2.927a6.56 6.56 0 0 1 2.249.376v-.154c0-1.077-.67-1.677-1.975-1.677-.721 0-1.305.103-1.803.257a1.108 1.108 0 0 1-.377.069 1.061 1.061 0 0 1-1.083-1.062c0-.462.293-.855.704-1.01.825-.308 1.718-.478 2.937-.478 1.426 0 2.456.376 3.108 1.026.687.684.996 1.695.996 2.927v4.175a1.25 1.25 0 0 1-1.27 1.25c-.756 0-1.254-.53-1.254-1.078v-.018c-.635.702-1.512 1.164-2.782 1.164-1.735 0-3.16-.992-3.16-2.806zm5.994-.6v-.461a4.063 4.063 0 0 0-1.666-.343c-1.117 0-1.803.445-1.803 1.267v.034c0 .702.583 1.113 1.425 1.113 1.219 0 2.044-.668 2.044-1.61zm3.864-4.74c0-.719.584-1.3 1.305-1.3.722 0 1.305.581 1.305 1.3v.41c.378-.889.996-1.71 1.77-1.71.806 0 1.27.53 1.27 1.266 0 .684-.447 1.095-.979 1.215-1.322.309-2.061 1.318-2.061 3.166v2.43c0 .719-.583 1.301-1.305 1.301a1.303 1.303 0 0 1-1.305-1.3v-6.778zm6.44-3.32c0-.72.584-1.3 1.305-1.3.722 0 1.306.58 1.306 1.3v10.097c0 .719-.584 1.301-1.306 1.301a1.303 1.303 0 0 1-1.305-1.3V9.515zm4.689 13.845c-.378-.136-.825-.445-.825-1.077a1.04 1.04 0 0 1 1.031-1.062c.206 0 .326.034.429.069.223.068.361.103.55.103.463 0 .687-.086.927-.548l.086-.206-3.142-7.256a1.885 1.885 0 0 1-.138-.6c0-.735.567-1.248 1.288-1.248.652 0 1.03.359 1.253.975l1.993 5.34 1.923-5.323c.206-.547.583-.992 1.254-.992.669 0 1.235.513 1.235 1.198 0 .205-.068.496-.119.616l-3.212 7.684c-.773 1.865-1.545 2.567-3.108 2.567-.584 0-.996-.085-1.425-.24z"
                fill="#0E101A"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.526 16.214c0 7.85-6.386 14.214-14.263 14.214S0 24.064 0 16.214C0 8.364 6.386 2 14.263 2s14.263 6.364 14.263 14.214z"
                fill="#15C39A"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.127 19.283c.084.465.523.784.998.784h1.494l.866-.12c-1.386 2.026-3.792 2.958-6.423 2.547-2.142-.335-3.982-1.78-4.759-3.797-1.762-4.579 1.593-8.95 5.966-8.95 2.279 0 4.277 1.329 5.423 2.934.304.437.908.597 1.347.294a.95.95 0 0 0 .288-1.265 8.377 8.377 0 0 0-7.637-3.83c-4.17.279-7.545 3.68-7.785 7.838-.278 4.84 3.573 8.79 8.364 8.79a8.304 8.304 0 0 0 6.304-2.859l-.182 1.014v.916c0 .472.32.91.787.994a.967.967 0 0 0 1.146-.947V18.14h-5.247a.965.965 0 0 0-.95 1.143z"
                fill="#fff"
              ></path>
            </svg> */}
            <img
              width="100px"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <nav className="navbar">
          <ul className="outer-ul">
            <li>
              <a href="" onClick={handleLi1}>
                <span style={{ textAlign: "center" }}> Why Writeophonic </span>
                <i>
                  <FaChevronDown />
                </i>
              </a>

              <div
                className="dropdown"
                style={{ display: `${li1 ? "block" : "none"}` }}
              >
                <ul className="middle-ul">
                  <li>
                    <span>HOW IT WORKS</span>
                    <ul className="inner-ul">
                      <li>
                        <Link to="/overview" className="navigation">
                          <h5>Overview</h5>
                          <p>Robust, real-time communication assistance</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/generative" className="navigation">
                          <h5>Generative AI</h5>
                          <p>
                            Write, rewrite, get ideas, and quickly reply with
                            WriteophonicGO
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/writing" className="navigation">
                          <h5>Writing Enhancement</h5>
                          <p>
                            Features to polish, grammar, tone, clarity, team
                            consistency, and more
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/trust" className="navigation">
                          <h5>Trust Your Security</h5>
                          <p>You own your data</p>
                        </Link>
                      </li>
                      {/* <li>
                      <a href="">
                        <h5>Demo</h5>
                        <p>Try Writeophonic, and see how it works</p>
                      </a>
                    </li> */}
                    </ul>
                  </li>
                  <li>
                    <span>WHERE IT WORKS</span>
                    <ul>
                      <li>
                        <Link to="/overview1" className="navigation">
                          <h5>Overview</h5>
                          <p>
                            Writing assistance on 500,000+ apps and sites across
                            your devices
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/windows" className="navigation">
                          <h5>Windows & Mac</h5>
                          <p>
                            For desktop apps and websites like Word and Gmail
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/browser" className="navigation">
                          <h5>Browser Extension</h5>
                          <p>For sites like Google Docs, Gmail, and LinkedIn</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/mobile" className="navigation">
                          <h5>Mobile</h5>
                          <p>For every Android & IOS Mobile</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li style={{ border: "0px" }}>
                    <span>WHO WE ARE</span>
                    <ul>
                      <li>
                        <Link to="/about" className="navigation">
                          <span>About</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/responsible" className="navigation">
                          <span>Responsible AI</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/press" className="navigation">
                          <span>Press</span>
                        </Link>
                      </li>
                      {/* <li>
                        <span>Careers</span>
                      </li> */}
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="" onClick={handleLi2}>
                <span>For Work</span>
                <i>
                  <FaChevronDown />
                </i>
              </a>
              <div
                className="dropdown"
                style={{ display: `${li2 ? "block" : "none"}` }}
              >
                <ul className="middle-ul">
                  <li style={{ border: "0px" }}>
                    <ul>
                      <li>
                        <Link to="/individuals" className="navigation">
                          <span>Individuals</span>
                        </Link>
                      </li>
                      {/* <li>
                        <Link to=" " className="navigation"> 
                          <span>Teams & Buisness</span>
                        </Link>
                      </li> */}
                      <li>
                        <Link to="/success" className="navigation">
                          <span>Success Stories</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="" onClick={handleLi3}>
                <span>For Education</span>
                <i>
                  <FaChevronDown />
                </i>
              </a>
              <div
                className="dropdown"
                style={{ display: `${li3 ? "block" : "none"}` }}
              >
                <ul className="middle-ul">
                  <li style={{ border: "0px" }}>
                    <ul>
                      <li>
                        <Link to="/student" className="navigation">
                          <span>Students</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/institutions" className="navigation">
                          <span>Institutions</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/compare" className="navigation">
                <span>Compare Plans</span>
              </Link>
            </li>
            <li>
              <Link to=" " className="navigation" onClick={handleLi4}>
                <span>Tools & Guides</span>
                <i>
                  <FaChevronDown />
                </i>
              </Link>
              <div
                className="dropdown"
                style={{ display: `${li4 ? "block" : "none"}`, left: "-150px" }}
              >
                <ul className="middle-ul">
                  <li>
                    <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Tools
                    </span>
                    <ul className="inner-ul">
                      <li>
                        <Link to="/grammarly" className="navigation">
                          <h5>Demo</h5>
                          <p>Try Writeophonic, and see how it works</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/grammar" className="navigation">
                          <h5>Writeophonic Checker</h5>
                          <p>Check for Grammar Mistakes</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/plagirism" className="navigation">
                          <h5>Plagirism Checker</h5>
                          <p>
                            Checck for Plagirism Mistakes
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/eassay" className="navigation">
                          <h5>Eassy Checker</h5>
                          <p>
                            Check for Eassy Mistakes
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/trust" className="navigation">
                          <h5>Trust Your Security</h5>
                          <p>You own your data</p>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li style={{ border: "0px" }}>
                    <ul>
                      <li>
                        <Link to="/writingGuide " className="navigation">
                          <span>Writing</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/grammarGuide" className="navigation">
                          <span>Grammar</span>
                        </Link>
                      </li>
                      <li>
                        <Link to=" /punctuationGuide" className="navigation">
                          <span>Punctuation</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog " className="navigation">
                          <span>Blog</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <Link to="/login" className="navigat">
          <button
            style={{
              background: "none",
              border: "0",
              padding: "15px",
              borderRadius: "12px",
              fontWeight: "bolder",
              fontSize: "14px",
              marginRight: "25px",
              cursor: "pointer",
              // width:"px",
            }}
          >
            Log In
          </button>
        </Link>
        <Link to=" " className="navigation">
          <button
            style={{
              backgroundColor: "#FC832B",
              color: "#fff",
              borderRadius: "4px",
              height: "32px",
              padding: "0 8px",
              border: "0",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's
            free
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
