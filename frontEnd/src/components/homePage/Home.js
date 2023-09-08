import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
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
            Great Writing,
            <br />
            Simplified
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "32px" }}>
            Compose bold, clear, mistake-free writing with Writeophonic’s new
            AI-powered desktop Windows app.
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
          <video
            poster="https://static.grammarly.com/assets/files/d8cff8fe45ad5f6d65fc4cfc13fda5ce/hero_video_preview_img.png"
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
            }}
          >
            <source
              src="https://static.grammarly.com/assets/files/8a0dda99e354dd8552833ffaf47992a7/llama_video.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
          </video>
        </div>
      </div>
      <div
        className=""
        style={{
          textAlign: "center",
          padding: "25px",
          paddingInline: "115px",
          marginTop: "100px",
        }}
      >
        <h1>Works Where You Do</h1>
        <p style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}>
          Get suggestions from Writeophonic while you write in desktop applications
          and sites across the web—as you move between apps, social media,
          documents, messages, and emails.
        </p>
      </div>
      <div className="social">
        <div className="mails">
          <div
            style={{
              textAlign: "center",
              borderRight: "1px solid #c3c4c6",
              paddingRight: "55px",
            }}
          >
            <h4>EMAILS & MESSAGES</h4>
            <ul className="grid">
              <li>
                <img
                  src="https://static.grammarly.com/assets/files/821939d13c50dfbfdedd7c1979f06a2d/gmail.svg"
                  alt="gmail"
                />
                <p>GMAIL</p>
              </li>
              <li>
                <img
                  src="	https://static.grammarly.com/assets/files/38ea476fd190ff1a1114c35845bc4588/outlook.svg"
                  alt="outlook"
                />
                <p>OUTLOOK</p>
              </li>
              <li>
                <img
                  src="	https://static.grammarly.com/assets/files/cac7cef8125fdcb12a2ea8dc60410018/apple_mail.svg"
                  alt="apple mail"
                />
                <p>APPLE MAIL</p>
              </li>
              <li>
                <img
                  src="https://static.grammarly.com/assets/files/28bc09b74c3580aceaf33b1462e5fb53/slack.svg"
                  alt="slack"
                />
                <p>SLACK</p>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="docs">
          <div
            style={{
              textAlign: "center",
              borderRight: "1px solid #c3c4c6",
              paddingRight: "55px",
            }}
          >
            <h4>DOCUMENTS & PROJECTS</h4>
            <ul className="grid">
              <li>
                <img
                  src="https://static.grammarly.com/assets/files/a0fad42a40ad6582b8ec0b0ad3503c34/google_docs.svg"
                  alt="google docs"
                />
                <p>GOOGLE DOCS</p>
              </li>
              <li>
                <img
                  src="https://static.grammarly.com/assets/files/9708475a150341fdf7c4af4a19a9c5e2/microsoft_word.svg"
                  alt="word"
                />
                <p>WORD</p>
              </li>
              <li>
                <img
                  src="https://static.grammarly.com/assets/files/0352ceaa7ad5ecd806e3bda75a5edcb4/salesforce.svg"
                  alt="sales force"
                />
                <p>SALESFORCE</p>
              </li>
              <li>
                <img
                  src="https://static.grammarly.com/assets/files/607a1fdaa43e2514310416705e172efc/notion.svg"
                  alt="notion"
                />
                <p>NOTION</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="media" style={{}}>
          <div style={{ textAlign: "center" }}>
            <h4>SOCIAL MEDIA</h4>
            <ul className="grid">
              <li>
                <img
                  src="https://static.grammarly.com/assets/files/7fbc7390d6582ca4c2c4a2b815d11336/linkedin.svg"
                  alt="linkedIn"
                />
                <p>LinkedIn</p>
              </li>
              <li>
                <img
                  src="https://static.grammarly.com/assets/files/7ac6d3ad71cbe2ac0cdd0b823176dc3a/facebook.svg"
                  alt="facebook"
                />
                <p>Facebook</p>
              </li>
              <li>
                <img
                  src="https://static.grammarly.com/assets/files/5ef0b29b85a33fdfa7af1fcab4dbe181/twitter.svg"
                  alt="twitter"
                />
                <p>Twitter</p>
              </li>
              <li>
                <img
                  src="https://static.grammarly.com/assets/files/fc323aede50200e740d4b37d91b9a679/discord.svg"
                  alt="discord"
                />
                <p>Discord</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero" style={{ marginTop: "40px", paddingLeft: "120px" }}>
        <div className="right" style={{ marginRight: "50px" }}>
          <video
            poster="https://static.grammarly.com/assets/files/d8cff8fe45ad5f6d65fc4cfc13fda5ce/hero_video_preview_img.png"
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
            }}
          >
            <source
              src="https://static.grammarly.com/assets/files/8a0dda99e354dd8552833ffaf47992a7/llama_video.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
          </video>
        </div>
        <div className="left">
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "42px",
              letterSpacing: "-.005em",
              lineHeight: "52px",
            }}
          >
            Beyond Grammar
            <br />
            and Spelling
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "32px" }}>
            From grammar and spelling to style and tone, Writeophonic’s suggestions
            are comprehensive, helping you communicate effectively and as you
            intend.
          </p>
        </div>
      </div>
      <div className="gradient" style={{
            marginTop: "40px",
            background:
              "linear-gradient(0deg,#fff 3%,hsla(0,0%,100%,0)),linear-gradient(-257deg,#aaf2e1,#93edf5 50%,#dbebff)",
          }}>
        <div
          className="hero"
          
        >
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
              confident that I’m putting my best foot forward. Writeophonic is like
              a little superpower, especially when I need to be at 110%.”
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
          padding: "25px",
          paddingInline: "295px",
          marginBlock: "100px",
        }}
      >
        <h1>Brilliant Writing Awaits</h1>
        <p
          style={{ fontSize: "20px", lineHeight: "32px", marginBlock: "40px" }}
        >
          Get started for free and find out what you can accomplish with the
          power of Writeophonic at your fingertips.
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
            margin: "auto",
          }}
        >
          <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's free
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
