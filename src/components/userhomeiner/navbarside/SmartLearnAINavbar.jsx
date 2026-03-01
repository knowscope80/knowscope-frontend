import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const SmartLearnAINavbar = () => {
  let location = useLocation();
  let navigate=useNavigate()
  // Helper function to check if a link is active with better matching
  const isActive = (path) => {
    // For dashboard, do exact match
    if (path === '/DashboardOverview') {
      return location.pathname === path;
    }
    // For other routes, check if the current path starts with the link path
    // This handles nested routes like /SyllabusManager/chapter1
    return location.pathname.startsWith(path);
  };

  return (
    <div className="bg-gray-100 font-sans">
      {/* Sticky Master Navbar (64px) */}
      <nav className="sticky top-0 z-50 h-16 w-full bg-white border-b border-black px-6 flex items-center justify-between">
        {/* Left: Branding */}
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 shrink-0">
          <div className="bg-black text-white p-1.5 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined !text-[20px]">school</span>
          </div>
          <h1 className="text-black text-lg font-bold tracking-tight">SmartLearn AI</h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Dashboard Link */}
          <Link 
            to="/DashboardOverview" 
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              isActive('/DashboardOverview') 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:text-black hover:bg-gray-100'
            }`}
          >
            <span className="material-symbols-outlined" style={{ 
              fontVariationSettings: isActive('/DashboardOverview') ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
            }}>dashboard</span>
            <span className="text-sm font-semibold">Dashboard</span>
          </Link>
          
          {/* Syllabus Link */}
          <Link 
            to='/SyllabusManager' 
            className={`nav-link-hover flex items-center gap-2 px-3 py-2 transition-colors ${
              isActive('/SyllabusManager') 
                ? 'text-black font-semibold' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            <span className="material-symbols-outlined" style={{ 
              fontVariationSettings: isActive('/SyllabusManager') ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
            }}>menu_book</span>
            <span className="text-sm font-medium">Syllabus</span>
          </Link>
          
          {/* Daily Plan Link */}
          <Link 
            to='/DailyPlanTimeline' 
            className={`nav-link-hover flex items-center gap-2 px-3 py-2 transition-colors ${
              isActive('/DailyPlanTimeline') 
                ? 'text-black font-semibold' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            <span className="material-symbols-outlined" style={{ 
              fontVariationSettings: isActive('/DailyPlanTimeline') ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
            }}>calendar_today</span>
            <span className="text-sm font-medium">Daily Plan</span>
          </Link>
          
          {/* Doubts Link */}
          <Link 
            to='/AIMentorDoubts' 
            className={`nav-link-hover flex items-center gap-2 px-3 py-2 transition-colors ${
              isActive('/AIMentorDoubts') 
                ? 'text-black font-semibold' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            <span className="material-symbols-outlined" style={{ 
              fontVariationSettings: isActive('/AIMentorDoubts') ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
            }}>help_center</span>
            <span className="text-sm font-medium">Doubts</span>
          </Link>
          
          {/* Tests Link */}
          <Link 
            to='/AITestModule' 
            className={`nav-link-hover flex items-center gap-2 px-3 py-2 transition-colors ${
              isActive('/AITestModule') 
                ? 'text-black font-semibold' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            <span className="material-symbols-outlined" style={{ 
              fontVariationSettings: isActive('/AITestModule') ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
            }}>assignment</span>
            <span className="text-sm font-medium">Tests</span>
          </Link>
          
          
          
        </div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="p-2 text-gray-600 hover:text-black transition-colors">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>notifications</span>
          </button>
          <div className="h-8 w-px bg-gray-300 mx-1"></div>
          <div className="flex items-center gap-3 pl-1">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-xs font-bold text-black leading-none">Alex Rivera</span>
              <span className="text-[10px] text-gray-500 font-medium">Pro Student</span>
            </div>
            <Link 
              to='/StudentProfile'
              className={`h-10 w-10 rounded-full border-2 overflow-hidden ${
                isActive('/StudentProfile') ? 'border-blue-500' : 'border-black'
              }`}
            >
              
            </Link>
          </div>
        </div>
      </nav>
       
      <style>{`
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
          font-size: 20px;
          transition: font-variation-settings 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default SmartLearnAINavbar;