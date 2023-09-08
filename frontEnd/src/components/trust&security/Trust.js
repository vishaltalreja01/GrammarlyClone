import React from "react";
import "./Trust.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { IoIosArrowForward } from "react-icons/io";

const Trust = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div
          style={{
            background: "#0a3d4d",
            padding: "55px",
            paddingBlock: "190px",
          }}
        >
          <div className="hero" style={{ color: "white", padding: "0" }}>
            <div className="left">
              <h1
                style={{
                  fontFamily: "Inter,sans-serif",
                  fontSize: "42px",
                  letterSpacing: "-.005em",
                  lineHeight: "52px",
                }}
              >
                Your Trust Is at the Heart of Everything We Do
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                The first step to helping you communicate confidently is earning
                your trust. That’s why we’ve always pledged to do right by our
                users with best-in-class security practices that keep data
                private and protected and a commitment to safe, responsible AI
                innovation. Explore the measures we take to safeguard your data
                and trust.
              </p>
            </div>
            <div className="right">
              <img
                width={"470px"}
                height={"484px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/5WX8SkcBuItTKqmJIRi31A/1acc825229bcd0ec58feb1cc1523991e/trusthub-womanshakinghand.png?w=1080&fm=webp"
                alt=""
              />
            </div>
          </div>
          <div className="icons" style={{ color: "white", margin: "0" }}>
            <div className="tag">
              <img
                src="https://images.ctfassets.net/1e6ajr2k4140/hjajanvUbAjY6ti0BWzfR/1412e7874a3c7c4d591127707249a2b1/Frame_31612574.png?w=768&fm=webp"
                alt=""
              />
              <h4 style={{ marginBlock: "18px" }}>
                We make sure your private information stays private
              </h4>
              <p style={{ marginBlock: "18px" }}>
                Discover the steps we take to safeguard data and keep your
                information protected.
              </p>
              <button
                style={{
                  backgroundColor: "white",
                  color: "#494393",
                  borderRadius: "6px",
                  height: "48px",
                  padding: "8px 32px",
                  border: "0",
                  cursor: "pointer",
                  width: "154px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Privacy</span>
              </button>
            </div>
            <div className="tag">
              <img
                src="https://images.ctfassets.net/1e6ajr2k4140/ivSFAU2JJmiM1J3U1sOWc/a3312de5af044589a4972525e8aef0cb/Frame_31612574__1_.png?w=768&fm=webp"
                alt=""
              />
              <h4 style={{ marginBlock: "18px" }}>
                Our security infrastructure is built upon industry standards
              </h4>
              <p style={{ marginBlock: "18px" }}>
                Learn how our in-house security team approaches information
                security and fortifies our product.
              </p>
              <button
                style={{
                  backgroundColor: "white",
                  color: "#494393",
                  borderRadius: "6px",
                  height: "48px",
                  padding: "8px 32px",
                  border: "0",
                  cursor: "pointer",
                  width: "154px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Security</span>
              </button>
            </div>
            <div className="tag">
              <img
                src="https://images.ctfassets.net/1e6ajr2k4140/1OPbdGugym7MYdNf6HbCUO/4bd2017ce33f47450a62760be2c5f1ba/Frame_31612575.png?w=768&fm=webp"
                alt=""
              />
              <h4 style={{ marginBlock: "18px" }}>
                {" "}
                Enterprise-grade attestations validate our security controls
              </h4>
              <p style={{ marginBlock: "18px" }}>
                See the attestations and certifications that ensure our users’
                data is safe and secure.
              </p>
              <button
                style={{
                  backgroundColor: "white",
                  color: "#494393",
                  borderRadius: "6px",
                  height: "48px",
                  padding: "8px 32px",
                  border: "0",
                  cursor: "pointer",
                  width: "154px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Compliance</span>
              </button>
            </div>
            <div className="tag">
              <img
                src="https://images.ctfassets.net/1e6ajr2k4140/hhl3ppUdMCYgX8fIBDAEn/70c6f8baa65da73d6f33b0b9f51ae95d/Frame_31612574.svg"
                alt=""
              />
              <h4 style={{ marginBlock: "18px" }}>
                {" "}
                We are committed to developing and deploying AI responsibly
              </h4>
              <p style={{ marginBlock: "18px" }}>
                Understand how we build Writeophonic's technology responsibly to
                benefit and enhance everyone.
              </p>
              <button
                style={{
                  backgroundColor: "white",
                  color: "#494393",
                  borderRadius: "6px",
                  height: "48px",
                  padding: "8px 32px",
                  border: "0",
                  cursor: "pointer",
                  width: "164px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Responsible AI</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="hero"
          style={{
            color: "#0a3d4d",
            background: "#f9faff",
            alignItems: "center",
            padding: "125px",
          }}
        >
          <div className="left1">
            <h2
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "32px",
                letterSpacing: "-.005em",
                lineHeight: "52px",
              }}
            >
              We don’t sell your data
            </h2>
            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              Writeophonic makes money when customers enjoy our best-in-class
              AI-enabled communication assistance and decide to purchase one of
              our paid product offerings. We have not, do not, and will not sell
              users’ data or rely on an ad-based revenue model. You own what you
              write.
            </p>
          </div>
          <div className="right">
            <img
              width={"470px"}
              height={"220px"}
              src="https://images.ctfassets.net/1e6ajr2k4140/10gcYyEjRcYPaoPddE87g9/0880f147faabcd72b7c865c411c68185/Frame_31612576.png?w=1080&fm=webp"
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
            marginBlock: "100px",
          }}
        >
          <h1 style={{ fontSize: "42px", color: "#1f243c" }}>
            Writeophonic is trusted by thousands of organizations around the world
          </h1>
        </div>
        <div>
          <div class="trusted">
            <img
              alt="Hacker One"
              loading="lazy"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              src="//images.ctfassets.net/1e6ajr2k4140/4TC0j9SdpZEm63Fd1UUGK8/6291b90f16a6c752b50a9e8d84ce121f/Brand_HackerOne__Type_Corporations__Mode_Light.svg"
            />
            <img
              alt="Atlassian"
              loading="lazy"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              src="//images.ctfassets.net/1e6ajr2k4140/2GndGpVF6xxEEW2yAta9Gq/ddecdb80ee3bb5a283c46d67439554e3/Brand_Atlassian__Type_Corporations__Mode_Light.svg"
            />
            <img
              alt="Databricks"
              loading="lazy"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              src="//images.ctfassets.net/1e6ajr2k4140/5LwcDLoEsYaVNMcM3WRWtP/e84b867df972cc04232b148bcfdfd255/Brand_Databricks__Type_Corporations__Mode_Light.svg"
            />
            <img
              alt="Expensify"
              loading="lazy"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              src="//images.ctfassets.net/1e6ajr2k4140/IIuV4Y07WxIddn16cp0mf/dcf413d67333ca3532e6ea7cec5d6d8b/Brand_Expensify__Type_Corporations__Mode_Light.svg"
            />
            <img
              alt="NYC Dept of Education"
              loading="lazy"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              src="//images.ctfassets.net/1e6ajr2k4140/6j0RtK8hmO2XWBuPiao0O0/e68be67a678a3b0e2d8b62c27c243211/Brand_NYC__Type_Academic_Institutions.svg"
            />
            <img
              alt="Expedia"
              loading="lazy"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              src="//images.ctfassets.net/1e6ajr2k4140/4FILfgxbnMqLKHFlkSWUHS/6ff5c2e45d201fbc6c1f04aa1fb4dee1/Brand_Expedia__Type_Corporations__Mode_Light.svg"
            />
            <img
              alt="Zapier"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/62AbvoreGZUSexVcSED4hF/f286161986040d6883eb872a7b92555f/Brand_zapier__Type_Corporations.png?w=512"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              width="193"
              height="109"
            />
            <img
              alt="State of California"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/5deRBmovFewKwhKfWjZYfQ/8b36c0f96811890e9de20650e02f6991/LogoClients.png?w=512"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              width="192"
              height="108"
            />
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginBlock: "140px",
          }}
        >
          <h1 style={{ fontSize: "42px", color: "#1f243c" }}>
            Meet the leadership team protecting our product, infrastructure, and
            operations
          </h1>
        </div>

        <div className="faculty">
          <div style={{ width: "303px", height: "706px" }}>
            <img
              width={"302px"}
              height={"201px"}
              src="https://images.ctfassets.net/1e6ajr2k4140/6q9QOxPsF1nQLtrU4BbBa9/29d1bd51f1786d2cbcc53b1cac00f39a/Frame_31612565__1_.png?w=768&fm=webp"
              alt=""
            />
            <h3 style={{ marginTop: "20px" }}>Suha Can</h3>
            <p>Chief Information Security Officer</p>
            <p style={{ marginTop: "50px" }}>
              “The safety of our customers’ data is at the center of our
              business, backed by Writeophonic’s robust, comprehensive security
              infrastructure. Protecting our millions of customers requires
              creativity and persistence in every corner of our organization; it
              is the pinnacle of responsibility for our world-class engineering
              team.”
            </p>
          </div>
          <div style={{ width: "303px", height: "706px" }}>
            <img
              width={"302px"}
              height={"201px"}
              src="https://images.ctfassets.net/1e6ajr2k4140/1YAc1420rsYumITW2sbfyK/0c380bbe900db0fd07447b8410492ea4/Frame_31612565.png?w=768&fm=webp"
              alt=""
            />
            <h3 style={{ marginTop: "20px" }}>Robin Moore</h3>
            <p>Head of Privacy</p>
            <p style={{ marginTop: "50px" }}>
              “Since our start, we’ve been building our business and our
              AI-enabled communication assistance technology with data privacy
              top of mind. We have the utmost regard for our customers’ rights
              and are transparent in how we work with their data.”
            </p>
          </div>
          <div style={{ width: "303px", height: "706px" }}>
            <img
              width={"302px"}
              height={"201px"}
              src="https://images.ctfassets.net/1e6ajr2k4140/1oJSzfMbPreLfi5ry9GwW5/eacad6c6a8dbd33f5a43a9b2edfe5d68/Frame_31612565__2_.png?w=768&fm=webp"
              alt=""
            />
            <h3 style={{ marginTop: "20px" }}>Alan Luk</h3>
            <p>Head of Governance, Risk, and Compliance</p>
            <p style={{ marginTop: "50px" }}>
              “Enterprise customers and individuals trust Writeophonic because we
              operate with the highest security and privacy standards across our
              product, infrastructure, and company policies. We remain vigilant
              in our commitment by maintaining a strong compliance portfolio
              year after year.”
            </p>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginBlock: "140px",
          }}
        >
          <h1 style={{ fontSize: "42px", color: "#1f243c" }}>
            Our security and privacy practices are backed by independent
            third-party attestations
          </h1>
        </div>
        <div class="logos">
          <div class="img">
            <img
              width={"133px"}
              height={"133px"}
              alt="AICPA Logo"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/4x6Ckh4yzJVqKJv4Zn9D6g/ffde3deb869044bfd046aaf1d049e784/AICPA.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width={"133px"}
              height={"133px"}
              alt="ISO27001 Logo"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/55z4UR2GBhwP62zQk88393/9acf868c0b59054495601aaf9484a52f/Cert_025.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width={"133px"}
              height={"133px"}
              alt="ISO27017 Logo"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/4vnuNMG4GlOG7L8NoUKaHI/a7a2eae700fa8e637804eb426e495c82/Certi_026.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width={"133px"}
              height={"133px"}
              alt="ISO27018 Logo"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/3zdmozrbjxpu3iJ9kQN5c0/988130d26b0d59f493b0df3bd2c474f8/Cert_027.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width={"133px"}
              height={"133px"}
              alt="Hippa Logo"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/2bdmF9hiJcdkZV41HzNkAk/3e456906d2d6c4a2692ffc92e7463628/Hippae_981.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width={"133px"}
              height={"133px"}
              alt="PCIDSS Logo"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/3wPmIN5kaoQNHGMyRNGT9u/7685f7702c4311498de569dd1eccfa22/PCI.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width={"133px"}
              height={"133px"}
              alt="Star Level One Logo"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/7mmSr1h7sQJRLJ6Pqsdv6H/65b663bd918403ab01d51217f1abf96d/Star_Level_One.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width={"133px"}
              height={"133px"}
              alt="GDPR Logo"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/7uEwSmI8SAzpTTHNVNB1Bi/60cb523019dd84fb7be87f205a4e7c4a/GDPR.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width={"133px"}
              height={"133px"}
              alt="California State Graphic"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/1xj91rYWwgiagjl7jEjIwn/7e0f6ecf87e27d288ca42711da383684/CA_Privacy_Act.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width={"133px"}
              height={"133px"}
              alt="Ferpa"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/6r0BWaHtMajOPzLeLMShHq/f4d538b955a38667e93ffa12fd9eb237/Frame_1__7_.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
              width={"133px"}
              height={"133px"}
              alt="NYS Education"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/11Qr2RJGDklgfrHJPPfciJ/e746d7774699b7a7cadc6bb5c3a8ddd4/Frame_2__2_.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />
          </div>

          <button
            style={{
              backgroundColor: "#FC832B",
              color: "white",
              borderRadius: "6px",
              height: "48px",
              padding: "8px 32px",
              border: "0",
              cursor: "pointer",
              width: "154px",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Learn More</span>
          </button>
        </div>
        <div className="hero" style={{ padding: "85px", marginBlock: "125px" }}>
          <div className="left">
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "36px",
                letterSpacing: "-.005em",
                lineHeight: "52px",
              }}
            >
              Hear from our team on how we put trust at the heart of everything
              we do
            </h1>
          </div>
          <div className="right">
            <iframe
              style={{
                width: "637px",
                height: "358px",
                left: "0px",
                top: "0px",
                borderRadius: "10px",
              }}
              src="https://www.youtube.com/embed/qXZWQj54mOo"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginBlock: "140px",
          }}
        >
          <h1 style={{ fontSize: "42px", color: "#1f243c" }}>
            Stay up to date on all the ways we keep Writeophonic and you safe
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
              color: "#1f243c",
            }}
          >
            We are dedicated to staying ahead of security issues, protecting
            users' privacy, and deploying responsible AI. Check out the latest
            news and updates on our blog.
          </p>
        </div>
        <div>
          <div
            style={{
              marginBlock: "125px",
              padding: "125px",
              display: "flex",
              flexWrap: "wrap",
              gap: "25px",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div style={{ width: "303px", height: "288px" }}>
              <img
                width="303px"
                height="177px"
                src="https://images.ctfassets.net/1e6ajr2k4140/3eaz1NdhShjIGrV6gemL21/6bf89288bc3992c071d5413809827a25/Frame_1166.png?w=768&fm=webp"
                alt=""
              />
              <p style={{ marginTop: "25px" }}>
                Generative or Not, the Future of AI Lies in Augmented
                Intelligence
              </p>
            </div>
            <div
              style={{ width: "303px", height: "288px", marginRight: "15px" }}
            >
              <img
                width="303px"
                height="177px"
                src="https://images.ctfassets.net/1e6ajr2k4140/6e8AcTsW7yL65XaFgZEIY5/af4655b68c9bc69930e775c5903f5e71/Frame_1165__3_.png?w=768&fm=webp"
                alt=""
              />
              <p style={{ marginTop: "25px" }}>
                Ethical Hackers Support Our Commitment to Security
              </p>
            </div>
            <div
              style={{ width: "303px", height: "288px", marginRight: "15px" }}
            >
              <img
                width="303px"
                height="177px"
                src="https://images.ctfassets.net/1e6ajr2k4140/4uItT4ZjblwGdKJ8b4Tiis/65c8a61d37f68ae5c4a8fe7babcfa23d/trust-blog.png?w=768&fm=webp"
                alt=""
              />
              <p style={{ marginTop: "25px" }}>
                Writeophonic Champions a User-First Approach to Protecting Data
                Security and Privacy
              </p>
            </div>
            <div
              style={{ width: "303px", height: "288px", marginRight: "15px" }}
            >
              <img
                width="303px"
                height="177px"
                src="https://images.ctfassets.net/1e6ajr2k4140/2OmlaIAHe7NeBcwHPuFLib/0db358d751adbbd599beac3f8ba3c34c/Frame_1165.png?w=768&fm=webp"
                alt=""
              />
              <p style={{ marginTop: "25px" }}>
                Lessons from Our Journey to Obtain Our SOC 2 Report and ISO
                Certifications
              </p>
            </div>
            <div
              style={{ width: "303px", height: "288px", marginRight: "15px" }}
            >
              <img
                width="303px"
                height="177px"
                src="https://images.ctfassets.net/1e6ajr2k4140/K5lockMGSGRKRCn1KEBo1/8b02e88fef98c451991216dfe9b50960/lock.png?w=768&fm=webp"
                alt=""
              />
              <p style={{ marginTop: "25px" }}>
                How Writeophonic Security Champions Help Establish a Company-Wide
                Security-First Culture
              </p>
            </div>
            <div
              style={{ width: "303px", height: "288px", marginRight: "15px" }}
            >
              <img
                width="303px"
                height="177px"
                src="https://images.ctfassets.net/1e6ajr2k4140/2d9c079DoT7QXVSLAvhDzz/f1ae5057618aac4d146e1bd9ee7b947c/security.png?w=768&fm=webp"
                alt=""
              />
              <p style={{ marginTop: "25px" }}>
                Security Keys at Writeophonic Part 1: Why We Moved from OTP to
                FIDO2 for Team Member Authentication
              </p>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginBlock: "140px",
          }}
        >
          <h1 style={{ fontSize: "42px", color: "#1f243c" }}>
            Industry associations and partnerships
          </h1>
        </div>
        <div  style={{
              marginBlock: "5px",
              padding: "55px",
              display: "flex",
              flexWrap: "wrap",
              gap: "25px",
              justifyContent: "center",
              alignContent: "center",
            }}>
          <img
            alt="OWASP"
            loading="lazy"
            src="//images.ctfassets.net/1e6ajr2k4140/4SKpk8XDFD2vLKq8EnhZQr/390d32bbcbed61ee5d010fc7c964d50b/Frame_982.png?w=1280"
            width="259"
            height="259"
          />

          <img
            alt="Cloud Service Alliance Logo"
            loading="lazy"
            src="//images.ctfassets.net/1e6ajr2k4140/5XD0iMtJBd8Qwhq6xomLAB/c5cdf788518aec5586c8c62a9c06c50f/Frame_983__9_.png?w=1280"
            width="259"
            height="259"
          />

          <img
            alt="HackerOne"
            loading="lazy"
            src="//images.ctfassets.net/1e6ajr2k4140/6dbHFQGKFAKEIhU2OznTwm/79d5f2f7417d0abf462d45310a020f8d/Frame_984__1_.png?w=1280"
            width="259"
            height="259"
          />
          <img
            alt="IAPP"
            loading="lazy"
            src="//images.ctfassets.net/1e6ajr2k4140/28jYRzKxIduH7ay9AYjA75/ce1dcfc11d7b0d0210921e3a857c417d/Frame_985.png?w=1280"
            width="259"
            height="259"
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
        <div
          className=""
          style={{
            background:"#0a3d4d",
            color:"white",
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginBlock: "140px",
            paddingBlock: "120px",
          }}
        >
          <h1 style={{ fontSize: "42px"}}>
          Write With More Peace of Mind
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
              
            }}
          >
           
Join over 30 million people and 50,000 professional teams who trust Writeophonic to help them communicate with confidence.
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
              marginTop:"85px",
              
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trust;
