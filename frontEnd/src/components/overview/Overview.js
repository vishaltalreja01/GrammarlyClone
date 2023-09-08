import React from "react";
import "./Overview.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


const Overview = () => {
  return (
    <div>
      <Navbar />
      <div className="hero" style={{ background: "#3659b5", color: "white" }}>
        <div className="left">
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "42px",
              letterSpacing: "-.005em",
              lineHeight: "52px",
            }}
          >
            Communication Assistance Made Simple
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
          paddingInline: "325px",
          marginTop: "100px",
        }}
      >
        <h1> What is communication assistance?</h1>
        <p style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}>
          Writeophonic leads the industry in building AI-enabled products to help
          people communicate effectively every day. With our AI assistant,
          WriteophonicGO, and advanced writing suggestions, you can accelerate your
          writing process, champion your voice, build connections, and spur your
          academic or professional growth.
          <br />
          <br />
          Communication assistance with Writeophonic means a consistent experience
          of robust, real-time feedback on your writing across:
        </p>
      </div>
      <div className="icons">
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/5v4iZbV3idjxe0GNpu826H/c7735e6313e7fb381f95a4abb9f2e7a7/Icons.png?w=768&fm=webp"
            alt=""
          />
          <h4>More than 500,000 websites and apps</h4>
        </div>
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/6oqaq09tktJCa61U0rQTQf/5a525a68d91e0653356c71273b9f0266/Icons__7_.svg"
            alt=""
          />
          <h4>Popular browsers and operating systems</h4>
        </div>
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
            alt=""
          />
          <h4>Laptops, desktops, phones, and tablets</h4>
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
            src="https://images.ctfassets.net/1e6ajr2k4140/5ETMXDDEzlh9DSvoCFqy04/884c23d0246fd80c4f95ffec61d0addd/Compose.png?w=1080&fm=webp"
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
            Generative AI Writing Assistance at Your Fingertips
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "32px" }}>
            WriteophonicGO is the AI communication assistant that’s up to speed on
            your context and preferred writing style. Use WriteophonicGO to unblock
            your ideas and enable accelerated productivity for teams and
            individuals. Click the green lightbulb icon to compose, ideate,
            rewrite, and reply with an AI co-creator informed by your context
            and goals.
          </p>
        </div>
      </div>
      <div
        className=""
        style={{
          textAlign: "center",
          padding: "25px",
          paddingInline: "285px",
          marginTop: "100px",
        }}
      >
        <h1 style={{ fontSize: "42px", color: "#1f243c" }}>
          How are writing suggestions delivered?
        </h1>
        <p
          style={{
            fontSize: "22px",
            lineHeight: "32px",
            marginTop: "30px",
            color: "#1f243c",
          }}
        >
          Beyond WriteophonicGO's generative AI that helps you write using simple
          prompts, Writeophonic's communication assistance also works at the
          revision level, providing trusted feedback on correctness, style,
          tone, and more.
        </p>
      </div>
      <div className="multicol">
        <div className="featureLeft">
          <div className="feature">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/YbrUuFIquuDU8AhM58Dgd/ef2052b18da8a79d1c4703f66ed9bce0/Frame_31612588.svg"
              width={"508px"}
              height={"320px"}
              alt=""
            />
            <h3>Customization</h3>
            <p>
              Choose what feedback Writeophonic provides by selecting your writing
              style or preferred English dialect in your account settings.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/5sWqtJsV6yLFZF9v6RXBMp/33efb1908bf732bd383c3b6bdf70d98a/Frame_31612587__1_.svg"
              width={"508px"}
              height={"320px"}
              alt=""
            />
            <h3>Notification</h3>
            <p>
              The green Writeophonic button will turn red, or the Writeophonic widget
              will indicate the number of suggestions. Colored underlines in
              your text indicate where Writeophonic offers various types of
              suggestions.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/44GA6au1g11Bpt77TxfLeK/7974ca889a945c96e051fdeb591075b0/option_b.svg"
              width={"508px"}
              height={"320px"}
              alt=""
            />
            <h3>Decision</h3>
            <p>
              It’s up to you whether to accept or dismiss a suggestion. You can
              also mark the suggestion as relevant or not.
            </p>
          </div>
        </div>
        <div className="featureRight">
          <div className="feature">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/6VQxtP9I3r5GegQ6OlgAo3/b3fe2aee631a20c0be0e81ebd26c5c16/Frame_31612587.svg"
              width={"508px"}
              height={"320px"}
              alt=""
            />
            <h3>Opportunity</h3>
            <p>
              When you’re typing in the places you need communication
              assistance, Writeophonic looks for opportunities in real time for you
              to improve your writing with just one click.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/4tHt9SJq4TbypB407iNuMz/621cd97ef18c0e7d33f3494e0d160b22/Frame_31612587__2_.svg"
              width={"508px"}
              height={"320px"}
              alt=""
            />
            <h3>Explanation</h3>
            <p>
              Clicking into the suggestion will reveal more information. Visit
              our demo page to see more about interactions and underlines.
            </p>
          </div>
          <div className="feature">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/4huTeDxhtTieH8CRvlpmE6/fd7ca164156442867f5eae626d5e9b8d/Frame_31612587__3_.svg"
              width={"508px"}
              height={"320px"}
              alt=""
            />
            <h3>Learn</h3>
            <p>
              Your interactions with the Writeophonic product help our team
              discover which suggestions are useful, so our assistance can get
              smarter.
            </p>
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          textAlign: "center",
          padding: "15px",
          paddingInline: "295px",
          //   marginTop: "10px",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            lineHeight: "32px",
            marginTop: "20px",
            color: "#1f243c",
          }}
        >
          To see the categories of writing enhancements Writeophonic provides,
          visit our{" "}
          <a
            href=""
            style={{
              fontSize: "22px",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Plans
          </a>{" "}
          page.
        </p>
      </div>

      <div
        className=""
        style={{
          textAlign: "center",
          padding: "25px",
          paddingInline: "285px",
          marginTop: "140px",
        }}
      >
        <h1 style={{ fontSize: "42px", color: "#1f243c" }}>
          How does Writeophonic know what “good” writing is?
        </h1>
        <p
          style={{
            fontSize: "22px",
            lineHeight: "32px",
            marginTop: "30px",
            color: "#1f243c",
          }}
        >
          At the foundation of Writeophonic’s product experience is a combination
          of human expertise and innovative technology.
        </p>
      </div>

      <div
        className="gradient"
        style={{
          marginTop: "70px",
          paddingInline: "50px",
        }}
      >
        <div className="hero">
          <div className="left1_">
            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              “Writeophonic’s AI technology treats our writing as if it’s a
              translation. But instead of translating English to German,
              Writeophonic translates bad English to correct English. Writeophonic
              does this with the help of several linguists and a vast amount of
              literature it loads into its systems to train everything from deep
              neural nets—some of the most sophisticated AI technology—to
              simple, rule-based programs.”
            </p>
          </div>
          <div className="right1" style={{ lineHeight: "27px" }}>
            <h3 style={{ color: "#0E101A" }} className="_2HcMy-h5">
              Alex Kantrowitz
            </h3>
            <div
              style={{ color: "#6D758D" }}
              className="_1_z68-large _2sETg-compact"
            >
              Tech Journalist, “How Artificial
              <br />
              Intelligence Made Me A Better
              <br />
              Writer”
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="gradient"
          style={{
            marginTop: "70px",
            paddingInline: "30px",
          }}
        >
          <div className="hero">
            <div
              className="right1"
              style={{ lineHeight: "27px", marginTop: "35px" }}
            >
              <img
                width={"303px"}
                height={"188px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/sfgwWCLzXyYxY7l9e1xJP/a2367c2425f0836ac6e4b0a26d19cad8/Frame_31612548__32_.png?w=1080&fm=webp"
                alt=""
              />
            </div>
            <div className="left2_">
              <h1>Assistance across the whole writing process</h1>
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "32px",
                  marginTop: "15px",
                }}
              >
                Human thought and understanding don’t just start and end with
                words. The generative writing assistance we build spans the
                entire writing process from idea to revision in order to enhance
                understanding and productivity, and empower human connection and
                belonging.
              </p>
            </div>
          </div>
        </div>
        <div
          className="gradient"
          style={{
            marginTop: "20px",
            paddingInline: "30px",
          }}
        >
          <div className="hero">
            <div
              className="right1"
              style={{ lineHeight: "27px", marginTop: "5px" }}
            >
              <img
                width={"303px"}
                height={"188px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/5LM45MMbmXnNgyRvJYjtRW/bb57c86de6f8e4be7545ba0e20c925e9/Frame_31612549__5_.png?w=1080&fm=webp"
                alt=""
              />
            </div>
            <div className="left2_">
              <h1> Algorithms that learn writing from writing</h1>
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "32px",
                  marginTop: "15px",
                }}
              >
                Writeophonic’s team of computational linguists and deep learning
                engineers designs cutting-edge algorithms that learn the rules
                and hidden patterns of good writing by analyzing millions of
                sentences from research corpora.
              </p>
            </div>
          </div>
        </div>
        <div
          className="gradient"
          style={{
            marginTop: "20px",
            paddingInline: "30px",
          }}
        >
          <div className="hero">
            <div
              className="right1"
              style={{ lineHeight: "27px", marginTop: "5px" }}
            >
              <img
                width={"303px"}
                height={"188px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/4IUS67AgoJeqAhrZ3UhZxQ/7003f65ca3c6c36d4086258700065c97/Frame_31612549__6_.png?w=1080&fm=webp"
                alt=""
              />
            </div>
            <div className="left2_">
              <h1>Correct isn’t good enough</h1>
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "32px",
                  marginTop: "15px",
                }}
              >
                Just because something’s grammatically correct doesn’t mean it’s
                clear or compelling. Writeophonic’s suggestions help you fix
                overall delivery, poor word choice, tangled sentences, and even
                plagiarism. And we are adding new ways to improve your writing
                all the time!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          textAlign: "center",
          padding: "15px",
          paddingInline: "275px",
          marginTop: "10px",
        }}
      >
        <p
          style={{
            fontSize: "22px",
            lineHeight: "32px",
            marginTop: "20px",
            color: "#1f243c",
          }}
        >
          Have questions about Writeophonic that aren’t answered here? Dive into
          our{" "}
          <a
            href=""
            style={{
              fontSize: "22px",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Support knowledge base
          </a>{" "}
          for dozens of helpful articles.
        </p>
      </div>

      <div
        style={{ background: "#1f243c", color: "white", marginTop: "125px" }}
      >
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "35px",
            paddingInline: "375px",
            paddingBlock: "70px",
          }}
        >
          <h1>What does Writeophonic do with my data?</h1>
        </div>

        <div className="hero">
          <div className="left">
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "40px",
                letterSpacing: "-.005em",
                lineHeight: "42px",
              }}
            >
              Your information is secure, private, and under your control
            </h1>
            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              The way we make money is by selling subscriptions to our paid
              offerings. We don’t ever sell user data, and we take extreme care
              to ensure your data is isolated. Any writing that an individual or
              organization reviews with our writing assistance will never appear
              in another customer’s writing suggestions. You choose where
              Writeophonic analyzes your writing.
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
                width: "324px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>
                Visit our Trust Center for full details
              </span>
            </button>
          </div>
          <div className="right">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/2PsXz60j6dRmOkKGv6DMpY/c7b76e4de89a4cda0c803055cb84534b/Frame_31612583.png?w=1080&fm=webp"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          textAlign: "center",
          padding: "195px",
          paddingInline: "285px",
          marginTop: "0",
          background: "#3659b5",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "42px" }}>Great Writing, Made Simple</h1>
        <p
          style={{
            fontSize: "22px",
            lineHeight: "32px",
            marginTop: "30px",
          }}
        >
          Join over 30 million people who unlock the power of Writeophonic every
          day to write with care and confidence.
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
            width: "224px",
            marginTop:"50px"
          }}
        >
          <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span>
          it's free
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Overview;
