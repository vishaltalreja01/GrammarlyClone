import React from "react";
import "./Overview1.css";
import { IoIosArrowForward } from "react-icons/io";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Overview1 = () => {
  return (
    <div>
    <Navbar/>
      <div className="hero" style={{ background: "#1f243c", color: "white" }}>
        <div className="left">
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "34px",
              letterSpacing: "-.005em",
              lineHeight: "52px",
            }}
          >
            Where Writeophonic Works
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "32px" }}>
            Improve your writing and communication across 500,000+ apps and
            websites—with just one Writeophonic account.
            <br />
            <br />
            Writeophonic is your constant companion in all the places you love to
            write, providing instant writing suggestions so you can communicate
            with confidence no matter the context.
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
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's
            free
          </button>
        </div>
        <div className="right">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/5MwOCnlMa7o18VOQ9QIGAD/8e6c735c5e76dee0e80fc0e3004d5ea1/hero_wheregrammarlyworks.png?w=1080&fm=webp"
            alt=""
            width="470px"
            height={"402px"}
          />
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
        <h1> Writing Support Across Your Desktop</h1>
        <p style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}>
          Writeophonic works where you write on your desktop computer, across
          websites and desktop applications. Get comprehensive writing support
          in email clients, word processors, browsers, apps, and more.
        </p>
      </div>
      <div className="icons">
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
            alt=""
          />
          <h4>Writeophonic for Mac and Windows</h4>
          <p>
            Write confidently on your favorite desktop apps and websites on Mac
            and Windows.
          </p>
        </div>
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
            alt=""
          />
          <h4>Writeophonic Browser Extension</h4>
          <p>
            Get advanced writing support in Google Docs and other sites on major
            web browsers.
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
      <div
        className=""
        style={{
          textAlign: "center",
          padding: "25px",
          paddingInline: "325px",
          marginTop: "100px",
        }}
      >
        <h1> Communication Support on Your Mobile Device</h1>
        <p style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}>
          Writeophonic Keyboard helps you communicate confidently on the go. Keep
          your writing mistake-free and ensure your wording conveys the
          appropriate tone for your reader.
        </p>
      </div>
      <div className="icons">
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
            alt=""
          />
          <h4>iOS</h4>
          <p>
            Quickly edit and sync documents across iPhone, iPad, and desktop in
            an all-in-one iOS app.
          </p>
        </div>
        <div className="tag">
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/5NdVZGvmBc4Kaky1NMqER7/3d6017db5ab8ae0a52045864bca4d3eb/icons-stay-in-control.svg"
            alt=""
          />
          <h4>Android</h4>
          <p>
            Easily switch to other language keyboards on Android devices without
            leaving the Writeophonic Keyboard.
          </p>
        </div>
      </div>
      <div
        className="socialIcons"
        style={{ padding: "55px", background: "#293589", color: "white" }}
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
          <p
            style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}
          >
            Get instant writing feedback when you use Writeophonic across your
            favorite apps, websites, browsers, and devices, including:
          </p>
        </div>
        <div className="socialIcon">
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
            confident that I’m putting my best foot forward. Writeophonic is like a
            little superpower, especially when I need to be at 110%.”
          </p>
        </div>
        <div className="right1" style={{}}>
          <figure class="_1tgaf-author">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/7mT8PC2rP7civUPnGGuV4C/6fd409eaa7515180d7843eeb4cfffa82/testimonial-thumbnail__2_.png"
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
              WriteophonicGO is available on the following product offerings and
              platforms: Writeophonic for Windows, Writeophonic for Mac, Writeophonic for
              Chrome, Writeophonic for Edge, and the Writeophonic Editor. You’ll be
              able to use its generative writing capabilities in Gmail, Google
              Docs, Microsoft Word, LinkedIn, and Medium. WriteophonicGO will
              continue to be optimized for more applications and websites over
              time.
              <br />
            </div>
          </details>
        </div>
        <div className="summary">
          <details class="container_GYj0UnA9">
            <summary class="button_GYj0UnA9">
              <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                I’m an administrator for my team, organization, or institution.
                What kind of controls are available for WriteophonicGO?{" "}
              </h3>
              <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                <IoIosArrowForward />
              </span>
            </summary>
            <div class="content_GYj0UnA9 C3_dkKeNHYB">
              Writeophonic takes transparency and customer control seriously.
              Administrators can decide whether or not they want their team or
              learning institution to take advantage of the capabilities offered
              by WriteophonicGO and generative AI. WriteophonicGO is off by default
              for Writeophonic Business and Writeophonic for Education customers. To
              make it available, go to your account and switch it on for your
              entire team, organization, or institution. WriteophonicGO will not be
              available to K-12 learning institutions at this time. <br />
            </div>
          </details>
        </div>
        <div className="summary">
          <details class="container_GYj0UnA9">
            <summary class="button_GYj0UnA9">
              <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                I’m a developer. Will WriteophonicGO be available in the Writeophonic
                Text Editor SDK?
              </h3>
              <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                <IoIosArrowForward />
              </span>
            </summary>
            <div class="content_GYj0UnA9 C3_dkKeNHYB">
              We are evaluating bringing generative AI into the Text Editor SDK
              later this year. Please check <br />
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
              user-first approach to security and privacy reflect our practices
              and policies to keep customers' data safe and secure. <br />{" "}
              <br />
              Writeophonic’s product offerings only access text when you have the
              product activated <br />. Writeophonic never sells customer data and
              never provides information to third parties to help them advertise
              their products to you. Rather, Writeophonic makes money when people
              subscribe to our paid offerings.
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
              WriteophonicGO is available on the following product offerings and
              platforms: Writeophonic for Windows, Writeophonic for Mac, Writeophonic for
              Chrome, Writeophonic for Edge, and the Writeophonic Editor. You’ll be
              able to use its generative writing capabilities in Gmail, Google
              Docs, Microsoft Word, LinkedIn, and Medium. WriteophonicGO will
              continue to be optimized for more applications and websites over
              time.
              <br />
            </div>
          </details>
        </div>
        <div className="summary">
          <details class="container_GYj0UnA9">
            <summary class="button_GYj0UnA9">
              <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                I’m an administrator for my team, organization, or institution.
                What kind of controls are available for WriteophonicGO?{" "}
              </h3>
              <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                <IoIosArrowForward />
              </span>
            </summary>
            <div class="content_GYj0UnA9 C3_dkKeNHYB">
              Writeophonic takes transparency and customer control seriously.
              Administrators can decide whether or not they want their team or
              learning institution to take advantage of the capabilities offered
              by WriteophonicGO and generative AI. WriteophonicGO is off by default
              for Writeophonic Business and Writeophonic for Education customers. To
              make it available, go to your account and switch it on for your
              entire team, organization, or institution. WriteophonicGO will not be
              available to K-12 learning institutions at this time. <br />
            </div>
          </details>
        </div>
        <div className="summary">
          <details class="container_GYj0UnA9">
            <summary class="button_GYj0UnA9">
              <h3 class="C2_dkKeNHYB normalWeight_dkKeNHYB">
                I’m a developer. Will WriteophonicGO be available in the Writeophonic
                Text Editor SDK?
              </h3>
              <span class="arrowContainer_GYj0UnA9" aria-hidden="true">
                <IoIosArrowForward />
              </span>
            </summary>
            <div class="content_GYj0UnA9 C3_dkKeNHYB">
              We are evaluating bringing generative AI into the Text Editor SDK
              later this year. Please check <br />
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
              user-first approach to security and privacy reflect our practices
              and policies to keep customers' data safe and secure. <br />{" "}
              <br />
              Writeophonic’s product offerings only access text when you have the
              product activated <br />. Writeophonic never sells customer data and
              never provides information to third parties to help them advertise
              their products to you. Rather, Writeophonic makes money when people
              subscribe to our paid offerings.
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
              user-first approach to security and privacy reflect our practices
              and policies to keep customers' data safe and secure. <br />{" "}
              <br />
              Writeophonic’s product offerings only access text when you have the
              product activated <br />. Writeophonic never sells customer data and
              never provides information to third parties to help them advertise
              their products to you. Rather, Writeophonic makes money when people
              subscribe to our paid offerings.
            </div>
          </details>
        </div>
      </div>
      <div
        className=""
        style={{
          background: "#1f243c",
          color: "white",
          textAlign: "center",
          padding: "25px",
          paddingInline: "295px",
          marginBlock: "140px",
          paddingBlock: "120px",
        }}
      >
        <h1 style={{ fontSize: "42px" }}>Write Your Best with Writeophonic</h1>
        <p
          style={{
            fontSize: "22px",
            lineHeight: "32px",
            marginTop: "30px",
          }}
        >
          
Join 30 million people who use Writeophonic across 500,000+ apps and websites to make their writing shine.

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
      <Footer/>
    </div>
  );
};

export default Overview1;
