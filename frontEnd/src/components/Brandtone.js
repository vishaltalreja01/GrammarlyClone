import React from 'react'
import "./Windows"
import customerrealtion from "../images4/customerrelation.png"
import trustedbrand from "../images4/trustedbrand.png"
import toneprofile from "../images4/toneprofile.png"
import tonedetector from "../images4/tonedetector.png"
import analytics from "../images4/analytics.png"
import createtoneprofile from "../images4/createtoneprofile.png"
import customerconsistance from "../images4/customerconsistance.png"
import miguel from "../images4/miguel.png"
import uplevelblue from "../images4/uplevelblue.png"
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
const Brandtone = () => {
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
                            textAlign: "left"
                        }}
                    >
                        Brand Tone Builds   <br />Customer Relationships

                    </h2>
                    <p style={{ fontSize: "18px", width: "400px", lineHeight: "32px", textAlign: "left" }}>
                        Help your team create a consistent and engaging brand experience
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
                            <span style={{ fontWeight: "bolder" }}>Get Writeophonic Bussiness </span>                 </button>
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
                    <img
                        width="470px"
                        height="416px"
                        src={customerrealtion}
                        alt=""
                    />
                </div>
            </div>






            <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column", backgroundColor: "#F6F7F8", height: "300px" }}>
                <h1>Trusted by teams at</h1>

                <img
                    width="870px"
                    height="350px"
                    src={trustedbrand}
                    alt=""
                />
            </div>



            <div style={{ backgroundColor: "#3659B5" }}>

                <div className="hero">
                    <div className="right">
                        <img
                            width={"300px"}
                            height={"200px"}
                            src={customerconsistance}
                            alt=""
                        />
                    </div>
                    <div className="left1_" style={{ padding: "25px", }}>
                        <h1
                            style={{
                                fontFamily: "Inter,sans-serif",
                                fontSize: "28px",
                                letterSpacing: "-.005em",
                                lineHeight: "42px",
                                marginBlock: "20px",
                                textAlign: "left",
                                color: "white",
                                width: "400px"

                            }}
                        >
                            Create the Consistency Customers Expect

                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left", color: "white", width: "400px" }}>
                            On average, teams using Writeophonic Business keep their tone on-brand 40% more often than before.


                        </p>
                    </div>
                </div>


            </div>




            <div className="hero" style={{
                backgroundColor: "#FFFFFF"

            }}>
                <div className="left1_" style={{ padding: "25px" }}>
                    <h1
                        style={{
                            fontFamily: "Inter,sans-serif",
                            fontSize: "28px",
                            letterSpacing: "-.005em",
                            lineHeight: "42px",
                            marginBlock: "20px",
                            textAlign: "left"

                        }}
                    >
                        TONE PROFILE

                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                        Choose from dozens of tones to create a tone profile that matches your brand.
                    </p>
                </div>
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={toneprofile}
                        alt=""
                    />
                </div>
            </div>





            <div className="hero">
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={tonedetector}
                        alt=""
                    />
                </div>
                <div className="left1_" style={{ padding: "25px", }}>
                    <h1
                        style={{
                            fontFamily: "Inter,sans-serif",
                            fontSize: "28px",
                            letterSpacing: "-.005em",
                            lineHeight: "42px",
                            marginBlock: "20px",
                            textAlign: "left"

                        }}
                    >
                        TONE DETECTOR

                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                        Team members see real-time feedback to help them adjust the tone of their writing.

                    </p>
                </div>
            </div>





            <div className="hero" style={{
                backgroundColor: "#FFFFFF"

            }}>
                <div className="left1_" style={{ padding: "25px" }}>
                    <h1
                        style={{
                            fontFamily: "Inter,sans-serif",
                            fontSize: "28px",
                            letterSpacing: "-.005em",
                            lineHeight: "42px",
                            marginBlock: "20px",
                            textAlign: "left"
                        }}
                    >
                        ANALYTICS

                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                        Measure progress and improvement to ensure a consistent brand experience for customers.

                    </p>
                </div>
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={analytics}
                        alt=""
                    />
                </div>
            </div>





            <div className="hero">
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={createtoneprofile}
                        alt=""
                    />
                </div>
                <div className="left1_" style={{ padding: "25px", }}>
                    <h1
                        style={{
                            fontFamily: "Inter,sans-serif",
                            fontSize: "28px",
                            letterSpacing: "-.005em",
                            lineHeight: "42px",
                            marginBlock: "20px",
                            textAlign: "left"

                        }}
                    >
                        TONE PROFILES

                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>

                        Assign different tone profiles to groups to create distinct team voices.
                    </p>
                </div>
            </div>





            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "40px" }}>
                <p style={{ width: "600px", margin: "30px" }}>“With brand tones from Writeophonic Business, our entire team can stay on-brand in conveying the right level of confidence. It helps us elevate our level of service while staying competitive in a fast-evolving market.”</p>
                <img
                    width={"200px"}
                    height={"200px"}
                    src={miguel}
                    alt=""
                />
            </div>






            <div style={{ backgroundColor: "#3659B5", alignItems: "center", height: "700px", padding: "40px" }}>
                <h1 style={{ color: "white" }}>Up-Level Your Team’s Communication</h1>
                <img
                    width={"1000px"}
                    height={"500px"}
                    src={uplevelblue}
                    alt=""
                />

            </div>



            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "70px" }}>
                <h1 style={{ width: "400px", alignItems: "center", justifyContent: "center" }}>Accomplish More High-Value Work</h1>
                <p style={{ width: "400px", alignItems: "center", justifyContent: "center" }}>
                    Join the 50,000 teams using Writeophonic Business to communicate more efficiently, effectively, and consistently.
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
                    <span style={{ fontWeight: "bolder" }}>Get Writeophonic Bussiness </span>                 </button>
            </div>





            <Footer />




        </>
    )
}

export default Brandtone