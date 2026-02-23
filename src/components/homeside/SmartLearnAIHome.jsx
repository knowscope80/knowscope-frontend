// import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// const SmartLearnAIHome = () => {
//   const navigate = useNavigate();
//   const [authError, setAuthError] = useState(null);
//   const [profiledata,setProfil]=useState(null)

//   useEffect(() => {
//     checkAuthentication();
//   }, []);

//   const checkAuthentication = async () => {
//     try {
//       const token = localStorage.getItem('access_token');
//       if (!token) {
//         setAuthError('Not authenticated');
//         navigate("/SmartLearnAIHowItWorks");
//       }

//       const response = await axios.get('http://127.0.0.1:8000/students/authenticateduser', {headers: {'Authorization': `Bearer ${token}`}});
//       console.log(response.data)
//       setProfil(response.data)


//       if(!response.data){
//         navigate('/StudentProfileSetup')
//       }
//       } catch (error) {
//         navigate('/StudentProfileSetup')
//        }};

//   const handleGetStarted = () => {
//       navigate('/DashboardOverview')
//   };

//   return (
//     <div className="bg-white text-black min-h-screen font-sans">
//       {/* Navigation */}
//       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="size-8 bg-black flex items-center justify-center rounded">
//               <span className="material-symbols-outlined text-white">bolt</span>
//             </div>
//             <h2 className="text-xl font-black tracking-tighter uppercase">SmartLearn AI</h2>
//           </div>
//           <div className="hidden md:flex items-center gap-10">
//             <a className="text-sm font-semibold hover:text-gray-600 transition-colors" href="#">Syllabus</a>
//             <a className="text-sm font-semibold hover:text-gray-600 transition-colors" href="#">Test</a>
//             <a className="text-sm font-semibold hover:text-gray-600 transition-colors" href="#">AI Mentor</a>
//           </div>
//           <div className="flex items-center gap-4">
   
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="relative pt-20 pb-16 px-6 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-6xl md:text-8xl font-black tracking-[-0.05em] leading-[0.9] mb-8">
//             Master Your Syllabus with Agentic AI
//           </h1>
//           <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
//             Revolutionize your study habits with personalized learning paths and automated study plans tailored just for you.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <button 
//               onClick={handleGetStarted}
//               className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform"
//             >
//               Get Started
//             </button>
//             <button className="w-full sm:w-auto border border-gray-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors">
//               Watch Demo
//             </button>
//           </div>
//           {authError && (
//             <p className="text-red-500 text-sm mt-4">{authError}</p>
//           )}
//         </div>
//       </header>

//       {/* Rest of your existing UI sections remain exactly the same */}
//       {/* Dashboard Preview */}
//       <section className="px-6 mb-32">
//         <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden relative">
//           <div className="border-b border-gray-200 p-4 flex items-center gap-2">
//             <div className="flex gap-1.5">
//               <div className="size-3 rounded-full bg-gray-200"></div>
//               <div className="size-3 rounded-full bg-gray-200"></div>
//               <div className="size-3 rounded-full bg-gray-200"></div>
//             </div>
//             <div className="mx-auto text-xs font-medium text-gray-600 uppercase tracking-widest">Dashboard Preview</div>
//           </div>
//           <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-start">
//             <div className="flex-1 w-full space-y-8">
//               <div className="space-y-3">
//                 <div className="flex justify-between items-end">
//                   <p className="text-sm font-bold uppercase tracking-wider">Syllabus Completion</p>
//                   <p className="text-2xl font-black">75%</p>
//                 </div>
//                 <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
//                   <div className="h-full bg-black" style={{ width: '75%' }}></div>
//                 </div>
//                 <p className="text-xs text-gray-600 font-medium italic">You're 4 days ahead of schedule!</p>
//               </div>
//               <div className="p-6 border border-gray-200 rounded-xl bg-gray-50/50">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="font-bold text-lg">Next Topic: Quantum Mechanics</h3>
//                     <p className="text-sm text-gray-600">Estimated study time: 45 mins</p>
//                   </div>
//                   <span className="material-symbols-outlined text-black">science</span>
//                 </div>
//                 <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
//                   <span className="material-symbols-outlined text-sm">play_arrow</span> Start Now
//                 </button>
//               </div>
//             </div>
//             <div className="w-full md:w-72 bg-white border border-gray-200 rounded-xl p-4 shadow-sm relative group">
//               <div className="flex items-center gap-3 border-b border-gray-200 pb-3 mb-4">
//                 <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center">
//                   <span className="material-symbols-outlined text-sm">smart_toy</span>
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold uppercase">AI Mentor</p>
//                   <p className="text-[10px] text-green-500 font-bold">• Online</p>
//                 </div>
//               </div>
//               <div className="space-y-3 mb-4 h-48 overflow-y-auto pr-2">
//                 <div className="bg-gray-100 p-2 rounded-lg text-[11px] max-w-[85%]">
//                   Hi! Ready to tackle Wave-Particle Duality?
//                 </div>
//                 <div className="bg-black text-white p-2 rounded-lg text-[11px] max-w-[85%] ml-auto">
//                   Yes, I'm stuck on Heisenberg's principle.
//                 </div>
//                 <div className="bg-gray-100 p-2 rounded-lg text-[11px] max-w-[85%]">
//                   Think of it as a trade-off between knowing where something is vs where it's going...
//                 </div>
//               </div>
//               <div className="relative">
//                 <input 
//                   className="w-full text-[11px] border border-gray-300 rounded-lg pr-8 focus:ring-black focus:border-black focus:outline-none px-3 py-2" 
//                   placeholder="Ask anything..." 
//                   type="text"
//                 />
//                 <span className="material-symbols-outlined absolute right-2 top-2.5 text-sm text-gray-600">send</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Feature Bento Grid */}
//       <section className="px-6 py-24 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
//           {/* Daily Plan */}
//           <div className="md:col-span-2 md:row-span-1 p-8 border border-gray-200 rounded-2xl bg-white hover:border-black transition-colors group">
//             <span className="material-symbols-outlined mb-4 text-3xl group-hover:scale-110 transition-transform">event_repeat</span>
//             <h3 className="text-xl font-bold mb-2">Daily Plan</h3>
//             <p className="text-gray-600 text-sm mb-6">Automated task lists tailored to your exam dates.</p>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-3 text-sm">
//                 <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
//                 Review Newton's Laws
//               </li>
//               <li className="flex items-center gap-3 text-sm">
//                 <span className="material-symbols-outlined text-gray-300 text-lg">radio_button_unchecked</span>
//                 Solve 10 Calculus Problems
//               </li>
//               <li className="flex items-center gap-3 text-sm">
//                 <span className="material-symbols-outlined text-gray-300 text-lg">radio_button_unchecked</span>
//                 Read History Chapter 4
//               </li>
//             </ul>
//           </div>

//           {/* Instant Doubts */}
//           <div className="md:col-span-2 md:row-span-1 p-8 border border-gray-200 rounded-2xl bg-white hover:border-black transition-colors group">
//             <span className="material-symbols-outlined mb-4 text-3xl group-hover:scale-110 transition-transform">chat_bubble</span>
//             <h3 className="text-xl font-bold mb-2">Instant Doubts</h3>
//             <p className="text-gray-600 text-sm mb-6">Get conceptual clarity in seconds with the Agentic AI Mentor.</p>
//             <div className="flex flex-col gap-2">
//               <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
//               <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
//               <div className="h-2 w-2/3 bg-gray-100 rounded-full"></div>
//             </div>
//           </div>

//           {/* Smart Tests */}
//           <div className="md:col-span-2 md:row-span-1 p-8 border border-gray-200 rounded-2xl bg-white hover:border-black transition-colors group">
//             <span className="material-symbols-outlined mb-4 text-3xl group-hover:scale-110 transition-transform">quiz</span>
//             <h3 className="text-xl font-bold mb-2">Smart Tests</h3>
//             <p className="text-gray-600 text-sm mb-6">AI-generated MCQs based on your weak areas.</p>
//             <div className="grid grid-cols-2 gap-2">
//               <div className="p-3 border border-gray-200 rounded-lg text-[10px] font-bold text-center uppercase tracking-widest">Option A</div>
//               <div className="p-3 border border-gray-200 rounded-lg text-[10px] font-bold text-center uppercase tracking-widest">Option B</div>
//               <div className="p-3 border border-gray-200 rounded-lg text-[10px] font-bold text-center uppercase tracking-widest">Option C</div>
//               <div className="p-3 border border-black bg-black text-white rounded-lg text-[10px] font-bold text-center uppercase tracking-widest">Option D</div>
//             </div>
//           </div>

//           {/* Progress Tracking */}
//           <div className="md:col-span-2 md:row-span-1 p-8 border border-gray-200 rounded-2xl bg-white hover:border-black transition-colors group">
//             <span className="material-symbols-outlined mb-4 text-3xl group-hover:scale-110 transition-transform">query_stats</span>
//             <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
//             <p className="text-gray-600 text-sm mb-6">Granular insights into your learning curve.</p>
//             <div className="flex items-end gap-2 h-20 px-2">
//               <div className="flex-1 bg-gray-100 h-[30%] rounded-t"></div>
//               <div className="flex-1 bg-gray-200 h-[50%] rounded-t"></div>
//               <div className="flex-1 bg-gray-300 h-[80%] rounded-t"></div>
//               <div className="flex-1 bg-black h-[95%] rounded-t"></div>
//               <div className="flex-1 bg-gray-200 h-[60%] rounded-t"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Technology & Benefits Section */}
//       <section className="px-6 py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technology & Benefits</h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Technology Stack */}
//             <div className="bg-white p-8 rounded-2xl border border-gray-200">
//               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                 <span className="material-symbols-outlined text-blue-600">architecture</span>
//                 Technology Stack
//               </h3>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold mb-2 text-lg">Frontend</h4>
//                   <p className="text-gray-600">React.js with Tailwind CSS for responsive, interactive interfaces</p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2 text-lg">Backend</h4>
//                   <p className="text-gray-600">Django REST Framework for robust API creation and management</p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2 text-lg">AI Layer</h4>
//                   <p className="text-gray-600">RAG + Agentic AI for intelligent tutoring and adaptive learning</p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2 text-lg">Database</h4>
//                   <p className="text-gray-600">PostgreSQL + Vector DB for structured data and knowledge embeddings</p>
//                 </div>
//               </div>
//             </div>

//             {/* User Benefits */}
//             <div className="bg-white p-8 rounded-2xl border border-gray-200">
//               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                 <span className="material-symbols-outlined text-green-600">rocket_launch</span>
//                 User Benefits
//               </h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <span className="material-symbols-outlined text-green-500 mt-1">check_circle</span>
//                   <div>
//                     <h4 className="font-semibold">Personalized Learning Paths</h4>
//                     <p className="text-gray-600 text-sm">AI creates customized study plans based on your syllabus and learning pace</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="material-symbols-outlined text-green-500 mt-1">check_circle</span>
//                   <div>
//                     <h4 className="font-semibold">24/7 AI Mentor</h4>
//                     <p className="text-gray-600 text-sm">Instant doubt resolution with step-by-step explanations</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="material-symbols-outlined text-green-500 mt-1">check_circle</span>
//                   <div>
//                     <h4 className="font-semibold">Smart Progress Tracking</h4>
//                     <p className="text-gray-600 text-sm">Detailed analytics and insights into your learning journey</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="material-symbols-outlined text-green-500 mt-1">check_circle</span>
//                   <div>
//                     <h4 className="font-semibold">Adaptive Testing</h4>
//                     <p className="text-gray-600 text-sm">AI-generated tests that focus on your weak areas</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* How It Works */}
//           <div className="mt-12 bg-black text-white p-8 rounded-2xl">
//             <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
//             <div className="grid md:grid-cols-4 gap-6 text-center">
//               <div className="space-y-3">
//                 <div className="size-12 mx-auto flex items-center justify-center bg-white text-black rounded-full font-bold">1</div>
//                 <p className="font-medium">Select Syllabus</p>
//                 <p className="text-sm opacity-80">Choose your educational level and subjects</p>
//               </div>
//               <div className="space-y-3">
//                 <div className="size-12 mx-auto flex items-center justify-center bg-white text-black rounded-full font-bold">2</div>
//                 <p className="font-medium">Get AI Study Plan</p>
//                 <p className="text-sm opacity-80">AI creates personalized daily schedule</p>
//               </div>
//               <div className="space-y-3">
//                 <div className="size-12 mx-auto flex items-center justify-center bg-white text-black rounded-full font-bold">3</div>
//                 <p className="font-medium">Learn with AI Mentor</p>
//                 <p className="text-sm opacity-80">Interactive learning and doubt resolution</p>
//               </div>
//               <div className="space-y-3">
//                 <div className="size-12 mx-auto flex items-center justify-center bg-white text-black rounded-full font-bold">4</div>
//                 <p className="font-medium">Track Progress</p>
//                 <p className="text-sm opacity-80">Monitor achievements and improvement areas</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-gray-200 pt-16 pb-12 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
//           <div className="md:col-span-2">
//             <div className="flex items-center gap-2 mb-6">
//               <div className="size-6 bg-black flex items-center justify-center rounded">
//                 <span className="material-symbols-outlined text-white text-sm">bolt</span>
//               </div>
//               <h2 className="text-lg font-black tracking-tighter uppercase">SmartLearn AI</h2>
//             </div>
//             <p className="text-gray-600 text-sm max-w-sm">
//               The intelligent co-pilot for your academic journey. Built for high-performance students who value time.
//             </p>
//           </div>
//           <div>
//             <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Platform</h4>
//             <ul className="space-y-4 text-sm text-gray-600">
//               <li><a className="hover:text-black transition-colors" href="#">Pricing</a></li>
//               <li><a className="hover:text-black transition-colors" href="#">Syllabus Import</a></li>
//               <li><a className="hover:text-black transition-colors" href="#">API Access</a></li>
//               <li><a className="hover:text-black transition-colors" href="#">Mobile App</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h4>
//             <ul className="space-y-4 text-sm text-gray-600">
//               <li><a className="hover:text-black transition-colors" href="#">Documentation</a></li>
//               <li><a className="hover:text-black transition-colors" href="#">Privacy Policy</a></li>
//               <li><a className="hover:text-black transition-colors" href="#">Terms of Service</a></li>
//               <li><a className="hover:text-black transition-colors" href="#">Contact Us</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between gap-4">
//           <p className="text-xs text-gray-600">© 2024 SmartLearn AI. All rights reserved.</p>
//           <div className="flex gap-6">
//             <span className="material-symbols-outlined text-gray-600 cursor-pointer hover:text-black transition-colors">language</span>
//             <span className="material-symbols-outlined text-gray-600 cursor-pointer hover:text-black transition-colors">shield_person</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default SmartLearnAIHome;







import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SmartLearnAIHome = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);
  const [profiledata, setProfil] = useState(null);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setAuthError('Not authenticated');
        navigate("/SmartLearnAIHowItWorks");
        return;
      }

      const response = await axios.get('http://127.0.0.1:8000/students/authenticateduser', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      console.log(response.data);
      setProfil(response.data);
        if (!profiledata) {
        console.log('.........................') 
        navigate('/StudentProfileSetup');
  }

    } catch (error) {
      console.error("Auth check failed:", error);
      navigate('/auth/google');
    }
  };
  

  const handleGetStarted = () => {
    navigate('/DashboardOverview');
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-black flex items-center justify-center rounded">
              <span className="material-symbols-outlined text-white">bolt</span>
            </div>
            <h2 className="text-xl font-black tracking-tighter uppercase">SmartLearn AI</h2>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-sm font-semibold hover:text-gray-600 transition-colors" href="#">Syllabus</a>
            <a className="text-sm font-semibold hover:text-gray-600 transition-colors" href="#">Test</a>
            <a className="text-sm font-semibold hover:text-gray-600 transition-colors" href="#">AI Mentor</a>
          </div>
          <div className="flex items-center gap-4">
            {/* optional user menu can be added here */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black tracking-[-0.05em] leading-[0.9] mb-8">
            Master Your Syllabus with Agentic AI
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Revolutionize your study habits with personalized learning paths and automated study plans tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleGetStarted}
              className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform"
            >
              Get Started
            </button>
            <button className="w-full sm:w-auto border border-gray-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors">
              Watch Demo
            </button>
          </div>
          {authError && (
            <p className="text-red-500 text-sm mt-4">{authError}</p>
          )}
        </div>
      </header>

      {/* Dashboard Preview */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden relative">
          <div className="border-b border-gray-200 p-4 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-gray-200"></div>
              <div className="size-3 rounded-full bg-gray-200"></div>
              <div className="size-3 rounded-full bg-gray-200"></div>
            </div>
            <div className="mx-auto text-xs font-medium text-gray-600 uppercase tracking-widest">Dashboard Preview</div>
          </div>
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 w-full space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <p className="text-sm font-bold uppercase tracking-wider">Syllabus Completion</p>
                  <p className="text-2xl font-black">75%</p>
                </div>
                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-black" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs text-gray-600 font-medium italic">You're 4 days ahead of schedule!</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl bg-gray-50/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Next Topic: Quantum Mechanics</h3>
                    <p className="text-sm text-gray-600">Estimated study time: 45 mins</p>
                  </div>
                  <span className="material-symbols-outlined text-black">science</span>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">play_arrow</span> Start Now
                </button>
              </div>
            </div>
            <div className="w-full md:w-72 bg-white border border-gray-200 rounded-xl p-4 shadow-sm relative group">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3 mb-4">
                <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">smart_toy</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase">AI Mentor</p>
                  <p className="text-[10px] text-green-500 font-bold">• Online</p>
                </div>
              </div>
              <div className="space-y-3 mb-4 h-48 overflow-y-auto pr-2">
                <div className="bg-gray-100 p-2 rounded-lg text-[11px] max-w-[85%]">
                  Hi! Ready to tackle Wave-Particle Duality?
                </div>
                <div className="bg-black text-white p-2 rounded-lg text-[11px] max-w-[85%] ml-auto">
                  Yes, I'm stuck on Heisenberg's principle.
                </div>
                <div className="bg-gray-100 p-2 rounded-lg text-[11px] max-w-[85%]">
                  Think of it as a trade-off between knowing where something is vs where it's going...
                </div>
              </div>
              <div className="relative">
                <input
                  className="w-full text-[11px] border border-gray-300 rounded-lg pr-8 focus:ring-black focus:border-black focus:outline-none px-3 py-2"
                  placeholder="Ask anything..."
                  type="text"
                />
                <span className="material-symbols-outlined absolute right-2 top-2.5 text-sm text-gray-600">send</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
          {/* Daily Plan */}
          <div className="md:col-span-2 md:row-span-1 p-8 border border-gray-200 rounded-2xl bg-white hover:border-black transition-colors group">
            <span className="material-symbols-outlined mb-4 text-3xl group-hover:scale-110 transition-transform">event_repeat</span>
            <h3 className="text-xl font-bold mb-2">Daily Plan</h3>
            <p className="text-gray-600 text-sm mb-6">Automated task lists tailored to your exam dates.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                Review Newton's Laws
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-gray-300 text-lg">radio_button_unchecked</span>
                Solve 10 Calculus Problems
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-gray-300 text-lg">radio_button_unchecked</span>
                Read History Chapter 4
              </li>
            </ul>
          </div>

          {/* Instant Doubts */}
          <div className="md:col-span-2 md:row-span-1 p-8 border border-gray-200 rounded-2xl bg-white hover:border-black transition-colors group">
            <span className="material-symbols-outlined mb-4 text-3xl group-hover:scale-110 transition-transform">chat_bubble</span>
            <h3 className="text-xl font-bold mb-2">Instant Doubts</h3>
            <p className="text-gray-600 text-sm mb-6">Get conceptual clarity in seconds with the Agentic AI Mentor.</p>
            <div className="flex flex-col gap-2">
              <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
              <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
              <div className="h-2 w-2/3 bg-gray-100 rounded-full"></div>
            </div>
          </div>

          {/* Smart Tests */}
          <div className="md:col-span-2 md:row-span-1 p-8 border border-gray-200 rounded-2xl bg-white hover:border-black transition-colors group">
            <span className="material-symbols-outlined mb-4 text-3xl group-hover:scale-110 transition-transform">quiz</span>
            <h3 className="text-xl font-bold mb-2">Smart Tests</h3>
            <p className="text-gray-600 text-sm mb-6">AI-generated MCQs based on your weak areas.</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 border border-gray-200 rounded-lg text-[10px] font-bold text-center uppercase tracking-widest">Option A</div>
              <div className="p-3 border border-gray-200 rounded-lg text-[10px] font-bold text-center uppercase tracking-widest">Option B</div>
              <div className="p-3 border border-gray-200 rounded-lg text-[10px] font-bold text-center uppercase tracking-widest">Option C</div>
              <div className="p-3 border border-black bg-black text-white rounded-lg text-[10px] font-bold text-center uppercase tracking-widest">Option D</div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="md:col-span-2 md:row-span-1 p-8 border border-gray-200 rounded-2xl bg-white hover:border-black transition-colors group">
            <span className="material-symbols-outlined mb-4 text-3xl group-hover:scale-110 transition-transform">query_stats</span>
            <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
            <p className="text-gray-600 text-sm mb-6">Granular insights into your learning curve.</p>
            <div className="flex items-end gap-2 h-20 px-2">
              <div className="flex-1 bg-gray-100 h-[30%] rounded-t"></div>
              <div className="flex-1 bg-gray-200 h-[50%] rounded-t"></div>
              <div className="flex-1 bg-gray-300 h-[80%] rounded-t"></div>
              <div className="flex-1 bg-black h-[95%] rounded-t"></div>
              <div className="flex-1 bg-gray-200 h-[60%] rounded-t"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Benefits Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technology & Benefits</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technology Stack */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-600">architecture</span>
                Technology Stack
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Frontend</h4>
                  <p className="text-gray-600">React.js with Tailwind CSS for responsive, interactive interfaces</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Backend</h4>
                  <p className="text-gray-600">Django REST Framework for robust API creation and management</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">AI Layer</h4>
                  <p className="text-gray-600">RAG + Agentic AI for intelligent tutoring and adaptive learning</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Database</h4>
                  <p className="text-gray-600">PostgreSQL + Vector DB for structured data and knowledge embeddings</p>
                </div>
              </div>
            </div>

            {/* User Benefits */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-green-600">rocket_launch</span>
                User Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 mt-1">check_circle</span>
                  <div>
                    <h4 className="font-semibold">Personalized Learning Paths</h4>
                    <p className="text-gray-600 text-sm">AI creates customized study plans based on your syllabus and learning pace</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 mt-1">check_circle</span>
                  <div>
                    <h4 className="font-semibold">24/7 AI Mentor</h4>
                    <p className="text-gray-600 text-sm">Instant doubt resolution with step-by-step explanations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 mt-1">check_circle</span>
                  <div>
                    <h4 className="font-semibold">Smart Progress Tracking</h4>
                    <p className="text-gray-600 text-sm">Detailed analytics and insights into your learning journey</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 mt-1">check_circle</span>
                  <div>
                    <h4 className="font-semibold">Adaptive Testing</h4>
                    <p className="text-gray-600 text-sm">AI-generated tests that focus on your weak areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-12 bg-black text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-3">
                <div className="size-12 mx-auto flex items-center justify-center bg-white text-black rounded-full font-bold">1</div>
                <p className="font-medium">Select Syllabus</p>
                <p className="text-sm opacity-80">Choose your educational level and subjects</p>
              </div>
              <div className="space-y-3">
                <div className="size-12 mx-auto flex items-center justify-center bg-white text-black rounded-full font-bold">2</div>
                <p className="font-medium">Get AI Study Plan</p>
                <p className="text-sm opacity-80">AI creates personalized daily schedule</p>
              </div>
              <div className="space-y-3">
                <div className="size-12 mx-auto flex items-center justify-center bg-white text-black rounded-full font-bold">3</div>
                <p className="font-medium">Learn with AI Mentor</p>
                <p className="text-sm opacity-80">Interactive learning and doubt resolution</p>
              </div>
              <div className="space-y-3">
                <div className="size-12 mx-auto flex items-center justify-center bg-white text-black rounded-full font-bold">4</div>
                <p className="font-medium">Track Progress</p>
                <p className="text-sm opacity-80">Monitor achievements and improvement areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 bg-black flex items-center justify-center rounded">
                <span className="material-symbols-outlined text-white text-sm">bolt</span>
              </div>
              <h2 className="text-lg font-black tracking-tighter uppercase">SmartLearn AI</h2>
            </div>
            <p className="text-gray-600 text-sm max-w-sm">
              The intelligent co-pilot for your academic journey. Built for high-performance students who value time.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a className="hover:text-black transition-colors" href="#">Pricing</a></li>
              <li><a className="hover:text-black transition-colors" href="#">Syllabus Import</a></li>
              <li><a className="hover:text-black transition-colors" href="#">API Access</a></li>
              <li><a className="hover:text-black transition-colors" href="#">Mobile App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a className="hover:text-black transition-colors" href="#">Documentation</a></li>
              <li><a className="hover:text-black transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-black transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-black transition-colors" href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-gray-600">© 2024 SmartLearn AI. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-gray-600 cursor-pointer hover:text-black transition-colors">language</span>
            <span className="material-symbols-outlined text-gray-600 cursor-pointer hover:text-black transition-colors">shield_person</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartLearnAIHome;