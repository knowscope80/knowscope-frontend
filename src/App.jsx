import React from 'react';
import { Route,Routes } from 'react-router-dom';

// homeside
import SmartLearnAIHowItWorks  from './components/homeside/SmartLearnAIHowItWorks '
import SmartLearnAIHome from './components/homeside/SmartLearnAIHome'

// profileside
import StudentProfileSetup from './components/Profileside/StudentProfileSetup'
import StudentProfile from './components/Profileside/StudentProfile'


import SmartLearnAINavbar from './components/userhomeiner/navbarside/SmartLearnAINavbar'


import AIMentorDoubts  from './components/userhomeiner/AIMentorDoubts'
import AITestModule from './components/userhomeiner/AITestModule'
import DailyPlanTimeline from './components/userhomeiner/DailyPlanTimeline'
import DashboardOverview from './components/userhomeiner/DashboardOverview'
import ProgressAnalyticsDashboard from './components/userhomeiner/ProgressAnalyticsDashboard'
import SyllabusManager from './components/userhomeiner/SyllabusManager'
import GoogleAuth from "./components/auth/GoogleAuth";

import SyllabusDetailPage from './components/userhomeiner/SyllabusDetailPage'


import Textbooks from './components/sample'
function App() {
  return (
    <Routes>
      <Route path="/SmartLearnAIHowItWorks" element={<SmartLearnAIHowItWorks/>} />
      <Route path="/auth/google" element={<GoogleAuth />} />
      <Route path='/' element={<SmartLearnAIHome/>}/>

      <Route path='/StudentProfileSetup' element={<StudentProfileSetup/>}/>
      <Route path='/StudentProfile' element={<StudentProfile/>}/>

      <Route path='/SmartLearnAINavbar' element={<SmartLearnAINavbar/>}/>




      <Route path='/Textbooks' element={<Textbooks/>}/>





      <Route path='/AIMentorDoubts' element={<AIMentorDoubts/>}/>
      <Route path='/AITestModule' element={<AITestModule/>}/>
      <Route path='/DailyPlanTimeline' element={<DailyPlanTimeline/>}/>
      <Route path='/DashboardOverview' element={<DashboardOverview/>}/>
      <Route path='/ProgressAnalyticsDashboard' element={<ProgressAnalyticsDashboard/>}/>


      <Route path='/SyllabusManager' element={<SyllabusManager/>}/>
      <Route path='/SyllabusDetailPage' element={<SyllabusDetailPage/>}/>
    </Routes>
    
  );
}

export default App;

