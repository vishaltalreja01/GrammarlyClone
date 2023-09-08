import React from "react";
import "./About.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div
        className="hero"
        style={{
          padding: "155px",
          paddingInline: "105px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="left1_" style={{ padding: "25px" }}>
          <p style={{ fontSize: "12px", lineHeight: "32px" }}>OUR MISSION</p>
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "34px",
              letterSpacing: "-.005em",
              lineHeight: "42px",
              marginBlock: "20px",
            }}
          >
            To improve lives by improving communication
          </h1>
        </div>
        <div className="right">
          <iframe
            style={{
              width: "470px",
              height: "250px",
              left: "0px",
              top: "0px",
              borderRadius: "10px",
            }}
            src="https://www.youtube.com/embed/iMLq9g_e2no"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="hero">
        <div className="right">
          <img
            width={"470px"}
            height={"422px"}
            src="https://images.ctfassets.net/1e6ajr2k4140/1VoDFB7GrelvL7tFXac3B6/f89fd881f78c4b4c63aa3c923e665e9e/Frame_1167.png?w=1080&fm=webp"
            alt=""
          />
        </div>
        <div
          className="left1_"
          style={{ padding: "25px", paddingInline: "175px" }}
        >
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "32px",
              letterSpacing: "-.005em",
              lineHeight: "42px",
              marginBlock: "20px",
            }}
          >
            Communicate with confidence
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "32px" }}>
            At Writeophonic, we strive to help people achieve more through
            effective communication, whenever and wherever they write in
            English. Every day, more than 30 million people and 50,000 teams
            around the world rely on WriteophonicGO and our real-time writing
            suggestions to create and strengthen their written communication.
            Writeophonic’s AI-enabled communication assistance augments your skills
            at every step, helping you write more effectively, efficiently, and
            confidently.
          </p>
        </div>
      </div>
      <div className="hero" style={{ display: "flex", alignItems: "center" }}>
        <div
          className="left1_"
          style={{ padding: "25px", paddingInline: "175px" }}
        >
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "32px",
              letterSpacing: "-.005em",
              lineHeight: "42px",
              marginBlock: "20px",
            }}
          >
            Our cutting-edge technology pushes forward what’s possible in AI
            communication assistance
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "32px" }}>
            Using a variety of innovative approaches—including generative AI,
            natural language processing, advanced machine learning, and deep
            learning—we consistently break new ground to deliver unrivaled
            assistance in our product offerings. We’re also committed to ethical
            innovation, with a deliberate approach to mitigating bias and
            supporting inclusive language. That’s why we were recognized by TIME
            as one of the 100 most influential companies and by Fast Company as
            one of the world’s most innovative AI companies. It’s also why we
            rank among industry leaders on lists such as the Forbes Cloud 100
            and The Software Report’s top 100 software companies.
            <br />
            <br />
            Read more about Writeophonic's engineering and research culture
          </p>
        </div>
        <div className="right">
          <img
            width={"470px"}
            height={"422px"}
            src="https://images.ctfassets.net/1e6ajr2k4140/2dSPjIWm22TylPZyswX3Oz/98affb5b76caebacd6fa7f4256d7d822/Frame_1167__1_.png?w=1080&fm=webp"
            alt=""
          />
        </div>
      </div>
      <div className="hero" style={{ display: "flex", alignItems: "center" }}>
        <div className="right">
          <img
            width={"470px"}
            height={"422px"}
            src="https://images.ctfassets.net/1e6ajr2k4140/7Dxym97Azl8QSqMJZ9Xs7s/2870ed34f769714e902fd2c34cae684f/img-section_1.png?w=1080&fm=webp"
            alt=""
          />
        </div>
        <div
          className="left1_"
          style={{ padding: "25px", paddingInline: "175px" }}
        >
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "32px",
              letterSpacing: "-.005em",
              lineHeight: "42px",
              marginBlock: "20px",
            }}
          >
            Safeguarding our users’ data is at the heart of our product and our
            organization
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "32px" }}>
            Our user-first security and privacy principles drive everything we
            do and provide transparency on how we earn and build trust with our
            users. We make money from selling subscriptions—not by selling or
            renting user data. You own what you write. And because keeping
            users’ data secure and private is our top priority, our safeguards
            include data encryption, a secure cloud architecture, and continuous
            monitoring of our company-wide systems. Writeophonic’s security
            controls are validated by enterprise-grade compliances and
            certifications from external auditors, and we comply with privacy
            regulations and frameworks. Writeophonic is committed to securing and
            protecting the information of everyone using our product—whether
            you’re an individual, small organization, large enterprise, or
            developer.
          </p>
        </div>
      </div>
      <div
        style={{
          background: "#3659b5",
          color: "white",
          padding: "105px",
        }}
      >
        <div
          className="hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "45px",
          }}
        >
          <div className="right">
            <img
              width={"470px"}
              height={"422px"}
              src="https://images.ctfassets.net/1e6ajr2k4140/3hP0X2IwaHtxZkN3KwQ6ZP/a5bf79d8d96779e128e383c3e5f05120/team-shot.png?w=1080&fm=webp"
              alt=""
            />
          </div>
          <div className="left1_" style={{ padding: "25px" }}>
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "32px",
                letterSpacing: "-.005em",
                lineHeight: "42px",
                marginBlock: "20px",
              }}
            >
              Our values inform everything we do
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "32px" }}>
              At Writeophonic, it all starts with being EAGER: Ethical, Adaptable,
              Gritty, Empathetic, and Remarkable. We are deliberate about
              applying these values to big and small decisions, such as
              committing to an inclusive and learning-oriented approach for our
              team members, supporting our users with compassion and integrity,
              and thoughtfully creating a product that connects people.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "35px",
            paddingInline: "55px",
            paddingBottom: "55px",
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "32px",
                letterSpacing: "-.005em",
                lineHeight: "42px",
                marginBlock: "20px",
              }}
            >
              Join our journey
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "32px" }}>
              Join us on our ambitious journey to help people achieve their
              goals and better understand one another.
            </p>
          </div>
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
              marginTop: "85px",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Writeophonic Careers</span>
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "160px",
          marginBlock: "125px",
          color: "#1f243c",
        }}
      >
        <div style={{ paddingRight: "55px" }}>
          <h4>900+</h4>
          <p>team members</p>
        </div>
        <div style={{ paddingLeft: "15px", borderLeft: "1px solid grey" }}>
          <h4>50,000+</h4>
          <p>professional and enterprise teams</p>
        </div>
        <div style={{ paddingLeft: "15px", borderLeft: "1px solid grey" }}>
          <h4>30,000,000+</h4>
          <p>daily active users</p>
        </div>
      </div>
      <div
        className="para"
        style={{
          paddingInline: "206px",
          paddingRight: "550px",
          lineHeight: "25px",
          color: "#1f243c",
        }}
      >
        <h1 style={{ marginBottom: "45px", lineHeight: "35px" }}>
          Effective communication wherever you write
        </h1>
        <p>
          Our AI-enabled English communication assistance technology scales to
          work seamlessly across platforms and devices, including on more than
          500,000 applications and websites. For individuals, Writeophonic Free can
          improve and strengthen everyday writing, while a Premium account can
          help you step up your game at work, school, and wherever else you need
          to communicate well. <br />
          <br />
          Writeophonic Business is built for enterprises, organizations, and teams
          of all sizes to help them stay on-brand and drive results with
          consistent communication. Writeophonic Business offers all Premium
          suggestions and enterprise-level features to improve the quality and
          efficiency of internal and external communication. Writeophonic for
          Education supports students developing essential writing skills and
          reinforces proper revision habits. <br />
          <br />
          Through the Writeophonic for Developers Text Editor SDK, builders can
          incorporate our best-in-class communication support by adding a few
          lines of code to their applications. “Quality communication translates
          to improvements in engagement, retention, and other key metrics,” said
          Writeophonic Co-Founder Max Lytvyn. “And we’ve made it easier than ever
          for developers to enable improved outcomes for their end users.”{" "}
          <br />
          <br />
        </p>
      </div>
      <div
        style={{
          display: "flex",
          paddingInline: "195px",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
          <img
            width="259px"
            height="495px"
            src="https://images.ctfassets.net/1e6ajr2k4140/49uwjnFBiFYkrGLhY8L88z/da0b56f28fc981929083f12e7011abf5/Column_1.svg"
            alt=""
          />
          <img
            width="259px"
            height="495px"
            src="https://images.ctfassets.net/1e6ajr2k4140/AiC5cwxujnJ68QfvdLLhs/64388e96741217aa595520196a80f3f7/Column_2.svg"
            alt=""
          />
          <img
            width="259px"
            height="495px"
            src="https://images.ctfassets.net/1e6ajr2k4140/4Rnk0atoc9TVqbcF9bsJ43/6ef08bbf1b83c3abfb0f3c1e64c77891/Column_3.svg"
            alt=""
          />
          <img
            width="259px"
            height="495px"
            src="https://images.ctfassets.net/1e6ajr2k4140/kw9tzCwDrVDkSWlcmeL6G/be4f545faaae2a68a91aa75bb3c88075/Column_1__1_.svg"
            alt=""
          />
          <img
            width="259px"
            height="495px"
            src="https://images.ctfassets.net/1e6ajr2k4140/5Rh3Pi9xYwvaJZSB0CMaW2/4d0c2d1dec0fc34b17357a2cec3997d6/Column_2__1_.svg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div
          className="para"
          style={{
            paddingInline: "206px",
            paddingRight: "550px",
            lineHeight: "25px",
            color: "#1f243c",
          }}
        >
          <h1 style={{ marginBottom: "45px", lineHeight: "35px" }}>
            We’ve climbed a long way — with much farther to the summit
          </h1>
          <p>
            Max Lytvyn, Alex Shevchenko, and Dmytro Lider founded Writeophonic in
            2009 with the goal of helping people communicate more effectively.
            Focusing first on supporting students’ grammar and spelling through
            a subscription-based product, they soon saw the potential of how
            Writeophonic could help in all circumstances—including professional
            writing and everyday correspondence. Since then, Writeophonic has grown
            the capabilities of our writing assistance to go way beyond grammar
            and spelling to analyze complex aspects of language and
            communication and generate high-quality, contextually relevant text.
            <br />
          </p>
        </div>
        <img
          width="740px"
          height="424px"
          src="https://images.ctfassets.net/1e6ajr2k4140/5OTLACD8yy62bO0Xg9Ocef/0a861faecf63338a7fcc154614305ed4/Frame_1185.png?w=1280&fm=webp"
          alt=""
          style={{paddingLeft:"206px",marginBlock:"35px"}}
        />
        <div
          className="para"
          style={{
            paddingInline: "206px",
            paddingRight: "550px",
            lineHeight: "25px",
            color: "#1f243c",
          }}
        >
          <p>
            Today Writeophonic offers an intuitive, real-time interface that’s
            available to anyone who types through Writeophonic for Windows and Mac,
            our browser extensions, mobile applications, and web editor.
            Writeophonic has always been designed to solve real user problems,
            bringing the latest advancements in AI and machine learning to
            augment our users’ skills. A free version of our assistant,
            introduced in 2015, ensures that anyone who needs to communicate in
            English has access to essential writing support. For organizations
            of all sizes, we rolled out our enterprise product to help teams
            accelerate business results through better communication. Our growth
            and further investment in cutting-edge language research are helped
            along by over $400 million in funding from Baillie Gifford, funds
            and accounts managed by BlackRock, General Catalyst, IVP, and
            others.
            <br />
          </p>
        </div>
        <img
          width="740px"
          height="444px"
          src="https://images.ctfassets.net/1e6ajr2k4140/6s523PVEu31rgD9cZVoU2E/1008ddddea2a5722117e5be3df0b2f82/Updated_About_Us.svg"
          alt=""
          style={{paddingLeft:"206px",marginBlock:"10px"}}
        />
        <div
          className="para"
          style={{
            paddingInline: "206px",
            paddingRight: "550px",
            lineHeight: "25px",
            color: "#1f243c",
          }}
        >
          <p>
            Our journey doesn’t end here—we’re aiming for new heights as we
            continue to build a comprehensive platform to help people and
            organizations accelerate results. We’re excited about responsibly
            applying a variety of AI and machine learning technologies—backed by
            a team of world-class linguists and researchers—to help our
            customers solve real problems, unblock information siloes, elevate
            team productivity, and create content with increased speed,
            relevancy, and comprehension in all the places they’re working
            digitally.
            <br />
          </p>
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
        <h1 style={{ fontSize: "42px" }}>Our global team</h1>
        <p style={{ marginTop: "35px", paddingInline: "105px" }}>
          Learn more about Writeophonic’s extraordinary values-driven,
          collaborative culture.
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
            width: "284px",
            marginTop: "85px",
          }}
        >
          <span style={{ fontWeight: "bolder" }}>
            Learn about careers at Writeophonic{" "}
          </span>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default About;
