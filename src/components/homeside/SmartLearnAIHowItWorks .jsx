import React from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import GoogleAuth from '../auth/GoogleAuth';


const SmartLearnAIHowItWorks = () => {
let navigate=useNavigate()    
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Navigation */}
      <header className="flex items-center justify-between border-b border-gray-200 px-6 md:px-20 py-6">
        <div className="flex items-center gap-4">
          <div className="size-8 bg-black flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">all_inclusive</span>
          </div>
          <h2 className="text-black text-xl font-bold tracking-tighter uppercase">SmartLearn AI</h2>
        </div>
 
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/auth/google")} className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
            Enter Portal
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-20 pt-24 pb-32 max-w-[1440px] mx-auto text-center md:text-left">
        <h1 className="text-5xl md:text-8xl lg:text-[120px] font-bold leading-[0.9] tracking-tight text-black uppercase">
          BEYOND STATIC<br/>LEARNING
        </h1>
        <div className="mt-12 flex flex-col md:flex-row gap-12 items-end">
          <p className="text-lg md:text-2xl font-normal leading-relaxed text-gray-600 max-w-2xl">
            SmartLearn AI isn't a folder for your PDFs. It's a living, breathing study partner that understands, organizes, and quizzes you on your own material.
          </p>
          <div className="hidden md:block flex-1 border-b border-black mb-3"></div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="px-6 md:px-20 py-24 bg-white border-y border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Pillar 1 */}
          <div className="border border-black p-12 flex flex-col min-h-[500px] justify-between group hover:bg-black hover:text-white transition-all duration-500">
            <div>
              <span className="material-symbols-outlined text-6xl mb-8">search_insights</span>
              <h3 className="text-3xl font-bold mb-6 tracking-tighter">#TheNeuralSyllabus</h3>
              <p className="text-lg opacity-80 leading-relaxed font-light">
                Decomposition of complex PDFs into neural knowledge graphs. We map every connection, ensuring deep context is never lost in a folder.
              </p>
            </div>
            <button className="w-fit mt-12 px-0 py-2 border-b-2 border-current text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              #ExploreNodes
            </button>
          </div>

          {/* Pillar 2 */}
          <div className="border border-black p-12 flex flex-col min-h-[500px] justify-between group hover:bg-black hover:text-white transition-all duration-500 md:border-l-0">
            <div>
              <span className="material-symbols-outlined text-6xl mb-8">psychology</span>
              <h3 className="text-3xl font-bold mb-6 tracking-tighter">#ActiveEvaluation</h3>
              <p className="text-lg opacity-80 leading-relaxed font-light">
                Fighting the forgetting curve with automated, timed active-recall testing. Our AI knows exactly when you're about to forget a concept.
              </p>
            </div>
            <button className="w-fit mt-12 px-0 py-2 border-b-2 border-current text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              #StartTest
            </button>
          </div>

          {/* Pillar 3 */}
          <div className="border border-black p-12 flex flex-col min-h-[500px] justify-between group hover:bg-black hover:text-white transition-all duration-500 md:border-l-0">
            <div>
              <span className="material-symbols-outlined text-6xl mb-8">bolt</span>
              <h3 className="text-3xl font-bold mb-6 tracking-tighter">#AgenticGuidance</h3>
              <p className="text-lg opacity-80 leading-relaxed font-light">
                Proactive AI mentoring that guides your focus where it's needed most. It doesn't just answer; it directs your intellectual journey.
              </p>
            </div>
            <button className="w-fit mt-12 px-0 py-2 border-b-2 border-current text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              #MeetMentor
            </button>
          </div>
        </div>
      </section>

      {/* Project Identity / Manifesto */}
      <section className="px-6 md:px-20 py-40 max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1 border border-black mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Our Identity</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-black">
          This project was built to solve the <span className="italic font-bold">Information Overload</span> in modern education. We replace 10 open tabs with 1 focused interface.
        </h2>
        <div className="mt-16 flex justify-center items-center gap-4">
          <div className="h-[1px] w-12 bg-gray-400"></div>
          <p className="text-sm font-bold uppercase tracking-widest opacity-50">Est. 2024 — San Francisco</p>
          <div className="h-[1px] w-12 bg-gray-400"></div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="px-6 md:px-20 py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-4 py-1 border border-black mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Technology Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Advanced Technologies Powering SmartLearn AI
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {/* Frontend Technology */}
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-blue-600">devices</span>
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                  <span><strong>React.js</strong> - Interactive user interface</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                  <span><strong>Tailwind CSS</strong> - Responsive design system</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                  <span><strong>Axios</strong> - API communication</span>
                </li>
              </ul>
            </div>

            {/* Backend Technology */}
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-green-600">storage</span>
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                  <span><strong>Django REST Framework</strong> - Robust API server</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                  <span><strong>JWT Authentication</strong> - Secure user authentication</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                  <span><strong>PostgreSQL</strong> - Relational database</span>
                </li>
              </ul>
            </div>

            {/* AI Technology */}
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-purple-600">psychology</span>
                <h3 className="text-xl font-bold">AI Layer</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                  <span><strong>RAG (Retrieval Augmented Generation)</strong> - Context-aware responses</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                  <span><strong>LangChain/LangGraph</strong> - Agent orchestration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                  <span><strong>Vector Databases</strong> - Semantic search capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Users Section */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-4 py-1 border border-black mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em]">User Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            How SmartLearn AI Transforms Learning
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-black transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-blue-100 flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-blue-600">schedule</span>
                </div>
                <h3 className="text-lg font-bold">Personalized Learning</h3>
              </div>
              <p className="text-gray-600">
                AI creates customized study schedules based on your syllabus, exam dates, and learning pace. No more one-size-fits-all approaches.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-black transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-green-100 flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-green-600">auto_awesome</span>
                </div>
                <h3 className="text-lg font-bold">Smart Revision</h3>
              </div>
              <p className="text-gray-600">
                AI predicts when you're likely to forget concepts and schedules revision at optimal times using spaced repetition algorithms.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-black transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-purple-100 flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-purple-600">support_agent</span>
                </div>
                <h3 className="text-lg font-bold">24/7 AI Mentor</h3>
              </div>
              <p className="text-gray-600">
                Get instant answers to doubts anytime, anywhere. Our AI mentor explains complex concepts in simple terms and provides step-by-step guidance.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-black transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-orange-100 flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-orange-600">assessment</span>
                </div>
                <h3 className="text-lg font-bold">Progress Analytics</h3>
              </div>
              <p className="text-gray-600">
                Track your learning journey with detailed insights, performance metrics, and predictive analytics showing your readiness for exams.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-black transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-red-100 flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-red-600">quiz</span>
                </div>
                <h3 className="text-lg font-bold">Adaptive Testing</h3>
              </div>
              <p className="text-gray-600">
                AI-generated tests that adapt to your skill level, focusing on weak areas to maximize learning efficiency.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-black transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-indigo-100 flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-indigo-600">rocket_launch</span>
                </div>
                <h3 className="text-lg font-bold">Time Optimization</h3>
              </div>
              <p className="text-gray-600">
                Reduce study time by 40% with focused learning paths that eliminate redundant content and highlight what matters most for your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Impact Section */}
      <section className="px-6 md:px-20 py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Measurable Learning Improvements
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center mt-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-400">60%</div>
              <p className="text-sm opacity-80">Faster Concept Mastery</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-400">75%</div>
              <p className="text-sm opacity-80">Better Retention Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-400">40%</div>
              <p className="text-sm opacity-80">Reduced Study Time</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">90%</div>
              <p className="text-sm opacity-80">User Satisfaction</p>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-300 max-w-2xl mx-auto">
            Based on pilot studies with 500+ students across different educational levels and subjects.
          </p>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="px-6 md:px-20 pb-40">
        <div className="max-w-7xl mx-auto">
          <button className="w-full bg-black text-white py-16 md:py-24 group relative overflow-hidden transition-all duration-700 hover:bg-gray-900">
            <div className="relative z-10 flex flex-col items-center justify-center gap-4">
              <span className="text-4xl md:text-8xl font-bold tracking-tighter uppercase">#JoinTheFuture</span>
              <span className="text-sm md:text-lg font-light tracking-[0.5em] opacity-70 group-hover:tracking-[0.7em] transition-all duration-500 uppercase italic">
                Limited Access Available
              </span>
            </div>
            <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs font-bold uppercase tracking-widest opacity-60">
          © 2024 SmartLearn AI. All Rights Reserved.
        </div>
        <div className="flex gap-8">
          <a className="text-xs font-bold uppercase tracking-widest hover:underline" href="#">Privacy</a>
          <a className="text-xs font-bold uppercase tracking-widest hover:underline" href="#">Terms</a>
          <a className="text-xs font-bold uppercase tracking-widest hover:underline" href="#">Github</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-green-500"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest">System Status: Optimal</span>
        </div>
      </footer>
    </div>
  );
};
export default SmartLearnAIHowItWorks;







