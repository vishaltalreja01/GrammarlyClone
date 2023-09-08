import React from 'react'
import "./Windows.css"
import teamsprogress from "../images4/teamsprogress.png"
import trustedbrand1 from "../images4/trustedbrand1.png"
import getbigpicture from "../images4/getbigpicture.png"
import drilldown from "../images4/drilldown.png"
import analyzetone from "../images4/analyzetone.png"
import bussinessimpact from "../images4/bussinessimpact.png"

import miguel from "../images4/miguel.png"
import uplevelwhite from "../images4/uplevelwhite.png"
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
const Analytics = () => {
    return (
        <>
            <Navbar />
            <div className="hero" style={{ backgroundColor: "3659B5#" }}>
                <div className="left">
                    <h2
                        style={{
                            width: "500px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "28px",
                            color: "white",
                            lineHeight: "40px",
                            textAlign: "left"
                        }}
                    >
                        Measure and Drive Your Team's  <br />Progress with Analytics

                    </h2>
                    <p style={{ fontSize: "18px", color: "white", width: "400px", lineHeight: "32px", textAlign: "left" }}>

                        Drive efficiency improvements and better communication with analytics from Writeophonic Business.

                    </p>
                    <div style={{ display: "flex", flexDirection: "row" }}>

                        <button
                            style={{
                                backgroundColor: "white",
                                color: "#3659B5",
                                borderRadius: "6px",
                                height: "48px",
                                padding: "8px 32px",
                                border: "1px solid #3659B5",
                                border: "0",
                                cursor: "pointer",
                                width: "250px",
                            }}
                        >
                            <span style={{ fontWeight: "bolder" }}>Get Writeophonic Bussiness </span>                 </button>
                        <button
                            style={{
                                backgroundColor: "#3659B5",
                                color: "white",
                                borderRadius: "6px",
                                height: "48px",
                                padding: "8px 32px",
                                border: "0",
                                border: "1px solid white",
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
                        src={teamsprogress}
                        alt=""
                    />
                </div>
            </div>














            <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column", backgroundColor: "#F6F7F8", height: "300px" }}>
                <h1>Trusted by teams at</h1>

                <img
                    width="870px"
                    height="350px"
                    src={trustedbrand1}
                    alt=""
                />
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
                        DRILL DOWN

                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                        Identify trends for customer-facing teams, business units, and more with customized filters.

                    </p>
                </div>
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={drilldown}
                        alt=""
                    />
                </div>
            </div>





            <div className="hero">
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={analyzetone}
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
                        ANALYZE TONE
                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                        Ensure your team is making the right impression with writing tone analysis.


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
                        UNDERSTAND THE BUSINESS IMPACT
                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                        Measure the impact of your team’s time savings and efficiency.

                    </p>
                </div>
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={bussinessimpact}
                        alt=""
                    />
                </div>
            </div>











            <div style={{ backgroundColor: "#F9FAFF", alignItems: "center", height: "700px", padding: "40px" }}>
                <h1 style={{ color: "black" }}>Up-Level Your Team’s Communication</h1>
                <img
                    width={"1000px"}
                    height={"500px"}
                    src={uplevelwhite}
                    alt=""
                />

            </div>



            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "400px", backgroundColor: "#3659B5" }}>
                <h1 style={{ width: "400px", alignItems: "center", justifyContent: "center", color: "white" }}>Accomplish More High-Value Work</h1>
                <p style={{ width: "400px", alignItems: "center", justifyContent: "center", color: "white" }}>
                    Join the 50,000 teams using Writeophonic Business to communicate more efficiently, effectively, and consistently.
                </p>
                <button
                    style={{
                        backgroundColor: "white",
                        color: "#3659B5",
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

export default Analytics