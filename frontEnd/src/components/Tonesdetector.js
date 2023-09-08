import React from 'react'
import "./Windows.css"
import yourtone from "../images4/yourtone.png"
import confident from "../images4/confident.png"
import express from "../images4/express.png"
import strength from "../images4/strength.png"
import emojis from "../images4/emojis.png"
import feelconfident from "../images4/feelconfident.png"
import strenghtrelation from "../images4/strenghtrelation.png"
import comeacross from "../images4/comeacross.png"
import fvrtapp from "../images4/fvrapp.png"
import matt from "../images4/matt.png"
import trustedby from "../images4/trustedby.png"
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
const Tonesdetector = () => {
    return (
        <>
            <Navbar/>
            <div className="hero" style={{ backgroundColor: "#1F243C" }}>
                <div className="left" >
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
                        Your Tone Makes an Impact,   <br />So Say It How You Mean It

                    </h2>
                    <p style={{ fontSize: "18px", width: "400px", lineHeight: "32px", textAlign: "left", color: "white" }}>
                        Writeophonic’s tone features ensure your message is well-received so you can build productive relationships that help drive projects forward.
                    </p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <button
                            style={{
                                backgroundColor: "white",
                                color: "#1F243C",
                                borderRadius: "6px",
                                height: "48px",
                                padding: "8px 32px",
                                border: "0",
                                border: "1px solid green",
                                cursor: "pointer",
                                width: "250px",
                            }}
                        >
                            <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span>

                        </button>


                    </div>

                </div>
                <div className="right">
                    <img
                        width="470px"
                        height="416px"
                        src={yourtone}
                        alt=""
                    />
                </div>
            </div>


            <div style={{ alignItems: "center", margin: "100px" }}>

                <h1>Tone Is Key to Effective <br />Communication</h1>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                    <div style={{ display: "flex", flexDirection: "column", textAlign: "left", width: "230px", padding: "40px" }}>
                        <img
                            width="100px"
                            height="100px"
                            src={confident}
                            alt=""
                        />
                        <p>Be confident that your recipient will understand your message the way you intend.
                        </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "left", width: "230px", padding: "40px" }}>
                        <img
                            width="100px"
                            height="100px"
                            src={express}
                            alt=""
                        />
                        <p>Express urgency, deliver feedback, or navigate difficult conversations with ease.
                        </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "left", width: "230px", padding: "40px" }}>
                        <img
                            width="100px"
                            height="100px"
                            src={strength}
                            alt=""
                        />
                        <p>Strengthen relationships at work, school, or in everyday life through care and thoughtfulness
                        </p>
                    </div>
                </div>

            </div>

            <div style={{ backgroundColor: "#F9FAFF", padding: "100px", height: "600px" }}>
                <h1>How Are You Sounding Today?</h1>
                <img
                    width="900px"
                    height="500px"
                    src={emojis}
                    alt=""
                />
            </div>



            <div style={{ marginTop: "100px", marginBottom: "100px" }}>
                <h1>See How You Sound,<br /> Change How You Sound</h1>
                <p>Writeophonic’s tone features combine insight and guidance so you strike the <br />right note every time.</p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                    <div className="hero">
                        <div className="right">
                            <img
                                width={"500px"}
                                height={"400px"}
                                src={feelconfident}
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
                                Feel confident your message <br />will be well-received

                            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                                Writeophonic’s tone checker can identify the<br /> tone of your message by analyzing your word<br />  choice, phrasing, punctuation, and even <br /> capitalization.

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
                                Strengthen relationships with <br />thoughtful communication
                            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                                Easily create connections with tone <br />suggestions that help convey the right level of <br />positivity and approachability.



                            </p>
                        </div>
                        <div className="right">
                            <img
                                width={"500px"}
                                height={"400px"}
                                src={strenghtrelation}
                                alt=""
                            />
                        </div>
                    </div>





                    <div className="hero">
                        <div className="right">
                            <img
                                width={"500px"}
                                height={"400px"}
                                src={comeacross}
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
                                Come across as confident<br /> and professional

                            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                                Build trust at work with tone suggestions that <br />help you sound assured as you propose an <br />idea, email a client, or communicate with your <br />team.


                            </p>
                        </div>
                    </div>



                </div>
            </div>



            <div style={{ backgroundColor: "#F9FAFF", padding: "100px" }}>
                <h1>Works in Your Favorite Apps</h1>
                <img
                    width={"700px"}
                    height={"400px"}
                    src={fvrtapp}
                    alt=""
                />
            </div>


            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "white", margin: "100px" }}>
                <p style={{ width: "600px", margin: "30px" }}>“Tone matters when you’re communicating for work. You can’t quite make the same emotional impact you would in person, so I like using the tone detector to make sure my writing is received well.”</p>
                <img
                    width={"200px"}
                    height={"200px"}
                    src={matt}
                    alt=""
                />

            </div>
            <div>
                <h1>Trusted By</h1>
                <img
                    width={"800px"}
                    height={"300px"}
                    src={trustedby}
                    alt=""
                />
            </div>
            <div style={{ backgroundColor: "#3659B5", height: "300px", color: "white", padding: "100px" }}>
                <h1>Confident Communication Awaits</h1>
                <p>
                    Get started and join 30 million people who use Writeophonic’s tone features <br />Fto write with care every time.</p>
                <button
                    style={{
                        backgroundColor: "white",
                        color: "#1F243C",
                        borderRadius: "6px",
                        height: "48px",
                        padding: "8px 32px",
                        border: "0",
                        border: "1px solid green",
                        cursor: "pointer",
                        width: "250px",
                        margin:"100px"
                    }}
                >
                    <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span>

                </button>


            </div>
            <Footer/>
        </>
    )
}

export default Tonesdetector