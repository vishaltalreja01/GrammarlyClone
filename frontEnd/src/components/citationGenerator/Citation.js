import React from "react";
import "./Citation.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { IoIosArrowForward } from "react-icons/io";

const Citation = () => {
  return (
    <div>
      <Navbar />

      <div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "55px",
            paddingInline: "280px",
            marginTop: "50px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>Free Citation Generator</h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Get well-formatted APA, MLA, and Chicago-style citations with a
            citation generator built by writing experts.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            paddingInline: "255px",
          }}
        >
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginBlock: "30px",
            }}
          >
            Get all types of academic writing support at your fingertips, from
            automated citation generation to plagiarism detection to
            proofreading.
          </p>
          <button
            style={{
              backgroundColor: "#FC832B",
              color: "white",
              borderRadius: "6px",
              height: "48px",
              padding: "8px 32px",
              border: "0",
              cursor: "pointer",
              width: "215px",
              marginBlock: "20px",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's
            free
          </button>
        </div>
        <div
          style={{
            background: "#3659b5",
            color: "white",
            paddingBlock: "85px",
          }}
        >
          <div
            className=""
            style={{
              textAlign: "center",
              padding: "5px",
              paddingInline: "270px",
              marginTop: "10px",
            }}
          >
            <h1 style={{ fontSize: "42px" }}>
              Beyond Citations: Everything You Need to Ace Your Assignments
            </h1>
          </div>
          <div
            className="icons"
            style={{
              background: "#3659b5",
              color: "white",
              //   paddingBlock: "15px",
            }}
          >
            <div className="tag">
              <img
                src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
                alt=""
              />

              <p>Ensure your essay has flawless citations and no plagiarism.</p>
            </div>
            <div className="tag">
              <img
                src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
                alt=""
              />

              <p>Proofread instantly for mistake-free writing.</p>
            </div>
            <div className="tag">
              <img
                src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
                alt=""
              />

              <p>
                94% of students say Writeophonic Premium helped improve their
                grades.
              </p>
            </div>

            <div className="tag">
              <img
                src="https://images.ctfassets.net/1e6ajr2k4140/765BvlKKf1duW85dh1b86f/535ffa8d0fe4ccd0bc639f81fbd5c850/Icons__3_.svg"
                alt=""
              />

              <p>Become a more confident writer over time.</p>
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
          <h1> Writeophonic: The Writing Assistant for Better Grades</h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              padding: "25px",
              paddingInline: "35px",
              marginBlock: "20px",
            }}
          >
            Writeophonic’s real-time feedback on every assignment helps you achieve
            standout introductions, flawless citations, and everything in
            between. Be confident your written work will make the grade with
            Writeophonic.
          </p>
          <button
            style={{
              backgroundColor: "#FC832B",
              color: "white",
              borderRadius: "6px",
              height: "48px",
              padding: "8px 32px",
              border: "0",
              cursor: "pointer",
              width: "215px",
              marginBlock: "20px",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's
            free
          </button>
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
                Get citations within seconds
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Pull automatically generated citations from online sources
                directly from your web browser as you do your
                research—preformatted and ready to go, whether you use APA, MLA,
                or Chicago.
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
                Never lose points over citation formatting
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Supporting the most updated APA, MLA, and Chicago style guides,
                Writeophonic will keep your periods, parentheses, and other
                punctuation consistent when you cite sources.
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
                Keep your writing original
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Avoid accidental plagiarism. While you write, Writeophonic
                identifies passages that may need references and shows you what
                the source may be.
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
                Make your ideas clear
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                More than just a punctuation or spell checker, Writeophonic helps
                you clean up tangled, unclear sentences to get your point
                across.
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
                Proofread with ease
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                With just a few clicks, clean up typos, subtle grammatical
                mistakes, and misplaced punctuation you might otherwise miss.
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
        </div>

        <div
          className="socialIcons"
          style={{ padding: "55px", background: "#3659b5", color: "white" }}
        >
          <div
            className=""
            style={{
              textAlign: "center",
              padding: "25px",
              paddingInline: "305px",
              marginBlock: "70px",
            }}
          >
            <h1> Works Where You Write</h1>
            <p style={{ fontSize: "22px", paddingTop: "38px" }}>
              Whether you're writing a paper or discussing materials online,
              Writeophonic is here to help you show up with confidence.
            </p>
          </div>
          <div className="socialIcon1" style={{ paddingInline: "353px" }}>
            <img
              width="56px"
              height="57px"
              alt="Gmail"
              loading="lazy"
              class="icon-list-item_icon__KfjtG"
              src="//images.ctfassets.net/1e6ajr2k4140/5BIK9ZnsBLWv9xHhbfS17B/b6e31e977ff3e5efafb4f39ae480573a/Title_Gmail__Type_Google.svg"
            />

            <img
              width="56px"
              height="57px"
              alt="Outlook"
              loading="lazy"
              class="icon-list-item_icon__KfjtG"
              src="//images.ctfassets.net/1e6ajr2k4140/4PxqUu8Lqc9QyWEocaGhjo/5178d202757133e93f99354cfe8eca2c/Title_Outlook__Type_MS_Office_Suite.svg"
            />

            <img
              width="56px"
              height="57px"
              alt="Apple Mail"
              loading="lazy"
              class="icon-list-item_icon__KfjtG"
              src="//images.ctfassets.net/1e6ajr2k4140/4xiqcmVnzJcPUGlSpFRkgg/f940735b899d5d228ad2a8f32b7b69a1/Title_Apple_mail__Type_Mac_Apps.svg"
            />

            <img
              width="56px"
              height="57px"
              alt="Microsoft Word"
              loading="lazy"
              class="icon-list-item_icon__KfjtG"
              src="//images.ctfassets.net/1e6ajr2k4140/2mYCUTyCNMKiSu3yx1H2sE/ad122a7cd990c34b04630312c8a96ec9/Title_Word__Type_MS_Office_Suite.svg"
            />

            <img
              width="56px"
              height="57px"
              alt="Google Doc"
              loading="lazy"
              class="icon-list-item_icon__KfjtG"
              src="//images.ctfassets.net/1e6ajr2k4140/6aLV63LtMKC2wVCWAsVh55/f0248e777e47ccbc8c49ca923c11b4ee/Title_Google_Doc__Type_Google.svg"
            />

            <img
              width="56px"
              height="57px"
              alt="Slack"
              loading="lazy"
              class="icon-list-item_icon__KfjtG"
              src="//images.ctfassets.net/1e6ajr2k4140/7DA3sXcFmdTm5WMScPm1nD/988e0b862140dda85040935bf658ba2c/Title_Slack__Type_Other.svg"
            />

            <img
              width="56px"
              height="57px"
              alt="LinkedIn"
              loading="lazy"
              class="icon-list-item_icon__KfjtG"
              src="//images.ctfassets.net/1e6ajr2k4140/5l7SIuV0OxL3rSbPABsVE/8fa1c287980d1023450b08df8a157be7/Title_LinkedIn__Type_Social_Media.svg"
            />
            <img
              width="56px"
              height="57px"
              alt="Twitter"
              loading="lazy"
              class="icon-list-item_icon__KfjtG"
              src="//images.ctfassets.net/1e6ajr2k4140/3AuSnhop3LbWaz04GlPEL3/c82257217b6c16561d8708c8a3f443f1/Title_Twitter__Type_Social_Media.svg"
            />
            <img
              width="56px"
              height="57px"
              alt="Microsoft Teams"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/3XR8vMfp82go58JKKCjWrq/37b06ae677c8e4dadf4e902d940c82f3/app-teams.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width="56px"
              height="57px"
              alt="PowerPoint"
              loading="lazy"
              class="icon-list-item_icon__KfjtG"
              src="//images.ctfassets.net/1e6ajr2k4140/7eLJH8pUzhCf1fQLrbUefH/216ce4916fefd5a8a467aa26f8b92b45/gmail__2_.svg"
            />

            <img
              width="56px"
              height="57px"
              alt="Chrome"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/2pf1CahvnyGJOe4ePjaAdW/fbceb2840b7657ded99f10907bc175a1/chrome.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width="56px"
              height="57px"
              alt="Safari"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/3wv37yfvrC57T1kz6dj2Lq/fc86da0746912db29c1fca440a5bf541/safari__1_.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />
          </div>
        </div>
        <div
          className="gradient"
          style={{
            marginTop: "40px",
            background: "#f9faff",
            paddingBlock: "120px",
          }}
        >
          <div className="hero">
            <div className="left1">
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                “Writeophonic makes citations so easy and delightful. While working
                on my final dissertation, I saw a Writeophonic pop-up on a research
                article just when I needed it. In one click, I got my citation.
                That's what you call the right feature at the right time!”
              </p>
            </div>
            <div className="right1" style={{}}>
              <figure class="_1tgaf-author">
                <img
                  src="https://images.ctfassets.net/1e6ajr2k4140/1E715oa6KnK0hANmpWUp2o/d234a333d4d50fcfea21af65e3851dfa/testimonial-thumbnail__1_.png"
                  alt=""
                  width={65}
                />
                <figcaption>
                  <h3 style={{ color: "#0E101A" }} className="_2HcMy-h5">
                    Sreekiran A.R.
                  </h3>
                  <div
                    style={{ color: "#6D758D" }}
                    className="_1_z68-large _2sETg-compact"
                  >
                    M.Sc. Artificial Intelligence and
                    <br />
                    Machine Learning at University of <br />
                    Birmingham
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="hero">
            <div className="left1">
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                “Writeophonic's citation features save me time and stress as I know
                my referencing has been taken care of for me. Life-saver!”
              </p>
            </div>
            <div className="right1" style={{}}>
              <figure class="_1tgaf-author">
                <img
                  src="https://images.ctfassets.net/1e6ajr2k4140/5325iiYzZnZ2jIm7spU6d9/56f70aa51b4e4a5bd872583be0d9da18/photo.png"
                  alt=""
                  width={65}
                />
                <figcaption>
                  <h3 style={{ color: "#0E101A" }} className="_2HcMy-h5">
                    Lauren Hawke
                  </h3>
                  <div
                    style={{ color: "#6D758D" }}
                    className="_1_z68-large _2sETg-compact"
                  >
                    Student, Human Nutrition
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div
            className="yD_za-iconsBlock"
            style={{ display: "flex", justifyContent: "center", gap: "65px" }}
          >
            <div
              className="_3xo_H-icons"
              style={{ display: "flex", gap: "65px" }}
            >
              <img
                src="https://static.grammarly.com/assets/files/e6ac9d65876ff8a924f98e36b8236ab5/new_york_times.svg"
                alt="New York Times"
              />
              <img
                src="https://static.grammarly.com/assets/files/3134cdd1afbfd5e7593aea192a9d9b6e/wsj.svg"
                alt="Wall Street Journal"
              />
              <img
                src="https://static.grammarly.com/assets/files/76bc0dfab2ffb9e2480ee0c38b47f73b/usa_today.svg"
                alt="USA Today"
              />
              <img
                src="https://static.grammarly.com/assets/files/9564120ba110f43524c2f68ee09c6eaf/techcrunch.svg"
                alt="Tech Crunch"
              />
              <img
                src="https://static.grammarly.com/assets/files/e98b9ff97c43f218b3a0c42c885990fa/forbes.svg"
                alt="Forbes"
              />
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "165px",
            paddingInline: "280px",
            marginTop: "40px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>
            Trusted by Students and Educators at Over 3,000 Institutions,
            Including:
          </h1>
        </div>
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
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "55px",
            paddingInline: "280px",
            marginTop: "50px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>
            How to Cite (Practically) Anything
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            How do in-text citations work? Can you cite Wikipedia? What do you
            do if the scientific article has 25 authors, or the photo was
            published anonymously? Is your references page formatted
            appropriately? Fear no more—these articles guide you through common
            (and uncommon!) source variations so you can cite accurately.
          </p>
        </div>
        <div style={{ padding: "25px" }}>
          <div className="useCase" style={{}}>
            <div style={{ width: "309px" }} className="uC">
              <a href="">APA Format</a>
              <br />
              <a href="">Cite a Photo in APA </a>
              <br />
              <a href="">Cite a Scientific Journal in APA </a>
              <br />
              <a href="">Cite a Magazine in APA </a>
              <br />
              <a href="">Cite a Speech in APA </a>
              <br />
              <a href="">Cite a Film in APA </a>
              <br />
              <a href="">Cite a Documentary in APA </a>
              <br />
              <a href="">Cite Dialogue in APA</a>
              <br />
              <a href="">Cite a Mathematical Theory in APA</a>
              <br />
              <a href="">Cite a Biography in APA</a>
              <br />
              <a href="">Cite an Abstract in APA</a>
              <br />
              <a href="">Cite a Sonnet in APA</a>
              <br />
              <a href="">Cite a Political Cartoon in APA</a>
              <br />
              <a href="">Cite Google in APA</a>
              <br />
              <a href="">Cite the CDC in APA</a>
              <br />
            </div>
            <div style={{ width: "320px" }} className="uC">
              <a href=""> MLA Format </a>
              <br />
              <a href=""> Cite a Photo in MLA </a>
              <br />
              <a href=""> Cite a Scientific Journal in MLA </a>
              <br />
              <a href=""> Cite a Magazine in MLA</a>
              <br />
              <a href=""> Cite a Speech in MLA</a>
              <br />
              <a href=""> Cite a Film in MLA</a>
              <br />
              <a href=""> Cite a Documentary in MLA</a>
              <br />
              <a href=""> Cite Dialogue in MLA</a>
              <br />
              <a href=""> Cite a Mathematical Theory in MLA</a>
              <br />
              <a href=""> Cite a Biography in MLA</a>
              <br />
              <a href=""> Cite an Abstract in MLA</a>
              <br />
              <a href=""> Cite a Sonnet in MLA</a>
              <br />
              <a href=""> Cite a Political Cartoon in MLA</a>
              <br />
              <a href=""> Cite Google in MLA</a>
              <br />
              <a href=""> Cite the CDC in MLA</a>
              <br />
            </div>
            <div style={{ width: "345px" }} className="uC">
              <a href="/"> Chicago Manual of Style </a> <br />
              <a href="/">Cite a Photo in Chicago</a> <br />
              <a href="/">Cite a Scientific Journal in Chicago</a>
              <br />
              <a href="/">Cite a Magazine in Chicago</a>
              <br />
              <a href="/">Cite a Speech in Chicago</a>
              <br />
              <a href="/">Cite a Film in Chicago</a>
              <br />
              <a href="/">Cite a Documentary in Chicago</a>
              <br />
              <a href="/">Cite Dialogue in Chicago</a>
              <br />
              <a href="/">Cite a Mathematical Theory in Chicago</a>
              <br />
              <a href="/">Cite a Biography in Chicago</a>
              <br />
              <a href="/">Cite an Abstract in Chicago</a>
              <br />
              <a href="/">Cite a Sonnet in Chicago</a>
              <br />
              <a href="/">Cite a Political Cartoon in Chicago</a>
              <br />
              <a href="/">Cite Google in Chicago</a>
              <br />
              <a href="/">Cite the CDC in Chicago</a>
              <br />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              backgroundColor: "#FC832B",
              color: "white",
              borderRadius: "6px",
              height: "48px",
              padding: "8px 32px",
              border: "0",
              cursor: "pointer",
              width: "215px",
              marginBlock: "20px",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's
            free
          </button>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "45px",
            paddingInline: "275px",
            marginTop: "150px",
          }}
        >
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="summaries">
          <div className="summary">
            <details class="container_GYj0UnA9">
              <summary class="button_GYj0UnA9">
                <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                  Who can use WriteophonicGO?
                </h3>
                <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span>
              </summary>
              <div class="content_GYj0UnA9 C3_dkKeNHYB">
                If you’re on a Writeophonic Premium subscription in all countries,
                you have access to WriteophonicGO. Most Writeophonic Business and
                Writeophonic for Education (higher education) accounts have access
                to the beta launch. WriteophonicGO is also available for people
                with a Writeophonic Free account in Australia, Canada, Germany,
                Japan, New Zealand, Poland, Ukraine, the United Kingdom, and the
                United States—with more countries added later. <br />
              </div>
            </details>
          </div>
          <div className="summary">
            <details class="container_GYj0UnA9">
              <summary class="button_GYj0UnA9">
                <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                  Where can I use WriteophonicGO?
                </h3>
                <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span>
              </summary>
              <div class="content_GYj0UnA9 C3_dkKeNHYB">
                WriteophonicGO is available on the following product offerings and
                platforms: Writeophonic for Windows, Writeophonic for Mac, Writeophonic
                for Chrome, Writeophonic for Edge, and the Writeophonic Editor. You’ll
                be able to use its generative writing capabilities in Gmail,
                Google Docs, Microsoft Word, LinkedIn, and Medium. WriteophonicGO
                will continue to be optimized for more applications and websites
                over time.
                <br />
              </div>
            </details>
          </div>
          <div className="summary">
            <details class="container_GYj0UnA9">
              <summary class="button_GYj0UnA9">
                <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                  I’m an administrator for my team, organization, or
                  institution. What kind of controls are available for
                  WriteophonicGO?{" "}
                </h3>
                <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span>
              </summary>
              <div class="content_GYj0UnA9 C3_dkKeNHYB">
                Writeophonic takes transparency and customer control seriously.
                Administrators can decide whether or not they want their team or
                learning institution to take advantage of the capabilities
                offered by WriteophonicGO and generative AI. WriteophonicGO is off by
                default for Writeophonic Business and Writeophonic for Education
                customers. To make it available, go to your account and switch
                it on for your entire team, organization, or institution.
                WriteophonicGO will not be available to K-12 learning institutions
                at this time. <br />
              </div>
            </details>
          </div>
          <div className="summary">
            <details class="container_GYj0UnA9">
              <summary class="button_GYj0UnA9">
                <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                  I’m a developer. Will WriteophonicGO be available in the
                  Writeophonic Text Editor SDK?
                </h3>
                <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span>
              </summary>
              <div class="content_GYj0UnA9 C3_dkKeNHYB">
                We are evaluating bringing generative AI into the Text Editor
                SDK later this year. Please check <br />
              </div>
            </details>
          </div>
          <div className="summary">
            <details class="container_GYj0UnA9">
              <summary class="button_GYj0UnA9">
                <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                  How does WriteophonicGO use my data?
                </h3>
                <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span>
              </summary>
              <div class="content_GYj0UnA9 C3_dkKeNHYB">
                Writeophonic's enterprise-grade attestations and certifications and
                user-first approach to security and privacy reflect our
                practices and policies to keep customers' data safe and secure.{" "}
                <br /> <br />
                Writeophonic’s product offerings only access text when you have the
                product activated <br />. Writeophonic never sells customer data
                and never provides information to third parties to help them
                advertise their products to you. Rather, Writeophonic makes money
                when people subscribe to our paid offerings.
              </div>
            </details>
          </div>
          <div className="summary">
            <details class="container_GYj0UnA9">
              <summary class="button_GYj0UnA9">
                <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                  Who can use WriteophonicGO?
                </h3>
                <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span>
              </summary>
              <div class="content_GYj0UnA9 C3_dkKeNHYB">
                If you’re on a Writeophonic Premium subscription in all countries,
                you have access to WriteophonicGO. Most Writeophonic Business and
                Writeophonic for Education (higher education) accounts have access
                to the beta launch. WriteophonicGO is also available for people
                with a Writeophonic Free account in Australia, Canada, Germany,
                Japan, New Zealand, Poland, Ukraine, the United Kingdom, and the
                United States—with more countries added later. <br />
              </div>
            </details>
          </div>
          <div className="summary">
            <details class="container_GYj0UnA9">
              <summary class="button_GYj0UnA9">
                <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                  Where can I use WriteophonicGO?
                </h3>
                <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span>
              </summary>
              <div class="content_GYj0UnA9 C3_dkKeNHYB">
                WriteophonicGO is available on the following product offerings and
                platforms: Writeophonic for Windows, Writeophonic for Mac, Writeophonic
                for Chrome, Writeophonic for Edge, and the Writeophonic Editor. You’ll
                be able to use its generative writing capabilities in Gmail,
                Google Docs, Microsoft Word, LinkedIn, and Medium. WriteophonicGO
                will continue to be optimized for more applications and websites
                over time.
                <br />
              </div>
            </details>
          </div>
          <div className="summary">
            <details class="container_GYj0UnA9">
              <summary class="button_GYj0UnA9">
                <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                  I’m an administrator for my team, organization, or
                  institution. What kind of controls are available for
                  WriteophonicGO?{" "}
                </h3>
                <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span>
              </summary>
              <div class="content_GYj0UnA9 C3_dkKeNHYB">
                Writeophonic takes transparency and customer control seriously.
                Administrators can decide whether or not they want their team or
                learning institution to take advantage of the capabilities
                offered by WriteophonicGO and generative AI. WriteophonicGO is off by
                default for Writeophonic Business and Writeophonic for Education
                customers. To make it available, go to your account and switch
                it on for your entire team, organization, or institution.
                WriteophonicGO will not be available to K-12 learning institutions
                at this time. <br />
              </div>
            </details>
          </div>
          <div className="summary">
            <details class="container_GYj0UnA9">
              <summary class="button_GYj0UnA9">
                <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                  I’m a developer. Will WriteophonicGO be available in the
                  Writeophonic Text Editor SDK?
                </h3>
                <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span>
              </summary>
              <div class="content_GYj0UnA9 C3_dkKeNHYB">
                We are evaluating bringing generative AI into the Text Editor
                SDK later this year. Please check <br />
              </div>
            </details>
          </div>
          <div className="summary">
            <details class="container_GYj0UnA9">
              <summary class="button_GYj0UnA9">
                <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                  How does WriteophonicGO use my data?
                </h3>
                <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span>
              </summary>
              <div class="content_GYj0UnA9 C3_dkKeNHYB">
                Writeophonic's enterprise-grade attestations and certifications and
                user-first approach to security and privacy reflect our
                practices and policies to keep customers' data safe and secure.{" "}
                <br /> <br />
                Writeophonic’s product offerings only access text when you have the
                product activated <br />. Writeophonic never sells customer data
                and never provides information to third parties to help them
                advertise their products to you. Rather, Writeophonic makes money
                when people subscribe to our paid offerings.
              </div>
            </details>
          </div>
          <div className="summary">
            <details class="container_GYj0UnA9">
              <summary class="button_GYj0UnA9">
                <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                  How does WriteophonicGO use my data?
                </h3>
                <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span>
              </summary>
              <div class="content_GYj0UnA9 C3_dkKeNHYB">
                Writeophonic's enterprise-grade attestations and certifications and
                user-first approach to security and privacy reflect our
                practices and policies to keep customers' data safe and secure.{" "}
                <br /> <br />
                Writeophonic’s product offerings only access text when you have the
                product activated <br />. Writeophonic never sells customer data
                and never provides information to third parties to help them
                advertise their products to you. Rather, Writeophonic makes money
                when people subscribe to our paid offerings.
              </div>
            </details>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "135px",
            paddingInline: "290px",
            marginTop: "140px",
            background: "#333954",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>
            {" "}
            Strong Writing, Proper Citations, Good Grades
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginBlock: "50px",
            }}
          >
            96 percent of students say that Writeophonic increases their confidence
            in their written material. Join them to give your writing—and your
            grades—that extra polish.
          </p>
          <button
            style={{
              backgroundColor: "white",
              color: "#333954",
              borderRadius: "6px",
              height: "48px",
              padding: "8px 32px",
              border: "0",
              cursor: "pointer",
              width: "215px",
              marginBlock: "20px",
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

export default Citation;
