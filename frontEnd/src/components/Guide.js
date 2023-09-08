import React from 'react'
import "./Windows.css"
import consistantwriting from "../images4/consistantwriting.png"
import styleguide from "../images4/styleguide.png"
import replace from "../images4/replace.png"
import namesmatter from "../images4/namesmatter.png"
import guiderules from "../images4/guiderules.png"
import brandstone from "../images4/brandtones.png"
import sales1 from "../images4/sales1.png"
import trustedbrand from "../images4/trustedbrand.png"
import Support1 from "../images4/support1.png"
import marketing1 from "../images4/marketing1.png"
import betterwork from "../images4/betterwork.png"
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
const Guide = () => {
    return (
        <>
        <Navbar/>
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
                        A Strong Brand Needs
                        <br />Consistent Writing

                    </h2>
                    <p style={{ fontSize: "18px", width: "400px", lineHeight: "32px", textAlign: "left" }}>

                        Help your whole team capture your company's unique voice and style.

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
                        src={consistantwriting}
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
                        STYLE GUIDE

                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                        Keep your team aligned with a shared library of words, terms, and phrases specific to your organization.

                    </p>
                </div>
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={styleguide}
                        alt=""
                    />
                </div>
            </div>





            <div className="hero">
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={replace}
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
                        REPLACE ACRONYMS AND JARGON

                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>

                        Create rules to help your team avoid using confusing acronyms or jargon with customers.

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
                        NAMES MATTER

                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                        Make sure your company, product, and trademark names are properly spelled and capitalized.
                    </p>
                </div>
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={namesmatter}
                        alt=""
                    />
                </div>
            </div>





            <div className="hero">
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={guiderules}
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
                        CUSTOM STYLE GUIDE RULES

                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>
                        Rules are easy to create and update, so keeping your style guide up-to-date is a snap.
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
                        BRANDS TONES

                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>Turn your brand voice into a tone profile so your team can strike the right notes for every interaction.
                    </p>
                </div>
                <div className="right">
                    <img
                        width={"500px"}
                        height={"400px"}
                        src={brandstone}
                        alt=""
                    />
                </div>
            </div>







            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>


                <h1>Works Where Your Team Does</h1>
                <p>Writeophonic integrates seamlessly with your workflows across desktop <br />and mobile apps and websites.</p>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center",justifyContent:"center",marginTop:"70px" }}>
                    <img
                        width={"350px"}
                        height={"250px"}
                        src={Support1}
                        alt=""
                    />
                    <img
                        width={"350px"}
                        height={"250px"}
                        src={sales1}
                        alt=""
                    />
                    <img
                        width={"350px"}
                        height={"250px"}
                        src={marketing1}
                        alt=""
                    />
                </div>

            </div>


<div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#3659B5"}}>
<div className="hero">
                <div className="left">
                    <h2
                        style={{
                            width: "500px",
                            fontFamily: "Inter,sans-serif",
                            fontSize: "28px",
color:"white",
                            lineHeight: "40px",
                            textAlign: "left"
                        }}
                    >
                        A Strong Brand Needs
                        <br />Consistent Writing

                    </h2>
                    <p style={{ fontSize: "18px",color:"white", width: "400px", lineHeight: "32px", textAlign: "left" }}>

                        Help your whole team capture your company's unique voice and style.

                    </p>
                    <div style={{ display: "flex", flexDirection: "row" }}>

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

                </div>
                <div className="right">
                    <img
                        width="400px"
                        height="378px"
                        src={betterwork}
                        alt=""
                    />
                </div>
            </div>

</div>

<Footer/>



        </>
    )
}

export default Guide