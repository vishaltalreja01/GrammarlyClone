import React from "react";
import "./GrammarGuide.css";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const GrammarGuide = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="hero">
          <div className="left anchor">
            <p style={{ fontSize: "12px" }}> GRAMMAR</p>
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "36px",
                letterSpacing: "-.005em",
                lineHeight: "52px",
              }}
            >
              Your Complete Guide to English Grammar
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                marginBlock: "35px",
              }}
            >
              Discover how English grammar works by diving into grammar rules
              and learning resources. Research basic grammar topics—including
              parts of speech, such as mechanics, syntax, and punctuation—to
              cultivate your grammar practice. Fix grammar mistakes and give
              your writing an extra polish.
            </p>
            <h3>Jump to Section: </h3>
            <a
              href="/"
              style={{
                color: "blue",
                textDecoration: "underline",
                fontSize: "18px",
              }}
            >
              What Is Grammar?
            </a>{" "}
            <br />
            <a
              href="/"
              style={{
                color: "blue",
                textDecoration: "underline",
                fontSize: "18px",
              }}
            >
              Learn Grammar Rules and Concepts The Parts of Speech
            </a>{" "}
            <br />
            <a
              href="/"
              style={{
                color: "blue",
                textDecoration: "underline",
                fontSize: "18px",
              }}
            >
              Learn Grammar Rules and Concepts Grammar and Spelling Checker
            </a>{" "}
            <br />
            <a
              href="/"
              style={{
                color: "blue",
                textDecoration: "underline",
                fontSize: "18px",
              }}
            >
              Frequently Asked Questions{" "}
            </a>{" "}
            <br />
          </div>
          <div className="right">
            <img
              width="524px"
              height="524px"
              src="https://images.ctfassets.net/1e6ajr2k4140/1FvjEQYv147CBdgE2pw1zL/857ace085e67cd1df49c7cc04b17f31f/Group_626009.png?w=1280&fm=webp"
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
              height="298px"
              src="https://images.ctfassets.net/1e6ajr2k4140/01frupatl4hnUJVtneHsV7/51c3513f9525877b73aaaca2dad66866/Frame_31612416__1_.png?w=1280&fm=webp"
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
              What Is Grammar?
            </h1>
            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              Grammar is defined as a system of language rules that allows you
              to combine individual words to make complex meanings. By applying
              grammar rules to your writing, you’ll make it stronger, clearer,
              and more effective.
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
            Learn Grammar Rules and Concepts
          </h1>
          <p>
            Keeping your grammar sharp is essential to first impressions and
            determines how effectively you write. Present polished, professional
            writing by improving your grammar with these basic tips.
          </p>
        </div>
        <div className="useCase" style={{}}>
          <div style={{ width: "524px" }} className="uC">
            <img
              width="523px"
              height="178px"
              src="https://images.ctfassets.net/1e6ajr2k4140/11IptFUuEJ33Sny9RFBDYs/9331b5942d4706b8176c11a1a2d82e66/blog1-readability__14_.png?w=768&fm=webp"
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
              src="https://images.ctfassets.net/1e6ajr2k4140/4VBeZoS6ktXPkCXuS9QCew/b2afefe0bdf9f8c0dbae047b03a31b68/blog1-readability__6_.png?w=768&fm=webp"
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
              height="177px"
              src="https://images.ctfassets.net/1e6ajr2k4140/3tfbctTnCuaTNyMovX1Dyf/b31036b847025e747efc8117bf1139a1/blog1-readability__7_.png?w=768&fm=webp"
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
              height="177px"
              src="https://images.ctfassets.net/1e6ajr2k4140/7oGoGFYZEgveYPF2cr9j18/b08608b49fe9df88c4bb8983d8ba0cb4/blog1-readability__8_.png?w=768&fm=webp"
              alt=""
            />
            <h3>Writing Basics</h3>
            <a href="">Grammar </a> <br />
            <a href="">Punctuation </a> <br />
            <a href=""> Spell Check</a> <br />
          </div>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBlock: "155px",
          }}
        >
          <img
            width="700px"
            height="1248px"
            src="https://images.ctfassets.net/1e6ajr2k4140/5b9Ocs1vzBnieKErcPG5ls/3fe3c80ac490a193d09415b7269b526a/partsofspeech2.jpg?w=1280&fm=webp"
            alt=""
          />
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
          <div
            className=""
            style={{
              // textAlign: "center",
              padding: "185px",
              paddingInline: "340px",
              marginTop: "70px",
              background:"#3659b5",
              color:"white",
              textAlign:"center"
            }}
          >
            <h1>Elevate Your Writing with Writeophonic
</h1>
            <p style={{ fontSize: "22px", paddingTop: "38px" }}>
            Writeophonic’s real-time writing feedback helps you learn and improve as you write.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GrammarGuide;
