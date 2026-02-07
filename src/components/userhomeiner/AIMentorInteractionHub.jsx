// AIMentorInteractionHub.jsx
import React from 'react';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar'
const AIMentorInteractionHub = () => {
  return (
    <div className="bg-gray-50 h-screen w-full font-sans text-black">
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
       <SmartLearnAINavbar/>

        <main className="flex flex-1 overflow-hidden">
          {/* Sidebar: 30% width */}
          <aside className="w-[30%] min-w-[320px] border-r border-gray-300 bg-white overflow-y-auto p-6 space-y-8">
            {/* Personality Profile Card */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Personality Profile</h3>
              <div className="p-5 rounded-xl border border-gray-300 bg-gray-50">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-12 w-12 rounded-lg bg-black flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-2xl">school</span>
                  </div>
                  <div>
                    <p className="font-bold text-base">The Academic Coach</p>
                    <p className="text-xs text-gray-500">Current AI Persona</p>
                  </div>
                </div>
                <a className="text-black text-sm font-semibold hover:underline flex items-center gap-1" href="#">
                  Change <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </section>

            {/* Knowledge Pulse */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Knowledge Pulse</h3>
                <span className="flex items-center gap-1 text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">
                  <span className="material-symbols-outlined text-[10px] font-bold">check_circle</span> SYNCED
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-600">verified</span>
                    <span className="text-sm font-medium">NCERT Physics</span>
                  </div>
                  <span className="text-[10px] text-gray-400">v2.4</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-600">verified</span>
                    <span className="text-sm font-medium">Chemistry Notes</span>
                  </div>
                  <span className="text-[10px] text-gray-400">Last week</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg border border-gray-200 opacity-50">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400">radio_button_unchecked</span>
                    <span className="text-sm font-medium">Advanced Calculus</span>
                  </div>
                  <span className="text-[10px] text-gray-400">Offline</span>
                </li>
              </ul>
            </section>

            {/* Key Focus Areas */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Key Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex flex-col gap-1 p-3 rounded-lg bg-red-50 border-l-4 border-red-500">
                  <span className="text-sm font-bold text-red-700">Entropy Calculations</span>
                  <span className="text-xs text-red-600/80">Struggled in last 2 quizzes</span>
                </div>
                <div className="flex flex-col gap-1 p-3 rounded-lg bg-orange-50 border-l-4 border-orange-400">
                  <span className="text-sm font-bold text-orange-700">Organic Mechanisms</span>
                  <span className="text-xs text-orange-600/80">Medium confidence level</span>
                </div>
                <div className="flex flex-col gap-1 p-3 rounded-lg bg-blue-50 border-l-4 border-blue-400">
                  <span className="text-sm font-bold text-blue-700">Vector Calculus</span>
                  <span className="text-xs text-blue-600/80">Pending review session</span>
                </div>
              </div>
            </section>
          </aside>

          {/* Main Chat Area: 70% width */}
          <div className="w-[70%] flex flex-col bg-white relative">
            {/* Chat Header */}
            <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="animate-pulse w-2 h-2 bg-black rounded-full mr-2"></div>
                <h1 className="text-base font-bold">AI Mentor: Active & Ready</h1>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-xs font-bold text-gray-500 flex items-center gap-1 hover:text-black">
                  <span className="material-symbols-outlined text-sm">history</span> Session History
                </button>
                <button className="text-xs font-bold text-gray-500 flex items-center gap-1 hover:text-black">
                  <span className="material-symbols-outlined text-sm">settings</span> Preferences
                </button>
              </div>
            </div>

            {/* Message Thread */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {/* Student Message */}
              <div className="flex flex-col items-end gap-2 max-w-[80%] ml-auto">
                <div className="bg-white border border-black px-5 py-4 rounded-xl rounded-tr-none shadow-sm">
                  <p className="text-sm leading-relaxed">
                    Can you explain the relationship between Gibbs Free Energy and Entropy? I'm finding the second law of thermodynamics a bit confusing in practice.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Student • 10:42 AM</span>
              </div>

              {/* AI Message */}
              <div className="flex flex-col items-start gap-2 max-w-[85%]">
                <div className="bg-gray-100 px-6 py-6 rounded-xl rounded-tl-none border border-transparent shadow-sm">
                  <h4 className="font-bold text-base mb-3">Thermodynamics: The Bridge between Energy and Chaos</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    To understand the relationship, think of <strong>Gibbs Free Energy (G)</strong> as the "useful" work we can get out of a system. The formula <em className="font-semibold">ΔG = ΔH - TΔS</em> perfectly describes this balance.
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    Entropy (ΔS) represents the degree of disorder. The Second Law states that for a spontaneous process, the total entropy must increase. When ΔS increases, it subtracts more from the enthalpy (ΔH), making ΔG negative—the hallmark of spontaneity.
                  </p>
                  
                  {/* RAG Citation */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-300">
                    <span className="text-[10px] font-bold text-gray-500 flex items-center gap-1 bg-white px-2 py-1 rounded border border-gray-300">
                      <span className="material-symbols-outlined text-[12px]">menu_book</span>
                      Information retrieved from <span className="text-black underline">[Chapter 4: Thermodynamics]</span>
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 flex items-center gap-1 bg-white px-2 py-1 rounded border border-gray-300">
                      <span className="material-symbols-outlined text-[12px]">description</span>
                      Related: <span className="text-black underline">Chemistry Notes - Page 42</span>
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Mentor • 10:43 AM</span>
              </div>

              {/* Another Student Message */}
              <div className="flex flex-col items-end gap-2 max-w-[80%] ml-auto">
                <div className="bg-white border border-black px-5 py-4 rounded-xl rounded-tr-none shadow-sm">
                  <p className="text-sm leading-relaxed">
                    Why does temperature (T) multiply entropy? Does that mean disorder is more significant at higher temperatures?
                  </p>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Student • 10:45 AM</span>
              </div>
            </div>

            {/* Bottom Interaction Area */}
            <div className="p-8 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
              {/* Smart Action Buttons */}
              <div className="flex gap-3 mb-4">
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-xs font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">error_outline</span>
                  Explain my last mistake
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-xs font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">quiz</span>
                  Create a 5-question quiz
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-xs font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">edit_calendar</span>
                  Update my study plan
                </button>
              </div>

              {/* Input Area */}
              <div className="flex gap-4 items-end">
                <div className="flex-1 relative">
                  <textarea 
                    className="w-full rounded-xl border-gray-300 bg-gray-100 p-4 text-sm focus:ring-black focus:border-black resize-none h-14 focus:outline-none" 
                    placeholder="Ask follow-up question or type '/' for commands..."
                  ></textarea>
                  <div className="absolute right-3 bottom-3 flex gap-2">
                    <button className="p-1 text-gray-400 hover:text-black">
                      <span className="material-symbols-outlined text-xl">mic</span>
                    </button>
                    <button className="p-1 text-gray-400 hover:text-black">
                      <span className="material-symbols-outlined text-xl">attach_file</span>
                    </button>
                  </div>
                </div>
                <button className="bg-black text-white px-8 h-14 rounded-xl font-bold text-sm hover:bg-gray-800 transition-all flex items-center gap-2">
                  Consult Mentor
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
              
              <p className="mt-3 text-[10px] text-center text-gray-400">
                SmartLearn AI can make mistakes. Verify critical information using provided citations.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AIMentorInteractionHub;