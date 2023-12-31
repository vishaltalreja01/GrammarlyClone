import React from 'react'
import { useState } from 'react'
import "./Windows"
import "./Paraphrasingtool.css"
import "./FAQ"
import icon1 from "../images4/icon1.png"
import icon2 from "../images4/icon2.png"
import icon3 from "../images4/icon3.png"
import paraphrasing from "../images4/paraphrasing.png"
import pic1 from "../images4/pic1.png"
import pic2 from "../images4/pic2.png"
import pic3 from "../images4/pic3.png"
import pic4 from "../images4/pic4.png"
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
const Paraphrasingtool = () => {
    const [text, setText] = useState('');

    const handleTrySampleText = () => {
      const sampleText = "In order to give readers an overview of what they are reading, the conclusions of a research paper should summarise key elements and guide them in their understanding. Although conclusions do not normally provide new information about which the article did not mention, they have been frequently recasting issues or offering different views on this subject.";
      setText(sampleText);
    };

    const [questionData, setQuestionData] = useState([
        {
            question: 'Are Paraphrasing,rewording and rephrasing the same thing',
            answer: 'The words paraphrasing, rewording, and rephrasing tend to be used interchangeably in everyday speech, but they have difference Paraphrasing, often used in academia, is the act of taking someone elses idea or writing and putting it into your own words. Often this involves summarizing sentences, but you can also paraphrase paragraphs, essays, articles, or larger works. No matter what youre paraphrasing, however, to avoid plagiarism you will need to cite the original source wherever you use a paraphrase Rewording involves replacing some of the words in a sentence or piece of writing with synonyms.Rephrasing implies restructuring or reordering a piece of writing Youll often use rewording and rephrasing when creating a paraphrase',
            isOpen: false
        },
        {
            question: 'What is an Example of paraphrase',
            answer: 'Here an example of a paraphrase. It rewords and rephrases the original text, and it also includes an in-text citation of the original source Original text: Its been demonstrated that increasing CO2 levels in a greenhouse environment changes pea plants growth patternsParaphrase: When carbon dioxide levels are increased in greenhouse conditions, its been shown that pea plants grow differently (Bawa, 2022).',
            isOpen: false
        },
        {
            question: 'How paraphrasing is different from plagiarazing',
            answer: 'Paraphrasing involves putting someone else writing or ideas into your own words. Plagiarism is when you use someone else ideas in your work without crediting them via a citation. To avoid unintentional plagiarism, you may want to use Writeophonic plagiarism checker, which scans your writing against academic databases and 90 billion online texts and then flags any instances of unoriginal wording.',
            isOpen: false
        },
        {
            question: 'Is using paraphrasing tool considered cheating',
            answer: 'Using a paraphrasing tool is not cheating. Its a helpful way to speed up your work or get inspiration for writing your own paraphrases. That said, be sure to credit to your original source whenever you use a paraphrase-even one generated by a free paraphrasing tool-in your work. Otherwise, you risk plagiarising. We provide guidance on how to cite a paraphrase below',
            isOpen: false
        },
        {
            question: 'Why are citations an important element of phrasing?',
            answer: 'Citations are essential to avoiding plagiarism. Anytime you use an idea that not your own, whether you are quoting or paraphrasing, you need to credit the original source using a citation style, such as APA, MLA, or Chicago. The type of citation you should use depends on your course of study and your professor requirements.',
            isOpen: false
        },
        {
            question: 'How do you cite a paraphrase in APA, MLA andchicago style format',
            answer: 'The easiest way to cite is using a free citation tool, like Writeophonic MLA Citation Generator, APA Citation Generator, or Chicago Citation Generator. Simply enter the information for the original source of the paraphrase into the tool. It will then instantly create the in-text citations you need to place after a quote or paraphrase in your work; it will also generate the full citations you need to include in your bibliography, works cited, or references page (for MLA, APA, and Chicago-style citations, respectively).',
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

<div className='main-div'>
   <figcaption className='figcaption'>
      <header>
        <h1 className="T1_dkKeNHYB">Free Paraphrasing Tool<br /></h1>
        <div ></div>
        <div className="C2_dkKeNHYB">Quickly reword sentences for essays, emails, articles, and more with this free online paraphrasing tool.<br /></div>
      </header>
      <div></div>
    </figcaption>
   <div className='paraphrasing'>
  <div className="single-column_singleCol__3j8lY single-column_alignDefault__2MDuz">
   
    <div style={{ height: '40px', flexShrink: 0 }}></div>
    <div className="paraphrasing_container__1s0Lj" id="paraphrasing-tool">
      <div className="text-area_textAreaContainer__U9qBp">
        <label htmlFor="paraphraseTextArea" className="paraphrasing_textAreaLabel__Doacb C4_dkKeNHYB">Enter the text you’d like to paraphrase below. You can further modify a sentence by selecting another option below.</label>
        <textarea
          id="paraphraseTextArea"
          className="text-area"
          style={{ height: '52px' }}
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></textarea>
        <div className="paraphrasing_belowTextAreaRow__2KgTx C4_dkKeNHYB">
          <span className=""></span>
          <span className='characters' aria-live="polite" aria-role="status" aria-atomic="true" title="0 out of 500 characters">
            <span   aria-hidden="true">0/500 characters</span>
          </span>
        </div>
      </div>
      <div className="toolbar">
        <button disabled className="base" type="button" data-status="disabled">
          <span className="content_PbRSndwM">Paraphrase it</span>
        </button>
        <button
          className="base2"
          type="button"
          data-status="enabled"
          onClick={handleTrySampleText}
        >
          <span className="content_PbRSndwM">Try sample text</span>
        </button>
      </div>
      <div className="suggestions" aria-live="polite">
        <span className="suggestions_iconAndText__S1JHB">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2532_7463)">
              <rect width="28" height="28" fill="#191919"></rect>
              <path fillRule="evenodd" clipRule="evenodd" d="M14 23C18.9707 23 23 18.9703 23 14C23 9.02926 18.9707 5 14 5C9.02965 5 5 9.02926 5 14C5 18.9703 9.02965 23 14 23ZM15.8059 16.4378C15.5066 16.4378 15.2295 16.2358 15.1763 15.9412C15.1063 15.5546 15.4017 15.2177 15.7758 15.2177H19.087V18.6909C19.087 19.065 18.7505 19.3604 18.3635 19.2908C18.0689 19.2375 17.8673 18.9601 17.8673 18.6611V18.0812L17.982 17.4395C17.0135 18.5582 15.5919 19.2497 14.004 19.2497C10.9812 19.2497 8.55077 16.7481 8.72646 13.6841C8.8779 11.0511 11.0074 8.89771 13.6389 8.72123C15.66 8.58584 17.4572 9.58484 18.4574 11.1461C18.6155 11.4185 18.5388 11.7648 18.2759 11.9471C17.9988 12.1393 17.6189 12.0598 17.4267 11.7832C16.7036 10.7666 15.442 9.90297 14.004 9.90297C11.2449 9.90297 9.12755 12.6711 10.2396 15.5702C10.7295 16.8474 11.8905 17.7619 13.2421 17.974C14.9024 18.2346 16.4211 17.6441 17.2956 16.3611L16.749 16.4378H15.8059Z" fill="white"></path>
            </g>
            <defs>
              <clipPath id="clip0_2532_7463">
                <rect width="28" height="28" rx="14" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <span className="C4_dkKeNHYB">Suggestions will appear below</span>
        </span>
        <div className="suggestions_buttonRow__Mnq1F">
          <button aria-label="Previous sentence" disabled className="base_PbRSndwM paddingCompact_PbRSndwM suggestions_arrowIconButton__11UY-" type="button" data-status="disabled">
            <span className="content_PbRSndwM">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke="transparent">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.854 6.146a.5.5 0 0 1 0 .708L9.707 12l5.147 5.146a.5.5 0 0 1-.707.708L8.293 12l5.854-5.854a.5.5 0 0 1 .707 0Z" fill="#646B81"></path>
              </svg>
            </span>
          </button>
          <button aria-label="Next sentence" disabled className="base_PbRSndwM paddingCompact_PbRSndwM suggestions_arrowIconButton__11UY-" type="button" data-status="disabled">
            <span className="content_PbRSndwM">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke="transparent">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.146 6.146a.5.5 0 0 1 .708 0L15.707 12l-5.853 5.854a.5.5 0 0 1-.708-.708L14.293 12 9.146 6.854a.5.5 0 0 1 0-.708Z" fill="#646B81"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <a href="https://Writeophonic.com" className="base_link" type="button" data-status="enabled">
        <span className="content_link">
          <span>Explore Writeophonic</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke="transparent" className="suggestions_extraCtaIcon__jnmuw">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.146 6.146a.5.5 0 0 1 .708 0L15.707 12l-5.853 5.854a.5.5 0 0 1-.708-.708L14.293 12 9.146 6.854a.5.5 0 0 1 0-.708Z" fill="#646B81"></path>
          </svg>
        </span>
      </a>
    </div>
  </div>
</div>
   </div>
            <div style={{ alignItems: "center", margin: "100px" }}>

                <h1>Rewrite Sentences in Seconds</h1>
                <p>
                    Writeophonic’s free paraphrasing tool lets you quickly create high-quality <br />paraphrases to simplify your own or others’ writing in a new and<br />
                    articulate way.</p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                    <div style={{ display: "flex", flexDirection: "column", textAlign: "left", width: "230px", padding: "40px" }}>
                        <img
                            width="100px"
                            height="100px"
                            src={icon1}
                            alt=""
                        />
                        <p>Save time by paraphrasing even the most complicated sentences in one click.
                        </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "left", width: "230px", padding: "40px" }}>
                        <img
                            width="100px"
                            height="100px"
                            src={icon2}
                            alt=""
                        />
                        <p>Make your points eloquently by customizing the length and formality of each paraphrase to fit your needs.
                        </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "left", width: "230px", padding: "40px" }}>
                        <img
                            width="100px"
                            height="100px"
                            src={icon3}
                            alt=""
                        />
                        <p>Feel confident in your rewrites, even if English is your second language.
                        </p>
                    </div>
                </div>

            </div>


            <div className="hero" style={{
                backgroundColor: "#F9FAFF",


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
                        What Is Paraphrasing?
                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left" }}>

                        Paraphrasing is the act of putting someone else’s idea or writing in different words. You might use paraphrasing to clearly convey a concept or integrate another person’s ideas into an article or paper; you’ll also need to cite your source when including paraphrased text in your written work.

                        No matter what you want to reword or why, the easiest, fastest way to paraphrase is to use a free paraphrasing tool like the one at the top of this page.




                    </p>
                </div>
                <div className="right">
                    <img
                        width={"400px"}
                        height={"300px"}
                        src={paraphrasing}
                        alt=""
                    />
                </div>
            </div>
            <div className="hero" style={{
                backgroundColor: "#3659B5",


            }}>
                <div className="left1_" style={{ padding: "25px" }}>
                    <h1
                        style={{
                            fontFamily: "Inter,sans-serif",
                            fontSize: "28px",
                            letterSpacing: "-.005em",
                            lineHeight: "42px",
                            marginBlock: "20px",
                            textAlign: "left",
                            color: "white"
                        }}
                    >
                        Watch and Learn
                    </h1>
                    <p style={{ fontSize: "20px", lineHeight: "32px", textAlign: "left", color: "white" }}>


                        Avoid plagiarism and make the grade with this <br />thorough breakdown of how to paraphrase<br /> sources in your writing.



                    </p>
                </div>
                <div className="right">
                    <video width={400} height={300} controls>
                        <source src="https://youtu.be/EraEV3aOMJc?list=TLGGid2ea9dB54QxNTA2MjAyMw" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>



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



            <div style={{ backgroundColor: "#F9FAFF", marginTop: "50px", padding: "100px", height: "600px" }}>
                <h1>Get More from Writeophonic</h1>
                <p>
                    In addition to creating paraphrases, Writeophonic can help you zip through <br />citations, avoid plagiarism, and polish your writing, leaving you with more <br />time to focus on big ideas and better communication.</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center",marginTop:"50px" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }}>

                        <img
                            width="400px"
                            height="200px"
                            src={pic1}
                            alt=""
                        />
                        <p style={{ marginLeft: "20px" }}>
                            <a href="https://example.com">Writeophonic Checker</a>
                        </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }}>

                        <img
                            width="400px"
                            height="200px"
                            src={pic2}
                            alt=""
                        />
                        <p style={{ marginLeft: "20px" }}>
                            <a href="https://example.com">Plagiarism Checker</a>
                        </p>
                    </div>
                
               

                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center",marginTop:"20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }}>

                        <img
                            width="400px"
                            height="200px"
                            src={pic3}
                            alt=""
                        />
                        <p style={{ marginLeft: "20px" }}>
                            <a href="https://example.com">Easy Checker</a>
                        </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }}>

                        <img
                            width="400px"
                            height="200px"
                            src={pic4}
                            alt=""
                        />
                        <p style={{ marginLeft: "20px" }}>
                            <a href="https://example.com">Citation Checker</a>
                        </p>
                    </div>
                
               

                </div>



            </div>



            <div style={{ backgroundColor: "#1F243C", height: "300px", color: "white", padding: "100px",marginTop:"50px" }}>
                <h1>Great Writing, Simplified</h1>
                <p>
                    Get started and join 30 million people who use Writeophonic’s to write <br />more efficiently and effectivly</p>
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

export default Paraphrasingtool