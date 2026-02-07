// AITestModule.jsx
import React from 'react';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar'
const AITestModule = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
      {/* Top Progress Bar (Fixed) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
        <div className="bg-black h-full" style={{ width: '25%' }}></div>
      </div>

      <div className="relative flex min-h-screen w-full flex-col pt-1">
        <div className="layout-container flex h-full grow flex-col">
          {/* Navigation */}
          <SmartLearnAINavbar/>

          <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
            {/* Section 1: Dashboard / Selection */}
            <section className="mb-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-black">AI Test Module</h1>
                  <p className="text-gray-500 mt-1">Select a practice module to begin your assessment.</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className="text-gray-400">Question 5 of 20</span>
                  <span className="px-2 py-0.5 bg-gray-100 rounded text-black">25% Complete</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="group border border-black p-5 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="aspect-video mb-4 bg-gray-100 overflow-hidden border border-gray-200">
                    <img 
                      alt="Abstract geometric AI pattern" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq6qx5lIl953IeuhkSJeERm4lVgiMD8N8iU0lDr5BJ2UQGke0ns7K28_zjozwddMmiAp5z728NPwbqusHrlA1gCU63pLLTXOraegPqyvMYwa8HEIzeKr_tN7OZYSbN79kwFlisTDj4giiei-GFvo3EriC_235LUZvdjsns8o1X2gjloDrkJjOZwHi0sjHat2PUWjVPwWrEe9QYGNjBQbb-u8GYcqUJylZIVu5lm6Z15LlVdFF2a4VxMGu1V_uXLm70mVXgt2mVjgI"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">Mock Test 1</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span className="material-symbols-outlined text-sm">schedule</span> 60 mins
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span className="material-symbols-outlined text-sm">quiz</span> 50 Questions
                    </div>
                  </div>
                  <button className="w-full py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors">
                    Start
                  </button>
                </div>

                {/* Card 2 */}
                <div className="group border border-black p-5 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="aspect-video mb-4 bg-gray-100 overflow-hidden border border-gray-200">
                    <img 
                      alt="Code on a screen" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP96dPxyS3yDl7HwrhuEUSYe9r6ctcIRnPgtw75ge8tjVSo5JnLl_U35565tGmrYzboYJJ9eHsyITcsFK9o8NiWdICUHb1hIgDKCarWGwBcqTkXy51cZjbXcucf9LV9ldVICA24E6yzvUMugwxpr8TDgxTwERoZCEP24RMfNGrChumTWs4Rz7XKgMv1MXcLNpy2ri8FHvb9_imJemvUg4jiZdTJrmvSisaKIfX6J68mcivqHCJEb0JDzQrAhNCBX8DkhOY-m9tFwY"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">Chapter Quiz</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span className="material-symbols-outlined text-sm">schedule</span> 15 mins
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span className="material-symbols-outlined text-sm">quiz</span> 10 Questions
                    </div>
                  </div>
                  <button className="w-full py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors">
                    Start
                  </button>
                </div>

                {/* Card 3 */}
                <div className="group border border-black p-5 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="aspect-video mb-4 bg-gray-100 overflow-hidden border border-gray-200">
                    <img 
                      alt="Data science charts" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuOeiSKr3dyn6-VwRYspO2Isvd62wJwBE10W2GdG0Q4xudgwaPBiKpGvljLm9fhxqNenUoJjZDPovexuEo1NmUOYuwbyQB1GTXXcdVQuCJxDMLbi0Kbxz2E7gjLO3vBDsD8BH2L80sLaRG6myo-q5Ug6XxbnrlGVLS0mFVzE843NmgkW8IXvbXdO66k02trPWXzoXI-y2S-bvzaEJ5HTk9HyszRO7v9TnRP1y62hOXRdsBFmDV-Mp2IqBRcCJMmOqDmYKmOyYzN3Q"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">Data Science Basics</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span className="material-symbols-outlined text-sm">schedule</span> 30 mins
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span className="material-symbols-outlined text-sm">quiz</span> 25 Questions
                    </div>
                  </div>
                  <button className="w-full py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors">
                    Start
                  </button>
                </div>
              </div>
            </section>

            {/* Section 2: Active Question UI */}
            <section className="max-w-[800px] mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Question 05</h2>
                <span className="text-sm font-bold text-gray-400">MCQ SINGLE CHOICE</span>
              </div>

              <div className="border border-black bg-white p-8 md:p-12">
                <p className="text-xl md:text-2xl font-bold leading-snug mb-10">
                  Which of the following activation functions is primarily used in the output layer of a binary classification neural network?
                </p>

                <div className="space-y-4 mb-10">
                  {/* Option A */}
                  <div className="relative">
                    <input className="hidden peer" id="opt_a" name="quiz_option" type="radio"/>
                    <label className="flex items-center gap-4 p-5 border border-gray-300 cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-100 transition-all" htmlFor="opt_a">
                      <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0 peer-checked:bg-black peer-checked:text-white">A</span>
                      <span className="text-lg font-medium">Rectified Linear Unit (ReLU)</span>
                    </label>
                  </div>

                  {/* Option B */}
                  <div className="relative">
                    <input defaultChecked className="hidden peer" id="opt_b" name="quiz_option" type="radio"/>
                    <label className="flex items-center gap-4 p-5 border border-black cursor-pointer hover:bg-gray-50 peer-checked:bg-gray-100 transition-all" htmlFor="opt_b">
                      <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0 bg-black text-white">B</span>
                      <span className="text-lg font-medium">Sigmoid Function</span>
                    </label>
                  </div>

                  {/* Option C */}
                  <div className="relative">
                    <input className="hidden peer" id="opt_c" name="quiz_option" type="radio"/>
                    <label className="flex items-center gap-4 p-5 border border-gray-300 cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-100 transition-all" htmlFor="opt_c">
                      <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0">C</span>
                      <span className="text-lg font-medium">Softmax Function</span>
                    </label>
                  </div>

                  {/* Option D */}
                  <div className="relative">
                    <input className="hidden peer" id="opt_d" name="quiz_option" type="radio"/>
                    <label className="flex items-center gap-4 p-5 border border-gray-300 cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-100 transition-all" htmlFor="opt_d">
                      <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0">D</span>
                      <span className="text-lg font-medium">Hyperbolic Tangent (tanh)</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-between border-t border-gray-200 pt-8">
                  <button className="px-8 py-3 border border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-base">arrow_back</span> Previous
                  </button>
                  
                  <div className="flex gap-4">
                    <button className="px-8 py-3 border border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors">
                      Skip
                    </button>
                    <button className="px-12 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors">
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer Info */}
              <div className="mt-8 flex justify-between items-center text-xs text-gray-400 px-2">
                <div className="flex gap-4">
                  <span>ID: TEST-MOD-2024-05</span>
                  <span>VERSION: 1.0.4</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">auto_awesome</span> Powered by SmartLearn Engine
                </div>
              </div>
            </section>
          </main>

          {/* Bottom Navigation / Stats */}
          <footer className="border-t border-gray-300 py-6 px-6 md:px-20 bg-white mt-20">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">© 2024 SmartLearn AI. All assessments are property of SmartLearn Corp.</p>
              <div className="flex gap-6 text-sm font-medium">
                <a className="hover:text-black" href="#">Guidelines</a>
                <a className="hover:text-black" href="#">Support</a>
                <a className="hover:text-black" href="#">Privacy</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AITestModule;