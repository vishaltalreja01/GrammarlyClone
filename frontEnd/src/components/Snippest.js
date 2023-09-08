import React from "react";
import "./Windows.css";
import textsnippest from "../images4/textsnippest.png";
import keyboardshortcut from "../images4/keyboardshortcut.png";
import snippestlibrary from "../images4/snippeslibrary.png";
import customsnippest from "../images4/customsnippest.png";

import seamlessshare from "../images4/seamlessshare.png";

import jimmy from "../images4/jimmy.png";
import trustedbrand from "../images4/trustedbrand.png";
import uplevelblue from "../images4/uplevelblue.png";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
const Snippest = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="left">
          <h2
            style={{
              width: "500px",
              fontFamily: "Inter,sans-serif",
              fontSize: "28px",

              lineHeight: "40px",
              textAlign: "left",
            }}
          >
            Write More in Less Time <br />
            with Text Snippets
          </h2>
          <p
            style={{
              fontSize: "18px",
              width: "400px",
              lineHeight: "32px",
              textAlign: "left",
            }}
          >
            Give your teams the power to craft consistent, on-brand messaging
            with a shared snippet library.
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button
              style={{
                backgroundColor: "#FC832B",
                color: "#fff",
                borderRadius: "6px",
                height: "48px",
                padding: "8px 32px",
                border: "0",
                cursor: "pointer",
                width: "250px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>
                Get Writeophonic Bussiness{" "}
              </span>{" "}
            </button>
            <button
              style={{
                backgroundColor: "white",
                color: "#FC832B",
                borderRadius: "6px",
                height: "48px",
                padding: "8px 32px",
                border: "0",
                border: "1px solid green",
                cursor: "pointer",
                width: "250px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Shedule a demo</span> it's
              free
            </button>
          </div>
        </div>
        <div className="right">
          <img width="470px" height="416px" src={textsnippest} alt="" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#F6F7F8",
          height: "300px",
        }}
      >
        <h1>Trusted by teams at</h1>

        <img width="870px" height="350px" src={trustedbrand} alt="" />
      </div>

      <div
        className="hero"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="left1_" style={{ padding: "25px" }}>
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "28px",
              letterSpacing: "-.005em",
              lineHeight: "42px",
              marginBlock: "20px",
              textAlign: "left",
            }}
          >
            KEYBOARD SHORTCUTS
          </h1>
          <p
            style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}
          >
            Quickly insert sentences and paragraphs so you can write faster in
            all your workflows.
          </p>
        </div>
        <div className="right">
          <img width={"500px"} height={"400px"} src={keyboardshortcut} alt="" />
        </div>
      </div>

      <div className="hero">
        <div className="right">
          <img width={"500px"} height={"400px"} src={snippestlibrary} alt="" />
        </div>
        <div className="left1_" style={{ padding: "25px" }}>
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "28px",
              letterSpacing: "-.005em",
              lineHeight: "42px",
              marginBlock: "20px",
              textAlign: "left",
            }}
          >
            SNIPPET LIBRARY
          </h1>
          <p
            style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}
          >
            Empower confident communication with a centralized library of preset
            snippets.
          </p>
        </div>
      </div>

      <div
        className="hero"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="left1_" style={{ padding: "25px" }}>
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "28px",
              letterSpacing: "-.005em",
              lineHeight: "42px",
              marginBlock: "20px",
              textAlign: "left",
            }}
          >
            CUSTOM SNIPPETS
          </h1>
          <p
            style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}
          >
            Craft snippets to increase productivity for yourself or your entire
            team.
          </p>
        </div>
        <div className="right">
          <img width={"500px"} height={"400px"} src={customsnippest} alt="" />
        </div>
      </div>

      <div className="hero">
        <div className="right">
          <img width={"500px"} height={"400px"} src={seamlessshare} alt="" />
        </div>
        <div className="left1_" style={{ padding: "25px" }}>
          <h1
            style={{
              fontFamily: "Inter,sans-serif",
              fontSize: "28px",
              letterSpacing: "-.005em",
              lineHeight: "42px",
              marginBlock: "20px",
              textAlign: "left",
            }}
          >
            SEAMLESS SHARING
          </h1>
          <p
            style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}
          >
            Easily share winning language to elevate consistent communication
            everywhere.
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#3659B5",
          alignItems: "center",
          height: "700px",
          padding: "40px",
        }}
      >
        <h1 style={{ color: "white" }}>Up-Level Your Team’s Communication</h1>
        <img width={"1000px"} height={"500px"} src={uplevelblue} alt="" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F9FAFF",
        }}
      >
        <p style={{ width: "600px", margin: "30px" }}>
          “As we’ve expanded our global support team, Writeophonic Business has
          been an irreplaceable tool in meeting our customers’ expectations with
          higher quality and consistency. We’ve already seen a boost in customer
          satisfaction, and now with snippets, we can address our customers’
          needs even more quickly. The ease of creating customized responses and
          dispersing them to our team with snippets significantly beats out
          other similar solutions I’ve previously tried. This is going to be a
          productivity game-changer, especially in times of urgency.”
        </p>
        <img width={"200px"} height={"200px"} src={jimmy} alt="" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "70px",
        }}
      >
        <h1
          style={{
            width: "400px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Accomplish More High-Value Work
        </h1>
        <p
          style={{
            width: "400px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Join the 50,000 teams using Writeophonic Business to communicate more
          efficiently, effectively, and consistently.
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
            width: "250px",
          }}
        >
          <span style={{ fontWeight: "bolder" }}>Get Writeophonic Bussiness </span>{" "}
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Snippest;
