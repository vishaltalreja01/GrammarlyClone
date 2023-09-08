import React from "react";
import "./Grammar.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { IoIosArrowForward } from "react-icons/io";
import iconWriteophonic from "../../images/icon_grammarly.png";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const Grammar = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginTop: "50px",
            paddingBlock: "120px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}> Free Grammar Checker</h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Ensure your English writing is mistake-free. Paste your text or
            start typing below to check for grammar, spelling, and punctuation
            errors.
          </p>
        </div>
        <div className="grammarChecker">
          <div className="parentContainer">
            <div className="column">
              <GrammarlyEditorPlugin clientId="client_MC9CT6Q6FAsQv7rfMQBgyU">
                <textarea
                  className="textarea"
                  placeholder="Start writing..."
                ></textarea>
              </GrammarlyEditorPlugin>
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
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "255px",
            marginTop: "140px",
            paddingBlock: "80px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>
            {" "}
            The Number One Grammar Checker... <br /> and More
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Writeophonic cleans up your writing by finding grammar mistakes and
            typos, but it goes beyond a simple grammar check. Real-time feedback
            and advanced suggestions help you avoid common errors and improve
            your writing skills over time. Learn how Writeophonic can help:
          </p>
        </div>
        <div
          className="icons"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingInline: "86px",
            gap: "95px",
          }}
        >
          <div className="tag1">
            <h3 style={{ marginBlock: "15px" }}>
              {" "}
              Grammar, spelling, & punctuation
            </h3>
            <p style={{ fontSize: "20px" }}>
              Apply instant corrections to grammar errors, misspelled words, and
              punctuation mistakes for polished writing.
            </p>
            <img
              width="481px"
              height="205px"
              src="https://images.ctfassets.net/1e6ajr2k4140/27BmFMkOOnhV3kTv3rvFBS/6cd2968d49a1fa4265c91a3d06148434/Frame_1210.png?w=768&fm=webp"
              alt=""
            />
          </div>
          <div className="tag1">
            <h3 style={{ marginBlock: "15px" }}> Clarity and conciseness</h3>
            <p style={{ fontSize: "20px" }}>
              Rewrite full sentences to keep your message clear, concise, and
              easily understood.
            </p>
            <img
              width="481px"
              height="205px"
              src="https://images.ctfassets.net/1e6ajr2k4140/5gvwTW55njkvenxjgI9dj6/92dd199ef799b2ad1669c13690cede23/Frame_1211.png?w=768&fm=webp"
              alt=""
            />
          </div>
          <div className="tag1">
            <h3 style={{ marginBlock: "15px" }}> Tone suggestions</h3>
            <p style={{ fontSize: "20px" }}>
              Ensure your tone is well-received so you can build stronger
              relationships and drive projects forward.{" "}
            </p>
            <img
              width="481px"
              height="205px"
              src="https://images.ctfassets.net/1e6ajr2k4140/6d4qiFKIvrbWYsSAS5DyCQ/6f7138b123899259b2943c01821352d3/Frame_1212__1_.png?w=768&fm=webp"
              alt=""
            />
          </div>
          <div className="tag1">
            <h3 style={{ marginBlock: "15px" }}> Plagiarism and Citations</h3>
            <p style={{ fontSize: "20px" }}>
              Avoid plagiarism and properly cite sources with tools for your
              research and school papers.
            </p>
            <img
              width="481px"
              height="205px"
              src="https://images.ctfassets.net/1e6ajr2k4140/35inQTSB9nFJUKzAAyoBa4/cced13c601e5c26d7f6f1e3dea114cf5/Frame_1213.png?w=768&fm=webp"
              alt=""
            />
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
          <h1 style={{ fontSize: "42px" }}> The Basics Behind Good Grammar </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Wondering why Writeophonic made suggestions to that word or sentence?
            Check out these articles from our extensive resource library to
            learn more about the whats, whys, and hows of English grammar.
          </p>
        </div>
        <div style={{ padding: "55px" }}>
          <div className="useCase" style={{}}>
            <div style={{ width: "303px" }} className="uC">
              <img
                width="303px"
                height="162px"
                src="https://images.ctfassets.net/1e6ajr2k4140/3KFEUiUcUTGaKkWkQPwXM7/f98aaefde8c3575fe32d8dce0d02f31a/blog1-readability.png?w=768&fm=webp"
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
            <div style={{ width: "303px" }} className="uC">
              <img
                width="303px"
                height="162px"
                src="https://images.ctfassets.net/1e6ajr2k4140/7FDNNECEIItCAWUaYBj8c2/30302c368ab0b3e25335768b61199f3b/blog1-readability__1_.png?w=768&fm=webp"
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
            <div style={{ width: "303px" }} className="uC">
              <img
                width="303px"
                height="162px"
                src="https://images.ctfassets.net/1e6ajr2k4140/71h5vvp6OK7an5Wt9HPGwC/80735ff9185f1c1bab9802162488954e/blog1-readability__2_.png?w=768&fm=webp"
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
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}></div>
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
            Writing Support in All the Right Places{" "}
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Write confidently almost anywhere you type. Writeophonic works on
            500,000+ websites and applications on your Windows or Mac computer,
            iOS and Android mobile devices, word processors and email clients,
            and more. Use it where you're writing, or add your text to The
            Writeophonic Editor.
          </p>
        </div>
        <div className="icons">
          <div className="tag">
            <img
              width="226px"
              height="47px"
              src="https://images.ctfassets.net/1e6ajr2k4140/4kBfikqvxnJjHQywEKbXQz/00dbb0b7f4d486bf904cb49c6de2a1ed/Frame_390__7_.png?w=768&fm=webp"
              alt=""
            />
            <h4> Mac & Windows</h4>
            <p>
              Write confidently across your favorite desktop apps and websites.
            </p>
            <a href="/"> Learn More</a>
          </div>
          <div className="tag">
            <img
              width="226px"
              height="47px"
              src="https://images.ctfassets.net/1e6ajr2k4140/OcB7zRWXu2nzrkS8urP2n/263ee1e164bb658dd6d63504df19ab9b/Frame_390__8_.png?w=768&fm=webp"
              alt=""
            />
            <h4>Browser Extension</h4>
            <p>Get advanced writing support in Google Docs and other sites.</p>
            <a href="/"> Learn More</a>
          </div>

          <div className="tag">
            <img
              width="226px"
              height="47px"
              src="https://images.ctfassets.net/1e6ajr2k4140/72xTjF6TKYDrI9kllajZMB/dd99f680f6b5f025e743925ae1c53e3c/Frame_390__9_.png?w=768&fm=webp"
              alt=""
            />
            <h4> Mobile</h4>
            <p>Communicate confidently on the go with Writeophonic Keyboard.</p>
            <a href="/"> Learn More</a>
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
        <div
          className="icons"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingInline: "106px",
            gap: "45px",
          }}
        >
          <div className="tag1">
            <p style={{ fontSize: "12px", color: "grey" }}>FOR INDIVIDUALS</p>
            <h3 style={{ marginBlock: "10px" }}> Free</h3>
            <p style={{ fontSize: "20px" }}>
              Basic writing suggestions and tone detection
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
                width: "224px",
                marginBlock: "15px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's
              free
            </button>
            <div>
              <ul class="rich-text_list__3rEha rich-text_ulList__yoGHC">
                <li>
                  <b>Grammar</b>
                  <br />
                </li>
                <li>
                  Spelling
                  <br />
                </li>
                <li>
                  Punctuation
                  <br />
                </li>
                <li>
                  Conciseness
                  <br />
                </li>
                <li>
                  Tone Detection
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div className="tag1">
            <p style={{ fontSize: "12px", color: "grey" }}>FOR INDIVIDUALS</p>
            <h3 style={{ marginBlock: "10px" }}> Premium</h3>
            <p style={{ fontSize: "20px" }}>
              Clarity, vocabulary, and tone improvements
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
                width: "224px",
                marginBlock: "15px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's
              free
            </button>
            <div>
              <ul class="rich-text_list__3rEha rich-text_ulList__yoGHC">
                <li>
                  <b>Everything in Free</b>
                  <br />
                </li>
                <li>
                  Full-sentence rewrites
                  <br />
                </li>
                <li>
                  Word choice
                  <br />
                </li>
                <li>
                  Tone suggestions
                  <br />
                </li>
                <li>
                  Citations
                  <br />
                </li>
              </ul>
            </div>
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
                “My biggest piece of advice for anyone in college is to download
                Writeophonic. Writeophonic catches mistakes you might miss and helps
                with communicating clearly. Game changer!”
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
                    Jessica Wythe
                  </h3>
                  <div
                    style={{ color: "#6D758D" }}
                    className="_1_z68-large _2sETg-compact"
                  >
                    PhD Candidate and Writeophonic
                    <br />
                    User Since Undergrad
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="hero">
            <div className="left1">
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                “The service goes beyond the basic spell check and grammar check
                built into the word processor, as Writeophonic can identify
                correctly spelled words that are used in the wrong context.”
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
                    Bill Winterberg
                  </h3>
                  <div
                    style={{ color: "#6D758D" }}
                    className="_1_z68-large _2sETg-compact"
                  >
                    Journalist, Atlanta
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
            padding: "165px",
            paddingInline: "320px",
            marginTop: "140px",
            background: "#f9faff",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>Make Great Writing Simple</h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Join over 30 million people who use Writeophonic every day to make
            their writing shine.
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
      </div>

      <Footer />
    </div>
  );
};

export default Grammar;
