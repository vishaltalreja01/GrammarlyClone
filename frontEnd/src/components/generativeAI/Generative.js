import React, { useState } from "react";
import "./Generative.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { IoIosArrowForward } from "react-icons/io";

const Generative = () => {
  // const [rotate, setRotate] = useState(false);

  return (
    <>
      <Navbar />
      <div style={{}}>
        <div className="heroBG">
          <h1 style={{ fontSize: "42px" }}>
            Coming Soon:
            <br />A New Generation in Writing
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Introducing WriteophonicGO, the suite of generative AI capabilities
            from the leader in AI communication assistance. To start using
            WriteophonicGO when it becomes available, sign up or sign in to
            Writeophonic—or request early access for your team.
          </p>
          <div className="btns">
            <button
              style={{
                backgroundColor: "white",
                color: "#1f243c",
                outline: "2px solid white",
                borderRadius: "6px",
                height: "48px",
                padding: "8px 32px",
                border: "0",
                cursor: "pointer",
                width: "174px",
                marginTop: "70px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span>
            </button>
            <button
              style={{
                background: "transparent",
                outline: "2px solid white",
                color: "white",
                borderRadius: "6px",
                height: "48px",
                padding: "8px 32px",
                border: "0",
                cursor: "pointer",
                width: "244px",
                marginTop: "70px",
                marginLeft: "25px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>
                Get Early access for teams
              </span>
            </button>
          </div>
          <div className="mp4">
            <video
              // poster="https://static.grammarly.com/assets/files/d8cff8fe45ad5f6d65fc4cfc13fda5ce/hero_video_preview_img.png"
              class="_15QNr-video s4qu6-video"
              preload="auto"
              autoplay=""
              // loop=""
              muted=""
              playsinline=""
              controls
              loop
              style={{
                width: "500px",
                height: "400px",
                boxShadow:
                  "0 5px 5px 0 rgba(154,160,185,.05), 0 5px 30px 0 rgba(166,173,201,.22)",
                borderRadius: "10px",
                marginBlock: "65px",
              }}
            >
              <source
                src="https://static.grammarly.com/assets/files/8a0dda99e354dd8552833ffaf47992a7/llama_video.mp4"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              />
            </video>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/6fEX8aMyKRH0Iou6Lwnpv2/17497b292156eebe93bbbf295615474e/Frame_31613010.svg"
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
          paddingInline: "225px",
          marginTop: "100px",
        }}
      >
        <h1> A Faster, Smarter Writing Assistant</h1>
        <p style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}>
          Use WriteophonicGO to unblock your ideas and enable accelerated
          productivity for teams and individuals. WriteophonicGO takes into account
          your context, preferences, and goals to instantly generate
          high-quality drafts, outlines, replies, and revisions when you need
          them.
        </p>
      </div>
      <div className="icons">
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/2xG4t7ucyNEDhBrKDxeBg2/1dfd618f4d85c448c1030ada5c2980d0/Icons__13_.svg"
            alt=""
          />
          <h4>Compose</h4>
          <p>Write a prompt with a few words and receive a draft in seconds.</p>
        </div>
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/2Eqca69T0nuFcp0hpehweK/8ab22c6b535e235d0ab3179a63267f15/Icons__14_.svg"
            alt=""
          />
          <h4>Rewrite</h4>
          <p>
            Instantly generate new versions of your writing that you can
            customize for tone, clarity, or length.
          </p>
        </div>
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/6T71GodMbjUdS9PQCiRhl/d46289000632130af3c8efb50f9bfec3/Frame_31613011.svg"
            alt=""
          />
          <h4>Ideate</h4>
          <p>
            Get new perspectives and instant structure for brainstorming and
            outlines.
          </p>
        </div>
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/3hZBamLODF5VaNGiokCscP/a2f12a737125f91d344780010d5d0b68/Icons__15_.svg"
            alt=""
          />
          <h4>Reply</h4>
          <p>Respond quickly to emails using context-specific prompts.</p>
        </div>
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/72ErpDBPF8Iwxv2a0E64rv/cd7801cbe4d5fc813264e93047f10d31/Icons__16_.svg"
            alt=""
          />
          <h4>Personalize</h4>
          <p>
            Set up tailored style controls so your generated text is in your
            preferred voice.
          </p>
        </div>
      </div>
      <div
        className="hero"
        style={{
          marginTop: "40px",
          paddingLeft: "80px",
          background: "#1f243c",
          color: "white",
        }}
      >
        <div className="right" style={{ marginRight: "50px" }}>
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/1a5FfEmlJFz5PaPjJxONDj/2a1eef8d23e1ef5f202f1b20c65fa218/compose-ui__2_.png?w=1080&fm=webp"
            alt=""
          />
        </div>
        <div className="left">
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "40px",
              letterSpacing: "-.005em",
              lineHeight: "52px",
            }}
          >
            Personalized, High-Quality Generative AIGenerative AI Writing
            Assistance at Your Fingertips
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "32px" }}>
            The next evolution of communication assistance helps you at every
            step of the writing process, not just revision. WriteophonicGO expands
            on our mission with innovation that maintains Writeophonic’s high
            standards for quality, security, and user experience. Learn more
            about the product vision for WriteophonicGO and how it solves for real
            customer needs.
          </p>
        </div>
      </div>
      <div
        className=""
        style={{
          textAlign: "center",
          padding: "75px",
          paddingInline: "315px",
          marginTop: "70px",

          color: "#1f243c",
        }}
      >
        <h1 style={{ fontSize: "42px" }}> Our Principles of AI Development</h1>
        <p
          style={{
            fontSize: "22px",
            lineHeight: "32px",
            marginTop: "30px",
          }}
        >
          We are guided by the belief that technology should serve people and
          society, not the other way around. Learn about our pillars of
          responsible product development and the design principles we uphold to
          ensure our AI matches our values.
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
            width: "164px",
            marginTop: "70px",
          }}
        >
          <span style={{ fontWeight: "bolder" }}>Learn More</span>
        </button>
      </div>
      <div
        className=""
        style={{
          textAlign: "center",
          //   padding: "15px",
          paddingInline: "275px",
          //   marginTop: "10px",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            lineHeight: "32px",
            // marginTop: "20px",
            color: "#1f243c",
          }}
        >
          Visit our{" "}
          <a
            href=""
            style={{
              fontSize: "22px",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Trust Center
          </a>{" "}
          to explore the measures we take to protect your information, backed by
          globally recognized compliance standards.
        </p>
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
              Writeophonic for Education (higher education) accounts have access to
              the beta launch. WriteophonicGO is also available for people with a
              Writeophonic Free account in Australia, Canada, Germany, Japan, New
              Zealand, Poland, Ukraine, the United Kingdom, and the United
              States—with more countries added later. <br />
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
            WriteophonicGO is available on the following product offerings and platforms: Writeophonic for Windows,

             Writeophonic for Mac, Writeophonic for Chrome, Writeophonic for Edge, and the Writeophonic Editor. You’ll be able to use its generative writing capabilities in Gmail, Google Docs, Microsoft Word, LinkedIn, and Medium. WriteophonicGO will continue to be optimized for more applications and websites over time.<br/>
            </div>
          </details>
        </div>
        <div className="summary">
          <details class="container_GYj0UnA9">
            <summary class="button_GYj0UnA9">
              <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
              I’m an administrator for my team, organization, or institution. What kind of controls are available for WriteophonicGO?              </h3>
              <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                <IoIosArrowForward />
              </span>
            </summary>
            <div class="content_GYj0UnA9 C3_dkKeNHYB">
             Writeophonic takes transparency and customer control seriously. Administrators can decide whether or not they want their team or learning institution to take advantage of the capabilities offered by WriteophonicGO and generative AI. WriteophonicGO is off by default for Writeophonic Business and Writeophonic for Education customers. To make it available, go to your account and switch it on for your entire team, organization, or institution. WriteophonicGO will not be available to K-12 learning institutions at this time. <br />
            </div>
          </details>
        </div>
        <div className="summary">
          <details class="container_GYj0UnA9">
            <summary class="button_GYj0UnA9">
              <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
              I’m a developer. Will WriteophonicGO be available in the Writeophonic Text Editor SDK?
              </h3>
              <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                <IoIosArrowForward />
              </span>
            </summary>
            <div class="content_GYj0UnA9 C3_dkKeNHYB">
            We are evaluating bringing generative AI into the Text Editor SDK later this year. Please check  <br />
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
            Writeophonic's 
             enterprise-grade attestations and certifications
             and 
             user-first approach to security and privacy
             reflect our practices and policies to keep customers' data safe and secure. <br /> <br />
             Writeophonic’s product offerings only access text when you have the product activated <br />
             . Writeophonic never sells customer data and never provides information to third parties to help them advertise their products to you. Rather, Writeophonic makes money when people subscribe to our paid offerings.
            </div>
          </details>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Generative;
