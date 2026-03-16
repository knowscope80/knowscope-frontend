// // AITestModule.jsx
// import React from 'react';
// import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar'
// const AITestModule = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//       {/* Top Progress Bar (Fixed) */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//         <div className="bg-black h-full" style={{ width: '25%' }}></div>
//       </div>

//       <div className="relative flex min-h-screen w-full flex-col pt-1">
//         <div className="layout-container flex h-full grow flex-col">
//           {/* Navigation */}
//           <SmartLearnAINavbar/>

//           <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//             {/* Section 1: Dashboard / Selection */}
//             <section className="mb-16">
//               <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
//                 <div>
//                   <h1 className="text-3xl font-bold tracking-tight text-black">AI Test Module</h1>
//                   <p className="text-gray-500 mt-1">Select a practice module to begin your assessment.</p>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm font-medium">
//                   <span className="text-gray-400">Question 5 of 20</span>
//                   <span className="px-2 py-0.5 bg-gray-100 rounded text-black">25% Complete</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Card 1 */}
//                 <div className="group border border-black p-5 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
//                   <div className="aspect-video mb-4 bg-gray-100 overflow-hidden border border-gray-200">
//                     <img 
//                       alt="Abstract geometric AI pattern" 
//                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
//                       src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq6qx5lIl953IeuhkSJeERm4lVgiMD8N8iU0lDr5BJ2UQGke0ns7K28_zjozwddMmiAp5z728NPwbqusHrlA1gCU63pLLTXOraegPqyvMYwa8HEIzeKr_tN7OZYSbN79kwFlisTDj4giiei-GFvo3EriC_235LUZvdjsns8o1X2gjloDrkJjOZwHi0sjHat2PUWjVPwWrEe9QYGNjBQbb-u8GYcqUJylZIVu5lm6Z15LlVdFF2a4VxMGu1V_uXLm70mVXgt2mVjgI"
//                     />
//                   </div>
//                   <h3 className="text-lg font-bold mb-1">Mock Test 1</h3>
//                   <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
//                     <div className="flex items-center gap-1 text-xs text-gray-500">
//                       <span className="material-symbols-outlined text-sm">schedule</span> 60 mins
//                     </div>
//                     <div className="flex items-center gap-1 text-xs text-gray-500">
//                       <span className="material-symbols-outlined text-sm">quiz</span> 50 Questions
//                     </div>
//                   </div>
//                   <button className="w-full py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors">
//                     Start
//                   </button>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="group border border-black p-5 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
//                   <div className="aspect-video mb-4 bg-gray-100 overflow-hidden border border-gray-200">
//                     <img 
//                       alt="Code on a screen" 
//                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
//                       src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP96dPxyS3yDl7HwrhuEUSYe9r6ctcIRnPgtw75ge8tjVSo5JnLl_U35565tGmrYzboYJJ9eHsyITcsFK9o8NiWdICUHb1hIgDKCarWGwBcqTkXy51cZjbXcucf9LV9ldVICA24E6yzvUMugwxpr8TDgxTwERoZCEP24RMfNGrChumTWs4Rz7XKgMv1MXcLNpy2ri8FHvb9_imJemvUg4jiZdTJrmvSisaKIfX6J68mcivqHCJEb0JDzQrAhNCBX8DkhOY-m9tFwY"
//                     />
//                   </div>
//                   <h3 className="text-lg font-bold mb-1">Chapter Quiz</h3>
//                   <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
//                     <div className="flex items-center gap-1 text-xs text-gray-500">
//                       <span className="material-symbols-outlined text-sm">schedule</span> 15 mins
//                     </div>
//                     <div className="flex items-center gap-1 text-xs text-gray-500">
//                       <span className="material-symbols-outlined text-sm">quiz</span> 10 Questions
//                     </div>
//                   </div>
//                   <button className="w-full py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors">
//                     Start
//                   </button>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="group border border-black p-5 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
//                   <div className="aspect-video mb-4 bg-gray-100 overflow-hidden border border-gray-200">
//                     <img 
//                       alt="Data science charts" 
//                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
//                       src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuOeiSKr3dyn6-VwRYspO2Isvd62wJwBE10W2GdG0Q4xudgwaPBiKpGvljLm9fhxqNenUoJjZDPovexuEo1NmUOYuwbyQB1GTXXcdVQuCJxDMLbi0Kbxz2E7gjLO3vBDsD8BH2L80sLaRG6myo-q5Ug6XxbnrlGVLS0mFVzE843NmgkW8IXvbXdO66k02trPWXzoXI-y2S-bvzaEJ5HTk9HyszRO7v9TnRP1y62hOXRdsBFmDV-Mp2IqBRcCJMmOqDmYKmOyYzN3Q"
//                     />
//                   </div>
//                   <h3 className="text-lg font-bold mb-1">Data Science Basics</h3>
//                   <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
//                     <div className="flex items-center gap-1 text-xs text-gray-500">
//                       <span className="material-symbols-outlined text-sm">schedule</span> 30 mins
//                     </div>
//                     <div className="flex items-center gap-1 text-xs text-gray-500">
//                       <span className="material-symbols-outlined text-sm">quiz</span> 25 Questions
//                     </div>
//                   </div>
//                   <button className="w-full py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors">
//                     Start
//                   </button>
//                 </div>
//               </div>
//             </section>

//             {/* Section 2: Active Question UI */}
//             <section className="max-w-[800px] mx-auto">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold tracking-tight">Question 05</h2>
//                 <span className="text-sm font-bold text-gray-400">MCQ SINGLE CHOICE</span>
//               </div>

//               <div className="border border-black bg-white p-8 md:p-12">
//                 <p className="text-xl md:text-2xl font-bold leading-snug mb-10">
//                   Which of the following activation functions is primarily used in the output layer of a binary classification neural network?
//                 </p>

//                 <div className="space-y-4 mb-10">
//                   {/* Option A */}
//                   <div className="relative">
//                     <input className="hidden peer" id="opt_a" name="quiz_option" type="radio"/>
//                     <label className="flex items-center gap-4 p-5 border border-gray-300 cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-100 transition-all" htmlFor="opt_a">
//                       <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0 peer-checked:bg-black peer-checked:text-white">A</span>
//                       <span className="text-lg font-medium">Rectified Linear Unit (ReLU)</span>
//                     </label>
//                   </div>

//                   {/* Option B */}
//                   <div className="relative">
//                     <input defaultChecked className="hidden peer" id="opt_b" name="quiz_option" type="radio"/>
//                     <label className="flex items-center gap-4 p-5 border border-black cursor-pointer hover:bg-gray-50 peer-checked:bg-gray-100 transition-all" htmlFor="opt_b">
//                       <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0 bg-black text-white">B</span>
//                       <span className="text-lg font-medium">Sigmoid Function</span>
//                     </label>
//                   </div>

//                   {/* Option C */}
//                   <div className="relative">
//                     <input className="hidden peer" id="opt_c" name="quiz_option" type="radio"/>
//                     <label className="flex items-center gap-4 p-5 border border-gray-300 cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-100 transition-all" htmlFor="opt_c">
//                       <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0">C</span>
//                       <span className="text-lg font-medium">Softmax Function</span>
//                     </label>
//                   </div>

//                   {/* Option D */}
//                   <div className="relative">
//                     <input className="hidden peer" id="opt_d" name="quiz_option" type="radio"/>
//                     <label className="flex items-center gap-4 p-5 border border-gray-300 cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-100 transition-all" htmlFor="opt_d">
//                       <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0">D</span>
//                       <span className="text-lg font-medium">Hyperbolic Tangent (tanh)</span>
//                     </label>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4 justify-between border-t border-gray-200 pt-8">
//                   <button className="px-8 py-3 border border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
//                     <span className="material-symbols-outlined text-base">arrow_back</span> Previous
//                   </button>
                  
//                   <div className="flex gap-4">
//                     <button className="px-8 py-3 border border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors">
//                       Skip
//                     </button>
//                     <button className="px-12 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors">
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Footer Info */}
//               <div className="mt-8 flex justify-between items-center text-xs text-gray-400 px-2">
//                 <div className="flex gap-4">
//                   <span>ID: TEST-MOD-2024-05</span>
//                   <span>VERSION: 1.0.4</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <span className="material-symbols-outlined text-xs">auto_awesome</span> Powered by SmartLearn Engine
//                 </div>
//               </div>
//             </section>
//           </main>

//           {/* Bottom Navigation / Stats */}
//           <footer className="border-t border-gray-300 py-6 px-6 md:px-20 bg-white mt-20">
//             <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
//               <p className="text-sm text-gray-500">© 2024 SmartLearn AI. All assessments are property of SmartLearn Corp.</p>
//               <div className="flex gap-6 text-sm font-medium">
//                 <a className="hover:text-black" href="#">Guidelines</a>
//                 <a className="hover:text-black" href="#">Support</a>
//                 <a className="hover:text-black" href="#">Privacy</a>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AITestModule;






// // AITestModule.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';

// const AITestModule = () => {
//   const [subjects, setSubjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [currentQuestion, setCurrentQuestion] = useState(5);
//   const [totalQuestions] = useState(20);

//   useEffect(() => {
//     fetchSubjects();
//   }, []);

//   const fetchSubjects = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get('http://127.0.0.1:8001/api/textbook/textbooksnames/10/');
//       setSubjects(response.data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to load subjects. Please try again.');
//       console.error('Error fetching subjects:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubjectSelect = (subject) => {
//     setSelectedSubject(subject);
//   };

//   const handleStartTest = (subject) => {
//     setSelectedSubject(subject);
//     // Here you would typically navigate to the actual test or load questions
//     console.log('Starting test for:', subject.subject);
//   };

//   const handleBackToSubjects = () => {
//     setSelectedSubject(null);
//   };

//   const completionPercentage = (currentQuestion / totalQuestions) * 100;

//   if (loading) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//         <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//           <div className="bg-black h-full animate-pulse" style={{ width: '50%' }}></div>
//         </div>
//         <div className="relative flex min-h-screen w-full flex-col pt-1">
//           <div className="layout-container flex h-full grow flex-col">
//             <SmartLearnAINavbar />
//             <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//         <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//           <div className="bg-red-600 h-full" style={{ width: '100%' }}></div>
//         </div>
//         <div className="relative flex min-h-screen w-full flex-col pt-1">
//           <div className="layout-container flex h-full grow flex-col">
//             <SmartLearnAINavbar />
//             <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//               <div className="text-center p-8 bg-white border border-black">
//                 <p className="text-red-600 mb-4">{error}</p>
//                 <button 
//                   onClick={fetchSubjects}
//                   className="px-6 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
//                 >
//                   Retry
//                 </button>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//       {/* Top Progress Bar (Fixed) */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//         <div 
//           className="bg-black h-full transition-all duration-300" 
//           style={{ width: `${completionPercentage}%` }}
//         ></div>
//       </div>

//       <div className="relative flex min-h-screen w-full flex-col pt-1">
//         <div className="layout-container flex h-full grow flex-col">
//           {/* Navigation */}
//           <SmartLearnAINavbar />

//           <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//             {/* Section 1: Subject Selection Dashboard */}
//             <section className="mb-16">
//               <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
//                 <div>
//                   <h1 className="text-3xl font-bold tracking-tight text-black">
//                     {selectedSubject ? `${selectedSubject.subject} Test` : 'AI Test Module'}
//                   </h1>
//                   <p className="text-gray-500 mt-1">
//                     {selectedSubject 
//                       ? `Testing your knowledge in ${selectedSubject.subject}`
//                       : 'Select a subject to begin your assessment.'}
//                   </p>
//                 </div>
//                 {selectedSubject && (
//                   <div className="flex items-center gap-2 text-sm font-medium">
//                     <span className="text-gray-400">Question {currentQuestion} of {totalQuestions}</span>
//                     <span className="px-2 py-0.5 bg-gray-100 rounded text-black">
//                       {Math.round(completionPercentage)}% Complete
//                     </span>
//                   </div>
//                 )}
//               </div>

//               {!selectedSubject ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {subjects.map((subject, index) => (
//                     <div 
//                       key={subject.subject} 
//                       className="group border border-black p-5 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
//                     >
//                       <div className="aspect-video mb-4 bg-gray-100 overflow-hidden border border-gray-200">
//                         <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
//                           <span className="text-4xl font-bold text-gray-400 opacity-50">
//                             {subject.subject.charAt(0)}
//                           </span>
//                         </div>
//                       </div>
//                       <h3 className="text-lg font-bold mb-1">{subject.subject}</h3>
                     
//                       <button 
//                         onClick={() => handleStartTest(subject)}
//                         className="w-full py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
//                       >
//                         Start Test
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <>
//                   {/* Back button */}
//                   <button 
//                     onClick={handleBackToSubjects}
//                     className="mb-6 flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors"
//                   >
//                     <span className="material-symbols-outlined text-base">arrow_back</span>
//                     Back to Subjects
//                   </button>

//                   {/* Section 2: Active Question UI */}
//                   <section className="max-w-[800px] mx-auto">
//                     <div className="flex items-center justify-between mb-6">
//                       <h2 className="text-2xl font-bold tracking-tight">Question {String(currentQuestion).padStart(2, '0')}</h2>
//                       <span className="text-sm font-bold text-gray-400">MCQ SINGLE CHOICE</span>
//                     </div>

//                     <div className="border border-black bg-white p-8 md:p-12">
//                       <p className="text-xl md:text-2xl font-bold leading-snug mb-10">
//                         Which of the following activation functions is primarily used in the output layer of a binary classification neural network?
//                       </p>

//                       <div className="space-y-4 mb-10">
//                         {/* Option A */}
//                         <div className="relative">
//                           <input className="hidden peer" id="opt_a" name="quiz_option" type="radio"/>
//                           <label className="flex items-center gap-4 p-5 border border-gray-300 cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-100 transition-all" htmlFor="opt_a">
//                             <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0 peer-checked:bg-black peer-checked:text-white">A</span>
//                             <span className="text-lg font-medium">Rectified Linear Unit (ReLU)</span>
//                           </label>
//                         </div>

//                         {/* Option B */}
//                         <div className="relative">
//                           <input defaultChecked className="hidden peer" id="opt_b" name="quiz_option" type="radio"/>
//                           <label className="flex items-center gap-4 p-5 border border-black cursor-pointer hover:bg-gray-50 peer-checked:bg-gray-100 transition-all" htmlFor="opt_b">
//                             <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0 bg-black text-white">B</span>
//                             <span className="text-lg font-medium">Sigmoid Function</span>
//                           </label>
//                         </div>

//                         {/* Option C */}
//                         <div className="relative">
//                           <input className="hidden peer" id="opt_c" name="quiz_option" type="radio"/>
//                           <label className="flex items-center gap-4 p-5 border border-gray-300 cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-100 transition-all" htmlFor="opt_c">
//                             <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0">C</span>
//                             <span className="text-lg font-medium">Softmax Function</span>
//                           </label>
//                         </div>

//                         {/* Option D */}
//                         <div className="relative">
//                           <input className="hidden peer" id="opt_d" name="quiz_option" type="radio"/>
//                           <label className="flex items-center gap-4 p-5 border border-gray-300 cursor-pointer hover:bg-gray-50 peer-checked:border-black peer-checked:bg-gray-100 transition-all" htmlFor="opt_d">
//                             <span className="flex items-center justify-center size-8 border border-black font-bold text-sm shrink-0">D</span>
//                             <span className="text-lg font-medium">Hyperbolic Tangent (tanh)</span>
//                           </label>
//                         </div>
//                       </div>

//                       <div className="flex flex-col sm:flex-row gap-4 justify-between border-t border-gray-200 pt-8">
//                         <button className="px-8 py-3 border border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
//                           <span className="material-symbols-outlined text-base">arrow_back</span> Previous
//                         </button>
                        
//                         <div className="flex gap-4">
//                           <button className="px-8 py-3 border border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors">
//                             Skip
//                           </button>
//                           <button className="px-12 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors">
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Footer Info */}
//                     <div className="mt-8 flex justify-between items-center text-xs text-gray-400 px-2">
//                       <div className="flex gap-4">
//                         <span>ID: TEST-MOD-2024-05</span>
//                         <span>VERSION: 1.0.4</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <span className="material-symbols-outlined text-xs">auto_awesome</span> Powered by SmartLearn Engine
//                       </div>
//                     </div>  
//                   </section>
//                 </>
//               )}
//             </section>
//           </main>

//           {/* Bottom Navigation / Stats */}
//           <footer className="border-t border-gray-300 py-6 px-6 md:px-20 bg-white mt-20">
//             <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
//               <p className="text-sm text-gray-500">© 2024 SmartLearn AI. All assessments are property of SmartLearn Corp.</p>
//               <div className="flex gap-6 text-sm font-medium">
//                 <a className="hover:text-black" href="#">Guidelines</a>
//                 <a className="hover:text-black" href="#">Support</a>
//                 <a className="hover:text-black" href="#">Privacy</a>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AITestModule;




// // AITestModule.jsx
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';
// import { 
//   addStudentClass, 
//   addStudentsubject, 
//   addStudentdifficulty,
//   addStudentText 
// } from '../actionslice';

// const AITestModule = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const [subjects, setSubjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [selectedDifficulty, setSelectedDifficulty] = useState('');
//   const [selectedClass, setSelectedClass] = useState('');
//   const [showDifficultyModal, setShowDifficultyModal] = useState(false);
//   const [studentData, setStudentData] = useState(null);
//   const [fetchingStudent, setFetchingStudent] = useState(true);
  
//   // Get stored values from Redux
//   const storedClass = useSelector((state) => state.app.studentsclass);
//   const storedSubject = useSelector((state) => state.app.studentssubject);
//   const storedDifficulty = useSelector((state) => state.app.studentsdifficulty);
//   const studentsText = useSelector((state) => state.app.studentsText);
//   console.log("studentsText",studentsText)
//   const difficultyLevels = ['Easy', 'Medium', 'Hard'];

//   // Fetch current student data on component mount
//   useEffect(() => {
//     fetchStudentData();
//   }, []);

//   // Fetch subjects after we have student data
//   useEffect(() => {
//     if (studentData) {
//       fetchSubjects();
//     }
//   }, [studentData]);

//   useEffect(() => {
//     if (storedClass) setSelectedClass(storedClass);
//     if (storedDifficulty) setSelectedDifficulty(storedDifficulty);
//   }, [storedClass, storedDifficulty]);

//   const fetchStudentData = async () => {
//     try {
//       setFetchingStudent(true);
//       // Get token from localStorage or your auth state
//       const token = localStorage.getItem("access_token"); // Adjust this based on your auth implementation
      
//       const response = await axios.get('http://127.0.0.1:8000/students/authenticateduser', {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
      
//       setStudentData(response.data);
      
//       // Set the class with proper format "Class {number}"
//       const formattedClass = `Class ${response.data.class_number}`;
//       setSelectedClass(formattedClass);
//       dispatch(addStudentClass(formattedClass));
      
//       setError(null);
//     } catch (err) {
//       setError('Failed to load student data. Please try again.');
//       console.error('Error fetching student data:', err);
//     } finally {
//       setFetchingStudent(false);
//     }
//   };

//   const fetchSubjects = async () => {
//     try {
//       setLoading(true);
//       // Use the student's class number for the API
//       const classNumber = studentData.class_number;
//       const token = localStorage.getItem("access_token"); // Adjust this based on your auth implementation
      
//       const response = await axios.get(`http://127.0.0.1:8001/api/textbook/textbooksnames/${classNumber}/`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
      
//       setSubjects(response.data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to load subjects. Please try again.');
//       console.error('Error fetching subjects:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStartTest = (subject) => {
//     setSelectedSubject(subject);
//     setShowDifficultyModal(true);
//   };

//   const handleGenerateTest = async () => {
//     if (!selectedClass || !selectedDifficulty) {
//       alert('Please select both class level and difficulty');
//       return;
//     }

//     // Store in Redux
//     dispatch(addStudentClass(selectedClass));
//     dispatch(addStudentsubject(selectedSubject.subject));
//     dispatch(addStudentdifficulty(selectedDifficulty));

//     try {
//       setLoading(true);
      
//      const token = localStorage.getItem("access_token"); // Adjust this based on your auth implementation
      
//       const requestData = {
//         subject: selectedSubject.subject,
//         class_level: selectedClass,
//         difficulty: selectedDifficulty.toLowerCase()
//       };
      
//       console.log('Generating test with data:', requestData);
      
//       const response = await axios.post('http://127.0.0.1:8002/api/mcq/generate',requestData);

//       // Store the quiz data in Redux
//       dispatch(addStudentText(response.data));
      
//       // Navigate to test UI
//       navigate('/TestInterface', { state: { quizData: response.data } });
      
//     } catch (err) {
//       setError('Failed to generate test. Please try again.');
//       console.error('Error generating test:', err);
//     } finally {
//       setLoading(false);
//       setShowDifficultyModal(false);
//     }
//   };

//   const completionPercentage = 0;

//   if (fetchingStudent || (loading && !subjects.length)) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//         <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//           <div className="bg-black h-full animate-pulse" style={{ width: '50%' }}></div>
//         </div>
//         <div className="relative flex min-h-screen w-full flex-col pt-1">
//           <div className="layout-container flex h-full grow flex-col">
//             <SmartLearnAINavbar />
//             <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//         <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//           <div className="bg-red-600 h-full" style={{ width: '100%' }}></div>
//         </div>
//         <div className="relative flex min-h-screen w-full flex-col pt-1">
//           <div className="layout-container flex h-full grow flex-col">
//             <SmartLearnAINavbar />
//             <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//               <div className="text-center p-8 bg-white border border-black">
//                 <p className="text-red-600 mb-4">{error}</p>
//                 <button 
//                   onClick={fetchStudentData}
//                   className="px-6 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
//                 >
//                   Retry
//                 </button>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//       {/* Top Progress Bar (Fixed) */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//         <div 
//           className="bg-black h-full transition-all duration-300" 
//           style={{ width: `${completionPercentage}%` }}
//         ></div>
//       </div>

//       <div className="relative flex min-h-screen w-full flex-col pt-1">
//         <div className="layout-container flex h-full grow flex-col">
//           <SmartLearnAINavbar />

//           <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//             {/* Student Info Banner */}
//             {studentData && (
//               <div className="mb-8 p-4 bg-white border border-black">
//                 <div className="flex items-center gap-4">
                 
//                   <div>
//                     <h2 className="text-lg font-bold">Welcome, {studentData.name}!</h2>
//                     <p className="text-sm text-gray-600">
//                       Class: Class {studentData.class_number} | Medium: {studentData.medium} | Learning Style: {studentData.learningstyle}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Subject Selection Dashboard */}
//             <section className="mb-16">
//               <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
//                 <div>
//                   <h1 className="text-3xl font-bold tracking-tight text-black">
//                     AI Test Module
//                   </h1>
//                   <p className="text-gray-500 mt-1">
//                     Select a subject to begin your assessment for {selectedClass}.
//                   </p>
//                 </div>
//               </div>

//               {subjects.length === 0 ? (
//                 <div className="text-center p-12 bg-white border border-black">
//                   <p className="text-gray-600 mb-4">No subjects available for your class.</p>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {subjects.map((subject, index) => (
//                     <div 
//                       key={subject.subject || index} 
//                       className="group border border-black p-5 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
//                     >
//                       <div className="aspect-video mb-4 bg-gray-100 overflow-hidden border border-gray-200">
//                         <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
//                           <span className="text-4xl font-bold text-gray-400 opacity-50">
//                             {subject.subject ? subject.subject.charAt(0) : '?'}
//                           </span>
//                         </div>
//                       </div>
//                       <h3 className="text-lg font-bold mb-1">{subject.subject}</h3>
                      
//                       <button 
//                         onClick={() => handleStartTest(subject)}
//                         className="w-full py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
//                       >
//                         Start Test
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </section>
//           </main>

//           {/* Difficulty Selection Modal */}
//           {showDifficultyModal && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white p-8 max-w-md w-full mx-4 border border-black">
//                 <h2 className="text-2xl font-bold mb-6">Configure Your Test</h2>
//                 <p className="text-gray-600 mb-2">
//                   Subject: <span className="font-bold text-black">{selectedSubject?.subject}</span>
//                 </p>
//                 <p className="text-gray-600 mb-6">
//                   Class: <span className="font-bold text-black">{selectedClass}</span>
//                 </p>
                
//                 {/* Difficulty Selection */}
//                 <div className="mb-8">
//                   <label className="block text-sm font-bold mb-3">Select Difficulty</label>
//                   <div className="grid grid-cols-3 gap-3">
//                     {difficultyLevels.map((level) => (
//                       <button
//                         key={level}
//                         onClick={() => setSelectedDifficulty(level)}
//                         className={`p-3 border text-sm font-medium transition-all ${
//                           selectedDifficulty === level
//                             ? 'border-black bg-black text-white'
//                             : 'border-gray-300 hover:border-black'
//                         }`}
//                       >
//                         {level}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex gap-3">
//                   <button
//                     onClick={() => setShowDifficultyModal(false)}
//                     className="flex-1 py-3 border border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleGenerateTest}
//                     disabled={!selectedDifficulty}
//                     className={`flex-1 py-3 font-bold text-sm tracking-widest uppercase rounded-lg transition-colors ${
//                       selectedDifficulty
//                         ? 'bg-black text-white hover:bg-gray-800'
//                         : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                     }`}
//                   >
//                     Generate Test
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Bottom Navigation */}
//           <footer className="border-t border-gray-300 py-6 px-6 md:px-20 bg-white mt-20">
//             <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
//               <p className="text-sm text-gray-500">© 2024 SmartLearn AI. All assessments are property of SmartLearn Corp.</p>
//               <div className="flex gap-6 text-sm font-medium">
//                 <a className="hover:text-black" href="#">Guidelines</a>
//                 <a className="hover:text-black" href="#">Support</a>
//                 <a className="hover:text-black" href="#">Privacy</a>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AITestModule;














// AITestModule.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';
import { 
  addStudentClass, 
  addStudentsubject, 
  addStudentdifficulty,
  addStudentText 
} from '../actionslice';

const AITestModule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generatingTest, setGeneratingTest] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [fetchingStudent, setFetchingStudent] = useState(true);
  const [topicvalue,setTopic]=useState('')
  // Get stored values from Redux
  const storedClass = useSelector((state) => state.app.studentsclass);
  const storedSubject = useSelector((state) => state.app.studentssubject);
  const storedDifficulty = useSelector((state) => state.app.studentsdifficulty);
  const studentsText = useSelector((state) => state.app.studentsText);
  
  console.log("studentsText", studentsText);
  
  const difficultyLevels = ['Easy', 'Medium', 'Hard'];

  // Fetch current student data on component mount
  useEffect(() => {
    fetchStudentData();
  }, []);

  // Fetch subjects after we have student data
  useEffect(() => {
    if (studentData) {
      fetchSubjects();
    }
  }, [studentData]);

  useEffect(() => {
    if (storedClass) setSelectedClass(storedClass);
    if (storedDifficulty) setSelectedDifficulty(storedDifficulty);
  }, [storedClass, storedDifficulty]);

  const fetchStudentData = async () => {
    try {
      setFetchingStudent(true);
      // Get token from localStorage or your auth state
      const token = localStorage.getItem("access_token");
      
      const response = await axios.get('http://127.0.0.1:8000/students/authenticateduser', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      setStudentData(response.data);
      
      // Set the class with proper format "Class {number}"
      const formattedClass = `Class ${response.data.class_number}`;
      setSelectedClass(formattedClass);
      dispatch(addStudentClass(formattedClass));
      
      setError(null);
    } catch (err) {
      setError('Failed to load student data. Please try again.');
      console.error('Error fetching student data:', err);
    } finally {
      setFetchingStudent(false);
    }
  };

  const fetchSubjects = async () => {
    try {
      setLoading(true);
      // Use the student's class number for the API
      const classNumber = studentData.class_number;
      const token = localStorage.getItem("access_token");
      
      const response = await axios.get(`http://127.0.0.1:8001/api/textbook/textbooksnames/${classNumber}/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      setSubjects(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load subjects. Please try again.');
      console.error('Error fetching subjects:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStartTest = (subject) => {
    setSelectedSubject(subject);
    setShowDifficultyModal(true);
  };

  const handleGenerateTest = async () => {
    if (!selectedClass || !selectedDifficulty) {
      alert('Please select both class level and difficulty');
      return;
    }

    // Store in Redux
    dispatch(addStudentClass(selectedClass));
    dispatch(addStudentsubject(selectedSubject.subject));
    dispatch(addStudentdifficulty(selectedDifficulty));

    try {
      setGeneratingTest(true);
      
      const token = localStorage.getItem("access_token");
      
      const requestData = {
        subject: selectedSubject.subject,
        class_level: selectedClass,
        difficulty: selectedDifficulty.toLowerCase(),
        topic:topicvalue
      };
      
      console.log('Generating test with data:', requestData);
      
      const response = await axios.post(
        'http://127.0.0.1:8002/api/mcq/generate',
        requestData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      // Store the quiz data in Redux
      dispatch(addStudentText(response.data));
      
      // Close modal and navigate to test UI
      setShowDifficultyModal(false);
      navigate('/TestInterface', { state: { quizData: response.data } });
      
    } catch (err) {
      setError('Failed to generate test. Please try again.');
      console.error('Error generating test:', err);
    } finally {
      setGeneratingTest(false);
    }
  };

  const completionPercentage = 0;

  if (fetchingStudent || (loading && !subjects.length)) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
          <div className="bg-black h-full animate-pulse" style={{ width: '50%' }}></div>
        </div>
        <div className="relative flex min-h-screen w-full flex-col pt-1">
          <div className="layout-container flex h-full grow flex-col">
            <SmartLearnAINavbar />
            <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
          <div className="bg-red-600 h-full" style={{ width: '100%' }}></div>
        </div>
        <div className="relative flex min-h-screen w-full flex-col pt-1">
          <div className="layout-container flex h-full grow flex-col">
            <SmartLearnAINavbar />
            <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
              <div className="text-center p-8 bg-white border border-black">
                <p className="text-red-600 mb-4">{error}</p>
                <button 
                  onClick={fetchStudentData}
                  className="px-6 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Retry
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
      {/* Top Progress Bar (Fixed) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
        <div 
          className="bg-black h-full transition-all duration-300" 
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>

      <div className="relative flex min-h-screen w-full flex-col pt-1">
        <div className="layout-container flex h-full grow flex-col">
          <SmartLearnAINavbar />

          <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
            {/* Student Info Banner */}
            {studentData && (
              <div className="mb-8 p-4 bg-white border border-black rounded-lg">
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="text-lg font-bold">Welcome, {studentData.name}!</h2>
                    <p className="text-sm text-gray-600">
                      Class: Class {studentData.class_number} | Medium: {studentData.medium} | Learning Style: {studentData.learningstyle}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Subject Selection Dashboard */}
            <section className="mb-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-black">
                    AI Test Module
                  </h1>
                  <p className="text-gray-500 mt-1">
                    Select a subject to begin your assessment for {selectedClass}.
                  </p>
                </div>
              </div>

              {subjects.length === 0 ? (
                <div className="text-center p-12 bg-white border border-black rounded-lg">
                  <p className="text-gray-600 mb-4">No subjects available for your class.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjects.map((subject, index) => (
                    <div 
                      key={subject.subject || index} 
                      className="group border border-black p-5 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all rounded-lg"
                    >
                      <div className="aspect-video mb-4 bg-gray-100 overflow-hidden border border-gray-200 rounded-lg">
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <span className="text-4xl font-bold text-gray-400 opacity-50">
                            {subject.subject ? subject.subject.charAt(0) : '?'}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-3">{subject.subject}</h3>
                      
                      <button 
                        onClick={() => handleStartTest(subject)}
                        disabled={generatingTest}
                        className="w-full py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Start Test
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </main>

          {/* Difficulty Selection Modal with Loading State */}
          {showDifficultyModal && (
            <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 max-w-md w-full mx-4 border border-black rounded-lg">
                {generatingTest ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold mb-2">Generating Your Test</h3>
                    <p className="text-gray-600">Please wait while we create your personalized test...</p>
                    <p className="text-sm text-gray-500 mt-4">Subject: {selectedSubject?.subject}</p>
                    <p className="text-sm text-gray-500">Class: {selectedClass}</p>
                    <p className="text-sm text-gray-500">Difficulty: {selectedDifficulty}</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Configure Your Test</h2>
                    <p className="text-gray-600 mb-2">
                      Subject: <span className="font-bold text-black">{selectedSubject?.subject}</span>
                    </p>
                    <p className="text-gray-600 mb-6">
                      Class: <span className="font-bold text-black">{selectedClass}</span>
                    </p>
                    
                    {/* Difficulty Selection */}
                    <div className="mb-8">
                      <label className="block text-sm font-bold mb-3">Select Difficulty</label>
                      <div className="grid grid-cols-3 gap-3">
                        {difficultyLevels.map((level) => (
                          <button
                            key={level}
                            onClick={() => setSelectedDifficulty(level)}
                            className={`p-3 border text-sm font-medium transition-all rounded-lg ${
                              selectedDifficulty === level
                                ? 'border-black bg-black text-white'
                                : 'border-gray-300 hover:border-black'
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                     <input type="text" placeholder="Enter topic" value={topicvalue}  onChange={(e) => setTopic(e.target.value)} className="col-span-3 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-black"/>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowDifficultyModal(false)}
                        className="flex-1 py-3 border border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleGenerateTest}
                        disabled={!selectedDifficulty}
                        className={`flex-1 py-3 font-bold text-sm tracking-widest uppercase rounded-lg transition-colors ${
                          selectedDifficulty
                            ? 'bg-black text-white hover:bg-gray-800'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Generate Test
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Global Loading Overlay for Test Generation */}
          {generatingTest && !showDifficultyModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 max-w-md w-full mx-4 border border-black rounded-lg text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Generating Your Test</h3>
                <p className="text-gray-600">Please wait while we create your personalized test...</p>
              </div>
            </div>
          )}

          {/* Bottom Navigation */}
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