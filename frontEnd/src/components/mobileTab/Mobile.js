import React from "react";
import "./Mobile.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Mobile = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="hero">
          <div className="right">
            <video
              class="video-player_video__3MvDG"
              autoplay=""
              muted=""
              playsinline=""
              width="470px"
              height="574px"
              loop
              controls
            >
              <source
                src="//videos.ctfassets.net/1e6ajr2k4140/O1ahgcQ2z7f6yzAt0hdfr/5d6be054fe20104f8d07c7fd899896f5/3943-Hero-v3.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos
            </video>
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
              Writeophonic for Mobile
            </h1>
            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              Confidently communicate on the go. Compatible with iOS and
              Android, the Writeophonic Keyboard integrates with your mobile apps
              and goes beyond autocorrect to help you improve tone and eliminate
              mistakes in every email, text, and post you write.
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
                width: "264px",
                marginBlock: "20px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>
                Sign up for Writeophonic{" "}
              </span>{" "}
              it's free
            </button>
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
          <h1>Better Writing at Your Fingertips</h1>
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
              Polish your writing
            </h1>
            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              Quickly catch and fix grammar, spelling, and punctuation mistakes
              with the Writeophonic Keyboard’s real-time suggestions.
            </p>
          </div>
          <div className="right">
            <img
              width={"470px"}
              height={"422px"}
              src="https://images.ctfassets.net/1e6ajr2k4140/5quTS4mgQBXWEjOISBaePb/6b0092b63cb7e856c4b7c4295b4079b7/3943-UI-Image-1__1_.png?w=1080&fm=webp"
              alt=""
            />
          </div>
        </div>
        <div className="hero">
          <div className="right">
            <img
              width={"470px"}
              height={"422px"}
              src="https://images.ctfassets.net/1e6ajr2k4140/5lHItaErBxwdOkeAIv29QA/06f682206d69719ad3b5e9a4538b294e/3943-UI-Image-2__1_.png?w=1080&fm=webp"
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
              Cultivate better relationships
            </h1>
            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              Strengthen relationships with tone analysis that helps ensure your
              words are well-received.
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
          <img
            src="https://images.ctfassets.net/1e6ajr2k4140/2WSo79MYBZADePlH9nRqaS/0bb3dcabd99e00b819e82e7ed750adeb/3943-Privacy-Icon-2x.png?w=1280&fm=webp"
            alt=""
          />
          <h1>Know Your Data Is Safe</h1>
          <p
            style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}
          >
            Writeophonic never sells your data; your words and information belong
            to you—and no one else. To learn more about how Writeophonic protects
            your privacy, visit our Trust Center.
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
              width: "264px",
              marginBlock: "20px",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Learn More </span>
          </button>
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
            <h1> Works in Your Favorite Apps</h1>
            <p style={{ fontSize: "22px", paddingTop: "38px" }}>
              The Writeophonic Keyboard works in your go-to apps, helping you
              polish your words wherever you write.
            </p>
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
            background: "#3659b5",
            color: "white",
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginTop: "140px",
            paddingBlock: "120px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>Get Writeophonic for Mobile Now</h1>

          <button
            style={{
              backgroundColor: "white",
              color: "#1f243c",
              borderRadius: "6px",
              height: "48px",
              padding: "8px 32px",
              border: "0",
              cursor: "pointer",
              width: "264px",
              marginTop: "85px",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Sign up for Writeophonic</span>{" "}
            it's free
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mobile;
