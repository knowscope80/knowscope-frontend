// DashboardOverview.jsx
import React from 'react';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar'

const DashboardOverview = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-black">
      <div className="layout-container flex h-full grow flex-col">
        {/* Top Navigation */}
        <SmartLearnAINavbar/>

        <main className="flex-1 px-6 py-8 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full">
          <div className="mb-10">
            <h1 className="text-4xl font-black tracking-tight text-black">Dashboard Overview</h1>
            <p className="text-gray-600 mt-2 font-medium">Monday, October 23rd</p>
          </div>

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Column 1: Welcome Card */}
            <div className="flex flex-col gap-6">
              <div className="bg-white border border-black rounded-lg p-6 flex flex-col h-full min-h-[400px]">
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">Current Status</span>
                  <h2 className="text-3xl font-black text-black leading-tight mb-4">Welcome back, Alex.</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-1 text-gray-500">school</span>
                      <div>
                        <p className="text-sm font-bold">Class</p>
                        <p className="text-base text-gray-700">+2 Science | Section A</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-1 text-gray-500">menu_book</span>
                      <div>
                        <p className="text-sm font-bold">Current Topic</p>
                        <p className="text-base text-gray-700">Organic Chemistry: Alcohols & Phenols</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="w-full bg-gray-100 h-48 mb-6 rounded border border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                    <img 
                      className="opacity-50 grayscale contrast-125 h-full w-full object-cover" 
                      alt="Abstract minimalist chemical structure diagram" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa_1M0_v9Y9fx06dnfRD6FPIR7VraI5plc7dAFdNUBz58q1tQ0hN4WoFpFXwqo5MlmpOaE_s6N8PVB3eTdvpJkaeOfGDnVrnS_5Eul1ORSJxTypbo2XNaBixVBLaqsclWnsa3Mx7u5ErNFiMj5RFKwn7lZwaj4gekcAFD8k9nrFm-69E-YTCQtbh6IFQD_7kzSS1LdVqMxu4VLfFNDW-NpIrPOMsPSHaZwX9dLjwTC6I3MiJp4yl6v2S3f6ddxdSWLJeL8Gjnhqpk"
                    />
                  </div>
                  <button className="w-full bg-black text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <span>Resume Study</span>
                    <span className="material-symbols-outlined">play_arrow</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Weekly Progress */}
            <div className="flex flex-col gap-6">
              <div className="bg-white border border-black rounded-lg p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-black text-black">Weekly Progress</h2>
                  <span className="text-sm font-bold text-gray-500">LAST 7 DAYS</span>
                </div>
                
                {/* Line Graph */}
                <div className="flex-1 flex flex-col justify-center min-h-[180px]">
                  <div className="flex items-end justify-between h-32 w-full px-2">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                      <path 
                        d="M0,80 L50,75 L100,85 L150,40 L200,55 L250,20 L300,35 L350,10 L400,15" 
                        fill="none" 
                        stroke="#333333" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-between mt-4 px-1">
                    <span className="text-[10px] font-bold text-gray-500">MON</span>
                    <span className="text-[10px] font-bold text-gray-500">TUE</span>
                    <span className="text-[10px] font-bold text-gray-500">WED</span>
                    <span className="text-[10px] font-bold text-gray-500">THU</span>
                    <span className="text-[10px] font-bold text-gray-500">FRI</span>
                    <span className="text-[10px] font-bold text-gray-500">SAT</span>
                    <span className="text-[10px] font-bold text-gray-500">SUN</span>
                  </div>
                </div>

                <div className="h-px bg-gray-300 my-8"></div>
                
                {/* Circular Progress */}
                <div className="flex flex-col items-center justify-center pb-4">
                  <div className="relative size-48 flex items-center justify-center">
                    <svg className="size-full transform -rotate-90">
                      <circle 
                        className="text-gray-300" 
                        cx="96" 
                        cy="96" 
                        fill="transparent" 
                        r="88" 
                        stroke="currentColor" 
                        strokeWidth="12"
                      />
                      <circle 
                        className="text-black" 
                        cx="96" 
                        cy="96" 
                        fill="transparent" 
                        r="88" 
                        stroke="currentColor" 
                        strokeDasharray="552.92" 
                        strokeDashoffset="138.23" 
                        strokeWidth="12"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black">75%</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Done</span>
                    </div>
                  </div>
                  <p className="mt-6 text-center font-bold text-lg">Syllabus Completion</p>
                  <p className="text-sm text-gray-600 text-center">You are 15% ahead of your weekly goal</p>
                </div>
              </div>
            </div>

            {/* Column 3: AI Notifications Feed */}
            <div className="flex flex-col gap-6">
              <div className="bg-white border border-black rounded-lg p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-black text-black">AI Notifications</h2>
                  <div className="size-6 bg-black rounded-full flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">3</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Notification Item 1 */}
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-300 flex gap-4">
                    <div className="size-10 shrink-0 bg-white border border-black flex items-center justify-center rounded">
                      <span className="material-symbols-outlined text-xl">event</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Upcoming Exam</p>
                      <p className="text-sm text-gray-700 mt-0.5">Test scheduled for 4 PM today: Organic Chemistry Basics.</p>
                      <span className="text-[10px] font-bold text-gray-500 mt-2 block">10 MINS AGO</span>
                    </div>
                  </div>

                  {/* Notification Item 2 */}
                  <div className="p-4 bg-transparent rounded-lg border border-gray-300 flex gap-4">
                    <div className="size-10 shrink-0 bg-white border border-gray-300 flex items-center justify-center rounded">
                      <span className="material-symbols-outlined text-xl">check_circle</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Doubts Resolved</p>
                      <p className="text-sm text-gray-700 mt-0.5">AI Tutor has resolved 3 new doubts in Physics: Kinematics.</p>
                      <span className="text-[10px] font-bold text-gray-500 mt-2 block">2 HOURS AGO</span>
                    </div>
                  </div>

                  {/* Notification Item 3 */}
                  <div className="p-4 bg-transparent rounded-lg border border-gray-300 flex gap-4">
                    <div className="size-10 shrink-0 bg-white border border-gray-300 flex items-center justify-center rounded">
                      <span className="material-symbols-outlined text-xl">style</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">New Resource</p>
                      <p className="text-sm text-gray-700 mt-0.5">Personalized flashcards ready for your weakest biology topics.</p>
                      <span className="text-[10px] font-bold text-gray-500 mt-2 block">5 HOURS AGO</span>
                    </div>
                  </div>

                  {/* Notification Item 4 */}
                  <div className="p-4 bg-transparent rounded-lg border border-gray-300 flex gap-4 opacity-60">
                    <div className="size-10 shrink-0 bg-white border border-gray-300 flex items-center justify-center rounded">
                      <span className="material-symbols-outlined text-xl">psychology</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Study Insights</p>
                      <p className="text-sm text-gray-700 mt-0.5">Your concentration peak was 10:30 AM yesterday.</p>
                      <span className="text-[10px] font-bold text-gray-500 mt-2 block">YESTERDAY</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <button className="w-full py-3 text-sm font-bold border border-black rounded-lg hover:bg-black hover:text-white transition-all">
                    View All Notifications
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer area / quick links */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Streaks</p>
                <p className="text-2xl font-black">12 Days</p>
              </div>
              <span className="material-symbols-outlined text-3xl opacity-20">local_fire_department</span>
            </div>
            
            <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Points</p>
                <p className="text-2xl font-black">2,450</p>
              </div>
              <span className="material-symbols-outlined text-3xl opacity-20">database</span>
            </div>
            
            <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Ranking</p>
                <p className="text-2xl font-black">#42</p>
              </div>
              <span className="material-symbols-outlined text-3xl opacity-20">leaderboard</span>
            </div>
            
            <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">Focus Score</p>
                <p className="text-2xl font-black">88</p>
              </div>
              <span className="material-symbols-outlined text-3xl opacity-20">target</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardOverview;