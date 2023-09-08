import React,{useState} from 'react'
import "./Business.css"
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';



const BusinessBlog = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
    <Navbar/>
  <div className="_1J0o0-front" style={{ display: "flex", marginLeft: "100px", marginRight: "200px" ,color:"black"}}>
  <div className="_19BAb-container" style={{ backgroundColor: "white", padding: "10px" }}>
    <div className="_2uS8a-hero">
      <a className="_3-G_R-sticky _3aaaa-hoverable" href="/blog/engineering/grammarly-nlp-building-future-communication/" style={{textDecoration: "none",color:"black",marginTop:"`100px" }}>
        <div className="mHcHR-details">
          <span className="_23eVD-category">NLP/ML</span>
          <h1 className="_3RYv1-title">How Writeophonic's NLP Team Is Building the Future of Communication</h1>
          <span className="_3xqy--date">August 30, 2021</span>
        </div>
      </a>
    </div>
  </div>
  
  <a
    className="W57EG-stickyPost"
    href="/blog/engineering/grammarly-nlp-building-future-communication/"
    style={{ marginRight: "20px", textDecoration: "none" }}
  >
    <img
      alt=""
      src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2021/02/NLP-team-building-future-header-760x400.png"
      srcSet="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2021/02/NLP-team-building-future-header-760x400.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2021/02/NLP-team-building-future-header.png 2x"
      style={{ width: "800px", height: "auto" }}
    />
  </a>
</div>
<div>
<div className="container">
      <div className="k0uJg-dropdown">
        <div className={`_1TLw--dropdownMenu ${isDropdownOpen ? 'open' : ''}`}>
          <div
            role="button"
            tabIndex={0}
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
            className="_2WrGK-toggle"
            onClick={handleDropdownToggle}
          >
            <div className="_3LNOK-contentType">Content type</div>
          </div>
          <ul
            role="listbox"
            tabIndex={-1}
            aria-label="Content type"
            className={`_1RpwD-dropdownMenuContent ${isDropdownOpen ? 'open' : ''}`}
          >
            <li id="Blog" tabIndex={0} role="option" className="_3JEgo-dropdownMenuItem">
              <div className="_3wdhv-contentTypeMenuItem">
                <span>Blog</span>
              </div>
            </li>
            <li id="Case Study" tabIndex={0} role="option" className="_3JEgo-dropdownMenuItem">
              <div className="_3wdhv-contentTypeMenuItem">
                <span>Case Study</span>
              </div>
            </li>
            <li id="Resources" tabIndex={0} role="option" className="_3JEgo-dropdownMenuItem">
              <div className="_3wdhv-contentTypeMenuItem">
                <span>Resources</span>
              </div>
            </li>
            <li id="Video" tabIndex={0} role="option" className="_3JEgo-dropdownMenuItem">
              <div className="_3wdhv-contentTypeMenuItem">
                <span>Video</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="Wl9lk-search">
        <div className="_1T6W5-icon _3XjMZ-searchIcon">
          <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5.5" stroke="#333954"></circle>
            <path d="M16 16L10 10" stroke="#333954" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
        <form className="_3jH0z-searchForm">
          <input aria-label="Search" placeholder="Search" type="text" value="" />
        </form>
        <button aria-label="Clear search" className="_1T6W5-icon _2SqnH-clearIcon E7FOt-hidden">
          <svg className="_124ZW-close" width="12" height="12" viewBox="0 0 10 10" fill="none" style={{ top: '1px', right: '8px' }}>
            <title>Close</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M5 4.29448L9.17178 0.153374C9.27403 0.0511242 9.39161 0 9.52454 0C9.65746 0 9.76482 0.0511242 9.84663 0.153374C9.94888 0.235174 10 0.347648 10 0.490798C10 0.633948 9.94888 0.746421 9.84663 0.828221L5.70552 5L9.84663 9.17178C9.94888 9.27403 10 9.39161 10 9.52454C10 9.65746 9.94888 9.76482 9.84663 9.84663C9.76482 9.94888 9.65746 10 9.52454 10C9.39161 10 9.27403 9.94888 9.17178 9.84663L5 5.70552L0.828221 9.84663C0.746421 9.94888 0.633948 10 0.490798 10C0.347648 10 0.235174 9.94888 0.153374 9.84663C0.0511242 9.76482 0 9.65746 0 9.52454C0 9.39161 0.0511242 9.27403 0.153374 9.17178L4.29448 5L0.153374 0.828221C0.0511242 0.746421 0 0.633948 0 0.490798C0 0.347648 0.0511242 0.235174 0.153374 0.153374C0.235174 0.0511242 0.347648 0 0.490798 0C0.633948 0 0.746421 0.0511242 0.828221 0.153374L5 4.29448Z" fill="#333954"></path>
          </svg>
        </button>
      </div>
    </div>
    </div>



   <section className="F0u0G-container" style={{marginLeft:"70px",marginRight:"10px"}}>
        <ul className="_1GE8N-listContainer">
          <li className="_2Pp64-listItem" >
            <a
              className="jdJHa-post"
              href="/blog/engineering/event-store-architecture/"
            >
              <img
                className="ls-is-cached lazyloaded"
                alt=""
                data-src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/05/Engineering-Blog-11-235x124.png"
                data-srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/05/Engineering-Blog-11-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/05/Engineering-Blog-11-437x230.png 2x"
                srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/05/Engineering-Blog-11-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/05/Engineering-Blog-11-437x230.png 2x"
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/05/Engineering-Blog-11-235x124.png"
              />
              <div className="spanitem">
              <span className="_1gCLm-category" >Infrastructure</span> <br /> 
            
            <span className="bPt6Z-title">
              Scaling Event Processing and Analytics in the Data Lake:
              High-Performance Ingestion and Storage Into 3K Delta Tables With
              Spark Streaming
            </span>
              </div>
             
            </a>
          </li>
          <li className="_2Pp64-listItem">
            <a
              className="jdJHa-post"
              href="/blog/engineering/empowering-engineers-build-faster/"
            >
              <img
                className="ls-is-cached lazyloaded"
                alt=""
                data-src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/03/Engineering-Blog-9-235x124.png"
                data-srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/03/Engineering-Blog-9-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/03/Engineering-Blog-9-437x230.png 2x"
                srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/03/Engineering-Blog-9-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/03/Engineering-Blog-9-437x230.png 2x"
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/03/Engineering-Blog-9-235x124.png"
              />
                <div className="spanitem">
                <span className="_1gCLm-category">Infrastructure</span><br />
              <span className="bPt6Z-title">
                How Grammarly Engineering’s “Platform University” Helps Us Build
                Faster
              </span>
                </div>
          
            </a>
          </li>
          <li class="_2Pp64-listItem">
            <a
              class="jdJHa-post"
              href="/blog/engineering/fido2-hardware-keys-rollout/"
            >
              <img
                class=" lazyloaded"
                alt=""
                data-src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Security-Keys-at-Grammarly-Part-2-Hardware-Keys-Rollout-235x124.png"
                data-srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Security-Keys-at-Grammarly-Part-2-Hardware-Keys-Rollout-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Security-Keys-at-Grammarly-Part-2-Hardware-Keys-Rollout-437x230.png 2x"
                srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Security-Keys-at-Grammarly-Part-2-Hardware-Keys-Rollout-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Security-Keys-at-Grammarly-Part-2-Hardware-Keys-Rollout-437x230.png 2x"
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Security-Keys-at-Grammarly-Part-2-Hardware-Keys-Rollout-235x124.png"
              />
                <div className="spanitem">
                <span class="_1gCLm-category">Infrastructure</span><br />
              <span class="bPt6Z-title">
                Security Keys at Writeophonic Part 2: Our Hardware Keys Rollout and
                Lessons Learned
              </span>
                </div>
            
            </a>
          </li>
          <li class="_2Pp64-listItem">
            <a
              class="jdJHa-post"
              href="/blog/engineering/personalized-snippet-suggestions/"
            >
              <img
                class=" lazyloaded"
                alt=""
                data-src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Screen-Shot-2023-01-17-at-1.30.13-PM-235x124.png"
                data-srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Screen-Shot-2023-01-17-at-1.30.13-PM-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Screen-Shot-2023-01-17-at-1.30.13-PM-437x229.png 2x"
                srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Screen-Shot-2023-01-17-at-1.30.13-PM-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Screen-Shot-2023-01-17-at-1.30.13-PM-437x229.png 2x"
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Screen-Shot-2023-01-17-at-1.30.13-PM-235x124.png"
              />
                <div className="spanitem">
                <span class="_1gCLm-category">NLP/ML</span><br />
              <span class="bPt6Z-title">
                How We Created Personalized Snippet Suggestions Without Storing
                User Text
              </span>
                </div>
           
            </a>
          </li>
          <li class="_2Pp64-listItem">
            <a class="jdJHa-post" href="/blog/engineering/hack-week-2022/">
              <img
                class=" lazyloaded"
                alt=""
                data-src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Grammarly-Engineering-Blog-Hack-Week-Header-235x124.png"
                data-srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Grammarly-Engineering-Blog-Hack-Week-Header-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Grammarly-Engineering-Blog-Hack-Week-Header-437x230.png 2x"
                srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Grammarly-Engineering-Blog-Hack-Week-Header-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Grammarly-Engineering-Blog-Hack-Week-Header-437x230.png 2x"
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/01/Grammarly-Engineering-Blog-Hack-Week-Header-235x124.png"
              />
              <div className="spanitem">
              <span class="_1gCLm-category">Team</span><br />
              <span class="bPt6Z-title">Writeophonic Hack Week</span>
                </div>
             
            </a>
          </li>
          <li class="_2Pp64-listItem">
            <a
              class="jdJHa-post"
              href="/blog/engineering/learning-where-to-edit/"
            >
              <img
                class=" lazyloaded"
                alt=""
                data-src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Grammarly-Blog-Improving-Iterative-Text-Revision-Header-1-235x124.png"
                data-srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Grammarly-Blog-Improving-Iterative-Text-Revision-Header-1-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Grammarly-Blog-Improving-Iterative-Text-Revision-Header-1-437x230.png 2x"
                srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Grammarly-Blog-Improving-Iterative-Text-Revision-Header-1-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Grammarly-Blog-Improving-Iterative-Text-Revision-Header-1-437x230.png 2x"
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Grammarly-Blog-Improving-Iterative-Text-Revision-Header-1-235x124.png"
              />
              <div className="spanitem">
              <span class="_1gCLm-category">NLP/ML</span><br />
              <span class="bPt6Z-title">
                Learning Where to Edit: Introducing DELIteraTeR, a
                Delineate-and-Edit Approach to Iterative Text Revision
              </span>
                </div>
              
            </a>
          </li>
          <li class="_2Pp64-listItem">
            <a
              class="jdJHa-post"
              href="/blog/engineering/grammarly-business-gateway/"
            >
              <img
                class=" ls-is-cached lazyloaded"
                alt="An abstract illustration of 2D and 3D rectangular shapes floating toward the center of a series of concentric circles."
                data-src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Engineering-Blog-The-Golden-Gate-of-Grammarly-Business-235x124.png"
                data-srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Engineering-Blog-The-Golden-Gate-of-Grammarly-Business-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Engineering-Blog-The-Golden-Gate-of-Grammarly-Business-437x230.png 2x"
                srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Engineering-Blog-The-Golden-Gate-of-Grammarly-Business-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Engineering-Blog-The-Golden-Gate-of-Grammarly-Business-437x230.png 2x"
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/12/Engineering-Blog-The-Golden-Gate-of-Grammarly-Business-235x124.png"
              />
              <div className="spanitem">
              <span class="_1gCLm-category">Infrastructure</span><br />
              <span class="bPt6Z-title">
                The GoldenGate of Writeophonic Business
              </span>
                </div>
            
            </a>
          </li>
        
          <li class="_2Pp64-listItem">
            <a
              class="jdJHa-post"
              href="/blog/engineering/why-grammarly-launched-fido2-authentication/"
            >
              <img
                class=" ls-is-cached lazyloaded"
                alt=""
                data-src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/11/Security-Keys-at-Grammarly-Part-1-FIDO2-Authentication-header-235x124.png"
                data-srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/11/Security-Keys-at-Grammarly-Part-1-FIDO2-Authentication-header-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/11/Security-Keys-at-Grammarly-Part-1-FIDO2-Authentication-header-437x230.png 2x"
                srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/11/Security-Keys-at-Grammarly-Part-1-FIDO2-Authentication-header-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/11/Security-Keys-at-Grammarly-Part-1-FIDO2-Authentication-header-437x230.png 2x"
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/11/Security-Keys-at-Grammarly-Part-1-FIDO2-Authentication-header-235x124.png"
              />
              <div className="spanitem">
              <span class="_1gCLm-category">Infrastructure</span>
              <br />
              <span class="bPt6Z-title">
                Security Keys at Writeophonic Part 1: Why We Moved from OTP to
                FIDO2 for Team Member Authentication
              </span>
                </div>
             
            </a>
          </li>
          <li class="_2Pp64-listItem">
            <a class="jdJHa-post" href="/blog/engineering/ua-gec-2/">
              <img
                class=" ls-is-cached lazyloaded"
                alt="UA GEC 2"
                data-src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/UA-GEC-2-v2-1-235x124.png"
                data-srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/UA-GEC-2-v2-1-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/UA-GEC-2-v2-1-437x230.png 2x"
                srcset="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/UA-GEC-2-v2-1-235x124.png 1x, https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/UA-GEC-2-v2-1-437x230.png 2x"
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/UA-GEC-2-v2-1-235x124.png"
              />
              <div className="spanitem">
                 <span class="_1gCLm-category">NLP/ML</span>
                 <br />
              <span class="bPt6Z-title">
                UA-GEC 2.0: Announcing an Expanded Grammatical Error Correction
                Dataset for the Ukrainian Language
              </span>
                </div>
             
            </a>
          </li>
        </ul>
      </section>
  
    <div style={{ backgroundColor: "rgb(54, 92, 197)", display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }}>
  <div className="_1ShSK-body _3TwEK-lightBlue">
    <h1 style={{ textAlign: "center",color:"white" ,fontSize:"48px"}}>Writeophonic Business can <br /> help your team</h1>
    <div style={{ height: '32px', flexShrink: 0 }}></div>
    <button className="_3si8b-basic _2t1KW-sizeLarge _2rCB7-colorGreen g-J25-minimumPadding" type="button" style={{ width: '244px', backgroundColor: "rgb(54, 168, 132)", color: "white", height: "40px",marginLeft:"150px",fontSize:"20px" }}>
      <div className="_1Vvoo-content">
        <span className="_36spT-text">Let's Talk</span>
      </div>
    </button>
  </div>
</div>
<Footer/>

 
    </>
  
  )
}

export default BusinessBlog