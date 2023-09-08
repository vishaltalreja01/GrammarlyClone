import React from "react";
import { useState } from "react";
import "./Iphone.css"
import android from "../images3/android.png"
import cleanyourtext from "../images3/cleanuptext.png"
import saymorewithless from "../images3/saymorewithless.png"
import checkyourtone from "../images3/checkyourtone.png"
import chooserightword from "../images3/chooserightwords.png"
import androidapps from "../images3/androidapps.png"
import multiplelanguange from "../images3/multiplelanguange.png"
import dhawan from "../images3/dhawan.png"
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";



const Iphone = () => {
    const [questionData, setQuestionData] = useState([
        {
            question: 'How do I install and use Writeophonic on my Android Device?',
            answer: 'Download Writeophonic from the Google Play Store and follow the installation prompts. If you need additional help, check out our support article.',
            isOpen: false
        },
        {
            question: 'How does Grammerly work on my Android Device?',
            answer: 'Grammerly works where you write on your device-across apps you commonly use,including Gmail,Outlink,SMS,Watsapp,Facebook,Twiter and Linkedin.',
            isOpen: false
        },
        {
            question: 'What does Writeophonic keyboard offer beyond my device native keyboard?',
            answer: 'The Writeophonic Keyboard brings Writeophonic writing suggestions straight to you in any app, including texts, emails, and social media postsWriting feedback goes beyond your phones standard autocorrect and helps ensure your writing is clear and correct.',
            isOpen: false
        },
        {
            question: 'Does Writeophonic keyboard offer multilanguange Support?',
            answer: "While Writeophonic's writing support and suggestions are for English text, Writeophonic for Android's keyboard works with multiple languages so you can easily toggle between themThere's no need to maintain multiple language keyboards with Writeophonic for AndroidSimply add languages in your keyboard customization page of the Writeophonic app."
        },
        {
            question: 'Does Writeophonic for android support swipe-to-type and predictive typing?',
            answer: 'Yes,both features integrated for composing quality writing quickly while you are on the go.',
            isOpen: false
        },
        {
            question: 'Is my data is secure on Writeophonic for iPhone?',
            answer: 'We take your privacy and security extrememly seriously. Read more about what we do to keep your information safe.',
            isOpen: false
        },
        {
            question: "How can i customize my keyboard in Writeophonic for Android",
            answer: 'Through the Writeophonic for Android app you can choose from colorful themes and backgrounds as well as personalize your writing with GIFs,emojis and sticker',
            isOpen: false
        },

       
    ]);

    const toggleAnswer = (index) => {
        const updatedQuestionData = [...questionData];
        updatedQuestionData[index].isOpen = !updatedQuestionData[index].isOpen;
        setQuestionData(updatedQuestionData);
    };



    return (
        <>
            <Navbar />
            <div>
                <div className="hero" style={{
                    backgroundColor: "#333954",
                    height: "700px"
                }}>
                    <div className="right">
                        <img
                            width={"500px"}
                            height={"600px"}
                            src={android}
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
                                color: "white"
                            }}
                        >
                            Writeophonic for Android
                        </h1>
                        <p style={{
                            fontSize: "20px", lineHeight: "32px", width: "760px", color: "white"
                        }}>
                            Get intelligent, on-the-go English writing support for confident communication with Writeophonic Keyboard.
                          
                        </p>
                        <button
                            style={{
                                backgroundColor: "grey",
                                color: "white",
                                borderRadius: "6px",
                                height: "48px",
                                padding: "8px 32px",
                                border: "0",
                                cursor: "pointer",
                                width: "264px",
                                marginBlock: "20px",
                            }}
                            onMouseOver={(e) => {
                                e.target.style.cursor = "not-allowed";
                                e.target.style.backgroundImage = "url('block-icon.png')"; // Replace 'block-icon.png' with your actual image path
                                e.target.style.backgroundRepeat = "no-repeat";
                                e.target.style.backgroundPosition = "center";
                            }}
                            onMouseOut={(e) => {
                                e.target.style.cursor = "pointer";
                                e.target.style.backgroundImage = "none";
                            }}
                        >
                            Not Available
                        </button>
                        <p style={{
                            marginLeft: "150px", display: "flex",
                            justifyContent: "center", width: "500px", color: "white"
                        }}>This version of Writeophonic is not available on your current device.
                            Get Writeophonic for Mac</p>

                    </div>

                </div>


















                <h1>Polished Writing at Your Fingertips</h1>    


                <div className="hero" style={{
                    backgroundColor: "#FFFFFF"

                }}>
             
                    <div className="left1_" style={{ padding: "25px" }}>
                        <h1
                            style={{
                                fontFamily: "Inter,sans-serif",
                                fontSize: "34px",
                                letterSpacing: "-.005em",
                                lineHeight: "42px",
                                marginBlock: "20px",

                            }}
                        >
                            Clean up your texts
                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                        Fix writing mistakes and typos on the go.
                        </p>
                    </div>
                    <div className="right">
                        <img
                            width={"470px"}
                            height={"422px"}
                            src={cleanyourtext}
                            alt=""
                        />
                    </div>
                </div>







                <div className="hero">
                    <div className="right">
                        <img
                            width={"600px"}
                            height={"500px"}
                            src={saymorewithless}
                            alt=""
                        />
                    </div>
                    <div className="left1_" style={{ padding: "25px", }}>
                        <h1
                            style={{
                                fontFamily: "Inter,sans-serif",
                                fontSize: "34px",
                                letterSpacing: "-.005em",
                                lineHeight: "42px",
                                marginBlock: "20px",

                            }}
                        >
                           Say more with less

                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px", }}>
                        Cut out unnecessary words with ease so your message is clear.

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
                                fontSize: "34px",
                                letterSpacing: "-.005em",
                                lineHeight: "42px",
                                marginBlock: "20px",

                            }}
                        >
                           Check your tone


                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                        Strike the right tone in your message, whether personal or professional.
                        </p>
                    </div>
                    <div className="right">
                        <img
                            width={"470px"}
                            height={"500px"}
                            src={checkyourtone}
                            alt=""
                        />
                    </div>
                </div>














                <div className="hero">
                    <div className="right">
                        <img
                            width={"600px"}
                            height={"500px"}
                            src={chooserightword}
                            alt=""
                        />
                    </div>
                    <div className="left1_" style={{ padding: "25px", }}>
                        <h1
                            style={{
                                fontFamily: "Inter,sans-serif",
                                fontSize: "34px",
                                letterSpacing: "-.005em",
                                lineHeight: "42px",
                                marginBlock: "20px",

                            }}
                        >
                           Choose the right words



                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px", }}>
                        Find the most effective words to express yourself confidently.
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
                                fontSize: "34px",
                                letterSpacing: "-.005em",
                                lineHeight: "42px",
                                marginBlock: "20px",

                            }}
                        >
                           Type in multiple languages




                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                        Easily switch your keyboard language when you're not using Writeophonic for English writing support.
                        </p>
                    </div>
                    <div className="right">
                        <img
                            width={"470px"}
                            height={"500px"}
                            src={multiplelanguange}
                            alt=""
                        />
                    </div>
                </div>
















































                <div className="socialIcons" style={{ paddingTop: "10px", backgroundColor: "#3659B5" }}>
                    <div
                        className=""
                        style={{
                            textAlign: "center",

                            paddingInline: "305px",
                            marginBlock: "70px",
                        }}
                    >
                        <h1 style={{color:"white"}}>  Works in Your Favorite Apps</h1>

                    </div>
                    <div className="socialIcon1" >
                        <img
                            width="460px"
                            height="250px"
                            alt="Gmail"
                            loading="lazy"

                            src={androidapps}
                        />


                    </div>
                </div>










                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "10px",
                    width:"1400px",
                backgroundColor:"#F9FAFF"

                }}>
                    <p style={{
                        width: "500px"
                    }}>“iPhone Editor is everything I hoped for and more! I am over the moon. The iPhone app has fun analytics and features like charts of word usage. This is precisely why I recommend Writeophonic to everyone. I love it. ”</p>
                    <img
                        width="280px"
                        height="180px"
                        alt=""
                        src={dhawan}
                    />
                </div>

                

                <div className='faq'>
            <h1>Frequently Asked Questions</h1>
            <div className='questioncontainer'>
                {questionData.map((question, index) => (
                    <div
                        key={index}
                        className={`question ${question.isOpen ? 'active' : ''}`}
                        onClick={() => toggleAnswer(index)}
                    >
                        <div className='question-text'>{question.question}</div>
                        <div className='arrow'>{question.isOpen ? '' : '▼'}</div>
                        {question.isOpen && <div className='answer'>{question.answer}</div>}
                    </div>
                ))}
            </div>
        </div>



















                <div
                    className=""
                    style={{
                        background: "#333954",
                        color: "white",
                        textAlign: "center",
                        padding: "25px",
                        paddingInline: "275px",
                        marginTop: "140px",
                        paddingBlock: "120px",
                    }}
                >
                    <h1 style={{ fontSize: "42px" }}>Write with Confidence</h1>
                    <p style={{ width: "400px", marginLeft: "230px", alignItems: "center", justifyContent: "center" }}>Join over 30 million people and 50,000 teams who use Writeophonic every day to make their writing shine.
                    </p>

                    <button
                        style={{
                            backgroundColor: "grey",
                            color: "white",
                            borderRadius: "6px",
                            height: "48px",
                            padding: "8px 32px",
                            border: "0",
                            cursor: "pointer",
                            width: "264px",
                            marginBlock: "20px",
                        }}
                        onMouseOver={(e) => {
                            e.target.style.cursor = "not-allowed";
                            e.target.style.backgroundImage = "url('block-icon.png')"; // Replace 'block-icon.png' with your actual image path
                            e.target.style.backgroundRepeat = "no-repeat";
                            e.target.style.backgroundPosition = "center";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.cursor = "pointer";
                            e.target.style.backgroundImage = "none";
                        }}
                    >
                        Not Available
                    </button>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Iphone;
