import React from "react";
import "./Eassay.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import iconWriteophonic from "../../images/icon_grammarly.png";

const Eassay = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div style={{ background: "#3659b5",padding:"55px",color:'white' }}>
          <div
            className=""
            style={{
              textAlign: "center",
              padding: "25px",
              paddingInline: "245px",
            //   marginTop: "30px",
              paddingBlock: "80px",
            }}
          >
            <h1 style={{ fontSize: "42px" }}> Check Your Essay</h1>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "32px",
                marginTop: "30px",
              }}
            >
             
Writeophonic’s free essay-checking tool will help you review your papers for grammatical mistakes, unclear sentences, and misused words. Save time and be confident your work will make the grade!
            </p>
          </div>
          <div className="grammarChecker">
            <div className="parentContainer">
              <div className="column">
                <textarea
                  className="textarea"
                  placeholder="Start writing..."
                ></textarea>
              </div>
              <div className="col1">
                <h3>
                  <img
                    src={iconWriteophonic}
                    alt="Writeophonic Logo"
                    className="logo_"
                  />
                  Suggestions
                </h3>
                <h2 className="subtitle">Let's get started</h2>
                <ol className="steps">
                  <li>
                    {" "}
                    <span>Step 1:</span> Add your text, and Writeophonic will
                    underline any issues.
                  </li>
                  <li>
                    {" "}
                    <span>Step 2:</span> Hover over the underlines to see
                    suggestions.
                  </li>
                  <li>
                    {" "}
                    <span>Step 3:</span> Click a suggestion to accept it.
                  </li>
                </ol>
                <button className="get-grammarly-btn">
                  Get Writeophonic It's free
                </button>
                <p className="login-text">
                  Already have an account? <a href="#">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "325px",
            marginBlock: "120px",
          }}
        >
          <h1>
          Write Better Papers and Essays with Writeophonic
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              padding: "25px",
              paddingInline: "35px",
              marginBlock: "20px",
            }}
          >
           
Don’t turn your essay in before running it through Writeophonic. You can instantly catch writing mistakes, refine your sentences, and receive suggestions for improving your paper overall. For even more advanced writing feedback, including plagiarism detection, get Writeophonic Premium.

          </p>
        </div>
        <div>
          <div className="hero">
            <div className="left1_" style={{ padding: "25px" }}>
              <h1
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: "40px",
                  letterSpacing: "-.005em",
                  lineHeight: "42px",
                  marginBlock: "20px",
                }}
              >
                Eliminate grammar, spelling, and other writing issues
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              
Need a grammar check? Writeophonic can do that and more. Check your essay for writing issues that could hurt your grade—and apply suggestions with a single click.
              </p>
            </div>
            <div className="right">
              <img
                width={"481px"}
                height={"317px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/3Um7LkSWiuaLuM1pqRNA9k/b9ea567b0b02e497843aad9737d88a7e/Frame_558.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"480px"}
                height={"370px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/3eRWGdjNMYgoZrwBHGp7y0/cc1df49723dff7d00908077ac658128f/Frame_552.png?w=1080&fm=webp"
                alt=""
              />
            </div>
            <div className="left1_" style={{ padding: "25px" }}>
              <h1
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: "40px",
                  letterSpacing: "-.005em",
                  lineHeight: "42px",
                  marginBlock: "20px",
                }}
              >
               Clearly express your ideas
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              
Tangled sentences and convoluted text can make papers and essays hard to understand. Writeophonic makes your prose clear and coherent.
              </p>
            </div>
          </div>
          <div className="hero">
            <div className="left1_" style={{ padding: "25px" }}>
              <h1
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: "40px",
                  letterSpacing: "-.005em",
                  lineHeight: "42px",
                  marginBlock: "20px",
                }}
              >
                 Catch unintentional plagiarism
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
            
The built-in plagiarism checker scans your essay for text that may need citations. Get Premium to keep your work in good standing.
              </p>
            </div>
            <div className="right">
              <img
                width={"480px"}
                height={"333px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/2QwlCxZC0NojpAUV1d0C5z/a4bb3d3efb3b5323580f140967d36cf6/Frame_559.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"480px"}
                height={"349px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/2nla5Ib5xMRYMSgD0VUJSX/0643b96d0de47ef4c668b54208a0a4cc/Frame_552.png?w=1080&fm=webp"
                alt=""
              />
            </div>
            <div className="left1_" style={{ padding: "25px" }}>
              <h1
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: "40px",
                  letterSpacing: "-.005em",
                  lineHeight: "42px",
                  marginBlock: "20px",
                }}
              >
               Refine your vocabulary and synonym use
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              
Make sure your word choice is impeccable with context-specific synonym suggestions that will help you ace your assignment.
              </p>
            </div>
          </div>
          <div className="hero">
            <div className="left1_" style={{ padding: "25px" }}>
              <h1
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: "40px",
                  letterSpacing: "-.005em",
                  lineHeight: "42px",
                  marginBlock: "20px",
                }}
              >
               Write naturally and fluently
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              
With Premium, you can get tailored writing suggestions to help you write natural, fluent essays—even if English isn’t your primary language.
              </p>
            </div>
            <div className="right">
              <img
                width={"480px"}
                height={"318px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/5NN9hK4USdR6Y8xQYxfoVu/3d349dcfbc46f764d6088026dff2260d/Frame_559.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"480px"}
                height={"369px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/2H0DLBWVlvvJ7XhrTFuHop/ee191062ba8f7131c655956ebc9e27a2/Frame_559.png?w=1080&fm=webp"
                alt=""
              />
            </div>
            <div className="left1_" style={{ padding: "25px" }}>
              <h1
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: "40px",
                  letterSpacing: "-.005em",
                  lineHeight: "42px",
                  marginBlock: "20px",
                }}
              >
                Strike the right tone
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
             
Make sure the tone and style of your paper matches the expectations of your instructor with Writeophonic’s tone detector.
              </p>
            </div>
          </div>
        </div>
        <div
          className="hero"
          style={{
            background: "#3659b5",
            color: "white",
            paddingBlock: "155px",
          }}
        >
          <div
            className="right"
            style={{ display: "flex", alignItems: "center" }}
          >
            <iframe
              style={{
                borderRadius: "12px",
                border: "0px",
                boxShadow: "0 12px 48px rgba(26,33,52,.11)",
              }}
              width="530px"
              height="290px"
              src="https://www.youtube.com/embed/I7LMRZPtIL0?controls=0&amp;mute=1&amp;autoplay=0&amp;loop=1&amp;playlist=I7LMRZPtIL0"
              class="youtube-embed-popup_iframeEmbedStyle__kYA17"
              title="YouTube video player - I7LMRZPtIL0"
              allow="autoplay; loop"
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="left">
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "34px",
                letterSpacing: "-.005em",
                lineHeight: "52px",
              }}
            >
              Watch and Learn
            </h1>
            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              Check out Writeophonic’s essay-writing tips so you can ace your next
              assignment.
            </p>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginBlock: "100px",
          }}
        >
          <h1 style={{ fontSize: "42px", color: "#1f243c" }}>
          Trusted by Students and Faculty at
          </h1>
        </div>
        <div>
          <div class="trusted">
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
        <div
          className="gradient"
          style={{
            marginTop: "40px",
            background: "#3659b5",
            paddingBlock: "80px",
            paddingInline: "125px",
          }}
        >
          <div className="hero">
            <div className="left1">
              <p
                style={{ fontSize: "20px", lineHeight: "32px", color: "white" }}
              >
                “I’m a college senior, and Writeophonic has made my life so much
                easier. Although I consider myself a pretty good writer,
                Writeophonic helps fine-tune my expression.”
              </p>
            </div>
            <div className="right1" style={{}}>
              <figure class="_1tgaf-author">
                <img
                  src="https://images.ctfassets.net/1e6ajr2k4140/2cas7TAJU0oJvOXgo3aDLW/362aa88c913a8bc89849255e725532d9/Screen_Shot_2022-02-24_at_6.06_1.png"
                  alt=""
                  width={65}
                  style={{ borderRadius: "65px" }}
                />
                <figcaption>
                  <h3 style={{ color: "white" }} className="_2HcMy-h5">
                    Grace Windheim
                  </h3>
                  <div
                    style={{ color: "white" }}
                    className="_1_z68-large _2sETg-compact"
                  >
                    College Student
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginTop: "140px",
            paddingBlock: "120px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}> Writing That Makes the Grade</h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Write clear, compelling papers, essays, and other assignments with
            Writeophonic’s real-time writing feedback.
          </p>
          <button
            style={{
              backgroundColor: "#1f243c",
              color: "white",
              borderRadius: "6px",
              height: "48px",
              padding: "8px 32px",
              border: "0",
              cursor: "pointer",
              width: "184px",
              marginTop: "85px",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's
            free
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Eassay;
