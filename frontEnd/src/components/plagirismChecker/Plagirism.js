import React from "react";
import "./Plagirism.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Plagirism = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "55px",
            paddingInline: "280px",
            marginTop: "50px",
          }}
        >
          <h1 style={{ fontSize: "42px" }}>Plagiarism Checker by Writeophonic</h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
            Writeophonic’s plagiarism checker detects plagiarism in your text and
            checks for other writing issues.
          </p>
        </div>
        <div className="hero" style={{  }}>
          <div className="right rightCenter">
            <img
              src="https://static.grammarly.com/assets/files/2acaa8921033501ddf40ef9f117f8cfa/plagiarism-check.png"
              alt=""
              width="250px"
              height={"250px"}
            />
          </div>
          <div className="left" style={{paddingInline:"0"}}>
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "34px",
                letterSpacing: "-.005em",
                lineHeight: "52px",
                
                
              }}
            >
              Plagiarism Checking
            </h1>
            <p style={{ fontSize: "18px", lineHeight: "32px",color:"grey" }}>
           
Writeophonic’s plagiarism checker can detect plagiarism from billions of web pages as well as from ProQuest’s academic databases. Our free plagiarism check will tell you whether or not your text contains duplicate content. Our Premium plagiarism check highlights passages that require citations and gives you the resources you need to properly credit your sources.
            </p>
            <button
              style={{
                backgroundColor: "Transparent",
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
              <span style={{ fontWeight: "bolder" }}>Read More</span>
            </button>
          </div>
        </div>
        <div className="hero" style={{  }}>
          <div className="right rightCenter">
            <img
              src="https://static.grammarly.com/assets/files/ab3ea92e5916501c6f3b0be68f972bdc/writing-mistake.png"
              alt=""
              width="250px"
              height={"250px"}
            />
          </div>
          <div className="left" style={{paddingInline:"0"}}>
            <h1
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: "34px",
                letterSpacing: "-.005em",
                lineHeight: "52px",
              }}
            >
               Writing Enhancements
            </h1>
            <p style={{ fontSize: "18px", lineHeight: "32px", color:"grey" }}>
           
The plagiarism checker is part of a robust writing app that offers advanced feedback on writing mechanics like grammar and spelling as well as more complex stylistic issues like word choice, conciseness, tone, and more.
            </p>
            <button
              style={{
                backgroundColor: "Transparent",
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
              <span style={{ fontWeight: "bolder" }}>Read More</span>
            </button>
          </div>
        </div>
        <div className="hero" style={{ display: "flex", alignItems: "center" }}>
          <div
            className="left1_"
            style={{ padding: "25px", paddingInline: "80px" }}
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
               Why Use a Plagiarism Checker?
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "32px",color:"grey" }}>
           
You’re working on a paper and you’ve just written a line that seems kind of familiar. Did you read it somewhere while you were researching the topic? If you did, does that count as plagiarism? Now that you’re looking at it, there are a couple of other lines that you know you borrowed from somewhere. You didn’t bother with a citation at the time because you weren’t planning to keep them. But now they’re an important part of your paper. Is it still plagiarism if you’re using less than a paragraph?
<br />
<br />
Using someone else’s text without attribution is plagiarism, whether you meant to do it or not. Unintentional plagiarism of even a sentence or two can have serious consequences. For students, plagiarism often means a failing grade, academic probation, or worse. Fortunately, there is a tool that can help. Writeophonic’s online plagiarism checker can help you ensure that you have properly identified and cited anything in your text that isn’t 100 percent original.
<br />
<br />
We originally designed our online plagiarism checker for students, but it’s a useful tool for writers in any field who want to create fresh, original, plagiarism-free work.
              <br />
              <br />
              Read more about Writeophonic's engineering and research culture
            </p>
          </div>
          <div className="right ">
            <img
              width={"503px"}
              height={"334px"}
              src="https://static.grammarly.com/assets/files/93b90e6aa7db9e977285034da118d07c/plagiarism-detector.svg"
              alt=""
            />
          </div>
        </div>
        <div className="hero" style={{ display: "flex", alignItems: "center" }}>
          <div className="right">
            <img
              width={"503px"}
              height={"475px"}
              src="https://static.grammarly.com/assets/files/fca5ab00aa87ef9f835f23ebcfbc9c4f/plagiarism-check.svg"
              alt=""
            />
          </div>
          <div
            className="left1_"
            style={{ padding: "25px", paddingInline: "80px" }}
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
              How Does Writeophonic’s Plagiarism Checker Work?
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "32px",color:"grey" }}>
            
Our online plagiarism checker compares your text to over 16 billion web pages and academic papers stored in ProQuest’s databases. When part of your text matches something written online or in a database, you’ll get a plagiarism alert.
<br />
<br />
When you use Writeophonic’s free online plagiarism check to detect plagiarism, you’ll see an instant report that tells you whether or not plagiarism was found and how many grammar and writing issues are present in your document. Writeophonic’s Premium plagiarism checker flags specific sentences and provides reference information about the source, calculates an overall originality score for your document, and offers advanced writing feedback and corrections across several dimensions.
<br />
<br />
Rest assured, your writing will stay private. Our plagiarism checker will not make your writing searchable publicly or in any other database. No other plagiarism checkers will see your text.
            </p>
          </div>
        </div>
        
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "55px",
            paddingInline: "210px",
            marginTop: "50px",
          }}
        >
          <h1 style={{}}>Who Benefits from Writeophonic’s Plagiarism Checker?</h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "32px",
              marginTop: "30px",
            }}
          >
           
Whether you’re a student writing an essay, a teacher grading papers, or a writer working on original content for the web, a plagiarism scan will not only save you time, but also help you avoid writing mistakes.
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
          <div className="tag1 tag_">
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
              width="64px"
                src="https://static.grammarly.com/assets/files/b66ed1df8b938942931d276f60eac770/chao_mbogho.png"
                alt=""
              />
              <div>
                <p style={{ color: "black", fontSize: "18px" }}>@chao_mbogho</p>
                <p
                  style={{ color: "grey", marginTop: "10px", fontSize: "18px" }}
                >
                  Ph.D. and lecturer, Kenya
                </p>
              </div>
            </div>
            <p style={{ fontSize: "17px",lineHeight:"28px" }}>
              “I absolutely love Writeophonic when writing. I especially love
              revising even the most mundane of lines that hit a plagiarism
              result, because seeing 0% plagiarism is what I live for.”
            </p>
          </div>
          <div className="tag1 tag_">
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
              width="64px"
                src="https://static.grammarly.com/assets/files/f92b4e59435080cb66d8e3c0969bea47/brandy_cross.png"
                alt=""
              />
              <div>
                <p style={{ color: "black", fontSize: "18px" }}>Brandy Cross</p>
                <p
                  style={{ color: "grey", marginTop: "10px", fontSize: "18px" }}
                >
                  Freelance Writer, TX
                </p>
              </div>
            </div>
            <p style={{ fontSize: "17px",lineHeight:"28px" }}>
              “Essentially, Writeophonic offers the same features as a thesaurus, a
              quality grammar-checking program, and a plagiarism checker. While
              you can purchase each of these tools separately elsewhere,
              Writeophonic combines them, which is actually quite nice.”
            </p>
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "25px",
            paddingInline: "275px",
            marginBlock: "30px",
          }}
        >
          <h1
            style={{ fontSize: "19px", color: "gray", fontWeight: "lighter" }}
          >
            Trusted by Students and Faculty at
          </h1>
        </div>
        <div>
          <div class="trusted_">
            <img
              alt="Hacker One"
              loading="lazy"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              src="https://images.ctfassets.net/1e6ajr2k4140/14TUd8Es0kwszDBc6Ae8Oo/b777d078839ac89289090c44e9e5c613/Brand_UCLA__Type_Academic_Institutions__Mode_Light.svg"
            />
            <img
              alt="Atlassian"
              loading="lazy"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              src="https://images.ctfassets.net/1e6ajr2k4140/7K6Lv5p71aQQehY3riA9VS/66e7d77807cf97384ef48c5aa4d79867/Brand_Harvard_Medical_School__Type_Academic_Institutions.svg"
            />
            <img
              alt="Databricks"
              loading="lazy"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              src="https://images.ctfassets.net/1e6ajr2k4140/5YGMVODCxUMvDZgiq6pWsq/d327b654f231f09b62cffc7131f97041/Brand_MIT__Type_Academic_Institutions.svg"
            />
            <img
              alt="Expensify"
              loading="lazy"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              src="https://images.ctfassets.net/1e6ajr2k4140/58bhdPzv7f9H7JvqsK3ZyW/71b4f3e7e760da0566bcdc6931d891e5/Brand_UNC__Type_Indian_Institute_of_Technology__1_.svg"
            />
            <img
              alt="NYC Dept of Education"
              loading="lazy"
              class="trusted-by_imgContainer__37IRW trusted-by_responsive__3yA5B"
              src="https://images.ctfassets.net/1e6ajr2k4140/6j0RtK8hmO2XWBuPiao0O0/e68be67a678a3b0e2d8b62c27c243211/Brand_NYC__Type_Academic_Institutions.svg"
            />
          </div>
        </div>
        <div
          className=""
          style={{
            textAlign: "center",
            padding: "35px",
            paddingInline: "230px",
            marginTop: "100px",
            
          }}
        >
          <h1 style={{ }}>
            {" "}
            Millions of users trust Writeophonic’s plagiarism checker
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "32px",
              marginBlock: "50px",
            }}
          >
            Students, educators, and professional writers alike trust Writeophonic
            to help them produce original, well-written, and well-sourced work.
            Save time and see better results with Writeophonic’s plagiarism checker
            and writing feedback app.
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
              width: "255px",
              marginBlock: "20px",
            }}
          >
            <span style={{ fontWeight: "bolder" }}>Check your text now</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plagirism;
