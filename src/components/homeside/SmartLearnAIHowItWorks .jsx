import React from 'react';
import { useNavigate } from "react-router-dom";

const KnowscopeHowItWorks = () => {
  let navigate = useNavigate();

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Navigation */}
      <header className="flex items-center justify-between border-b border-gray-200 px-6 md:px-20 py-6">
        <div className="flex items-center gap-4">
          <div className="size-8 bg-black flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">all_inclusive</span>
          </div>
          <h2 className="text-black text-xl font-bold tracking-tighter uppercase">Knowscope</h2>
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
          KNOWLEDGE<br/>EVOLVED
        </h1>
        <div className="mt-12 flex flex-col md:flex-row gap-12 items-end">
          <p className="text-lg md:text-2xl font-normal leading-relaxed text-gray-600 max-w-2xl">
            Knowscope transforms textbooks and PDFs into living, breathing learning ecosystems. 
            It's not just a reader—it's an AI-powered mentor that understands, quizzes, and guides you through your own material.
          </p>
          <div className="hidden md:block flex-1 border-b border-black mb-3"></div>
        </div>
      </section>

      {/* Three Pillars Section - Core Purpose */}
      <section className="px-6 md:px-20 py-24 bg-white border-y border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Pillar 1 - Interactive Learning */}
          <div className="border border-black p-12 flex flex-col min-h-[500px] justify-between group hover:bg-black hover:text-white transition-all duration-500">
            <div>
              <span className="material-symbols-outlined text-6xl mb-8">menu_book</span>
              <h3 className="text-3xl font-bold mb-6 tracking-tighter">#InteractiveTextbooks</h3>
              <p className="text-lg opacity-80 leading-relaxed font-light">
                Transform static PDFs and textbooks into interactive learning experiences. Ask questions, get instant answers, and explore concepts conversationally—like having a professor right beside you.
              </p>
            </div>
            <button className="w-fit mt-12 px-0 py-2 border-b-2 border-current text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              #Explore
            </button>
          </div>

          {/* Pillar 2 - Smart Assessment */}
          <div className="border border-black p-12 flex flex-col min-h-[500px] justify-between group hover:bg-black hover:text-white transition-all duration-500 md:border-l-0">
            <div>
              <span className="material-symbols-outlined text-6xl mb-8">quiz</span>
              <h3 className="text-3xl font-bold mb-6 tracking-tighter">#AutomatedQuizzing</h3>
              <p className="text-lg opacity-80 leading-relaxed font-light">
                Automatically generate intelligent quizzes from your study materials. Test your understanding with questions tailored to your learning material, not generic content.
              </p>
            </div>
            <button className="w-fit mt-12 px-0 py-2 border-b-2 border-current text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              #StartQuiz
            </button>
          </div>

          {/* Pillar 3 - Performance Analytics */}
          <div className="border border-black p-12 flex flex-col min-h-[500px] justify-between group hover:bg-black hover:text-white transition-all duration-500 md:border-l-0">
            <div>
              <span className="material-symbols-outlined text-6xl mb-8">insights</span>
              <h3 className="text-3xl font-bold mb-6 tracking-tighter">#LearningAnalytics</h3>
              <p className="text-lg opacity-80 leading-relaxed font-light">
                Track your progress with detailed performance insights. Understand your strengths, identify areas for improvement, and receive personalized recommendations for deeper learning.
              </p>
            </div>
            <button className="w-fit mt-12 px-0 py-2 border-b-2 border-current text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
              #TrackProgress
            </button>
          </div>
        </div>
      </section>

      {/* Project Purpose Section */}
      <section className="px-6 md:px-20 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-4 py-1 border border-black mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Our Mission</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight max-w-4xl">
            AI-Powered Learning Platform – Knowscope
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Core Purpose */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-4xl">lightbulb</span>
                  What We Built
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Knowscope is an AI-driven educational platform that transforms how students interact with their learning materials. 
                  We've architected a system that turns static textbooks and PDFs into dynamic, interactive learning experiences—complete 
                  with contextual Q&A, automated quiz generation, and intelligent performance evaluation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-4xl">target</span>
                  The Problem We Solve
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Students face information overload—juggling multiple tabs, textbooks, and PDFs without a unified way to learn. 
                  Knowscope replaces this chaos with a single, focused interface where your entire learning ecosystem comes alive. 
                  No more passive reading; every material becomes an interactive conversation.
                </p>
              </div>

              {/* <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-4xl">auto_awesome</span>
                  How It Works
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Upload your textbooks or PDFs, and Knowscope instantly transforms them into an intelligent knowledge base. 
                  Ask questions conversationally, generate practice quizzes automatically, and receive personalized insights about 
                  your learning progress—all from your own materials.
                </p>
              </div> */}
            </div>

            {/* Right Column - Key Features */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                  Contextual Q&A
                </h4>
                <p className="text-gray-600">
                  Ask questions about your textbooks and get precise, context-aware answers instantly. The AI understands your materials deeply and responds with relevant, accurate information.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                  Automated Quiz Generation
                </h4>
                <p className="text-gray-600">
                  Never spend time creating practice tests again. Knowscope automatically generates intelligent quizzes from your uploaded content, testing you on what actually matters.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                  Performance Evaluation
                </h4>
                <p className="text-gray-600">
                  Receive detailed analytics on your learning journey. Understand your mastery levels, identify weak areas, and get personalized recommendations for improvement.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600">check_circle</span>
                  Intelligent Mentoring
                </h4>
                <p className="text-gray-600">
                  Your AI mentor guides your study sessions, suggests what to review next, and ensures you're always learning efficiently—adapting to your pace and progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Impact Section */}
      <section className="px-6 md:px-20 py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-4 py-1 border border-white/30 mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">Student Outcomes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">
            Transforming How Students Learn
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-3">
              <div className="text-5xl font-bold text-green-400">60%</div>
              <p className="text-sm uppercase tracking-wider opacity-80">Faster Concept Mastery</p>
              <p className="text-xs text-gray-400">Students learn concepts more quickly</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold text-blue-400">75%</div>
              <p className="text-sm uppercase tracking-wider opacity-80">Better Retention</p>
              <p className="text-xs text-gray-400">Information retention improves</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold text-purple-400">40%</div>
              <p className="text-sm uppercase tracking-wider opacity-80">Reduced Study Time</p>
              <p className="text-xs text-gray-400">More efficient learning paths</p>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold text-yellow-400">90%</div>
              <p className="text-sm uppercase tracking-wider opacity-80">Student Satisfaction</p>
              <p className="text-xs text-gray-400">From pilot program feedback</p>
            </div>
          </div>

          <div className="mt-20 p-8 border border-white/20 rounded-2xl bg-white/5">
            <p className="text-xl text-center italic text-gray-300">
              "Knowscope transforms passive reading into active learning. Every textbook becomes a conversation, 
              every PDF becomes a quiz, and every student gets a personal mentor."
            </p>
          </div>
        </div>
      </section>

      {/* Learning Journey Visual */}
      <section className="px-6 md:px-20 py-32 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1 border border-black mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em]">The Experience</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-16">Your Learning Journey</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="bg-white text-black p-8 rounded-2xl border-2 border-black">
              <span className="material-symbols-outlined text-5xl mb-4">upload_file</span>
              <h4 className="text-xl font-bold mb-3">1. Upload Materials</h4>
              <p className="text-sm opacity-70">Upload your textbooks, PDFs, and course materials</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white text-black p-8 rounded-2xl border-2 border-black">
              <span className="material-symbols-outlined text-5xl mb-4">psychology</span>
              <h4 className="text-xl font-bold mb-3">2. AI Transformation</h4>
              <p className="text-sm opacity-70">Content becomes interactive knowledge base</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white text-black p-8 rounded-2xl border-2 border-black">
              <span className="material-symbols-outlined text-5xl mb-4">school</span>
              <h4 className="text-xl font-bold mb-3">3. Active Learning</h4>
              <p className="text-sm opacity-70">Ask questions, take quizzes, track progress</p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center gap-4 text-sm text-gray-500">
            <span className="px-4 py-2 bg-gray-100 rounded-full">📚 From Textbooks</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">❓ To Conversations</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full">📊 To Insights</span>
          </div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="px-6 md:px-20 pb-40">
        <div className="max-w-7xl mx-auto">
          <button className="w-full bg-black text-white py-16 md:py-24 group relative overflow-hidden transition-all duration-700 hover:bg-gray-900">
            <div className="relative z-10 flex flex-col items-center justify-center gap-4">
              <span className="text-4xl md:text-8xl font-bold tracking-tighter uppercase">#JoinKnowscope</span>
              <span className="text-sm md:text-lg font-light tracking-[0.5em] opacity-70 group-hover:tracking-[0.7em] transition-all duration-500 uppercase italic">
                Transform Your Learning Experience
              </span>
            </div>
            <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs font-bold uppercase tracking-widest opacity-60">
          © 2024 Knowscope. All Rights Reserved.
        </div>
        <div className="flex gap-8">
          <a className="text-xs font-bold uppercase tracking-widest hover:underline" href="#">Privacy</a>
          <a className="text-xs font-bold uppercase tracking-widest hover:underline" href="#">Terms</a>
          <a className="text-xs font-bold uppercase tracking-widest hover:underline" href="#">About</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-green-500"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest">Platform: Active</span>
        </div>
      </footer>
    </div>
  );
};

export default KnowscopeHowItWorks;