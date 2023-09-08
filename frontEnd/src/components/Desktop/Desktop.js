import React , {useState} from 'react'
import '../styles/faqs.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Desktop = () => {
    const [questionData, setQuestionData] = useState([
        {
            question: 'How do I install  Writeophonic on my computer?',
            answer: 'Download Writeophonic for Mac or Windows, open the file, and follow the installation prompts. If you need help, check out our step-by-step support article.',
            isOpen: false
        },
        {
            question: 'Does Writeophonic work in Microsoft Word?',
            answer: 'Yes,you can use Grammerly in Microsoft Word and Outlook',
            isOpen: false
        },
        {
            question: 'Is Writeophonic free on desktop?',
            answer: 'Yes, you can use Writeophonic Free for Mac or Windows for as long as you’d like. If you’re looking for more in-depth writing suggestions and customizable features, try Writeophonic Premium.',
            isOpen: false
        },
        {
            question: 'Does Writeophonic work in Apple Mail?',
            answer: 'Yes, Writeophonic will work in Apple Mail, Outlook, Gmail, and most other email clients.',
            isOpen: false
        },
        {
            question: 'Can I use Writeophonic in my Web browser?',
            answer: 'Yes, you can use Writeophonic in a variety of browsers by downloading Writeophonic for Windows and Mac or by using one of our browser extensions.',
            isOpen: false
        },
     


    ]);

    const toggleAnswer = (index) => {
        const updatedQuestionData = [...questionData];
        updatedQuestionData[index].isOpen = !updatedQuestionData[index].isOpen;
        setQuestionData(updatedQuestionData);
    };
    return (
        <div>
            <Navbar />
            <div>
                <div className="hero">
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
                            Desktop
                        </h1>
                        <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                            An all-in-one writing assistant that works on your desktop and in your browser. Use it in apps, word processors, email clients, and more.
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
                                width: "224px",
                            }}
                        >
                            <span style={{ fontWeight: "bolder" }}>Get Writeophonic</span> it's
                            free
                        </button>
                    </div>
                    <div className="right">
                        <img
                            width="470px"
                            height="396px"
                            src="https://images.ctfassets.net/1e6ajr2k4140/4DpvYrnqxH2az4Duwz93Pb/2d020ea565c9d08e8603031aa736f575/hero-new-browser__1_.png?w=1080&fm=webp"
                            alt=""
                        />
                    </div>
                </div>
                <div
                    className="icons"
                    style={{
                        paddingBlock: "130px",
                        backgroundColor: '#3260a8',
                        height: '250px',
                        color: 'white'
                    }}
                >
                    <div className="tag">
                        <img
                            src="https://images.ctfassets.net/1e6ajr2k4140/czEXdiaSH2t0aCTLxhbWq/069d933b634268d33b65bf97122ebbe2/Icons_mobile-text-check.svg"
                            alt=""
                        />
                        <h4>Write without Boundaries</h4>
                        <p>Writeophonic works where you do, including Word, Pages, email clients, desktop applications, and web browsers.</p>
                    </div>
                    <div className="tag">
                        <img
                            src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
                            alt=""
                        />
                        <h4>Quality and Speed</h4>
                        <p>

                            Generative AI to help you write, rewrite, ideate, or reply in seconds, plus suggestions to improve grammar, fluency, tone, and more.
                        </p>
                    </div>
                    <div className="tag">
                        <img
                            src="https://images.ctfassets.net/1e6ajr2k4140/UYqTHUpjMSbBAVdS6M1KS/a4a6df72a8a54d7742bb64d41f6acbca/Icons_browser-check.svg"
                            alt=""
                        />
                        <h4>All-in-One Experience</h4>
                        <p>
                            Install it on your computer to find prompts and suggestions where you need it—no copying or pasting required.</p>
                    </div>

                    <div className="tag">
                        <img
                            src="https://images.ctfassets.net/1e6ajr2k4140/765BvlKKf1duW85dh1b86f/535ffa8d0fe4ccd0bc639f81fbd5c850/Icons__3_.svg"
                            alt=""
                        />
                        <h4>Stay in Control</h4>
                        <p>
                            Prefer Writeophonic doesn’t see a particular piece of writing? Turn it off in any app or program with ease.
                        </p>
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
                        <h1 style={{ fontSize: "34px" }}>Use It with Emails, Messages, Documents, and More</h1>
                        {/* <p style={{ fontSize: "22px", paddingTop: "38px" }}>
                            Writeophonic browser extensions provide real-time writing suggestions
                            on Gmail, Google Docs, Twitter, LinkedIn, and everywhere else you
                            write online.
                        </p> */}
                    </div>
                    <div className="socialIcon1" style={{ paddingInline: "353px" }}>
                        <img
                            width="56px"
                            height="57px"
                            alt="Gmail"
                            loading="lazy"
                            class="icon-list-item_icon__KfjtG"
                            src="//images.ctfassets.net/1e6ajr2k4140/5BIK9ZnsBLWv9xHhbfS17B/b6e31e977ff3e5efafb4f39ae480573a/Title_Gmail__Type_Google.svg"
                        />

                        <img
                            width="56px"
                            height="57px"
                            alt="Outlook"
                            loading="lazy"
                            class="icon-list-item_icon__KfjtG"
                            src="//images.ctfassets.net/1e6ajr2k4140/4PxqUu8Lqc9QyWEocaGhjo/5178d202757133e93f99354cfe8eca2c/Title_Outlook__Type_MS_Office_Suite.svg"
                        />

                        <img
                            width="56px"
                            height="57px"
                            alt="Apple Mail"
                            loading="lazy"
                            class="icon-list-item_icon__KfjtG"
                            src="//images.ctfassets.net/1e6ajr2k4140/4xiqcmVnzJcPUGlSpFRkgg/f940735b899d5d228ad2a8f32b7b69a1/Title_Apple_mail__Type_Mac_Apps.svg"
                        />

                        <img
                            width="56px"
                            height="57px"
                            alt="Microsoft Word"
                            loading="lazy"
                            class="icon-list-item_icon__KfjtG"
                            src="//images.ctfassets.net/1e6ajr2k4140/2mYCUTyCNMKiSu3yx1H2sE/ad122a7cd990c34b04630312c8a96ec9/Title_Word__Type_MS_Office_Suite.svg"
                        />

                        <img
                            width="56px"
                            height="57px"
                            alt="Google Doc"
                            loading="lazy"
                            class="icon-list-item_icon__KfjtG"
                            src="//images.ctfassets.net/1e6ajr2k4140/6aLV63LtMKC2wVCWAsVh55/f0248e777e47ccbc8c49ca923c11b4ee/Title_Google_Doc__Type_Google.svg"
                        />

                        <img
                            width="56px"
                            height="57px"
                            alt="Slack"
                            loading="lazy"
                            class="icon-list-item_icon__KfjtG"
                            src="//images.ctfassets.net/1e6ajr2k4140/7DA3sXcFmdTm5WMScPm1nD/988e0b862140dda85040935bf658ba2c/Title_Slack__Type_Other.svg"
                        />

                        <img
                            width="56px"
                            height="57px"
                            alt="LinkedIn"
                            loading="lazy"
                            class="icon-list-item_icon__KfjtG"
                            src="//images.ctfassets.net/1e6ajr2k4140/5l7SIuV0OxL3rSbPABsVE/8fa1c287980d1023450b08df8a157be7/Title_LinkedIn__Type_Social_Media.svg"
                        />
                        <img
                            width="56px"
                            height="57px"
                            alt="Twitter"
                            loading="lazy"
                            class="icon-list-item_icon__KfjtG"
                            src="//images.ctfassets.net/1e6ajr2k4140/3AuSnhop3LbWaz04GlPEL3/c82257217b6c16561d8708c8a3f443f1/Title_Twitter__Type_Social_Media.svg"
                        />
                        <img
                            width="56px"
                            height="57px"
                            alt="Microsoft Teams"
                            loading="lazy"
                            src="//images.ctfassets.net/1e6ajr2k4140/3XR8vMfp82go58JKKCjWrq/37b06ae677c8e4dadf4e902d940c82f3/app-teams.png?w=1280"
                            class="icon-list-item_icon__KfjtG"
                        />

                        <img
                            width="56px"
                            height="57px"
                            alt="PowerPoint"
                            loading="lazy"
                            class="icon-list-item_icon__KfjtG"
                            src="//images.ctfassets.net/1e6ajr2k4140/7eLJH8pUzhCf1fQLrbUefH/216ce4916fefd5a8a467aa26f8b92b45/gmail__2_.svg"
                        />

                        <img
                            width="56px"
                            height="57px"
                            alt="Chrome"
                            loading="lazy"
                            src="//images.ctfassets.net/1e6ajr2k4140/2pf1CahvnyGJOe4ePjaAdW/fbceb2840b7657ded99f10907bc175a1/chrome.png?w=1280"
                            class="icon-list-item_icon__KfjtG"
                        />

                        <img
                            width="56px"
                            height="57px"
                            alt="Safari"
                            loading="lazy"
                            src="//images.ctfassets.net/1e6ajr2k4140/3wv37yfvrC57T1kz6dj2Lq/fc86da0746912db29c1fca440a5bf541/safari__1_.png?w=1280"
                            class="icon-list-item_icon__KfjtG"
                        />
                    </div>
                </div>
                {/* <div
                    className=""
                    style={{
                        textAlign: "center",
                        padding: "25px",
                        paddingInline: "325px",
                        marginBlock: "120px",
                    }}
                >
                    <h1> Great Writing Made Simple</h1>
                    <p
                        style={{ fontSize: "20px", lineHeight: "32px", marginTop: "30px" }}
                    >
                        From grammar and spelling to style and tone, Writeophonic makes it easy
                        to eliminate errors and find the perfect words to express yourself.
                    </p>
                </div> */}
                <div>
                    <div className="hero">
                        <div className="left1_" style={{ padding: "15px" }}>
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
                            >Check your grammar, spelling, and punctuation
                            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                                Get confident with writing mechanics. Writeophonic gives real-time feedback on commas, commonly confused words, and more.
                            </p>
                        </div>
                        <div className="right">
                            <img
                                width={"470px"}
                                height={"286px"}
                                src="https://images.ctfassets.net/1e6ajr2k4140/5EzkY6szmVKU40XPN5gi0Y/7f90a34ba9b02ea85a358527a5e663d0/suggestion-card.jpg?w=1080&fm=webp"
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
                                Make your ideas clear
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
                                Adjust your tone
                            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                                Tone is tricky to convey in writing. Writeophonic includes a tone detector to help you understand how your message will sound to a reader—before you hit send.

                            </p>
                        </div>
                        <div className="right">
                            <img
                                width={"470px"}
                                height={"352px"}
                                src="https://images.ctfassets.net/1e6ajr2k4140/5u8vlXoRuNaIWQaFSFOubz/b80535f271db656cbd593ca5036f84a1/tone-detector-card.png?w=1080&fm=webp"
                                alt=""
                            />
                        </div>
                    </div>
                    {/* <div className="hero">
                        <div className="right">
                            <img
                                width={"470px"}
                                height={"286px"}
                                src="https://images.ctfassets.net/1e6ajr2k4140/3IVkp0NmHzZWU73DiNAd66/5c93139c99a6bc81d785a83f45f36647/prod-example-4.png?w=1080&fm=webp"
                                alt=""
                            />
                        </div>
                        <div className="left1_" style={{ padding: "25px" }}>
                            <p style={{ fontSize: "12px", color: "grey" }}>
                                FULL-SENTENCE REWRITES
                            </p>
                            <h1
                                style={{
                                    fontFamily: "Inter,sans-serif",
                                    fontSize: "40px",
                                    letterSpacing: "-.005em",
                                    lineHeight: "42px",
                                    marginBlock: "20px",
                                }}
                            >
                                Find the perfect words
                            </h1>
                            <p style={{ fontSize: "20px", lineHeight: "32px" }}>
                                Got something on the tip of your tongue? Writeophonic provides word
                                choice enhancements to help you say precisely what you mean.
                            </p>
                        </div>
                    </div> */}
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
                            <p style={{ fontSize: "12px", color: "grey" }}>
                                FULL-SENTENCE REWRITES
                            </p>
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
                {/* FAQS */}
                <div className='faq'>
                    <h1>Frequently Asked Questions</h1>
                    <div className='questioncontainer'>
                        {questionData.map((question, index) => (
                            <div
                                key={index}
                                className={`question ${question.isOpen ? 'active' : ''}`}
                                onClick={() => toggleAnswer(index)}
                                style={{ marginBottom: '10px' }} // Add margin here
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
                        textAlign: "center",
                        padding: "25px",
                        paddingInline: "275px",
                        marginBlock: "140px",
                        paddingBlock: "120px",
                        backgroundColor:'#3260a8',
                        color:'white'
                    }}
                >
                    <h1 style={{ fontSize: "42px" }}> Write Your Best with Writeophonic</h1>
                    <p
                        style={{
                            fontSize: "22px",
                            lineHeight: "32px",
                            marginTop: "30px",
                        }}
                    >
                        Join over 30 million people and 50,000 teams who use Writeophonic every day to make their writing shine.
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
            <Footer />
        </div>
    )
}

export default Desktop