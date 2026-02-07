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
import AIMentorInteractionHub from './components/userhomeiner/AIMentorInteractionHub'


function App() {
  return (
    <Routes>
      <Route path="/" element={<SmartLearnAIHowItWorks/>} />
      <Route path='/SmartLearnAIHome' element={<SmartLearnAIHome/>}/>

      <Route path='/StudentProfileSetup' element={<StudentProfileSetup/>}/>
      <Route path='/StudentProfile' element={<StudentProfile/>}/>

      <Route path='/SmartLearnAINavbar' element={<SmartLearnAINavbar/>}/>








      <Route path='/AIMentorDoubts' element={<AIMentorDoubts/>}/>
      <Route path='/AITestModule' element={<AITestModule/>}/>
      <Route path='/DailyPlanTimeline' element={<DailyPlanTimeline/>}/>
      <Route path='/DashboardOverview' element={<DashboardOverview/>}/>
      <Route path='/ProgressAnalyticsDashboard' element={<ProgressAnalyticsDashboard/>}/>
      <Route path='/SyllabusManager' element={<SyllabusManager/>}/>
      <Route path='/AIMentorInteractionHub' element={<AIMentorInteractionHub/>}/>  
    </Routes>
  );
}

export default App;

