import React from "react";
import "./WritingGuides.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { IoIosArrowForward } from "react-icons/io";

const WritingGuides = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="hero">
          <div className="left anchor">
            <p style={{ fontSize: "12px" }}> WRITING</p>
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "36px",
                letterSpacing: "-.005em",
                lineHeight: "52px",
              }}
            >
              The Ultimate Writing Skills Guide
            </h1>
            <p style={{ fontSize: "18px", lineHeight: "32px", marginBlock: "35px" }}>
              If you want to become a better writer, you’re in the right place.
              We’ve compiled our best resources so you can practice your writing
              skills and take them to the next level.
            </p>
            <h3>Jump to Section: </h3>
            <a href="/" style={{ color: "blue", textDecoration: "underline", fontSize: "18px" }}>What Is Writing?</a> <br />
            <a href="/" style={{ color: "blue", textDecoration: "underline", fontSize: "18px" }}>How to Strengthen Your Writing Skills</a> <br />
            <a href="/" style={{ color: "blue", textDecoration: "underline", fontSize: "18px" }}>Frequently Asked Questions </a> <br />
          </div>
          <div className="right">
            <img
              width="524px"
              height="460px"
              src="https://images.ctfassets.net/1e6ajr2k4140/75IFN2KXay95QcYR7usTWp/b23584807f2575942964c54bfcd6dfdf/Group_625989.png?w=1280&fm=webp"
              alt=""
            />
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
            <img
              width="524px"
              height="276px"
              src="https://images.ctfassets.net/1e6ajr2k4140/UEGMxrgyQV0d8aEncYCas/4e2b765e21935adcb6439480e7482ab4/Group_625917.png?w=1280&fm=webp"
              alt=""
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
              What Is Writing?
            </h1>
            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              Writing is the practice of combining words to form coherent
              thoughts. Great writing goes a step further; it involves using
              clear and compelling language to convey ideas that deeply inform
              or inspire. Grammar, punctuation, word choice, tone, and even
              proofreading all play a role in how effective your writing is.
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
            How to Strengthen Your Writing Skills
          </h1>
          <p>
            From understanding stages of the writing process and various writing
            styles to discovering activities for writing practice, we have you
            covered.
          </p>
        </div>
        <div className="useCase" style={{}}>
          <div style={{ width: "524px" }} className="uC">
            <img
              width="523px"
              height="178px"
              src="https://images.ctfassets.net/1e6ajr2k4140/6ylxIwG5SYZHLx2GdT7zk2/413094de82ded41b6ea7b8b5bb844765/blog1-readability__9_.png?w=768&fm=webp"
              alt=""
            />
            <h3>Grammar (Rules)</h3>
            <a href="/">Grammar guide </a> <br />
            <a href="/"> Parts of speech </a> <br />
            <a href="/"> Verb tenses </a> <br />
            <a href="/"> First, second, and third person </a> <br />
            <a href="/"> Capitalization rules </a> <br />
            <a href="/"> Active vs. passive voice </a> <br />
            <a href="/"> Parallelism </a>
          </div>
          <div style={{ width: "524px" }} className="uC">
            <img
              width="524px"
              height="178px"
              src="https://images.ctfassets.net/1e6ajr2k4140/3GRnOGQNl82N8kvnPP6ZuL/1f5f2e3efbfd07f33569ba23e31783f7/blog1-readability__10_.png?w=768&fm=webp"
              alt=""
            />
            <h3> Writing</h3>
            <a href="">Writing guide </a> <br />
            <a href=""> Sentences </a> <br />
            <a href=""> Paragraphs </a> <br />
            <a href=""> The writing process </a> <br />
            <a href=""> Writing styles </a>
            <br />
            <a href=""> Types of writing </a>
            <br />
            <a href=""> Improve writing skills </a>
          </div>
          <div style={{ width: "524px" }} className="uC">
            <img
              width="524px"
              height="162px"
              src="https://images.ctfassets.net/1e6ajr2k4140/jIU8EHIm5NCc2UkeLAki7/e1b8884bc4435a048898b09d94765589/blog1-readability__12_.png?w=768&fm=webp"
              alt=""
            />
            <h3>Spelling & Punctuation</h3>
            <a href="">Punctuation </a> <br />
            <a href="">Comma </a> <br />
            <a href=""> Semicolon </a> <br />
            <a href="">Apostrophe </a> <br />
            <a href="">Spell checker </a> <br />
            <a href="">Spelling </a> <br />
            <a href=""> Commonly confused words</a>
          </div>
          <div style={{ width: "524px" }} className="uC">
            <img
              width="524px"
              height="162px"
              src="https://images.ctfassets.net/1e6ajr2k4140/4sFhCDRedYUA9cpJiDKH7Z/3cc741b515b24f4651c5377881df0487/blog1-readability__13_.png?w=768&fm=webp"
              alt=""
            />
            <h3>Writing Basics</h3>
            <a href="">Grammar </a> <br />
            <a href="">Punctuation </a> <br />
            <a href=""> Spell Check</a> <br />
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
        <div>

          <div className="socialIcons" style={{ padding: "65px", display: "flex", background: "#3659b5", color: "white" }}>
            <div
              className=""
              style={{
                // textAlign: "center",
                padding: "15px",
                paddingInline: "40px",
                marginBlock: "70px",
              }}
            >
              <h1> Get Real-Time Feedback Wherever You Type</h1>
              <p style={{ fontSize: "22px", paddingTop: "38px" }}>


                Writeophonic works across more than 500,000 websites and applications to help you write your best.
              </p>
            </div>
            <div className="socialIcon1" style={{ paddingInline: "153px" }}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WritingGuides;
