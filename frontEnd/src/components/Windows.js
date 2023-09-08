import React from "react";
import "./Windows.css";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { IoIosArrowForward } from "react-icons/io";

const Windows = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="hero">
          <div className="left">
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "42px",
                letterSpacing: "-.005em",
                lineHeight: "52px",
              }}
            >
              Writeophonic for Your
              <br />
              Desktop
            </h1>
            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              An all-in-one writing assistant that works on your desktop and in
              your browser. Use it in apps, word processors, email clients, and
              more.
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
              width="470px"
              height="416px"
              src="https://images.ctfassets.net/1e6ajr2k4140/3VLiLtoIGIJLZfp7Z57UuQ/d4e7f962b394a2e52ece1a00632c1e15/hero-outlook-snippet.png?w=1080&fm=webp"
              alt=""
            />
          </div>
        </div>
        <div
          className="icons"
          style={{
            background: "#3659b5",
            color: "white",
            paddingBlock: "195px",
          }}
        >
          <div className="tag">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
              alt=""
            />
            <h4>Writeophonic for Mac and Windows</h4>
            <p>
              Write confidently on your favorite desktop apps and websites on
              Mac and Windows.
            </p>
          </div>
          <div className="tag">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
              alt=""
            />
            <h4>Writeophonic Browser Extension</h4>
            <p>
              Get advanced writing support in Google Docs and other sites on
              major web browsers.
            </p>
          </div>
          <div className="tag">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
              alt=""
            />
            <h4>Writeophonic Browser Extension</h4>
            <p>
              Get advanced writing support in Google Docs and other sites on
              major web browsers.
            </p>
          </div>

          <div className="tag">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/765BvlKKf1duW85dh1b86f/535ffa8d0fe4ccd0bc639f81fbd5c850/Icons__3_.svg"
              alt=""
            />
            <h4>Writeophonic Editor</h4>
            <p>
              Draft, save, and edit documents in a dedicated text editor that
              syncs across your devices.
            </p>
          </div>
        </div>
        <div className="socialIcons"
        style={{ padding: "55px" }}
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
          <h1> Use It with Emails, Messages, Documents, and More</h1>
          
        </div>
        <div className="socialIcon1">
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

          <img
            width="56px"
            height="57px"
            alt="Edge"
            loading="lazy"
            src="//images.ctfassets.net/1e6ajr2k4140/1parvSPCwmepfihm2iuLO2/47c86fb3ccf88c215c506ab7cdc145ca/edge__1_.png?w=1280"
            class="icon-list-item_icon__KfjtG"
          />
          <img
            width="56px"
            height="57px"
            alt="Firefox"
            loading="lazy"
            src="//images.ctfassets.net/1e6ajr2k4140/5lJxM3QU4vYFXO4Q2mvL1w/3321bdce9ee07f679b735b2b8fd7cedb/firefox.png?w=1280"
            class="icon-list-item_icon__KfjtG"
          />

          <img
            width="56px"
            height="57px"
            alt="iOS"
            loading="lazy"
            src="//images.ctfassets.net/1e6ajr2k4140/7jwsAoFl2IeeNu6aVinGhN/1ed4790bd105c022e63c468d4f0ea042/ios__1_.png?w=1280"
            class="icon-list-item_icon__KfjtG"
          />

          <img
            width="56px"
            height="57px"
            alt="Android"
            loading="lazy"
            class="icon-list-item_icon__KfjtG"
            src="//images.ctfassets.net/1e6ajr2k4140/3iAYXmcdzgiYhkkoXqq030/9cbf973827b39d1a7b06b22c5b6fa613/ios__2_.svg"
          />
        </div>
      </div>
        <div>
          
          <div className="hero">
            <div className="left1_" style={{ padding: "25px" }}>
              <p style={{ fontSize: "12px", color: "grey" }}>
                TONE SUGGESTIONS
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
                Make the right impression every time
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Get guidance to adjust the mood and attitude of your writing,
                without changing your meaning.
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
                  width: "154px",
                  marginBlock: "20px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Get Premium </span>
              </button>
            </div>
            <div className="right">
              <img
                width={"470px"}
                height={"286px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/5RF3Kn1MAwg6ZZIxNSPY10/5e3f926c5a439a315acb219c78333de0/Frame_1160.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"470px"}
                height={"286px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/4H0zTFKwilJoa0msbv1YFD/b6a4cf09ac0435c158feb310143de69a/Frame_1171.png?w=1080&fm=webp"
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
                Clean up tangled, hard-to-read sentences
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Use clarity suggestions to make your writing easy for your
                reader to understand.
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
                  width: "154px",
                  marginBlock: "20px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Get Premium </span>
              </button>
            </div>
          </div>
          <div className="hero">
            <div className="left1_" style={{ padding: "25px" }}>
              <p style={{ fontSize: "12px", color: "grey" }}>
                CUSTOM STYLE GUIDES
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
                Empower your team to write with a unified voice
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Apply shared guidelines to help teams sound consistent by
                encouraging the language and tones unique to your brand.
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
                  width: "154px",
                  marginBlock: "20px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Get Premium </span>
              </button>
            </div>
            <div className="right">
              <img
                width={"470px"}
                height={"430px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/6LTfitHGY4MZIl1se0Josd/7e08808f9655769dc8e581d06a4557fd/Frame_1162.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "325px",
            marginTop: "100px",
          }}
        >
          <h1>Find Your Momentum with Generative AI Assistance</h1>
          <p
            style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}
          >
            
With the free plan, you get a monthly quota of prompts to power WriteophonicGO, your generative AI writing assistant. Use these prompts across apps and websites to compose drafts, rewrite text, generate ideas, and quickly respond to emails.
          </p>
        </div>
        <div>
          
          <div className="hero">
            <div className="right">
              <img
                width={"470px"}
                height={"286px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/4H0zTFKwilJoa0msbv1YFD/b6a4cf09ac0435c158feb310143de69a/Frame_1171.png?w=1080&fm=webp"
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
                Clean up tangled, hard-to-read sentences
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Use clarity suggestions to make your writing easy for your
                reader to understand.
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
                  width: "154px",
                  marginBlock: "20px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Get Premium </span>
              </button>
            </div>
          </div>
          <div className="hero">
            <div className="left1_" style={{ padding: "25px" }}>
              <p style={{ fontSize: "12px", color: "grey" }}>
                CUSTOM STYLE GUIDES
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
                Empower your team to write with a unified voice
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Apply shared guidelines to help teams sound consistent by
                encouraging the language and tones unique to your brand.
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
                  width: "154px",
                  marginBlock: "20px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Get Premium </span>
              </button>
            </div>
            <div className="right">
              <img
                width={"470px"}
                height={"430px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/6LTfitHGY4MZIl1se0Josd/7e08808f9655769dc8e581d06a4557fd/Frame_1162.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className="gradient"
          style={{
            marginTop: "40px",
            background:
              "#f9faff",
          }}
        >
          <div className="hero">
            <div className="left1">
              <h2
                style={{
                  fontFamily: "Inter,sans-serif",
                  // fontSize: "22px",
                  letterSpacing: "-.005em",
                  lineHeight: "52px",
                  marginBottom: "40px",
                }}
              >
                Everyone Can Write with Confidence
              </h2>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                “Writeophonic allows me to get those communications out and feel
                confident that I’m putting my best foot forward. Writeophonic is
                like a little superpower, especially when I need to be at 110%.”
              </p>
            </div>
            <div className="right1" style={{}}>
              <figure class="_1tgaf-author">
                <img
                  src="https://static.grammarly.com/assets/files/dbd17c37cf339e73f106ff535431d2b9/jeanette.png"
                  alt=""
                  width={65}
                />
                <figcaption>
                  <h3 style={{ color: "#0E101A" }} className="_2HcMy-h5">
                    Jeanette Stock
                  </h3>
                  <div
                    style={{ color: "#6D758D" }}
                    className="_1_z68-large _2sETg-compact"
                  >
                    Co-founder of
                    <br />
                    Venture Out
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div
            className="yD_za-iconsBlock"
            style={{ display: "flex", justifyContent: "center", gap: "65px" }}
          >
            <div style={{ color: "#6D758D" }} className="boSFt-medium">
              Featured in:
            </div>
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
                {/* <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                  <IoIosArrowForward />
                </span> */}
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
            background: "#3659b5",
            color: "white",
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginBlock: "140px",
            paddingBlock: "120px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>Write With More Peace of Mind</h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Join over 30 million people and 50,000 professional teams who trust
            Writeophonic to help them communicate with confidence.
          </p>
          <button
            style={{
              backgroundColor: "white",
              color: "#1f243c",
              borderRadius: "6px",
              height: "48px",
              padding: "8px 32px",
              border: "0",
              cursor: "pointer",
              width: "184px",
              marginTop: "85px",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Windows;
