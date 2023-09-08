import React from "react";
import "./Success.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Success = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="hero" style={{padding:"55px"}}>
          <div className="lefti">
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "36px",
                letterSpacing: "-.005em",
                lineHeight: "52px",
              }}
            >
              The State of Business Communication: New Threats and Opportunities
            </h1>
            <p style={{ fontSize: "18px", lineHeight: "32px" }}>
              February 21, 2023
            </p>
            
          </div>
          <div className="right">
            <img
              width="700px"
              height="400px"
              src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/02/Blog-Header-1%E2%80%93-1400x800.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="useCase linkBlog">
          <div style={{ width: "303px" }}>
            <img
              width="303px"
              height="158px"
              src="https://images.ctfassets.net/1e6ajr2k4140/3HXff798wCuiDIf8YsIwGB/b46a1e47e6b0796b9d605f0045a132ad/ANewGenerationBlog__1_.png?w=768&fm=webp"
              alt=""
            />

            <a
              href=""
              style={{
                fontSize: "16px",
              }}
            >
              Writeophonic Gets Generative AI Upgrade for Office Use
            </a>
          </div>
          <div style={{ width: "303px" }}>
            <img
              width="303px"
              height="158px"
              src="https://images.ctfassets.net/1e6ajr2k4140/5bVl2dbxXJq2wbtEOuNpH3/93e7313fd2e515794d5f32250443dc9e/fremae1__6_.png?w=768&fm=webp"
              alt=""
            />

            <a
              href=""
              style={{
                fontSize: "16px",
              }}
            >
              Writeophonic’s New CEO On Why ChatGPT Won’t Kill His Business
            </a>
          </div>
          <div style={{ width: "303px" }}>
            <img
              width="303px"
              height="158px"
              src="https://images.ctfassets.net/1e6ajr2k4140/65ohyWdgPYr5AmYeWhZj08/d8f2d50afba4b9e97dc0345aa2926d90/fremae1.jpg?w=768&fm=webp"
              alt=""
            />

            <a
              href=""
              style={{
                fontSize: "16px",
              }}
            >
              Writeophonic Wants to Expand Its AI From the Classroom to the Office
            </a>
          </div>

          <div style={{ width: "303px" }}>
            <img
              width="303px"
              height="158px"
              src="https://images.ctfassets.net/1e6ajr2k4140/5Qpg9PtbyJBtVXH2itjwZE/2bb670d62d7754ab134bb1c731b53950/2_Unofficial-4-Day-Work-week.png?w=768&fm=webp"
              alt=""
            />

            <a
              href=""
              style={{
                fontSize: "16px",
              }}
            >
              Writeophonic Writes a New Corporate Playbook
            </a>
          </div>
          <div style={{ width: "303px" }}>
            <img
              width="303px"
              height="158px"
              src="https://images.ctfassets.net/1e6ajr2k4140/3GppJKeaS70UFAUB4woaa9/d65419fc3e5b764e9e8dcb4fcf46279a/1_Ukraine_Today.png?w=768&fm=webp"
              alt=""
            />

            <a
              href=""
              style={{
                fontSize: "16px",
              }}
            >
              Yes, You Can Train Yourself to Be a Positive Person
            </a>
          </div>
          <div style={{ width: "303px" }}>
            <img
              width="303px"
              height="158px"
              src="https://images.ctfassets.net/1e6ajr2k4140/3tt5DyZyanayBQgPBg4Yb4/768952e861975cf6cb780c716b722123/blog-export__1_.png?w=768&fm=webp"
              alt=""
            />

            <a
              href=""
              style={{
                fontSize: "16px",
              }}
            >
              Writeophonic Raises $200M at a $13B Valuation to Make You an Even
              Better Writer Using AI
            </a>
          </div>
        </div>
        <div>
          <div
            className=""
            style={{
             
              background:
                "#3659b5",

              color: "white",
              textAlign: "center",
              padding: "15px",
              paddingInline: "365px",
              marginTop: "140px",
              paddingBlock: "150px",
            }}
          >
            <h1 style={{fontSize:'42px'}}>Writeophonic Business can
help your team</h1>

            <button
              style={{
                backgroundColor: "#11a683",
                color: "white",
                borderRadius: "6px",
                height: "48px",
                padding: "8px 32px",
                border: "0",
                cursor: "pointer",
                width: "284px",
                marginTop: "65px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>
                Let's Talk{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
