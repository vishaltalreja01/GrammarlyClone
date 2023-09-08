import React from "react";
import "./Institutions.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { IoIosArrowForward } from "react-icons/io";

const Institutions = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div style={{ background: "#333954", color: "white" }}>
          <div className="hero">
            <div className="left">
              <h1
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: "34px",
                  letterSpacing: "-.005em",
                  lineHeight: "52px",
                }}
              >
                Writeophonic for Education
                <br />
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Unlock the potential for learning with trusted writing support
                for students and educators.
              </p>
              <div style={{ display: "flex", gap: "5px" }}>
                <button
                  style={{
                    backgroundColor: "white",
                    color: "#333954",
                    borderRadius: "6px",
                    height: "48px",
                    padding: "8px 32px",
                    border: "0",
                    cursor: "pointer",
                    width: "164px",
                  }}
                >
                  <span style={{ fontWeight: "bolder" }}>Contact Sales</span>
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    outline: "1px solid white",
                    borderRadius: "6px",
                    height: "48px",
                    padding: "8px 32px",
                    border: "0",
                    cursor: "pointer",
                    width: "224px",
                  }}
                >
                  <span style={{ fontWeight: "bolder" }}>
                    Sign up with your school
                  </span>
                </button>
              </div>
            </div>
            <div className="right">
              <img
                width="480px"
                height="453px"
                src="https://images.ctfassets.net/1e6ajr2k4140/3S1CdTbtOPQ3jfmxMBdVAL/58619b7d3c202f9a68cb28b6a799c1fd/hero-product-example.png?w=1080&fm=webp"
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
                Real-time communication assistance, where students write the
                most.
              </p>
            </div>
            <div className="tag">
              <img
                src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
                alt=""
              />

              <p>
                Augments classroom learning with guided suggestions and custom
                feedback.
              </p>
            </div>
            <div className="tag">
              <img
                src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
                alt=""
              />

              <p>
                Improves career readiness and prepares students to succeed
                professionally.
              </p>
            </div>

            <div className="tag">
              <img
                src="https://images.ctfassets.net/1e6ajr2k4140/765BvlKKf1duW85dh1b86f/535ffa8d0fe4ccd0bc639f81fbd5c850/Icons__3_.svg"
                alt=""
              />

              <p>
                Enterprise-grade security to protect student and institutional
                data.
              </p>
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
            Leading AI-Powered Communication Assistance That Fuels Student and
            Institutional Success
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
            Designed responsibly to support autonomy and decision-making,
            Writeophonic’s AI assistance promotes critical thinking and confidence
            in written communication for all.
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
                Articulate ideas with confidence and fluency
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Clarity-focused suggestions help everyone communicate with
                polish, from students writing final papers to faculty and staff
                drafting department emails.
              </p>
            </div>
            <div className="right">
              <img
                width={"481px"}
                height={"253px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/1juzeupDwZZkJHFwm4K19x/a03f48b24a9eb3b9c0dda39e9317fae3/clarity__1_.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"480px"}
                height={"454px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/3837Bft2RpgyyjSf2XouAd/b178078bcdc6987468ca0ab12fa114b2/Ideate.png?w=1080&fm=webp"
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
                Accelerate student learning with generative AI
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                The WriteophonicGO generative AI assistant, available for
                institutional opt-in, maintains high standards of data security,
                privacy, and user agency. Read more about our approach to
                responsible AI.
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
                Help students achieve successful career outcomes
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                WriteophonicGO’s generative capabilities provide efficient writing
                support to students as they dive into the job market.
              </p>
            </div>
            <div className="right">
              <img
                width={"480px"}
                height={"446px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/1cVVIlfobSM6DZQe4xx2KR/55810d8ed14804a189c0267e77df2e14/Quick_reply.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"480px"}
                height={"445px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/5iQeIxbW6iv188eCubQoM/f15add552f1ee1eb96382135918a110d/citation__1_.png?w=1080&fm=webp"
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
                Ensure written submissions are plagiarism-free
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Plagiarism detection helps catch passages that may need citation
                by scanning ProQuest™ databases and billions of web pages.
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
                Help students format citations accurately
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Working directly on the page, citation tools keep periods,
                parentheses, and other citation details consistent, whether in
                APA, MLA, or Chicago.
              </p>
            </div>
            <div className="right">
              <img
                width={"480px"}
                height={"380px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/7iyUYQLmGt7Py2CHioKleR/488ad938f52d62457afb9c52c857bb36/Citation_Editor_LandingPage.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"480px"}
                height={"265px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/X2dMoxONmbXW2VfroWobb/2db803f98af71ddf24fdecd02387db9b/example-spelling.png?w=1080&fm=webp"
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
                Get the basics right
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Get confident with grammar and spelling. Writeophonic checks for
                typos, commonly confused words, and tricky problems in sentence
                structure.
              </p>
            </div>
          </div>
        </div>
        <div className="hero" style={{ background: "#1f243c", color: "white" }}>
          <div className="right">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/72hEPrrRKjlaWtSM44w3Lr/9883011afe74db2aab413825d03cd840/Frame_31613011.png?w=1080&fm=webp"
              alt=""
              width="481px"
              height={"381px"}
            />
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
              AI to Augment Human Potential
            </h1>
            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              For over fourteen years, we’ve harnessed advanced technology to
              help people become better communicators. Our approach to
              generative AI continues to put people’s goals first. We combine
              expert human knowledge with technical power to design AI that is
              augmented—not artificial.
            </p>
            <button
              style={{
                backgroundColor: "Transparent",
                color: "white",
                outline: "1px solid white",
                borderRadius: "6px",
                height: "48px",
                padding: "8px 32px",
                border: "0",
                cursor: "pointer",
                width: "164px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Read More</span>
            </button>
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
          <h1>See Why Students and Faculty Alike Trust Writeophonic</h1>
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
                “Writeophonic helps me teach my students because I no longer have
                to mark 90% of their errors and can focus on bigger issues.”
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
                    Mary Groeninger
                  </h3>
                  <div
                    style={{ color: "white" }}
                    className="_1_z68-large _2sETg-compact"
                  >
                    English Instructor at Vermilion Community College
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
            paddingInline: "325px",
            marginBlock: "120px",
          }}
        >
          <h1>Trusted by Over 3,000 Institutions, Including:</h1>
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
            <h1>Confident Communication Anywhere Writing and Learning Happen</h1>
            
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
            background: "#333954",
            color: "white",
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginTop: "140px",
            paddingBlock: "120px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}> Ready to Get Started?</h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
           
Join over 3,000 educational institutions using Writeophonic to achieve better results, boost student confidence, and make the learning experience more rewarding and meaningful.
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
            <span style={{ fontWeight: "bolder" }}>Contact Sales</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Institutions;
