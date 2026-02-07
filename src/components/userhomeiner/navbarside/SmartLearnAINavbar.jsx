import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import StudentProfile from '../../Profileside/StudentProfile'
const SmartLearnAINavbar = () => {
  let navigate =useNavigate()
  return (
    <div className="bg-gray-100  font-sans">
      {/* Sticky Master Navbar (64px) */}
      <nav className="sticky top-0 z-50 h-16 w-full bg-white border-b border-black px-6 flex items-center justify-between">
        {/* Left: Branding */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="bg-black text-white p-1.5 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined !text-[20px]">school</span>
          </div>
          <h1 className="text-black text-lg font-bold tracking-tight">SmartLearn AI</h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Active State (Pill) */}
          <Link  to="/DashboardOverview"  className="active-pill flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full transition-all hover:bg-gray-800" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-semibold">Dashboard</span>
          </Link>
          
          {/* Standard Link */}
          <Link to='/SyllabusManager' className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600  hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">menu_book</span>
            <span className="text-sm font-medium">Syllabus</span>
          </Link>
          
          {/* Standard Link */}
          <Link to='/DailyPlanTimeline' className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-sm font-medium">Daily Plan</span>
          </Link>
          
          {/* Standard Link */}
          <Link to='/AIMentorDoubts' className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">help_center</span>
            <span className="text-sm font-medium">Doubts</span>
          </Link>
          
          {/* Standard Link */}
          <Link to='/AITestModule' className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-sm font-medium">Tests</span>
          </Link>
          
          {/* Standard Link */}
          <Link to='/ProgressAnalyticsDashboard' className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm font-medium">Progress</span>
          </Link>
          
          {/* AI Mentor Link */}
          <Link to='/AIMentorInteractionHub' className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">smart_toy</span>
            <span className="text-sm font-medium">AI Mentor</span>
          </Link>
        </div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="p-2 text-gray-600 hover:text-black transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="h-8 w-px bg-gray-300 mx-1"></div>
          <div className="flex items-center gap-3 pl-1">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-xs font-bold text-black leading-none">Alex Rivera</span>
              <span className="text-[10px] text-gray-500 font-medium">Pro Student</span>
            </div>
            <Link to='/StudentProfile'
              className="h-10 w-10 rounded-full border-2 border-black bg-cover bg-center overflow-hidden"
              style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkQmjJ6i55lHOl-QgtifcHRvzKE2OMVAPWrlJvkFGAKLZ7LyVn6rFEPd1RiWo-bq6e8XGFwa5PU-P-0MpUc0POsGcegaDK2ZLCP--oTzZNPkuGQTcTtyX40n8Wj_5_JL_l8NvKRocVSOcaVJ6vy_aSq-GneW5UKrY4Wy8h21BKcXInOcDEv8LiroPDHfh4-Odt5gboz7PzLcmLnwlPFwy9ZPOFm_pyhX1CklvZaV2JlOw7PIzXM_HUcHABKV5bWZRNpbklW_Pu-bE')`}}
            ></Link>
          </div>
        </div>
      </nav>

     

      <style jsx>{`
        .nav-link-hover {
          position: relative;
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #000000;
          transition: width 0.2s ease;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-size: 20px;
        }
        .active-pill .material-symbols-outlined {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
};

export default SmartLearnAINavbar;