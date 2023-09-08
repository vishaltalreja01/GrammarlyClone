import React from "react";
import "./Students.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Students = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="hero">
          <div className="left">
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "36px",
                letterSpacing: "-.005em",
                lineHeight: "52px",
              }}
            >
              Writeophonic for Students
            </h1>
            <p style={{ fontSize: "18px", lineHeight: "32px" }}>
              Discover what you’re capable of with Writeophonic's AI writing
              assistance for any task from start to finish, including
              brainstorming, revision, and citations.
            </p>
            <button
              style={{
                backgroundColor: "#FC832B",
                color: "#fff",
                borderRadius: "6px",
                height: "48px",
                padding: "8px 32px",
                border: "0",
                cursor: "pointer",
                width: "224px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's
              free
            </button>
          </div>
          <div className="right">
            <img
              width="480px"
              height="386px"
              src="https://images.ctfassets.net/1e6ajr2k4140/33nHXzT8MscxIwOIZ8ga7y/13c5d5b3b88a32efeae2ce24d17fa915/Ideate.png?w=1080&fm=webp"
              alt=""
            />
          </div>
        </div>
        <div
          className="icons"
          style={{
            paddingBlock: "125px",
          }}
        >
          <div className="tag">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
              alt=""
            />

            <p>
              Jump-start any document with brainstorms, outlines, and new
              perspectives at your fingertips.
            </p>
          </div>
          <div className="tag">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
              alt=""
            />

            <p>Check your text for plagiarism and cite your sources.</p>
          </div>
          <div className="tag">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
              alt=""
            />

            <p>
              94% of students say Writeophonic Premium helped improve their grades.
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
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "325px",
            marginBlock: "120px",
          }}
        >
          <h1>Everything You Need to Ace Your Assignments</h1>
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
                Get a head start for unfamiliar situations
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Navigate new challenges with a generative AI co-creator that
                gets you going when you’re at a loss.
              </p>
            </div>
            <div className="right">
              <img
                width={"481px"}
                height={"426px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/68P6MUSO9l9KHlm15atbnF/fbb10b74f926243acb907f8554213415/Ideate.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"470px"}
                height={"321px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/2awOAJK4oaJlv5sYF3AUWc/a048d2b6e540ccb6ab300b5e75bd608b/Rewrite_for_length.png?w=1080&fm=webp"
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
                Adjust your writing in just a click
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Evaluate your writing and prompt WriteophonicGO to take your
                sentences to the next level in a few clicks.
              </p>
            </div>
          </div>
          <div className="hero">
            <div className="left1_" style={{ padding: "25px" }}>
              <p style={{ fontSize: "12px", color: "grey" }}>
                GRAMMAR AND SPELLING SUGGESTIONS
              </p>
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
                Clean up typos, grammatical mistakes, and misplaced punctuation
                with just a few clicks.
              </p>
            </div>
            <div className="right">
              <img
                width={"470px"}
                height={"293px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/1jvarNZ7Kroc2lhhCqGaVa/2b290e9a343f8c0a58e3a08f76d0766a/example-spelling.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"470px"}
                height={"281px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/2MazXk2X9pUJ1VQUOhV4zi/e7d521b395522b9ad91d8ed215d28613/example-clarity.png?w=1080&fm=webp"
                alt=""
              />
            </div>
            <div className="left1_" style={{ padding: "25px" }}>
              <p style={{ fontSize: "12px", color: "grey" }}>
                FULL-SENTENCE REWRITES
              </p>
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
                Clean up tangled, unclear sentences to get your point across.
              </p>
            </div>
          </div>
          <div className="hero">
            <div className="left1_" style={{ padding: "25px" }}>
              <p style={{ fontSize: "12px", color: "grey" }}>
                PLAGIARISM DETECTION
              </p>
              <h1
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: "40px",
                  letterSpacing: "-.005em",
                  lineHeight: "42px",
                  marginBlock: "20px",
                }}
              >
                Check for plagiarism
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Identify passages that may need citations and see sourcing
                information.
              </p>
            </div>
            <div className="right">
              <img
                width={"470px"}
                height={"450px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/6WeNfoOpFUdctguuVa3XF9/e169a1dea5beaffbe9c888f9e7534557/example-plagiarism.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"470px"}
                height={"377px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/7vEc3UqvGkTN5Wajlyuxlt/bc8aa45c1f186aa4ddb4cf14d93f8070/removed_premium.png?w=1080&fm=webp"
                alt=""
              />
            </div>
            <div className="left1_" style={{ padding: "25px" }}>
              <p style={{ fontSize: "12px", color: "grey" }}>AUTO-CITATIONS</p>
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
                Pull fully formatted citations from online sources directly from
                your browser as you research.
              </p>
            </div>
          </div>
          <div className="hero">
            <div className="left1_" style={{ padding: "25px" }}>
              <p style={{ fontSize: "12px", color: "grey" }}>
                CITATION STYLE FORMATTING
              </p>
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
                Keep your citation periods, parentheses, and more consistent,
                whether you use APA, MLA, or Chicago.
              </p>
            </div>
            <div className="right">
              <img
                width={"470px"}
                height={"381px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/7iyUYQLmGt7Py2CHioKleR/488ad938f52d62457afb9c52c857bb36/Citation_Editor_LandingPage.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className="gradient"
          style={{
            marginTop: "40px",
            background: "#333954",
            paddingBlock: "80px",
          }}
        >
          <div className="hero">
            <div className="left1">
              <p
                style={{ fontSize: "20px", lineHeight: "32px", color: "white" }}
              >
                “I treated Writeophonic Premium like an investment in myself to get
                good grades.”
              </p>
            </div>
            <div className="right1" style={{}}>
              <figure class="_1tgaf-author">
                <img
                  src="https://images.ctfassets.net/1e6ajr2k4140/3ztHK2T7kEiXx7Xtd7MHbK/1b72363a6e833e77c9d1b7f7ee3d344a/557248B8-37C3-485B-8976-DCD927D9ACA8_1_201_a.jpeg"
                  alt=""
                  width={65}
                  style={{ borderRadius: "65px" }}
                />
                <figcaption>
                  <h3 style={{ color: "white" }} className="_2HcMy-h5">
                    Danielle Couture
                  </h3>
                  <div
                    style={{ color: "white" }}
                    className="_1_z68-large _2sETg-compact"
                  >
                    Student
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="hero">
            <div className="left1">
              <p
                style={{ fontSize: "20px", lineHeight: "32px", color: "white" }}
              >
                “Writeophonic Premium gives me confidence that I’ve taken the
                necessary steps to turn in the best product.”
              </p>
            </div>
            <div className="right1" style={{}}>
              <figure class="_1tgaf-author">
                <img
                  src="https://images.ctfassets.net/1e6ajr2k4140/5666BIsqNIzXdOa3FhWoLm/8f82e22b7d30deb1998e7eb5de777f2d/testimonial-thumbnail__2_.png"
                  alt=""
                  width={65}
                />
                <figcaption>
                  <h3 style={{ color: "white" }} className="_2HcMy-h5">
                    Amy Westgate
                  </h3>
                  <div
                    style={{ color: "white" }}
                    className="_1_z68-large _2sETg-compact"
                  >
                    Student
                    <br />
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="socialIcons" style={{ padding: "55px" }}>
          <div
            className=""
            style={{
              textAlign: "center",
              padding: "25px",
              paddingInline: "305px",
              marginBlock: "70px",
            }}
          >
            <h1>Works Where You Write</h1>
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
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginBlock: "140px",
            paddingBlock: "120px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>
            {" "}
            Good Grades Start with Great Writing
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Join students from over 3,000 institutions worldwide who use
            Writeophonic to improve their writing every day.
          </p>
          <button
            style={{
              background: "#FC832B",
              color: "white",
              borderRadius: "6px",
              height: "48px",
              padding: "8px 32px",
              border: "0",
              cursor: "pointer",
              width: "234px",
              marginTop: "85px",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's
            free
          </button>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Are you a faculty member or administrator looking for an academic{" "}
            <br /> institution account? <br />{" "}
            <a
              href="/"
              style={{
                color: "blue",
                textDecoration: "underline",
                fontSize: "21px",
              }}
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Students;
