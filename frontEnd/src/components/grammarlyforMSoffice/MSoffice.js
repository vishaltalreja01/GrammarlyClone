import React from 'react'
import "../Windows.css"
import msword from "./msword.png"
import Writeophoniceditor from "./grammarlyeditor.png"
import Writeophonicdesktop from "./grammarlydesktop.png"
import mobilekeyboard from "./mobilekeyboard.png"
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
const MSoffice = () => {
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
                        Writeophonic for
                        <br />Microsoft Word

                    </h2>
                    <p style={{ fontSize: "18px", width: "400px", lineHeight: "32px", textAlign: "left" }}>

                        Write better, clearer documents.

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
                            <span style={{ fontWeight: "bolder" }}>Get the add-in</span>                 </button>



                    </div>

                </div>
                <div className="right">
                    <img
                        width="770px"
                        height="416px"
                        src={msword}
                        alt=""
                    />
                </div>


            </div>
            <div>
                <h1>
                    Other ways to use Writeophonic</h1>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <img
                        width="200px"
                        height="200px"
                        src={Writeophonicdesktop}
                        alt=""
                        style={{
                            transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.1)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = "scale(1)";
                        }}
                    />
                      <img
                        width="200px"
                        height="200px"
                        src={Writeophoniceditor}
                        alt=""
                        style={{
                            transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.1)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = "scale(1)";
                        }}
                    />
                    <img
                        width="200px"
                        height="200px"
                        src={mobilekeyboard}
                        alt=""
                        style={{
                            transition: "transform 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = "scale(1.1)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = "scale(1)";
                        }}
                    />

                </div>
            </div>
<Footer/>

        </>
    )
}

export default MSoffice