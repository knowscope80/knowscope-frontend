// // AdminNavbar.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const AdminNavbar = () => {
//   const navItems = [
//     { name: "Dashboard", navigat:'AdminDashboard', icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
//     { name: "Users",navigat:'AdminUserManagement', icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
//     { name: "Syllabus", navigat:"AddSyllabus", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
//     { name: "Vector Database", navigat:"AdminVectorDatabaseset", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
//     { name: "Study Plans", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
//   ];

//   return (
//      <header className="border-b border-[#E5E5E5] bg-white" data-purpose="top-navbar">
//           {/* Top row with logo and profile */}
//           <div className="flex items-center justify-between px-8 h-16">
//             {/* Logo */}
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">A</span>
//               </div>
//               <span className="font-bold text-xl tracking-tight">EduAI</span>
//             </div>
//             {/* Right icons */}
//             <div className="flex items-center gap-4">
//               <button aria-label="Notifications" className="p-2 text-gray-400 hover:text-black transition-colors">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
//                 </svg>
//               </button>
//               <div className="h-8 w-8 rounded-full bg-gray-200 border border-[#E5E5E5] flex items-center justify-center overflow-hidden">
//                 <img
//                   alt="Admin Avatar"
//                   className="w-full h-full object-cover"
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjx48fhnKj1_CsBl2l7enf87d0fO-qlaMJtKXcUapr9ig9HCtLdtRSV_tpjRLInKJL2JvzDvIHhq9WIq6ZVVUlQtnKkaCmUXR_3l8jP5dTOZC_1ZXilzsU739yA7yZjXGVvkIblU-JHSX3-D8RaBASPgrlyqfcMtoCX3OcTzGFp0Xu8xe7pUA8n3EGJaIjRR2WBqrHHAapS5dSDUGSBEzTNNBUb5O2eupymslzwzs_eDxeRt51L8TQEf_aWjkwzVlXXxfwGLW00ms"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Navigation Links Row */}
//           <nav className="flex items-center gap-1 px-8 pb-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300" data-purpose="nav-links">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={`/${item.navigat}`}
//                 className={`flex items-center gap-2 px-3 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors ${
//                   item.name === "Dashboard"
//                     ? "bg-gray-50 border border-[#E5E5E5] text-black"
//                     : "text-gray-600 hover:bg-gray-50 hover:text-black"
//                 }`}
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
//                 </svg>
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//         </header>

//   );
// };

// export default AdminNavbar;





// AdminNavbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Dashboard", navigate: 'AdminDashboard', icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
    { name: "Users", navigate: 'AdminUserManagement', icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { name: "Syllabus", navigate: "AddSyllabus", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { name: "Vector Database", navigate: "AdminVectorDatabaseset", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
    { name: "Study Plans", navigate: "AdminStudyPlans", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
  ];

  // Check if the current path matches the navigation item
  const isActive = (navigatePath) => {
    return currentPath === `/${navigatePath}` || 
           (navigatePath === 'AdminDashboard' && currentPath === '/');
  };

  return (
    <header className="border-b border-[#E5E5E5] bg-white" data-purpose="top-navbar">
      {/* Top row with logo and profile */}
      <div className="flex items-center justify-between px-8 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-xl tracking-tight">EduAI</span>
        </div>
        {/* Right icons */}
        
              </div>

      {/* Navigation Links Row */}
      <nav className="flex items-center gap-1 px-8 pb-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300" data-purpose="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={`/${item.navigate}`}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors ${
              isActive(item.navigate)
                ? "bg-gray-900 text-white shadow-sm hover:bg-gray-800"
                : "text-gray-600 hover:bg-gray-50 hover:text-black"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default AdminNavbar;