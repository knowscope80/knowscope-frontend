// // AIMentorDoubts.jsx
// import React from 'react';
// import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar'
// const AIMentorDoubts = () => {
//   return (
//     <div className="bg-gray-100 h-screen w-full font-sans text-black antialiased">
//       <div className="relative flex h-screen w-full flex-col overflow-hidden">
//         {/* Top Navigation */}
//         <SmartLearnAINavbar/>

//         <main className="flex flex-1 overflow-hidden">
//           {/* Left Sidebar: Recent Doubts */}
//           <aside className="flex w-80 flex-col border-r border-solid border-gray-300 bg-white">
//             <div className="p-6 border-b border-gray-200">
//               <h3 className="text-sm font-bold uppercase tracking-wider text-black">Recent Doubts</h3>
//             </div>
            
//             <div className="flex-1 overflow-y-auto">
//               <div className="flex flex-col">
//                 {/* History Item: Active */}
//                 <button className="flex flex-col gap-1 border-b border-gray-200 bg-gray-50 p-4 text-left transition-colors hover:bg-gray-100">
//                   <span className="text-xs font-semibold text-gray-500 uppercase">Mathematics</span>
//                   <span className="text-sm font-bold text-black line-clamp-1">Calculus: Derivative of x^2</span>
//                   <span className="text-xs text-gray-400">2 mins ago</span>
//                 </button>
                
//                 {/* History Item */}
//                 <button className="flex flex-col gap-1 border-b border-gray-200 p-4 text-left hover:bg-gray-50 transition-colors">
//                   <span className="text-xs font-semibold text-gray-500 uppercase">Biology</span>
//                   <span className="text-sm font-bold text-black line-clamp-1">Photosynthesis Cycle explained</span>
//                   <span className="text-xs text-gray-400">Yesterday</span>
//                 </button>
                
//                 {/* History Item */}
//                 <button className="flex flex-col gap-1 border-b border-gray-200 p-4 text-left hover:bg-gray-50 transition-colors">
//                   <span className="text-xs font-semibold text-gray-500 uppercase">Economics</span>
//                   <span className="text-sm font-bold text-black line-clamp-1">Market Equilibrium Dynamics</span>
//                   <span className="text-xs text-gray-400">Oct 24, 2023</span>
//                 </button>
                
//                 {/* History Item */}
//                 <button className="flex flex-col gap-1 border-b border-gray-200 p-4 text-left hover:bg-gray-50 transition-colors">
//                   <span className="text-xs font-semibold text-gray-500 uppercase">Physics</span>
//                   <span className="text-sm font-bold text-black line-clamp-1">Newton's Third Law application</span>
//                   <span className="text-xs text-gray-400">Oct 22, 2023</span>
//                 </button>
//               </div>
//             </div>
            
//             <div className="p-4 bg-gray-50">
//               <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gray-400 py-3 text-sm font-medium text-gray-500 hover:border-black hover:text-black transition-all">
//                 <span className="material-symbols-outlined text-sm">add</span>
//                 New Conversation
//               </button>
//             </div>
//           </aside>

//           {/* Main Chat Window */}
//           <section className="flex flex-1 flex-col bg-white">
//             {/* Chat History */}
//             <div className="flex-1 overflow-y-auto p-8">
//               <div className="mx-auto flex max-w-3xl flex-col gap-8">
//                 {/* Student Message */}
//                 <div className="flex flex-col items-end gap-2">
//                   <div className="max-w-[85%] rounded border border-black bg-white p-4 shadow-sm">
//                     <p className="text-[15px] leading-relaxed text-black">
//                       How do I calculate the derivative of x^2? I keep getting confused with the power rule application.
//                     </p>
//                   </div>
//                   <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Student • 14:20</span>
//                 </div>
                
//                 {/* AI Mentor Message */}
//                 <div className="flex flex-col items-start gap-2">
//                   <div className="max-w-[85%] rounded bg-gray-50 p-4">
//                     <div className="flex items-center gap-2 mb-3">
//                       <span className="material-symbols-outlined text-lg text-black">smart_toy</span>
//                       <span className="text-xs font-bold uppercase text-black tracking-widest">AI Mentor</span>
//                     </div>
//                     <p className="text-[15px] leading-relaxed text-black">
//                       To find the derivative of x², you use the <strong className="font-bold">Power Rule</strong>. 
//                       <br/><br/>
//                       The rule states that for any function of the form <em>f(x) = xⁿ</em>, the derivative is <em>f'(x) = nxⁿ⁻¹</em>.
//                       <br/><br/>
//                       1. Identify the power (n): In x², n = 2.<br/>
//                       2. Apply the rule: Bring the 2 down to the front and subtract 1 from the exponent.<br/>
//                       3. Result: 2 * x²⁻¹ = 2x¹.
//                       <br/><br/>
//                       So, the derivative of <strong className="font-bold">x² is 2x</strong>.
//                     </p>
//                   </div>
                  
//                   {/* Source Reference */}
//                   <div className="flex items-center gap-2 pl-1">
//                     <span className="material-symbols-outlined text-sm text-gray-400">library_books</span>
//                     <a className="text-xs font-medium text-gray-500 hover:text-black underline decoration-gray-300 transition-all" href="#">
//                       Source: Calculus Foundations Chapter 2.1 - The Power Rule
//                     </a>
//                   </div>
//                 </div>
                
//                 {/* Student Message */}
//                 <div className="flex flex-col items-end gap-2">
//                   <div className="max-w-[85%] rounded border border-black bg-white p-4 shadow-sm">
//                     <p className="text-[15px] leading-relaxed text-black">
//                       That makes sense! What happens if there's a constant, like 3x^2?
//                     </p>
//                   </div>
//                   <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Student • 14:22</span>
//                 </div>
                
//                 {/* AI Mentor Message */}
//                 <div className="flex flex-col items-start gap-2">
//                   <div className="max-w-[85%] rounded bg-gray-50 p-4">
//                     <div className="flex items-center gap-2 mb-3">
//                       <span className="material-symbols-outlined text-lg text-black">smart_toy</span>
//                       <span className="text-xs font-bold uppercase text-black tracking-widest">AI Mentor</span>
//                     </div>
//                     <p className="text-[15px] leading-relaxed text-black">
//                       Great follow-up! For that, we use the <strong className="font-bold">Constant Multiple Rule</strong> alongside the Power Rule.
//                       <br/><br/>
//                       The derivative of <em>c * f(x)</em> is simply <em>c * f'(x)</em>.
//                       <br/><br/>
//                       So for 3x²:<br/>
//                       1. Keep the constant (3).<br/>
//                       2. Find the derivative of x² (which we know is 2x).<br/>
//                       3. Multiply them: 3 * (2x) = 6x.
//                     </p>
//                   </div>
                  
//                   <div className="flex items-center gap-2 pl-1">
//                     <span className="material-symbols-outlined text-sm text-gray-400">library_books</span>
//                     <a className="text-xs font-medium text-gray-500 hover:text-black underline decoration-gray-300 transition-all" href="#">
//                       Source: Calculus Foundations Chapter 2.2 - Derivatives of Polynomials
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Input Area */}
//             <div className="border-t border-gray-300 bg-white p-6">
//               <div className="mx-auto flex max-w-4xl flex-col gap-4">
//                 <div className="flex gap-3">
//                   <div className="relative flex-1">
//                     <textarea 
//                       className="w-full resize-none rounded-lg border border-black bg-white px-4 py-3 text-[15px] text-black focus:outline-none focus:ring-2 focus:ring-black/20" 
//                       placeholder="Paste your doubt here..." 
//                       rows="1"
//                     ></textarea>
//                     <div className="absolute right-3 bottom-2 flex gap-2">
//                       <button className="flex size-8 items-center justify-center rounded text-gray-400 hover:text-black transition-colors">
//                         <span className="material-symbols-outlined text-lg">attach_file</span>
//                       </button>
//                       <button className="flex size-8 items-center justify-center rounded text-gray-400 hover:text-black transition-colors">
//                         <span className="material-symbols-outlined text-lg">image</span>
//                       </button>
//                     </div>
//                   </div>
//                   <button className="flex h-[46px] items-center justify-center gap-2 rounded bg-black px-8 text-sm font-bold tracking-widest text-white hover:bg-gray-800 transition-colors uppercase">
//                     <span>Solve</span>
//                     <span className="material-symbols-outlined text-sm">send</span>
//                   </button>
//                 </div>
                
//                 <div className="flex items-center justify-center gap-6">
//                   <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quick Tools:</span>
//                   <button className="flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-black transition-colors">
//                     <span className="material-symbols-outlined text-sm">functions</span>
//                     Math Symbols
//                   </button>
//                   <button className="flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-black transition-colors">
//                     <span className="material-symbols-outlined text-sm">draw</span>
//                     Sketch Pad
//                   </button>
//                   <button className="flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-black transition-colors">
//                     <span className="material-symbols-outlined text-sm">mic</span>
//                     Voice Input
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>

//       {/* Custom CSS for Scrollbar */}
//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: transparent;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #e5e5e5;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #d4d4d4;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AIMentorDoubts;







// AIMentorDoubts.jsx
import React, { useState } from 'react';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';

const AIMentorDoubts = () => {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [recentDoubts, setRecentDoubts] = useState([
    {
      id: 1,
      subject: 'Mathematics',
      question: 'Calculus: Derivative of x^2',
      timestamp: '2 mins ago',
      active: true
    },
    {
      id: 2,
      subject: 'Biology',
      question: 'Photosynthesis Cycle explained',
      timestamp: 'Yesterday',
      active: false
    },
    {
      id: 3,
      subject: 'Economics',
      question: 'Market Equilibrium Dynamics',
      timestamp: 'Oct 24, 2023',
      active: false
    },
    {
      id: 4,
      subject: 'Physics',
      question: "Newton's Third Law application",
      timestamp: 'Oct 22, 2023',
      active: false
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAskQuestion = async () => {
    if (!question.trim()) return;

    // Add user question to chat
    const userMessage = {
      type: 'user',
      content: question,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMessage]);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8001/api/qa/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question,
          top_k: 5
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI Mentor');
      }

      const data = await response.json();

      // Add AI response to chat
      const aiMessage = {
        type: 'ai',
        content: data.answer,
        sources: data.sources,
        confidence: data.confidence,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatHistory(prev => [...prev, aiMessage]);

      // Update recent doubts with the new question
      const newDoubt = {
        id: Date.now(),
        subject: 'General',
        question: question.length > 30 ? question.substring(0, 30) + '...' : question,
        timestamp: 'Just now',
        active: true
      };

      setRecentDoubts(prev => {
        // Mark all others as inactive
        const updated = prev.map(doubt => ({ ...doubt, active: false }));
        return [newDoubt, ...updated.slice(0, 3)]; // Keep only 4 recent doubts
      });

      setQuestion(''); // Clear input after sending
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAskQuestion();
    }
  };

  const handleDoubtClick = (doubtId) => {
    // This would ideally load the previous conversation
    // For now, just update active state
    setRecentDoubts(prev =>
      prev.map(doubt => ({
        ...doubt,
        active: doubt.id === doubtId
      }))
    );
  };

  const startNewConversation = () => {
    setChatHistory([]);
    setQuestion('');
    setRecentDoubts(prev =>
      prev.map(doubt => ({ ...doubt, active: false }))
    );
  };

  return (
    <div className="bg-gray-100 h-screen w-full font-sans text-black antialiased">
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        {/* Top Navigation */}
        <SmartLearnAINavbar />

        <main className="flex flex-1 overflow-hidden">
          {/* Left Sidebar: Recent Doubts */}
          <aside className="flex w-80 flex-col border-r border-solid border-gray-300 bg-white">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-black">Recent Doubts</h3>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="flex flex-col">
                {recentDoubts.map((doubt) => (
                  <button
                    key={doubt.id}
                    onClick={() => handleDoubtClick(doubt.id)}
                    className={`flex flex-col gap-1 border-b border-gray-200 p-4 text-left transition-colors hover:bg-gray-100 ${doubt.active ? 'bg-gray-50' : ''
                      }`}
                  >
                    <span className="text-xs font-semibold text-gray-500 uppercase">{doubt.subject}</span>
                    <span className="text-sm font-bold text-black line-clamp-1">{doubt.question}</span>
                    <span className="text-xs text-gray-400">{doubt.timestamp}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gray-50">
              <button
                onClick={startNewConversation}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gray-400 py-3 text-sm font-medium text-gray-500 hover:border-black hover:text-black transition-all"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                New Conversation
              </button>
            </div>
          </aside>

          {/* Main Chat Window */}
          <section className="flex flex-1 flex-col bg-white">
            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="mx-auto flex max-w-3xl flex-col gap-8">
                {chatHistory.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                    <span className="material-symbols-outlined text-6xl mb-4">forum</span>
                    <p className="text-sm font-medium">Ask your doubt to get started</p>
                    <p className="text-xs mt-2">Type your question below and click Solve</p>
                  </div>
                ) : (
                  chatHistory.map((message, index) => (
                    message.type === 'user' ? (
                      // Student Message
                      <div key={index} className="flex flex-col items-end gap-2">
                        <div className="max-w-[85%] rounded border border-black bg-white p-4 shadow-sm">
                          <p className="text-[15px] leading-relaxed text-black whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                          Student • {message.timestamp}
                        </span>
                      </div>
                    ) : (
                      // AI Mentor Message
                      <div key={index} className="flex flex-col items-start gap-2">
                        <div className="max-w-[85%] rounded bg-gray-50 p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="material-symbols-outlined text-lg text-black">smart_toy</span>
                            <span className="text-xs font-bold uppercase text-black tracking-widest">AI Mentor</span>
                            {message.confidence && (
                              <span className="text-[10px] bg-gray-200 px-2 py-0.5 rounded-full">
                                Confidence: {Math.round(message.confidence * 100)}%
                              </span>
                            )}
                          </div>
                          <p className="text-[15px] leading-relaxed text-black whitespace-pre-wrap">
                            {message.content}
                          </p>

                          {/* Sources Section */}
                          {message.sources && message.sources.length > 0 && (
                            <div className="mt-6 pt-4 border-t border-gray-200">
                              <p className="text-xs font-bold uppercase text-gray-500 mb-3">Sources:</p>
                              <div className="space-y-3">
                                {message.sources.map((source, idx) => (
                                  <div key={idx} className="bg-white p-3 rounded border border-gray-200">
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="material-symbols-outlined text-sm text-gray-400">
                                        library_books
                                      </span>
                                      <span className="text-xs font-semibold text-gray-700">
                                        {source.chapter}
                                      </span>
                                      <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded ml-auto">
                                        Similarity: {Math.round(source.similarity * 100)}%
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-600 italic">
                                      "{source.text_preview}"
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 pl-1">
                          {message.timestamp}
                        </span>
                      </div>
                    )
                  ))
                )}

                {/* Loading Indicator */}
                {loading && (
                  <div className="flex flex-col items-start gap-2">
                    <div className="rounded bg-gray-50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-lg text-black">smart_toy</span>
                        <span className="text-xs font-bold uppercase text-black tracking-widest">AI Mentor</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="flex flex-col items-start gap-2">
                    <div className="rounded bg-red-50 p-4 border border-red-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-lg text-red-500">error</span>
                        <span className="text-xs font-bold uppercase text-red-500">Error</span>
                      </div>
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  </div>
                )}
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
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={loading}
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
                  <button
                    onClick={handleAskQuestion}
                    disabled={loading || !question.trim()}
                    className={`flex h-[46px] items-center justify-center gap-2 rounded px-8 text-sm font-bold tracking-widest text-white uppercase transition-colors ${loading || !question.trim()
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-black hover:bg-gray-800'
                      }`}
                  >
                    <span>{loading ? 'Solving...' : 'Solve'}</span>
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
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default AIMentorDoubts;