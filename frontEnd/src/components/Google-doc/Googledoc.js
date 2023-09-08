import React from 'react'
import './google-doc.css'
import image1 from '../../images2/image1.png'
import image2 from '../../images2/image2.png'
import image3 from '../../images2/image3.png'
import image4 from '../../images2/image4.png'
import imagegoogledoc from '../../images2/google-doc-image.png'
import imagegoogledocimprove from '../../images2/google-doc-imrpove-word.png'
import edge from '../../images2/edgeicon.png'
import firefox from '../../images2/firefoxicon.png'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
const Googledoc = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <div className="hero" style={{ backgroundColor: '#1a2638', color: 'white' }}>
                    <div className="left">
                        <h1
                            style={{
                                fontFamily: "Inter,sans-serif",
                                fontSize: "42px",
                                letterSpacing: "-.005em",
                                lineHeight: "52px",
                            }}
                        >
                            Writeophonic for Your
                            <br />
                            Browser
                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                            Writeophonic’s browser extensions improve grammar, clarity, and more
                            as you write on your favorite sites.
                        </p>
                        <button
                            style={{
                                backgroundColor: "white",
                                color: "blue",
                                borderRadius: "6px",
                                height: "48px",
                                padding: "8px 32px",
                                border: "0",
                                cursor: "pointer",
                                width: "224px",
                            }}
                        >
                            <span style={{ fontWeight: "bolder", color: 'blue' }}>Get Writeophonic</span> it's
                            free
                        </button>
                    </div>
                    <div className="right" >
                        <img
                            width="470px"
                            height="396px"
                            src="https://images.ctfassets.net/1e6ajr2k4140/4DpvYrnqxH2az4Duwz93Pb/2d020ea565c9d08e8603031aa736f575/hero-new-browser__1_.png?w=1080&fm=webp"
                            alt=""
                        />
                    </div>
                </div>
                <div
                    className="mt-icons "
                    style={{
                        paddingBlock: "125px",
                        backgroundColor: '#1a2638',
                        color: 'white'
                    }}
                >

                    <div className="tag">
                        <img
                            // src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
                            src={image1}
                            alt=""
                        />

                        <p>Write confidently across the web.</p>
                    </div>
                    <div className="tag">
                        <img
                            // src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
                            src={image2}
                            alt=""
                        />

                        <p>
                            Improve grammar, style, tone, and more.
                        </p>
                    </div>
                    <div className="tag">
                        <img
                            // src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
                            src={image3}
                            alt=""
                        />

                        <p>Save time on proofreading and polishing.</p>
                    </div>

                    <div className="tag">
                        <img
                            // src="https://images.ctfassets.net/1e6ajr2k4140/765BvlKKf1duW85dh1b86f/535ffa8d0fe4ccd0bc639f81fbd5c850/Icons__3_.svg"
                            src={image4}
                            alt=""
                        />

                        <p>Install and start writing in minutes.</p>
                    </div>
                </div>

                <div
                    className=""
                    style={{
                        textAlign: "center",
                        padding: "25px",
                        paddingInline: "325px",
                        marginBlock: "120px",
                    }}
                >
                    <h1> Write Your Best with Writeophonic for Google Docs</h1>

                </div>
                <div>
                    <div className="hero">

                        <div className="right">
                            <img
                                width={"470px"}
                                height={"286px"}
                                src="https://images.ctfassets.net/1e6ajr2k4140/5EzkY6szmVKU40XPN5gi0Y/7f90a34ba9b02ea85a358527a5e663d0/suggestion-card.jpg?w=1080&fm=webp"
                                alt=""
                            />
                        </div>
                        <div className="left1_" style={{ padding: "25px" }}>
                            {/* <p style={{ fontSize: "12px", color: "grey" }}>
              TONE SUGGESTIONS
            </p> */}
                            <h1
                                style={{
                                    fontFamily: "Inter,sans-serif",
                                    fontSize: "40px",
                                    letterSpacing: "-.005em",
                                    lineHeight: "42px",
                                    marginBlock: "20px",
                                }}
                            >
                                Catch spelling and grammar issues            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                                Get confident with writing mechanics. Writeophonic gives real-time
                                feedback on commas, commonly confused words, and more.
                            </p>
                        </div>
                    </div>
                    <div className="hero">
                    <div className="left1_" style={{ padding: "25px" }}>
                            {/* <p style={{ fontSize: "12px", color: "grey" }}>
                                FULL-SENTENCE REWRITES
                            </p> */}
                            <h1
                                style={{
                                    fontFamily: "Inter,sans-serif",
                                    fontSize: "40px",
                                    letterSpacing: "-.005em",
                                    lineHeight: "42px",
                                    marginBlock: "20px",
                                }}
                            >
                                Eliminate wordiness
                            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                            Replace wordy phrases that bog down your writing with crisp, concise alternatives.
                            </p>
                        </div>
                        <div className="right">
                            <img
                                width={"470px"}
                                height={"352px"}
                                src={imagegoogledoc}
                                alt=""
                            />
                        </div>
                        
                    </div>
                    <div className="hero">
                       
                        <div className="right">
                            <img
                                width={"470px"}
                                height={"321px"}
                                src="https://images.ctfassets.net/1e6ajr2k4140/5nugNtl5kyaJIjJ8qVZBCN/466315d21ad758408332b3abe1d4ebcc/premium-suggestion__1_.png?w=1080&fm=webp"
                               
                                alt=""
                            />
                        </div>
                        <div className="left1_" style={{ padding: "25px" }}>
                            {/* <p style={{ fontSize: "12px", color: "grey" }}>
                                CUSTOM STYLE GUIDES
                            </p> */}
                            <h1
                                style={{
                                    fontFamily: "Inter,sans-serif",
                                    fontSize: "40px",
                                    letterSpacing: "-.005em",
                                    lineHeight: "42px",
                                    marginBlock: "20px",
                                }}
                            >
                               Make yourself clear
                            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                                Long, complicated sentences are hard to understand, even if
                                they’re grammatically correct. Writeophonic suggests concise
                                alternatives for wordy phrases. Try Writeophonic Premium for
                                full-sentence rewrite suggestions.
                            </p>
                        </div>
                    </div>
                    <div className="hero">
                    <div className="left1_" style={{ padding: "25px" }}>
                            {/* <p style={{ fontSize: "12px", color: "grey" }}>
                                FULL-SENTENCE REWRITES
                            </p> */}
                            <h1
                                style={{
                                    fontFamily: "Inter,sans-serif",
                                    fontSize: "40px",
                                    letterSpacing: "-.005em",
                                    lineHeight: "42px",
                                    marginBlock: "20px",
                                }}
                            >
                               Improve word choice
                            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                                Got something on the tip of your tongue? Writeophonic provides word
                                choice enhancements to help you say precisely what you mean.
                            </p>
                        </div>
                        <div className="right">
                            <img
                                width={"470px"}
                                height={"286px"}
                                // src="https://images.ctfassets.net/1e6ajr2k4140/3IVkp0NmHzZWU73DiNAd66/5c93139c99a6bc81d785a83f45f36647/prod-example-4.png?w=1080&fm=webp"
                                src={imagegoogledocimprove}
                                alt=""
                            />
                        </div>
                       
                    </div>
                </div>
                <div
                    className=""
                    style={{
                        textAlign: "center",
                        padding: "25px",
                        paddingInline: "325px",
                        marginBlock: "120px",
                    }}
                >
                    <h1>Find Your Momentum with Generative AI Assistance</h1>
                    <p
                        style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}
                    >
                       Writeophonic Free provides you with a monthly allowance of prompts to power WriteophonicGO, your AI writing assistant. Use these prompts across apps and websites to compose drafts, rewrite text, generate ideas, and quickly respond to emails.
                    </p>
                </div>
                <div>
                    <div className="hero">
                        <div className="right">
                            <img
                                width={"470px"}
                                height={"361px"}
                                src="https://images.ctfassets.net/1e6ajr2k4140/5ETMXDDEzlh9DSvoCFqy04/884c23d0246fd80c4f95ffec61d0addd/Compose.png?w=1080&fm=webp"
                                alt=""
                            />
                        </div>
                        <div className="left1_" style={{ padding: "25px" }}>
                            {/* <p style={{ fontSize: "12px", color: "grey" }}>
                                FULL-SENTENCE REWRITES
                            </p> */}
                            <h1
                                style={{
                                    fontFamily: "Inter,sans-serif",
                                    fontSize: "40px",
                                    letterSpacing: "-.005em",
                                    lineHeight: "42px",
                                    marginBlock: "20px",
                                }}
                            >
                                Accelerate your writing process
                            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                                Prompt WriteophonicGO with basic instructions to get polished
                                drafts in seconds. You give some background, and WriteophonicGO
                                gets your message onto the page.
                            </p>
                        </div>
                    </div>
                    <div className="hero">
                        <div className="left1_" style={{ padding: "25px" }}>
                            {/* <p style={{ fontSize: "12px", color: "grey" }}>
                                CUSTOM STYLE GUIDES
                            </p> */}
                            <h1
                                style={{
                                    fontFamily: "Inter,sans-serif",
                                    fontSize: "40px",
                                    letterSpacing: "-.005em",
                                    lineHeight: "42px",
                                    marginBlock: "20px",
                                }}
                            >
                                Ideas that come to you
                            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                                Jump-start any document with ideas or structure delivered
                                straight to the page you’re already on. Brainstorms, outlines,
                                and new perspectives are at your fingertips.
                            </p>
                        </div>
                        <div className="right">
                            <img
                                width={"470px"}
                                height={"492px"}
                                src="https://images.ctfassets.net/1e6ajr2k4140/GHeDlH93su85znb6oOpVH/6decf5298543a945b1ae609dc6fe32c7/Frame_31613020.png?w=1080&fm=webp"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="gradient"
                    style={{
                        marginTop: "40px",
                        background: "#f9faff",
                        paddingBlock: "120px",
                    }}
                >
                    <div className="hero">
                        <div className="left1">
                            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                                “Writeophonic allows me to get those communications out and feel
                                confident that I’m putting my best foot forward. Writeophonic is
                                like a little superpower, especially when I need to be at 110%.”
                            </p>
                        </div>
                        <div className="right1" style={{}}>
                            <figure class="_1tgaf-author">
                                <img
                                    src="https://static.grammarly.com/assets/files/dbd17c37cf339e73f106ff535431d2b9/jeanette.png"
                                    alt=""
                                    width={65}
                                />
                                <figcaption>
                                    <h3 style={{ color: "#0E101A" }} className="_2HcMy-h5">
                                        Jeanette Stock
                                    </h3>
                                    <div
                                        style={{ color: "#6D758D" }}
                                        className="_1_z68-large _2sETg-compact"
                                    >
                                        Co-founder of
                                        <br />
                                        Venture Out
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div
                        className="yD_za-iconsBlock"
                        style={{ display: "flex", justifyContent: "center", gap: "65px" }}
                    >
                        <div
                            className="_3xo_H-icons"
                            style={{ display: "flex", gap: "65px" }}
                        >
                            <img
                                src="https://static.grammarly.com/assets/files/e6ac9d65876ff8a924f98e36b8236ab5/new_york_times.svg"
                                alt="New York Times"
                            />
                            <img
                                src="https://static.grammarly.com/assets/files/3134cdd1afbfd5e7593aea192a9d9b6e/wsj.svg"
                                alt="Wall Street Journal"
                            />
                            <img
                                src="https://static.grammarly.com/assets/files/76bc0dfab2ffb9e2480ee0c38b47f73b/usa_today.svg"
                                alt="USA Today"
                            />
                            <img
                                src="https://static.grammarly.com/assets/files/9564120ba110f43524c2f68ee09c6eaf/techcrunch.svg"
                                alt="Tech Crunch"
                            />
                            <img
                                src="https://static.grammarly.com/assets/files/e98b9ff97c43f218b3a0c42c885990fa/forbes.svg"
                                alt="Forbes"
                            />
                        </div>
                    </div>
                </div>
                <div className="socialIcons" style={{ padding: "55px" }}>
          <div
            className=""
            style={{
              textAlign: "center",
              padding: "25px",
              paddingInline: "305px",
              marginBlock: "70px",
            }}
          >
            <h1>Works Where You Write</h1>
            <p style={{ fontSize: "22px", paddingTop: "38px" }}>
              Writeophonic browser extensions provide real-time writing suggestions
              on Gmail, Google Docs, Twitter, LinkedIn, and everywhere else you
              write online.
            </p>
          </div>
          <div className="socialIcon1" style={{ paddingInline: "353px", }}>
          <img
          style={{marginLeft:'10px'}}
              width="56px"
              height="57px"
              alt="Chrome"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/2pf1CahvnyGJOe4ePjaAdW/fbceb2840b7657ded99f10907bc175a1/chrome.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />
            <img 
            style={{marginLeft:'10px'}}
              width="56px"
              height="57px"
              alt='edge'
              loading="lazy"
              src={edge}
            //   src="//images.ctfassets.net/1e6ajr2k4140/3XR8vMfp82go58JKKCjWrq/37b06ae677c8e4dadf4e902d940c82f3/app-teams.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />

            <img
            style={{marginLeft:'10px'}}
              width="56px"
              height="57px"
              alt="PowerPoint"
              loading="lazy"
              class="icon-list-item_icon__KfjtG"
              src={firefox}
            //   src="//images.ctfassets.net/1e6ajr2k4140/7eLJH8pUzhCf1fQLrbUefH/216ce4916fefd5a8a467aa26f8b92b45/gmail__2_.svg"
            />

           

            <img
            style={{marginLeft:'10px'}}
              width="56px"
              height="57px"
              alt="Safari"
              loading="lazy"
              src="//images.ctfassets.net/1e6ajr2k4140/3wv37yfvrC57T1kz6dj2Lq/fc86da0746912db29c1fca440a5bf541/safari__1_.png?w=1280"
              class="icon-list-item_icon__KfjtG"
            />
          </div>
        </div>


                <div
                    className=""
                    style={{
                        backgroundColor:'blue',
                        color:'white',
                        textAlign: "center",
                        padding: "25px",
                        paddingInline: "275px",
                        marginBlock: "140px",
                        paddingBlock: "120px",
                    }}
                >
                    <h1 style={{ fontSize: "42px" }}> Cleaner, Clearer Documents in Seconds</h1>
                    <p
                        style={{
                            fontSize: "22px",
                            lineHeight: "32px",
                            marginTop: "30px",
                        }}
                    >
                        Join over 30 million people who use Writeophonic every day to make
                        their writing shine.
                    </p>
                    <button
                        style={{
                            background: "white",
                            color: "blue",
                            borderRadius: "6px",
                            height: "48px",
                            padding: "8px 32px",
                            border: "0",
                            cursor: "pointer",
                            width: "234px",
                            marginTop: "85px",
                        }}
                    >
                        <span style={{ fontWeight: "bolder",color:'blue' }}>Get Writeophonic</span> it's
                        free
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Googledoc