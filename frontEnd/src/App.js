import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homePage/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Trash from "./components/trash/Trash";
import Grammarly from "./components/grammarly/Grammarly";
import Overview from "./components/overview/Overview";
import Generative from "./components/generativeAI/Generative";
import Writing from "./components/writingEnhancement/Writing";
import Trust from "./components/trust&security/Trust";
import Overview1 from "./components/overView1/Overview1";
import Windows from "./components/windows&mac/Windows";
import Browser from "./components/browserExtension/Browser";
import Mobile from "./components/mobileTab/Mobile";
import About from "./components/about/About";
import Responsible from "./components/responsibleAI/Responsible";
import Press from "./components/press/Press";
import Students from "./components/students/Students";
import Institutions from "./components/institutions/Institutions";
import Grammar from "./components/grammarChecker/Grammar";
import Eassay from "./components/eassayChecker/Eassay";
import Citation from "./components/citationGenerator/Citation";
import Plagirism from "./components/plagirismChecker/Plagirism";
import WritingGuides from "./components/writingGuides/WritingGuides";
import GrammarGuide from "./components/grammarGuide/GrammarGuide";
import PunctuationGuide from "./components/punctuationGuide/PunctuationGuide";
import Blog from "./components/blog/Blog";
import Success from "./components/successStory/Success";
import Individuals from "./components/individuals/Individuals";
import { Routes, Route } from "react-router-dom";
import Ipad from "./components/Ipad"
import Accessbility from "./components/Accessbility"
import Affiliates from "./components/Affiliates"
import Android from "./components/Android"
import Buisnessagreement from "./components/Businessagreement"
import Iphone from "./components/Iphone"
import Privacy from "./components/Privacy"
import Prtner from "./components/Prtner"
// import Windows from "./components/Windows"
import Safari from "./components/Safari/Safari"
import Termsofservice from "./components/Termsofservice"
import Desktop from "./components/Desktop/Desktop"
import Firefox from "./components/FireFox/Firefox"
import Googledoc from "./components/Google-doc/Googledoc"
import Microsoftedge from "./components/MicrosoftEdge/Microsoftedge"
import TechBlog from "./components/TechBlog";

import Snippest from "./components/Snippest"
// import Affiliates from "./components/Affiliates"
import Analytics from "./components/Analytics"
// import Android from "./components/Android"
import Brandtone from "./components/Brandtone"
import BusinessBlog from "./components/BusinessBlog"
import Chrome from "./components/Chrome/Chrome"

// import Desktop from "./components/Desktop/Desktop"
import DeveloperBlog from "./components/DeveloperBlog"
import EducationComponent from "./components/EducationComponent"
import FAQ from "./components/FAQ"
import GrammarlyGo from "./components/GrammarlyGo"
import Guide from "./components/Guide"
import MSoffice from "./components/grammarlyforMSoffice/MSoffice"
import Plans from "./components/plans"
import Paraphrasingtool from "./components/Paraphrasingtool"
import Tonesdetector from "./components/Tonesdetector";
import SecurityScreen from "./components/security/SecurityScreen"
import Mac from "./components/windows&mac/Mac";
import Contactus from "./components/Contactus";
import Helpcenter from "./components/Helpcenter"
import Compare from "./components/comparePlans/Compare";
import CAprivacy from "./components/CAprivacy";





function App() {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login/> } />
      <Route path="/" element={<Home/>  } />
      <Route path="/dashboard" element={<Dashboard/> } />
      <Route path="/trash" element={<Trash/> } />
      <Route path="/grammarly" element={<Grammarly/>} />
      <Route path="/overview" element={<Overview/> } />
      <Route path="/writing" element={<Writing/> } />
      <Route path="/success" element={ <Success/> } />
      <Route path="/blog" element={ <Blog/> } />
      {/* <Route path="" element={<Login/> } /> */}
      <Route path="/punctuationGuide" element={<PunctuationGuide/> } />
      <Route path="/grammarGuide" element={<GrammarGuide/> } />
      <Route path="/writingGuide" element={ <WritingGuides/> } />
      <Route path="/plagirism" element={ <Plagirism/> } />
      <Route path="/citation" element={<Citation/> } />
      <Route path="/eassay" element={<Eassay/>  } />
      <Route path="/grammar" element={<Grammar/> } />
      <Route path="/institutions" element={<Institutions/> } />
      <Route path="/generative" element={<Generative/> } />
      {/* <Route path="/" element={<Login/> } /> */}
      <Route path="/student" element={<Students/>  } />
      <Route path="/press" element={<Press/> } />
      <Route path="/responsible" element={ <Responsible/>} />
      <Route path="/about" element={<About/> } />
      <Route path="/mobile" element={<Mobile/> } />
      <Route path="/browser" element={<Browser/>} />
      <Route path="/windows" element={ <Windows/>  } />
      <Route path="/overview1" element={ <Overview1/> } />
      <Route path="/trust" element={<Trust/> } />
      <Route path="/individuals" element={<Individuals /> } />
      <Route path="/compare" element={<Compare /> } />

// Screens from other developer //

      <Route path="/ipad" element={<Ipad/>  } />
      <Route path="/iphone" element={<Iphone/> } />
      <Route path="//privacyPolicy" element={ <Privacy/>} />
      <Route path="/partners" element={<Prtner/> } />
      <Route path="/terms" element={<Termsofservice/> } />
      <Route path="/buisness" element={<Buisnessagreement/>} />
      <Route path="/android" element={ <Android/>  } />
      <Route path="/affiliates" element={ <Affiliates/> } />
      <Route path="/accessibility" element={<Accessbility/> } /> 
      <Route path="/safari" element={<Safari /> } />

      <Route path="/edge" element={<Microsoftedge/>  } />
      <Route path="/googledocs" element={<Googledoc/> } />
      <Route path="/fireFox" element={ <Firefox/>} />
      <Route path="/desktop" element={<Desktop/> } /> 
      <Route path="/mobile" element={<Mobile/> } />
      <Route path="/browser" element={<Browser/>} />
      <Route path="/windows" element={ <Windows/>  } />
      <Route path="/overview1" element={ <Overview1/> } />
      <Route path="/trust" element={<Trust/> } />
      <Route path="/login" element={<Login/> } />
      <Route path="/mac" element={<Mac/> } />



      <Route path="/techBlog" element={<TechBlog/>  } />
      <Route path="/snippest" element={<Snippest/> } />
      <Route path="/plans" element={ <Plans/>} />
      <Route path="/help" element={<Helpcenter/> } /> 
      <Route path="/grammarlyGo" element={<GrammarlyGo/> } />
      <Route path="/guide" element={<Guide/>} />
      <Route path="/faq" element={ <FAQ/>  } />
      <Route path="/educationBlog" element={ <EducationComponent/> } />
      <Route path="/developerBlog" element={<DeveloperBlog/> } />
      <Route path="/buisnessBlog" element={<BusinessBlog/> } />

     
      {/* <Route path="/business" element={<Business/> } /> */}
      <Route path="/brandTone" element={ <Brandtone/>} />
      <Route path="/android" element={<Android/> } /> 
      <Route path="/analytics" element={<Analytics/> } />
      <Route path="/contact" element={<Contactus/>} />
      <Route path="/office" element={ <MSoffice/>  } />
      <Route path="/chrome" element={ <Chrome/> } />
      <Route path="/security" element={<SecurityScreen/> } />
      <Route path="/paraphrasing" element={<Paraphrasingtool/> } />
      <Route path="/toneDetector" element={<Tonesdetector/> } />
      <Route path="/CAPrivacy" element={<CAprivacy/> } />
      
    
        
      </Routes>
    </>
  );
}

export default App;
