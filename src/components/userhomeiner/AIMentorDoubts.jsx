// AIMentorDoubts.jsx
import React from 'react';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar'
const AIMentorDoubts = () => {
  return (
    <div className="bg-gray-100 h-screen w-full font-sans text-black antialiased">
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        {/* Top Navigation */}
        <SmartLearnAINavbar/>

        <main className="flex flex-1 overflow-hidden">
          {/* Left Sidebar: Recent Doubts */}
          <aside className="flex w-80 flex-col border-r border-solid border-gray-300 bg-white">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-black">Recent Doubts</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col">
                {/* History Item: Active */}
                <button className="flex flex-col gap-1 border-b border-gray-200 bg-gray-50 p-4 text-left transition-colors hover:bg-gray-100">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Mathematics</span>
                  <span className="text-sm font-bold text-black line-clamp-1">Calculus: Derivative of x^2</span>
                  <span className="text-xs text-gray-400">2 mins ago</span>
                </button>
                
                {/* History Item */}
                <button className="flex flex-col gap-1 border-b border-gray-200 p-4 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Biology</span>
                  <span className="text-sm font-bold text-black line-clamp-1">Photosynthesis Cycle explained</span>
                  <span className="text-xs text-gray-400">Yesterday</span>
                </button>
                
                {/* History Item */}
                <button className="flex flex-col gap-1 border-b border-gray-200 p-4 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Economics</span>
                  <span className="text-sm font-bold text-black line-clamp-1">Market Equilibrium Dynamics</span>
                  <span className="text-xs text-gray-400">Oct 24, 2023</span>
                </button>
                
                {/* History Item */}
                <button className="flex flex-col gap-1 border-b border-gray-200 p-4 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Physics</span>
                  <span className="text-sm font-bold text-black line-clamp-1">Newton's Third Law application</span>
                  <span className="text-xs text-gray-400">Oct 22, 2023</span>
                </button>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gray-400 py-3 text-sm font-medium text-gray-500 hover:border-black hover:text-black transition-all">
                <span className="material-symbols-outlined text-sm">add</span>
                New Conversation
              </button>
            </div>
          </aside>

          {/* Main Chat Window */}
          <section className="flex flex-1 flex-col bg-white">
            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="mx-auto flex max-w-3xl flex-col gap-8">
                {/* Student Message */}
                <div className="flex flex-col items-end gap-2">
                  <div className="max-w-[85%] rounded border border-black bg-white p-4 shadow-sm">
                    <p className="text-[15px] leading-relaxed text-black">
                      How do I calculate the derivative of x^2? I keep getting confused with the power rule application.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Student • 14:20</span>
                </div>
                
                {/* AI Mentor Message */}
                <div className="flex flex-col items-start gap-2">
                  <div className="max-w-[85%] rounded bg-gray-50 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-lg text-black">smart_toy</span>
                      <span className="text-xs font-bold uppercase text-black tracking-widest">AI Mentor</span>
                    </div>
                    <p className="text-[15px] leading-relaxed text-black">
                      To find the derivative of x², you use the <strong className="font-bold">Power Rule</strong>. 
                      <br/><br/>
                      The rule states that for any function of the form <em>f(x) = xⁿ</em>, the derivative is <em>f'(x) = nxⁿ⁻¹</em>.
                      <br/><br/>
                      1. Identify the power (n): In x², n = 2.<br/>
                      2. Apply the rule: Bring the 2 down to the front and subtract 1 from the exponent.<br/>
                      3. Result: 2 * x²⁻¹ = 2x¹.
                      <br/><br/>
                      So, the derivative of <strong className="font-bold">x² is 2x</strong>.
                    </p>
                  </div>
                  
                  {/* Source Reference */}
                  <div className="flex items-center gap-2 pl-1">
                    <span className="material-symbols-outlined text-sm text-gray-400">library_books</span>
                    <a className="text-xs font-medium text-gray-500 hover:text-black underline decoration-gray-300 transition-all" href="#">
                      Source: Calculus Foundations Chapter 2.1 - The Power Rule
                    </a>
                  </div>
                </div>
                
                {/* Student Message */}
                <div className="flex flex-col items-end gap-2">
                  <div className="max-w-[85%] rounded border border-black bg-white p-4 shadow-sm">
                    <p className="text-[15px] leading-relaxed text-black">
                      That makes sense! What happens if there's a constant, like 3x^2?
                    </p>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Student • 14:22</span>
                </div>
                
                {/* AI Mentor Message */}
                <div className="flex flex-col items-start gap-2">
                  <div className="max-w-[85%] rounded bg-gray-50 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-lg text-black">smart_toy</span>
                      <span className="text-xs font-bold uppercase text-black tracking-widest">AI Mentor</span>
                    </div>
                    <p className="text-[15px] leading-relaxed text-black">
                      Great follow-up! For that, we use the <strong className="font-bold">Constant Multiple Rule</strong> alongside the Power Rule.
                      <br/><br/>
                      The derivative of <em>c * f(x)</em> is simply <em>c * f'(x)</em>.
                      <br/><br/>
                      So for 3x²:<br/>
                      1. Keep the constant (3).<br/>
                      2. Find the derivative of x² (which we know is 2x).<br/>
                      3. Multiply them: 3 * (2x) = 6x.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 pl-1">
                    <span className="material-symbols-outlined text-sm text-gray-400">library_books</span>
                    <a className="text-xs font-medium text-gray-500 hover:text-black underline decoration-gray-300 transition-all" href="#">
                      Source: Calculus Foundations Chapter 2.2 - Derivatives of Polynomials
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Input Area */}
            <div className="border-t border-gray-300 bg-white p-6">
              <div className="mx-auto flex max-w-4xl flex-col gap-4">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <textarea 
                      className="w-full resize-none rounded-lg border border-black bg-white px-4 py-3 text-[15px] text-black focus:outline-none focus:ring-2 focus:ring-black/20" 
                      placeholder="Paste your doubt here..." 
                      rows="1"
                    ></textarea>
                    <div className="absolute right-3 bottom-2 flex gap-2">
                      <button className="flex size-8 items-center justify-center rounded text-gray-400 hover:text-black transition-colors">
                        <span className="material-symbols-outlined text-lg">attach_file</span>
                      </button>
                      <button className="flex size-8 items-center justify-center rounded text-gray-400 hover:text-black transition-colors">
                        <span className="material-symbols-outlined text-lg">image</span>
                      </button>
                    </div>
                  </div>
                  <button className="flex h-[46px] items-center justify-center gap-2 rounded bg-black px-8 text-sm font-bold tracking-widest text-white hover:bg-gray-800 transition-colors uppercase">
                    <span>Solve</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
                
                <div className="flex items-center justify-center gap-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quick Tools:</span>
                  <button className="flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-sm">functions</span>
                    Math Symbols
                  </button>
                  <button className="flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-sm">draw</span>
                    Sketch Pad
                  </button>
                  <button className="flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-sm">mic</span>
                    Voice Input
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Custom CSS for Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e5e5;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d4d4d4;
        }
      `}</style>
    </div>
  );
};

export default AIMentorDoubts;