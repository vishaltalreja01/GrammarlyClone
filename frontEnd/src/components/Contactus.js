import React from 'react'
import mailling from "../images4/mailling.png"
import partnership from "../images4/partnership.png"
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
const Contactus = () => {
    return (
        <>
        <Navbar/>
            <div style={{ marginTop: "100px", justifyContent: "center",alignItems:"center", display:"flex",flexDirection:"column" }}>

                <h1>Contact Us</h1>
                <p>
                    Have any questions? We'd love to hear from you.
                </p>
         
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center", marginTop:"50px",alignItems: "center",marginTop:"100px" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: "220px",
                        textAlign: "left",
                        margin: "35px",
                        borderTop: "4px solid #16C39A", 
                        borderRadius:"5px"
                    }}
                >
                    <h3>Press</h3>
                    <p>Are you interested in our latest news or working on a Writeophonic story</p>
                    <button
                        style={{
                            backgroundColor: "white",
                            color: "#16C39A",
                            border: "2px solid #16C39A",
                            borderRadius: "6px",
                            height: "35px",
                            padding: "8px 32px",
                            cursor: "pointer",
                            width: "175px",
                       
                            marginBlock: "20px",
                        }}
                    >
                        Press Page
                    </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", margin: "35px",  borderRadius:"5px",  borderTop: "4px solid blue",  alignItems: "center", width: "220px", textAlign: "left", }}>
                    <h3>Help & Support</h3>
                    <p>Our support team is spread across the globe to give you answers fast.</p>
                    <button
                        style={{
                            backgroundColor: "#16C39A",
                            color: "white",
                            borderColor: "#16C39A",
                            borderRadius: "6px",
                            border: "2px",
                            height: "35px",
                            padding: "8px 32px",
                            cursor: "pointer",
                            width: "175px",
                            marginBlock: "20px",
                        }}

                    >
                        Support Page
                    </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center",  margin: "35px", borderRadius:"5px",   borderTop: "4px solid #16C39A", width: "220px", textAlign: "left",padding:"10px" }}>
                    <h3>Sales</h3>
                    <p>Get in touch with our sales team to see how we can work together.</p>
                    <button
                        style={{
                            backgroundColor: "white",
                            color: "#16C39A",
                            border: "1px solid #16C39A", // Update border color to match text color
                            borderRadius: "6px",
                            height: "35px",
                            padding: "8px 32px",
                            cursor: "pointer",
                            width: "175px",
                            marginBlock: "20px",
                        }}
                    >
                        Sales Page
                    </button>


                </div>
            </div>

            <img src={partnership} alt="Image" style={{ width: "250px", height: "250px",padding:"60px" }} />
            <img src={mailling} alt="Image" style={{ width: "250px", height: "250px",padding:"60px" }} />


            </div>
<Footer/>
        </>
    )
}

export default Contactus