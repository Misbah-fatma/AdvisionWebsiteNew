import './i18n.js';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import DashBoard from "./pages/DashBoard/Dashboard.js";
import Settings from "./pages/Settings/Settings.js";
import Messages from "./pages/Messages/Messages.js";
import Grades from "./pages/Grades/Grades.js";
import CourseInfo from "./pages/CourseInfo/CourseInfo.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import Training from "./pages/Training/Training.js";
import Courses from "./pages/Courses/Courses.js";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard/TeacherDashboard.js";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard.js";
import StudentRoute from "./components/PrivateRoute/StudentRoute.js";
import StudentInfo from "./pages/Admin/Student/StudentInfo.js";
import CompanyChannelsCreated from "./pages/Admin/Teacher/CompanyDetails.js";
import AllCourses from "./pages/All-Courses/AllCourses.js";
import NotFound from "./pages/404NotFoud/NotFound.js";
import Libray from "./pages/Library/Libray.js";
import Ucam from "./pages/Ucam/Ucam.js";
import Home from "./pages/LandingPage/Land.js";
import Contact from "./pages/LandingPage/Contact.js";
import Services from "./pages/LandingPage/Services.js";
import About from "./pages/LandingPage/About.js";
import Courses1 from "./pages/LandingPage/Courses.js";
import Team from "./pages/LandingPage/Team.js";
import News from "./pages/LandingPage/News.js";
import Blog from "./pages/LandingPage/Blog.js"
import AddtoCart from "./pages/AddToCart/AddtoCart.js"
import NoticeToggle from "./pages/CourseInfo/NoticeToggle/NoticeToggle.js";
import CheckOut from "./pages/AddToCart/Checkout.js"
import AdminFrontend from "./pages/Admin/Frontend/AdminFrontend.js"
import AdminCategory from "./pages/Admin/Subcategory/AdminFrontend.js"
import New1 from "./pages/LandingPage/New.js"
import { Products } from "./pages/LandingPage/Products.js";
import StudentDashBoard from "./pages/StudentDashBoard/Dashboard.js";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy.js"
import AdvisionBusinessPrivacy from "./pages/Privacy/AdvisionsBusinessPrivacyStatement.js"
import AdvisionsProTerms from "./pages/Privacy/AdvisionsBusinessProTerms&Conditions.js"
import AffiliateTerms from "./pages/Privacy/AffiliateTerms&Conditions.js"
import InstructorTerms from "./pages/Privacy/InstructorTerms.js"
import MasterServices from './pages/Privacy/MasterServicesAgreement.js';
import PricingPromotional from "./pages/Privacy/Pricing&PromotionPolicy.js"
import TermsofUse from "./pages/Privacy/TermsofUse.js";
import ChannelPartner from "./pages/LandingPage/ChannelPartner.js";
import ChannelCraeted from "./pages/LandingPage/ChannelsCreated.js";
import AdminBlog from "./pages/Admin/BlogForm/BlogForm.js";
import BlogsChannel from "./pages/LandingPage/BlogsChannel.js";
import BlogsChannelInternational from "./pages/LandingPage/BlogChannelInternational.js";
import ChangeDetailsForm from "./pages/StudentDashBoard/ChangeDetailsform.js";
import SchoolErp from './pages/LandingPage/SchoolErpDetails.js';
import HospitalErp from './pages/LandingPage/HospitalErp.js';
import TextTranslator from './pages/LandingPage/TextToTextDetails.js';
import OCRDetails from "./pages/LandingPage/OCRDeatils.js";
import LLMDeatils from './pages/LandingPage/LLMDeatils.js';
import LMS from './pages/LandingPage/LMSdetails.js';
import AdvancedGeAi from './pages/ServiceDetails/AdvancedGeAI.js';
import AiTraining from './pages/ServiceDetails/AiTraining.js';
import CorporateTraining from './pages/ServiceDetails/CoorporateTraining.js';
import CorporateAdvice from './pages/ServiceDetails/CorporateAdvice.js';
import CustomWeb from './pages/ServiceDetails/CustomWeb.js';
import DigitalTwins from './pages/ServiceDetails/DigitalTwins.js';
import Reasearch from './pages/ServiceDetails/Reasearch.js';
import RobotProcess from './pages/ServiceDetails/RobotProcess.js';
import StemPrograms from './pages/ServiceDetails/StemPrograms.js';
import RoboticAutomation from './pages/BlogDetails/RoboticAutomation.js';
import MachineLearningServices from './pages/BlogDetails/MachineLearning.js';
import DataAnalysisServices from './pages/BlogDetails/DataAnalytics.js';
import WebDevelopmentServices from './pages/BlogDetails/FullStackWebDevelopment.js';
import VLSIServices from './pages/BlogDetails/VLSI.js';
import AIServices from './pages/BlogDetails/ArtificialIntelligence.js';
import BlogForm from './pages/Admin/Blogs/BlogForm.js';
import BlogDetails from './pages/Admin/Blogs/blogAll.js';
import BlogCard from './pages/Admin/Blogs/blogCards.js';
import ChannelDetails from './pages/LandingPage/ChannelsDetails.js';

const Routing = () => {

  return (
    <Routes>
          <Route exact path="/"  element={<Home />}> 
      </Route>

      <Route exact path="/aiTraining"  element={<AiTraining />} />
      <Route exact path="/corporateTraining"  element={<CorporateTraining />} />
      <Route exact path="/corporateAdvice"  element={<CorporateAdvice />} />
      <Route exact path="/customWeb"  element={<CustomWeb />} />
      <Route exact path="/digitalTwins"  element={<DigitalTwins />} />
      <Route exact path="/reasearch"  element={<Reasearch />} />
      <Route exact path="/robotProcess"  element={<RobotProcess />} />
      <Route exact path="/stemPrograms"  element={<StemPrograms />} />  
      <Route exact path="/training"  element={<AdvancedGeAi />} />

      <Route exact path="/blogCard"  element={<BlogCard />} />

      <Route exact path="/blog/:id" element={<BlogDetails />} />
<Route exact path="/channel/:channelid" element={<ChannelDetails />} />

      <Route path="/" element={<StudentRoute><Home /></StudentRoute>} />
        <Route path="/messages" element={<StudentRoute><Messages /></StudentRoute>} />
        <Route path="/dashboard" element={<StudentRoute><DashBoard /></StudentRoute>} />
        <Route path="/library" element={<StudentRoute><Libray /></StudentRoute>} />
        <Route path="/ucam" element={<StudentRoute><Ucam /></StudentRoute>} />

        <Route path="/teacher-dashboard" element={<TeacherDashboard /> } />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        

        <Route path="/admin-student-info" element={<StudentInfo />} />
        <Route path="/admin-companyChannelcreated" element={<CompanyChannelsCreated />} />
        <Route path="/admin-frontend" element={<AdminFrontend />} />
        <Route path="/admin-categories" element={<AdminCategory />} />

      <Route exact path="/training"  element={<Training />}>
      
      </Route>

      <Route exact path="/llmDeatils"  element={<LLMDeatils />}>
      
      </Route>

      <Route exact path="/schoolErp"  element={<SchoolErp />}>
      
      </Route>
      <Route exact path="/advancedGeAi"  element={<AdvancedGeAi />}>
      
      </Route>
      <Route exact path="/courses"  element={<Courses />}>
  
      </Route>

      <Route exact path="/machineLearningServices"  element={<MachineLearningServices />}>
  
  </Route>


  <Route exact path="/dataAnalysisServices"  element={<DataAnalysisServices />}>
  
  </Route>

  
  <Route exact path="/aIServices"  element={<AIServices />}>
  
  </Route>

  <Route exact path="/blogForm"  element={<BlogForm />}>
  
  </Route>


  
  <Route exact path="/vLSIServices"  element={<VLSIServices />}>
  
  </Route>

  

  <Route exact path="/roboticAutomation"  element={<RoboticAutomation />}>
  
  </Route>
      
      <Route exact path="/lmsDetails"  element={<LMS />}>
  
  </Route>

      
      <Route exact path="/textTranslator"  element={<TextTranslator />}>
  
  </Route>
  
  <Route exact path="/ocrDeatils"  element={<OCRDetails />}>
  
  </Route>

      <Route exact path="/admin-channelPartner"  element={<AdminBlog />}>
  
  </Route>

  
  <Route exact path="/hospitalErp"  element={<HospitalErp />}>
  
  </Route>
  <Route exact path="/changeDetailsForm"  element={<ChangeDetailsForm />}>
  
  </Route>


  <Route exact path="/blogChannel"  element={<BlogsChannel />}>
  
  </Route>

  

  <Route exact path="/webDevelopmentServices"  element={<WebDevelopmentServices />}>
  
  </Route>


  
  <Route exact path="/blogChannelInternational"  element={<BlogsChannelInternational />}>
  
  </Route>

      <Route exact path="/channelPartnerForm"  element={<ChannelPartner />}>
  
  </Route>
  
  <Route exact path="/channelcreated"  element={<ChannelCraeted />}>
  
  </Route>

      <Route exact path="/settings" element={<Settings />}>
     
      </Route>
      <Route exact path="/checkout" element={<CheckOut />}>
    
      </Route>
      <Route exact path="/grades"  element={<Grades />}>
       
      </Route>
      <Route exact path="/new"  element={<New1 />}>
       
       </Route>
      <Route exact path="/cart"  element={<AddtoCart />}>
        
          </Route>
          <Route exact path="/product"  element={<Products />}>
        
        </Route>
          <Route exact path="/NoticeToggle"  element={<NoticeToggle />}>
     
      </Route>
      <Route exact path="/CourseInfo"  element={<CourseInfo />}>
      
      </Route>
         
      <Route exact path="/login" element={<Login />}>
        
      </Route>
      <Route exact path="/register"  element={<Register />}>
       
      </Route>
      <Route exact path="/all-courses"  element={<AllCourses />}>
       
      </Route>

      <Route exact path="/home" element={<Home />}>
       
      </Route>
      <Route exact path="/team"  element={<Team />}>
     
        </Route>
        <Route exact path="/profile"  element={<StudentDashBoard />}>
     
        </Route>

        <Route exact path="/About"element={<About />} ></Route>
        <Route exact path="/Services" element={<Services />}>  </Route>
        <Route exact path="/News" element={<News />}></Route>
        <Route exact path="/Courses1" element={<Courses1 />}> </Route> 
        <Route exact path="/Contact" element={<Contact />}> </Route>
        <Route exact path="/blog" element={<Blog />}> </Route>

        <Route exact path="/privacyPolicy"  element={<PrivacyPolicy />}>
        
        </Route>

        <Route exact path="/advisionbusinessPrivacy"  element={<AdvisionBusinessPrivacy />}>
        
        </Route>
        <Route exact path="/advisionsproterms"  element={<AdvisionsProTerms />}>
        
        </Route>
        <Route exact path="/affiliateterms"  element={<AffiliateTerms />}>
        
        </Route>
        <Route exact path="/instructorterms"  element={<InstructorTerms />}>
        
        </Route>
        <Route exact path="/masterservices"  element={<MasterServices />}>
        
        </Route>
        <Route exact path="/pricingpromotional"  element={<PricingPromotional />}>
        
        </Route>

        <Route exact path="/termsofuse"  element={<TermsofUse />}>
        
        </Route>
      <Route  path="*" element={<NotFound />}>
        
      </Route>
  
       
      
    </Routes>
  );
};

function App() {

  return (
    <div className="App">
      
      <Router>
      {/* <Header /> */}

        <Routing />
      </Router>
    </div>
  );
}

export default App;
