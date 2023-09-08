import React from "react";
import "./Responsible.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import img from "../../images/image.svg";

const Responsible = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div
          className="hero"
          style={{ background: "#00231f", color: "white", padding: "85px" }}
        >
          <div className="left">
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "32px",
                letterSpacing: "-.005em",
                lineHeight: "36px",
              }}
            >
              Our Commitment to the Responsible Innovation and Development of AI
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "28px" }}>
              Leveraging technological advances like generative AI enables us to
              help people communicate more effectively in more ways. We do so
              with an ongoing commitment to privacy, security, and ethics.
              <br />
              <br />
              Jump to section: <br />
              <a
                href=""
                style={{
                  color: "white",
                  fontSize: "16px",
                  textDecoration: "underline",
                }}
              >
                Commitment to Responsible AI Our Principles in Practice
                Partnering With Our Community Additional Trust and Privacy
                Resources
              </a>
            </p>
          </div>
          <div className="right">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/2kyueiLSQDmvW3k7EDXbwk/66f6177f16993e8297a7e87468347e66/Framing_Gradient_5.png?w=1080&fm=webp"
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
          <h1>Commitment to Responsible AI</h1>
          <p
            style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}
          >
            At Writeophonic, we're guided by the belief that AI innovations should
            enhance people's skills while respecting personal autonomy and
            amplifying the intelligence, strengths, and impact of every user.
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
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
              alt=""
            />
            <h3 style={{ marginBlock: "15px" }}>
              {" "}
              Innovating to serve the needs of people
            </h3>
            <p style={{ fontSize: "20px" }}>
              We take a values-driven approach to building AI-enabled
              communication assistance technology. We leverage AI and other
              technologies to address actual challenges people face in
              communicating their ideas and being understood as intended.
            </p>
          </div>
          <div className="tag1">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
              alt=""
            />
            <h3 style={{ marginBlock: "15px" }}>
              {" "}
              Developing a product with intention
            </h3>
            <p style={{ fontSize: "20px" }}>
              We build products and models with checks and balances to
              prioritize privacy, safety, and fairness. We rigorously evaluate
              our work to anticipate its impact on our users and communities.{" "}
            </p>
          </div>
          <div className="tag1">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
              alt=""
            />
            <h3 style={{ marginBlock: "15px" }}>
              {" "}
              Safeguarding user data and trust
            </h3>
            <p style={{ fontSize: "20px" }}>
              People and organizations trust us with their words, and we earn
              their trust by putting data security and privacy at the core of
              our business and our product. With more than a decade developing
              best-in-class AI communication assistance, we will always go to
              great lengths to ensure user data is encrypted, private, and
              secure.{" "}
            </p>
          </div>
          <div className="tag1">
            <img
              src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
              alt=""
            />
            <h3 style={{ marginBlock: "15px" }}> Ensuring user autonomy</h3>
            <p style={{ fontSize: "20px" }}>
              We put users in control of their experience. AI is a tool that can
              augment communication, but it can’t do everything. People are the
              ultimate decision-makers and experts in their own relationships
              and areas of expertise. Our commitment is to help every user
              express themselves in the most effective way possible.{" "}
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
          <h1> Our Principles in Practice</h1>
        </div>
        <div className="icons">
          <div className="tag2">
            <h3>Promising we never sell user data</h3>
            <p style={{ fontSize: "20px", marginTop: "15px" }}>
              When you use Writeophonic’s products, you’re trusting us to handle
              your personal information with care. This means that we do not and
              will not sell your data. We make money by selling subscriptions to
              our services.
            </p>
          </div>
          <div className="tag2">
            <h3>Filtering content to reduce harm</h3>
            <p style={{ fontSize: "20px", marginTop: "15px" }}>
              Using a combination of technologies, we filter generative AI and
              natural language suggestions with the aim of preventing issues
              such as hate speech from arising. Our integrations and models help
              generate more effective text and reduce risks in input and output.
            </p>
          </div>

          <div className="tag2">
            <h3>Mitigating bias and fostering inclusion</h3>
            <p style={{ fontSize: "20px", marginTop: "15px" }}>
              We are committed to building models using quality data sets that
              undergo bias and fairness evaluations. We design and develop
              products with our team of analytical linguists, who apply research
              and expertise to minimize bias and apply user feedback.
            </p>
          </div>
          <div className="tag2">
            <h3> Practicing deliberate software development</h3>
            <p style={{ fontSize: "20px", marginTop: "15px" }}>
              Every new feature goes through a rigorous risk-assessment process,
              including a hands-on review by our linguists to identify potential
              risks. Following the assessment, feature teams are required to
              make updates.
            </p>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "325px",
            marginBlock: "100px",
          }}
        >
          <h1> Partnering With Our Community</h1>
          <p
            style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}
          >
            When you share with us generated content or suggestions that you
            believe to be offensive, you help make our product better for all
            users. Together, we’ll make generative AI technology safer and more
            inclusive.
          </p>
        </div>
        <div>
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
                Encountering harmful or inaccurate content
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
              
If you encounter content or suggestions that you believe to be incorrect or harmful, please report them by clicking the flag in the lower-right corner of the WriteophonicGO window and choosing your preferred option. Your input enables us to continually monitor and make improvements over time, ensuring our products promote inclusive, accurate communication.
              </p>
            </div>
            <div className="right">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"470px"}
                height={"300px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/60aD8VIqKAi9dECsSqIgY1/4502a08766c30aa6570a0b3c4f77a9f9/Frame_31613021.png?w=1080&fm=webp"
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
                Practical applications for the classroom
              </h1>
              <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                Students can improve their communication skills and career
                outcomes using AI-powered tools to help with brainstorming and
                ideation. Each institution or educator can help clarify the role
                of AI-enabled technology in their classrooms, and students
                should maintain their commitment to academic integrity.
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "#1f243c", padding: "55px" }}>
          <div
            className=""
            style={{
              textAlign: "center",
              padding: "25px",
              paddingInline: "325px",
              marginBlock: "50px",
              color: "white",
            }}
          >
            <h1> Additional Trust and Privacy Resources</h1>
          </div>
          <div className="hero">
            <div className="right">
              <img
                width={"470px"}
                height={"315px"}
                src="https://images.ctfassets.net/1e6ajr2k4140/6BctCop7R8Q1EcDIGFMrA5/f8727c0211b4f0cd567a7ca0f149362a/Frame_31612585.png?w=1080&fm=webp"
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
                  color: "white",
                }}
              >
                Trust Center
              </h1>
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "32px",
                  color: "white",
                  marginBlock: "20px",
                }}
              >
                Visit our Trust Center to explore the measures we take to
                protect your information, including globally recognized safety
                and privacy compliance standards.
              </p>
              <button
                style={{
                  background: "transparent",
                  color: "white",
                  outline: "1px solid white",
                  borderRadius: "6px",
                  height: "48px",
                  padding: "8px 32px",
                  border: "0",
                  cursor: "pointer",
                  width: "164px",
                }}
              >
                <span style={{ fontWeight: "bolder" }}>Learn More</span>
              </button>
            </div>
          </div>
          <div className=""  style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingInline: "36px",
            gap: "75px",
            marginBlock:"80px"
          }}>
            <div style={{ width: "303px" }}>
              <img
                width="303px"
                height="188px"
                src="https://images.ctfassets.net/1e6ajr2k4140/o0dMctKkFR1H9EQ8w2am0/efa57444d5ff6e57394d08a67312b8e7/Frame_31612548__22_.png?w=768&fm=webp"
                alt=""
              />
              <a
                href=""
                style={{
                  textDecoration: "underline",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Generative or Not, the Future of AI Lies in Augmented
                Intelligence
              </a>
            </div>
            <div style={{ width: "303px" }}>
              <img
                width="303px"
                height="188px"
                src="https://images.ctfassets.net/1e6ajr2k4140/7gLh7ZWS2ocaddCCv2t8pr/c342744d6956b16d46b0e03356136e53/Frame_31612548__21_.png?w=768&fm=webp"
                alt=""
              />
              <a
                href=""
                style={{
                  textDecoration: "underline",
                  fontSize: "20px",
                  color: "white",
                }}
              >
               
Earnings for Earrings: Mitigating Gender Bias in Autocorrect
              </a>
            </div>
            <div style={{ width: "303px" }}>
              <img
                width="303px"
                height="188px"
                src="https://images.ctfassets.net/1e6ajr2k4140/60aD8VIqKAi9dECsSqIgY1/4502a08766c30aa6570a0b3c4f77a9f9/Frame_31613021.png?w=1080&fm=webp"
                alt=""
              />
              <a
                href=""
                style={{
                  textDecoration: "underline",
                  fontSize: "20px",
                  color: "white",
                }}
              >
               Practical applications for the classroom
              </a>
            </div>
            <div style={{ width: "303px" }}>
              <img
                width="303px"
                height="188px"
                src="https://images.ctfassets.net/1e6ajr2k4140/2hefMo34hALLTQ4C9veC0t/7a5061131db11e000192053419572434/Frame_31612548__28_.png?w=768&fm=webp"
                alt=""
              />
              <a
                href=""
                style={{
                  textDecoration: "underline",
                  fontSize: "20px",
                  color: "white",
                }}
              >
               Writeophonic Champions a User-First Approach to Protecting Data Security and Privacy
              </a>
            </div>
            <div style={{ width: "303px" }}>
              <img
                width="303px"
                height="188px"
                src="https://images.ctfassets.net/1e6ajr2k4140/7JjE29BUTFVyJhQc1bq1OP/c03dbb0e352010d23c870bcb5e25d585/Frame_31612548__25_.png?w=768&fm=webp"
                alt=""
              />
              <a
                href=""
                style={{
                  textDecoration: "underline",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                How Writeophonic’s NLP Team Is Building the Future of Communication

              </a>
            </div>
            <div style={{ width: "303px" }}>
              <img
                width="303px"
                height="188px"
                src="https://images.ctfassets.net/1e6ajr2k4140/5FrUmc6HfD8HfmBWtnZn1c/f1681c1e19207eb7dbeae11c57e0148e/Frame_31612548__26_.png?w=768&fm=webp"
                alt=""
              />
              <a
                href=""
                style={{
                  textDecoration: "underline",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                
Innovating the Basics: Achieving Superior Precision and Recall in Grammatical Error Correction
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Responsible;
