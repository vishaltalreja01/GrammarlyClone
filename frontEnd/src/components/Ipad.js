import React from "react";
import { useState } from "react";
import "./Iphone.css"
import ipad from "../images3/ipad.png"

import cleanitup from "../images3/cleanitup.png"
import confidence from "../images3/confidence.png"
import statistic from "../images3/statistic.png"
import workincloud from "../images3/workincloud.png"
import social from "../images3/icons.png"
import deen from "../images3/Dean.png"
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";


const Iphone = () => {





    const [questionData, setQuestionData] = useState([
        {
            question: 'How do I install and use Writeophonic on my iPad?',
            answer: 'Download Writeophonic from the App Store and follow the installation prompts. If you need additional help, check out our support article.',
            isOpen: false
        },
        {
            question: 'How does Grammerly work on my iPad?',
            answer: 'Grammerly for iPhone is several apps in one-by installing it once,you will access to Writeophonic keyboard for iOS, the Writeophonic iPad Editor and the Writeophonic browser extention for safari on your iPad.',
            isOpen: false
        },
        {
            question: 'What does Writeophonic keyboard offer beyond my device native keyboard?',
            answer: 'The Writeophonic Keyboard brings Writeophonic writing suggestions straight to you in any app, including texts, emails, and social media postsWriting feedback goes beyond your phones standard autocorrect and helps ensure your writing is clear and correct.',
            isOpen: false
        },
        {
            question: 'How can i store documents on Writeophonic via my iPad?',
            answer: 'The Writeophonic Editor offers cloud-based storage for your documents. By creating or saving a document in the Writeophonic Editor, you can access it from your iPhone, iPad, or desktop through the Writeophonic app.',
            isOpen: false
        },
        {
            question: 'Can i access Writeophonic documents from my iPad on other devices?',
            answer: 'Yes, you sure can! If you save a document to the Writeophonic Editor, you can access and edit it on your iPhone, iPad, or desktop.',
            isOpen: false
        },
        {
            question: 'Is my data is secure on Writeophonic for iPad?',
            answer: 'We take your privacy and security extrememly seriously. Read more about what we do to keep your information safe.',
            isOpen: false
        },
        {
            question: 'Can i use Writeophonic on my iPhone?',
            answer: 'Absolutely! Download the Writeophonic app on your iPad and follow the installation prompts to get started.',
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
            <Navbar/>
            <div>
                <div className="hero" style={{
                    backgroundColor: "#333954",
                    height: "500px"
                }}>
                    <div className="right">
                        <img
                            width={"460px"}
                            height={"500px"}
                            src={ipad}
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
                            Writeophonic for iPad
                        </h1>
                        <p style={{
                            fontSize: "20px", lineHeight: "32px", width: "760px", color: "white"
                        }}>
                            Write your best with real-time writing suggestions in all your apps.
                            <p style={{
                                display: "flex",
                                justifyContent: "center"

                            }}>Also available on iPhone</p>
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
                            Clean it up on the go
                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                            Fix typos and mistakes in seconds.
                        </p>
                    </div>
                    <div className="right">
                        <img
                            width={"470px"}
                            height={"422px"}
                            src={cleanitup}
                            alt=""
                        />
                    </div>
                </div>
                <div className="hero">
                    <div className="right">
                        <img
                            width={"600px"}
                            height={"422px"}
                            src={confidence}
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
                            Make yourself clear

                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px", }}>
                            Cut out unnecessary words with ease.
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
                      Explore your writing statistics


                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                        Track your improvement over time.
                        </p>
                    </div>
                    <div className="right">
                        <img
                            width={"470px"}
                            height={"422px"}
                            src={statistic}
                            alt=""
                        />
                    </div>
                </div>














                <div className="hero">
                    <div className="right">
                        <img
                            width={"600px"}
                            height={"500px"}
                            src={workincloud}
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
                            Work in the cloud


                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px", }}>
                            Access your documents from anywhere.
                        </p>
                    </div>
                </div>



















































                <div className="socialIcons" style={{ paddingTop: "10px", backgroundColor: "#F9FAFF" }}>
                    <div
                        className=""
                        style={{
                            textAlign: "center",

                            paddingInline: "305px",
                            marginBlock: "70px",
                        }}
                    >
                        <h1> Works in Your Favorite Apps</h1>

                    </div>
                    <div className="socialIcon1" >
                        <img
                            width="460px"
                            height="250px"
                            alt="Gmail"
                            loading="lazy"

                            src={social}
                        />


                    </div>
                </div>










                

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop:"70px"
                }}>
                    <p style={{
                        width: "500px"
                    }}>““iPhone Editor is everything I hoped for and more! I am over the moon. The iPhone app has fun analytics and features like charts of word usage. This is precisely why I recommend Writeophonic to everyone. I love it. ”</p>
                    <img
                        width="280px"
                        height="180px"
                        alt=""
                        src={deen}
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
            <Footer />
        </>
    );
};

export default Iphone;
