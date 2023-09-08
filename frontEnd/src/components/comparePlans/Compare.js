import React from "react";
import "./Compare.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { TiTick } from "react-icons/ti";
import { BsDash } from "react-icons/bs";

const Compare = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "10px",
            paddingInline: "5px",
            marginTop: "50px",
            paddingBlock: "120px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}> Elevate Your Writing</h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Go beyond grammar. Choose a plan to ensure everything you write is
            clear, engaging, and polished.
          </p>
        </div>
        <div className="icons tagContainer">
          <div className="tag tag_">
            <p>FOR INDIVIDUALS</p>
            <h2>Free</h2>
            <p>Basic writing suggestions and tone detection.</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#FC832B",
                  outline: "1px solid #FC832B",
                  borderRadius: "6px",
                  height: "43px",
                  padding: "8px 32px",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  marginBlock: "20px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Create Account</span>
              </button>
            </div>
          </div>

          <div className="tag tag_">
            <p>FOR INDIVIDUALS</p>
            <h2>Premium</h2>
            <p>
              Everything in Free, plus full-sentence rewrites, vocabulary ideas,
              tone suggestions, and more.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  backgroundColor: "#FC832B",
                  color: "white",
                  borderRadius: "6px",
                  height: "43px",
                  padding: "8px 32px",
                  border: "0",
                  cursor: "pointer",
                  width: "100%",
                  marginBlock: "10px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Get Started</span>
              </button>
            </div>
          </div>

          <div className="tag tag_">
            <p>FOR TEAMS</p>
            <h2> Buisness</h2>
            <p>
              Everything in Premium, plus features for teams like centralized
              billing and style guides
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  backgroundColor: "#FC832B",
                  color: "white",
                  borderRadius: "6px",
                  height: "43px",
                  padding: "8px 32px",
                  border: "0",
                  cursor: "pointer",
                  width: "100%",
                  marginBlock: "10px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Get Started</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginTop: "100px",
            paddingBlock: "30px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>
            {" "}
            Write Exceptionally With Writeophonic Premium{" "}
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Achieve your professional goals and improve your grades with
            advanced suggestions for clarity, tone, plagiarism, and more. Learn
            the Premium difference.
          </p>
        </div>
        <div style={{border:"1px solid black",margin:"40px"}}>
          <div className="footer__content" style={{borderBottom:"1px solid grey"}}>
            <ul
              className="footer__Links"
              style={{
                display: "flex",
                listStyle: "none",

                // justifyContent:"center",
                gap: "210px",
                padding: "30px",
              }}
            >
              <li className="footer__Link compareLinks">
                <ul className="textLinks">
                  <li>
                    <h2>Writing Suggestion</h2>
                  </li>
                </ul>
              </li>
              <li
                className="footer__Link compareLinks"
                style={{ marginLeft: "105px" }}
              >
                <ul>
                  <li>
                    <div></div>
                  </li>
                  <li>
                    <p> Free</p>
                  </li>
                </ul>
              </li>
              <li className="footer__Link compareLinks">
                <ul>
                  <li> </li>
                  <li>
                    <p> Premium</p>
                  </li>
                </ul>
              </li>
              <li className="footer__Link compareLinks">
                <ul>
                  <li> </li>
                  <li>
                    <p> Buisness</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "start",
                marginTop:"55px",
              }}
            >
              <img src="https://static.grammarly.com/assets/files/d2ea9bb12cca3d256046003c12823ffe/ic-correctness.svg" />
              Correctness
            </h2>
            <div className="footer__content">
              <ul
                className="footer__Links"
                style={{
                  display: "flex",
                  listStyle: "none",

                  // justifyContent:"center",
                  gap: "250px",
                  padding: "30px",
                }}
              >
                <li className="footer__Link compareLinks">
                  <ul className="textLinks">
                    <li>Grammar, spelling, and punctuation</li>
                    <li>Consistency in spelling and punctuation</li>
                    <li>English fluency</li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li>
                      <div></div>
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <BsDash />
                    </li>
                    <li>
                      <BsDash />
                    </li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li> </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li> </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "start",
                marginTop:"55px",
              }}
            >
              <img src="https://static.grammarly.com/assets/files/5870dbd72743746761c17ea7ed8fd971/ic-clarity.svg" />
              Clarity
            </h2>
            <div className="footer__content">
              <ul
                className="footer__Links"
                style={{
                  display: "flex",
                  listStyle: "none",

                  // justifyContent:"center",
                  gap: "250px",
                  padding: "30px",
                }}
              >
                <li className="footer__Link compareLinks">
                  <ul className="textLinks">
                    <li>Grammar, spelling, and punctuation</li>
                    <li>Consistency in spelling and punctuation</li>
                    <li>English fluency</li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li>
                      <div></div>
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <BsDash />
                    </li>
                    <li>
                      <BsDash />
                    </li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li> </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li> </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "start",
                marginTop:"55px",
              }}
            >
              <img src="https://static.grammarly.com/assets/files/ab3ab8c4c03d7a6a28dcc638e0f0b85d/ic-engagement.svg" />
             Engagement
            </h2>
            <div className="footer__content">
              <ul
                className="footer__Links"
                style={{
                  display: "flex",
                  listStyle: "none",

                  // justifyContent:"center",
                  gap: "250px",
                  padding: "30px",
                }}
              >
                <li className="footer__Link compareLinks">
                  <ul className="textLinks">
                    <li>Grammar, spelling, and punctuation</li>
                    <li>Consistency in spelling and punctuation</li>
                    <li>English fluency</li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li>
                      <div></div>
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <BsDash />
                    </li>
                    <li>
                      <BsDash />
                    </li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li> </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li> </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "start",
                marginTop:"55px",
              }}
            >
              <img src="https://static.grammarly.com/assets/files/bef2fd0510d3d981f3a7395b0a40c837/ic-delivery.svg" />
              Delivery
            </h2>
            <div className="footer__content">
              <ul
                className="footer__Links"
                style={{
                  display: "flex",
                  listStyle: "none",

                  // justifyContent:"center",
                  gap: "250px",
                  padding: "30px",
                }}
              >
                <li className="footer__Link compareLinks">
                  <ul className="textLinks">
                    <li>Grammar, spelling, and punctuation</li>
                    <li>Consistency in spelling and punctuation</li>
                    <li>English fluency</li>
                    <li>Grammar, spelling, and punctuation</li>
                    <li>Consistency in spelling and punctuation</li>
                    <li>English fluency</li>
                    <li>Grammar, spelling, and punctuation</li>
                    <li>Consistency in spelling and punctuation</li>
                    <li>English fluency</li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li>
                      <div></div>
                    </li>
                    <li style={{marginTop:"15px"}}>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li style={{marginTop:"45px"}}>
                      <BsDash />
                    </li>
                    <li>
                      <BsDash />
                    </li>
                    <li style={{marginTop:"35px"}}>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li style={{marginTop:"50px"}}>
                      <BsDash />
                    </li>
                    <li>
                      <BsDash />
                    </li>
                    <li style={{marginTop:"45px"}}>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li style={{marginTop:"40px"}}>
                      <BsDash />
                    </li>
                    <li>
                      <BsDash />
                    </li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li> </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li> </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "start",
                marginTop:"55px",
              }}
            >
              <img src="https://static.grammarly.com/assets/files/0576267c72ec28952652d657ed634af7/ic-plagiarism.svg" />
              Citation
            </h2>
            <div className="footer__content">
              <ul
                className="footer__Links"
                style={{
                  display: "flex",
                  listStyle: "none",

                  // justifyContent:"center",
                  gap: "250px",
                  padding: "30px",
                }}
              >
                <li className="footer__Link compareLinks">
                  <ul className="textLinks">
                    <li>Grammar, spelling, and punctuation</li>
                    <li>Consistency in spelling and punctuation</li>
                    <li>English fluency</li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li>
                      <div></div>
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <BsDash />
                    </li>
                    <li>
                      <BsDash />
                    </li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li> </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                  </ul>
                </li>
                <li className="footer__Link compareLinks">
                  <ul>
                    <li> </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                    <li>
                      <TiTick size={25} color={"green"} />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="icons"
          style={{
            display: "flex",
            justifyContent: "end",
            flexWrap: "wrap",
            paddingInline: "36px",
            gap: "75px",
          }}
        >
          <div className="tag1" style={{width:"170px"}}>
            <p style={{ fontSize: "12px", color: "grey" }}>FOR INDIVIDUALS</p>
            <h2 style={{ marginBlock: "10px" }}> Free</h2>
            <p style={{ fontSize: "14px" }}>
            Basic writing suggestions and tone detection.
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#FC832B",
                outline: "1px solid #FC832B",
                borderRadius: "6px",
                height: "48px",
                padding: "8px 32px",
                border: "0",
                cursor: "pointer",
                width: "165px",
                marginTop: "140px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Create Account</span>
            </button>
            <div>
            
            </div>
          </div>
          <div className="tag1" style={{width:"167px"}}>
            <p style={{ fontSize: "12px", color: "grey" }}>FOR INDIVIDUALS</p>
            <h2 style={{ marginBlock: "10px" }}> Premium</h2>
            <p style={{ fontSize: "14px" }}>
            Everything in Free, plus full-sentence rewrites, vocabulary ideas, tone suggestions, and more.
            </p>
            <p style={{ fontSize: "13px", color: "grey",marginTop:"35px" }}>Starting at</p>
            <p style={{ fontSize: "24px",}}>
            $12.00 USD
            </p>
            <p style={{ fontSize: "13px", color: "grey" }}>/ month</p>
            <button
              style={{
                backgroundColor: "#FC832B",
                color: "white",
                borderRadius: "6px",
                height: "48px",
                padding: "8px 32px",
                border: "0",
                cursor: "pointer",
                width: "163px",
                marginBlock: "15px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Get Started</span> 
            </button>
            <div>
              
            </div>
          </div>
          <div className="tag1" style={{width:"167px"}}>
            <p style={{ fontSize: "12px", color: "grey" }}>FOR TEAMS</p>
            <h2 style={{ marginBlock: "10px" }}>Buisness</h2>
            <p style={{ fontSize: "14px" }}>
            Everything in Premium, plus features for teams like centralized billing and style guides.
            </p>
            <p style={{ fontSize: "13px", color: "grey",marginTop:"35px" }}>Starting at</p>
            <p style={{ fontSize: "24px",}}>
            $15.00 USD
            </p>
            <p style={{ fontSize: "13px", color: "grey" }}>/ month</p>
            <button
              style={{
                backgroundColor: "#FC832B",
                color: "white",
                borderRadius: "6px",
                height: "48px",
                padding: "8px 32px",
                border: "0",
                cursor: "pointer",
                width: "163px",
                marginBlock: "15px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Get Started</span>
            </button>
            <div>
             
            </div>
          </div>
        </div>

        <div className="trustContainer">
          <div
            className=""
            style={{
              textAlign: "center",
              padding: "25px",
              paddingInline: "275px",
              marginBlock: "30px",
            }}
          >
            <h1 style={{ color: "white" }}>You're in good company</h1>
          </div>

          <div>
            <div class="trusted_">
              <img
                alt="Hacker One"
                loading="lazy"
                class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
                src="https://images.ctfassets.net/1e6ajr2k4140/14TUd8Es0kwszDBc6Ae8Oo/b777d078839ac89289090c44e9e5c613/Brand_UCLA__Type_Academic_Institutions__Mode_Light.svg"
              />
              <img
                alt="Atlassian"
                loading="lazy"
                class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
                src="https://images.ctfassets.net/1e6ajr2k4140/7K6Lv5p71aQQehY3riA9VS/66e7d77807cf97384ef48c5aa4d79867/Brand_Harvard_Medical_School__Type_Academic_Institutions.svg"
              />
              <img
                alt="Databricks"
                loading="lazy"
                class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
                src="https://images.ctfassets.net/1e6ajr2k4140/5YGMVODCxUMvDZgiq6pWsq/d327b654f231f09b62cffc7131f97041/Brand_MIT__Type_Academic_Institutions.svg"
              />
              <img
                alt="Expensify"
                loading="lazy"
                class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
                src="https://images.ctfassets.net/1e6ajr2k4140/58bhdPzv7f9H7JvqsK3ZyW/71b4f3e7e760da0566bcdc6931d891e5/Brand_UNC__Type_Indian_Institute_of_Technology__1_.svg"
              />
              <img
                alt="NYC Dept of Education"
                loading="lazy"
                class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
                src="https://images.ctfassets.net/1e6ajr2k4140/6j0RtK8hmO2XWBuPiao0O0/e68be67a678a3b0e2d8b62c27c243211/Brand_NYC__Type_Academic_Institutions.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Compare;
