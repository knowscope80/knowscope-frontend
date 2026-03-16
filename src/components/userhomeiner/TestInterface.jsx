// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, useLocation } from 'react-router-dom';
// import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';
// import { clearTestData } from '../actionslice';

// const TestInterface = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
  
//   // Get data from Redux store or location state
//   const reduxState = useSelector(state => state.app || {});
//   const locationState = location.state || {};
  
//   // Handle the data structure - the questions are in the 'questions' array
//   const testData = reduxState.studentsText || locationState.quizData || {};
//   const testQuestions = testData.questions || [];
//   const studentssubject = testData.subject || reduxState.studentssubject || locationState.subject || '';
//   const studentsdifficulty = reduxState.studentsdifficulty || locationState.difficulty || '';
//   const studentsclass = testData.class_level || reduxState.studentsclass || locationState.class || '';
//   const quizId = testData.quiz_id || '';
//   const topic = testData.topic || '';
  
//   console.log('Test Data:', { testData, testQuestions, studentssubject, studentsclass });
  
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [questionStatus, setQuestionStatus] = useState({});
//   const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds
//   const [showResults, setShowResults] = useState(false);
//   const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

//   useEffect(() => {
//     // Check if we have test questions, if not redirect
//     if (!testQuestions || testQuestions.length === 0) {
//       navigate('/AITestModule');
//     }
    
//     // Initialize question status for all questions
//     const initialStatus = {};
//     testQuestions.forEach((_, index) => {
//       initialStatus[index] = 'not-visited';
//     });
//     setQuestionStatus(initialStatus);
    
//     // Mark first question as visited
//     setQuestionStatus(prev => ({
//       ...prev,
//       0: 'visited'
//     }));
//   }, [testQuestions, navigate]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeRemaining(prev => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           handleAutoSubmit();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
    
//     if (hours > 0) {
//       return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//     }
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const handleAnswerSelect = (questionIndex, optionIndex) => {
//     setSelectedAnswers({
//       ...selectedAnswers,
//       [questionIndex]: optionIndex
//     });
    
//     setQuestionStatus({
//       ...questionStatus,
//       [questionIndex]: 'attempted'
//     });
//   };

//   const handleMarkForReview = () => {
//     setQuestionStatus({
//       ...questionStatus,
//       [currentQuestionIndex]: 'review'
//     });
//   };

//   const handleClearResponse = () => {
//     const newSelectedAnswers = { ...selectedAnswers };
//     delete newSelectedAnswers[currentQuestionIndex];
//     setSelectedAnswers(newSelectedAnswers);
    
//     setQuestionStatus({
//       ...questionStatus,
//       [currentQuestionIndex]: 'visited'
//     });
//   };

//   const handleSaveAndNext = () => {
//     if (currentQuestionIndex < testQuestions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       // Mark the next question as visited if it's not already
//       if (questionStatus[currentQuestionIndex + 1] === 'not-visited') {
//         setQuestionStatus(prev => ({
//           ...prev,
//           [currentQuestionIndex + 1]: 'visited'
//         }));
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSubmitTest = () => {
//     setShowConfirmSubmit(true);
//   };

//   const handleConfirmSubmit = () => {
//     setShowConfirmSubmit(false);
//     setShowResults(true);
//   };

//   const handleAutoSubmit = () => {
//     setShowResults(true);
//   };

//   const calculateResults = () => {
//     let correct = 0;
//     let incorrect = 0;
//     let unattempted = 0;

//     testQuestions.forEach((question, index) => {
//       if (selectedAnswers[index] === undefined) {
//         unattempted++;
//       } else if (selectedAnswers[index] === question.correct_index) {
//         correct++;
//       } else {
//         incorrect++;
//       }
//     });

//     // Calculate score (assuming 4 marks per correct answer, -1 for incorrect)
//     const totalMarks = testQuestions.length * 4;
//     const obtainedMarks = (correct * 4) - (incorrect * 1);
//     const percentage = totalMarks > 0 ? ((obtainedMarks / totalMarks) * 100).toFixed(2) : '0';
    
//     return { 
//       correct, 
//       incorrect, 
//       unattempted, 
//       total: testQuestions.length,
//       obtainedMarks,
//       totalMarks,
//       percentage
//     };
//   };

//   const handleExitTest = () => {
//     dispatch(clearTestData());
//     navigate('/AITestModule');
//   };

//   if (!testQuestions || testQuestions.length === 0) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//         <div className="relative flex min-h-screen w-full flex-col pt-1">
//           <div className="layout-container flex h-full grow flex-col">
//             <SmartLearnAINavbar />
//             <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//               <div className="text-center p-12 bg-white border border-black">
//                 <p className="text-gray-600 mb-4">No test questions found.</p>
//                 <button
//                   onClick={() => navigate('/ai-test-module')}
//                   className="px-6 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
//                 >
//                   Go Back
//                 </button>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const currentQuestion = testQuestions[currentQuestionIndex];
//   const results = calculateResults();
//   const answeredCount = Object.keys(selectedAnswers).length;
//   const completionPercentage = (answeredCount / testQuestions.length) * 100;
//   const reviewedCount = Object.values(questionStatus).filter(s => s === 'review').length;
//   const visitedCount = Object.keys(questionStatus).length;

//   // Results View
//   if (showResults) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//         <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//           <div className="bg-green-600 h-full" style={{ width: '100%' }}></div>
//         </div>
        
//         <div className="relative flex min-h-screen w-full flex-col pt-1">
//           <div className="layout-container flex h-full grow flex-col">
//             <SmartLearnAINavbar />
            
//             <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//               <div className="max-w-4xl mx-auto">
//                 {/* Results Header */}
//                 <div className="bg-white border border-black p-8 mb-6">
//                   <h1 className="text-3xl font-bold mb-2">Test Results</h1>
//                   <p className="text-gray-600 mb-2">
//                     {studentssubject || 'Subject'} • {topic} • {studentsclass}
//                   </p>
//                   <p className="text-gray-500 text-sm mb-6">Quiz ID: {quizId}</p>
                  
//                   {/* Score Card */}
//                   <div className="mb-8 p-6 bg-gray-50 border border-gray-200">
//                     <div className="text-center mb-6">
//                       <div className="text-5xl font-bold text-black mb-2">
//                         {results.obtainedMarks} / {results.totalMarks}
//                       </div>
//                       <div className="text-xl text-gray-600">
//                         Score: {results.percentage}%
//                       </div>
//                     </div>
                    
//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-blue-600">{results.total}</div>
//                         <div className="text-sm text-gray-600">Total Questions</div>
//                       </div>
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-green-600">{results.correct}</div>
//                         <div className="text-sm text-gray-600">Correct</div>
//                       </div>
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-red-600">{results.incorrect}</div>
//                         <div className="text-sm text-gray-600">Incorrect</div>
//                       </div>
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-gray-600">{results.unattempted}</div>
//                         <div className="text-sm text-gray-600">Unattempted</div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Question Review */}
//                   <div className="mb-8">
//                     <h2 className="text-xl font-bold mb-4">Question Review</h2>
//                     <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
//                       {testQuestions.map((question, index) => {
//                         const userAnswer = selectedAnswers[index];
//                         const isCorrect = userAnswer !== undefined && userAnswer === question.correct_index;
//                         const isAttempted = userAnswer !== undefined;
                        
//                         return (
//                           <div key={index} className="border border-gray-200 p-4 hover:border-black transition-colors">
//                             <div className="flex items-start gap-4">
//                               <div className={`w-8 h-8 flex items-center justify-center font-bold shrink-0 rounded-full
//                                 ${isAttempted 
//                                   ? isCorrect 
//                                     ? 'bg-green-500 text-white' 
//                                     : 'bg-red-500 text-white'
//                                   : 'bg-gray-200 text-gray-600'
//                                 }`}
//                               >
//                                 {index + 1}
//                               </div>
//                               <div className="flex-1">
//                                 <p className="font-medium mb-3 text-lg">{question.question}</p>
//                                 <div className="grid grid-cols-1 gap-2 text-sm">
//                                   {question.options.map((opt, optIndex) => (
//                                     <div 
//                                       key={optIndex}
//                                       className={`p-3 border rounded ${
//                                         optIndex === question.correct_index
//                                           ? 'border-green-500 bg-green-50'
//                                           : optIndex === userAnswer && optIndex !== question.correct_index
//                                           ? 'border-red-500 bg-red-50'
//                                           : 'border-gray-200'
//                                       }`}
//                                     >
//                                       <span className="font-bold mr-3">{String.fromCharCode(65 + optIndex)}.</span>
//                                       <span className={optIndex === question.correct_index ? 'font-medium' : ''}>
//                                         {opt}
//                                       </span>
//                                       {optIndex === question.correct_index && (
//                                         <span className="ml-3 text-green-600 font-bold text-xs px-2 py-1 bg-green-100 rounded">
//                                           ✓ Correct Answer
//                                         </span>
//                                       )}
//                                     </div>
//                                   ))}
//                                 </div>
//                                 {question.concept_tags && (
//                                   <div className="mt-3 flex flex-wrap gap-2">
//                                     {question.concept_tags.map((tag, tagIndex) => (
//                                       <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-xs rounded-full border border-gray-300">
//                                         {tag}
//                                       </span>
//                                     ))}
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-4">
//                     <button
//                       onClick={handleExitTest}
//                       className="px-8 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
//                     >
//                       Exit Test
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Test Interface View
//   return (
//     <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//       {/* Top Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//         <div 
//           className="bg-black h-full transition-all duration-300" 
//           style={{ width: `${completionPercentage}%` }}
//         ></div>
//       </div>

//       <div className="relative flex min-h-screen w-full flex-col pt-1">
//         <div className="layout-container flex h-full grow flex-col">
//           <SmartLearnAINavbar />

//           <main className="flex-1 px-6 md:px-20 py-10 max-w-[1400px] mx-auto w-full">
//             {/* Test Header */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//               <div>
//                 <h1 className="text-2xl font-bold">
//                   {studentssubject || 'Subject'} Test
//                 </h1>
//                 <p className="text-gray-500 mt-1">
//                   {studentsclass} • {topic} • {quizId && `Quiz ID: ${quizId}`}
//                 </p>
//               </div>
//               <div className="flex items-center gap-4 mt-4 md:mt-0">
//                 <div className={`px-4 py-2 bg-white border font-mono text-xl rounded
//                   ${timeRemaining < 300 ? 'border-red-500 text-red-500' : 'border-black'}`}
//                 >
//                   <span>{formatTime(timeRemaining)}</span>
//                 </div>
//                 <button
//                   onClick={handleSubmitTest}
//                   className="px-6 py-2 bg-red-600 text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-red-700 transition-colors"
//                 >
//                   Submit Test
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* Question Section */}
//               <div className="lg:col-span-2">
//                 <div className="border border-black bg-white p-6 rounded-lg">
//                   <div className="flex justify-between items-center mb-6">
//                     <span className="text-sm font-bold text-gray-500">
//                       Question {currentQuestionIndex + 1} of {testQuestions.length}
//                     </span>
//                     <span className={`px-3 py-1 text-sm font-medium border rounded-full
//                       ${questionStatus[currentQuestionIndex] === 'review' 
//                         ? 'bg-yellow-100 border-yellow-500 text-yellow-700' 
//                         : selectedAnswers[currentQuestionIndex] !== undefined 
//                         ? 'bg-green-100 border-green-500 text-green-700'
//                         : 'bg-gray-100 border-gray-500 text-gray-700'
//                       }`}
//                     >
//                       {questionStatus[currentQuestionIndex] === 'review' ? 'Marked for Review' : 
//                        selectedAnswers[currentQuestionIndex] !== undefined ? 'Answered' : 'Not Answered'}
//                     </span>
//                   </div>

//                   {/* Question Text */}
//                   <div className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
//                     <p className="text-lg font-medium leading-relaxed whitespace-pre-wrap">
//                       {currentQuestion.question}
//                     </p>
//                   </div>

//                   {/* Options */}
//                   <div className="space-y-3 mb-8">
//                     {currentQuestion.options && currentQuestion.options.map((option, optIndex) => (
//                       <div key={optIndex} className="relative">
//                         <input
//                           type="radio"
//                           id={`q${currentQuestionIndex}_opt${optIndex}`}
//                           name={`question_${currentQuestionIndex}`}
//                           value={optIndex}
//                           checked={selectedAnswers[currentQuestionIndex] === optIndex}
//                           onChange={() => handleAnswerSelect(currentQuestionIndex, optIndex)}
//                           className="hidden peer"
//                         />
//                         <label
//                           htmlFor={`q${currentQuestionIndex}_opt${optIndex}`}
//                           className={`flex items-start gap-4 p-4 border-2 cursor-pointer transition-all rounded-lg
//                             ${selectedAnswers[currentQuestionIndex] === optIndex
//                               ? 'border-black bg-gray-50' 
//                               : 'border-gray-200 hover:border-gray-400'
//                             }`}
//                         >
//                           <span className={`flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0 font-bold
//                             ${selectedAnswers[currentQuestionIndex] === optIndex
//                               ? 'border-black bg-black text-white'
//                               : 'border-gray-400'
//                             }`}
//                           >
//                             {String.fromCharCode(65 + optIndex)}
//                           </span>
//                           <span className="text-base whitespace-pre-wrap flex-1">{option}</span>
//                         </label>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Concept Tags */}
//                   {currentQuestion.concept_tags && (
//                     <div className="mb-6 flex flex-wrap gap-2">
//                       {currentQuestion.concept_tags.map((tag, index) => (
//                         <span key={index} className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-300">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {/* Navigation Buttons */}
//                   <div className="flex flex-wrap gap-3 justify-between items-center border-t border-gray-200 pt-6">
//                     <div className="flex gap-2">
//                       <button
//                         onClick={handlePrevious}
//                         disabled={currentQuestionIndex === 0}
//                         className={`px-4 py-2 border-2 border-black font-bold text-sm uppercase rounded-lg
//                           ${currentQuestionIndex === 0 
//                             ? 'opacity-50 cursor-not-allowed' 
//                             : 'hover:bg-gray-100'
//                           }`}
//                       >
//                         Previous
//                       </button>
//                       <button
//                         onClick={handleMarkForReview}
//                         className="px-4 py-2 border-2 border-yellow-500 text-yellow-600 font-bold text-sm uppercase rounded-lg hover:bg-yellow-50"
//                       >
//                         Mark for Review
//                       </button>
//                       <button
//                         onClick={handleClearResponse}
//                         className="px-4 py-2 border-2 border-red-500 text-red-600 font-bold text-sm uppercase rounded-lg hover:bg-red-50"
//                       >
//                         Clear
//                       </button>
//                     </div>
//                     <button
//                       onClick={handleSaveAndNext}
//                       disabled={currentQuestionIndex === testQuestions.length - 1}
//                       className={`px-6 py-2 bg-black text-white font-bold text-sm uppercase rounded-lg
//                         ${currentQuestionIndex === testQuestions.length - 1
//                           ? 'opacity-50 cursor-not-allowed'
//                           : 'hover:bg-gray-800'
//                         }`}
//                     >
//                       Save & Next
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Question Palette */}
//               <div className="lg:col-span-1">
//                 <div className="border border-black bg-white p-6 sticky top-4 rounded-lg">
//                   <h3 className="font-bold text-lg mb-4">Question Palette</h3>
                  
//                   <div className="grid grid-cols-5 gap-2 mb-6">
//                     {testQuestions.map((_, index) => {
//                       let bgColor = 'bg-gray-100';
//                       let borderColor = 'border-gray-300';
//                       let textColor = 'text-gray-700';
                      
//                       if (questionStatus[index] === 'review') {
//                         bgColor = 'bg-yellow-200';
//                         borderColor = 'border-yellow-500';
//                       } else if (selectedAnswers[index] !== undefined) {
//                         bgColor = 'bg-green-200';
//                         borderColor = 'border-green-500';
//                       }
                      
//                       if (currentQuestionIndex === index) {
//                         borderColor = 'border-black border-2';
//                       }
                      
//                       return (
//                         <button
//                           key={index}
//                           onClick={() => setCurrentQuestionIndex(index)}
//                           className={`w-10 h-10 ${bgColor} border-2 ${borderColor} ${textColor} font-medium
//                             hover:border-black transition-colors rounded`}
//                         >
//                           {index + 1}
//                         </button>
//                       );
//                     })}
//                   </div>

//                   <div className="space-y-3 text-sm">
//                     <div className="flex items-center gap-3">
//                       <div className="w-5 h-5 bg-green-200 border-2 border-green-500 rounded"></div>
//                       <span>Answered ({answeredCount})</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-5 h-5 bg-yellow-200 border-2 border-yellow-500 rounded"></div>
//                       <span>Marked for Review ({reviewedCount})</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-5 h-5 bg-gray-100 border-2 border-gray-300 rounded"></div>
//                       <span>Not Visited ({testQuestions.length - visitedCount})</span>
//                     </div>
//                   </div>

//                   <div className="mt-6 pt-6 border-t border-gray-200">
//                     <div className="text-sm text-gray-600 mb-3 font-bold">
//                       Summary
//                     </div>
//                     <div className="space-y-2 text-sm">
//                       <div className="flex justify-between">
//                         <span>Total Questions:</span>
//                         <span className="font-bold">{testQuestions.length}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Answered:</span>
//                         <span className="font-bold">{answeredCount}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Marked for Review:</span>
//                         <span className="font-bold">{reviewedCount}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Unanswered:</span>
//                         <span className="font-bold">{testQuestions.length - answeredCount}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>

//       {/* Confirm Submit Modal */}
//       {showConfirmSubmit && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 max-w-md w-full mx-4 border-2 border-black rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Submit Test?</h2>
//             <p className="text-gray-600 mb-6">
//               You have answered {answeredCount} out of {testQuestions.length} questions. 
//               {testQuestions.length - answeredCount > 0 && 
//                 ` ${testQuestions.length - answeredCount} questions are unanswered.`}
//             </p>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setShowConfirmSubmit(false)}
//                 className="flex-1 py-3 border-2 border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmSubmit}
//                 className="flex-1 py-3 bg-red-600 text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-red-700 transition-colors"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestInterface;












// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';
// import { clearTestData } from '../actionslice';

// const TestInterface = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
  
//   // Get data from Redux store or location state
//   const reduxState = useSelector(state => state.app || {});
//   const locationState = location.state || {};
  
//   // Handle the data structure - the questions are in the 'questions' array
//   const testData = reduxState.studentsText || locationState.quizData || {};
//   const testQuestions = testData.questions || [];
//   const studentssubject = testData.subject || reduxState.studentssubject || locationState.subject || '';
//   const studentsdifficulty = reduxState.studentsdifficulty || locationState.difficulty || '';
//   const studentsclass = testData.class_level || reduxState.studentsclass || locationState.class || '';
//   const quizId = testData.quiz_id || '';
//   const topic = testData.topic || '';
//   const studentId = reduxState.studentId || locationState.studentId || 'STU001'; // Default or from your auth system
  
//   console.log('Test Data:', { testData, testQuestions, studentssubject, studentsclass });
  
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [questionStatus, setQuestionStatus] = useState({});
//   const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds
//   const [showResults, setShowResults] = useState(false);
//   const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
//   const [evaluationResults, setEvaluationResults] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [apiError, setApiError] = useState(null);

//   useEffect(() => {
//     // Check if we have test questions, if not redirect
//     if (!testQuestions || testQuestions.length === 0) {
//       navigate('/AITestModule');
//     }
    
//     // Initialize question status for all questions
//     const initialStatus = {};
//     testQuestions.forEach((_, index) => {
//       initialStatus[index] = 'not-visited';
//     });
//     setQuestionStatus(initialStatus);
    
//     // Mark first question as visited
//     setQuestionStatus(prev => ({
//       ...prev,
//       0: 'visited'
//     }));
//   }, [testQuestions, navigate]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeRemaining(prev => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           handleAutoSubmit();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
    
//     if (hours > 0) {
//       return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//     }
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const handleAnswerSelect = (questionIndex, optionIndex) => {
//     setSelectedAnswers({
//       ...selectedAnswers,
//       [questionIndex]: optionIndex
//     });
    
//     setQuestionStatus({
//       ...questionStatus,
//       [questionIndex]: 'attempted'
//     });
//   };

//   const handleMarkForReview = () => {
//     setQuestionStatus({
//       ...questionStatus,
//       [currentQuestionIndex]: 'review'
//     });
//   };

//   const handleClearResponse = () => {
//     const newSelectedAnswers = { ...selectedAnswers };
//     delete newSelectedAnswers[currentQuestionIndex];
//     setSelectedAnswers(newSelectedAnswers);
    
//     setQuestionStatus({
//       ...questionStatus,
//       [currentQuestionIndex]: 'visited'
//     });
//   };

//   const handleSaveAndNext = () => {
//     if (currentQuestionIndex < testQuestions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       // Mark the next question as visited if it's not already
//       if (questionStatus[currentQuestionIndex + 1] === 'not-visited') {
//         setQuestionStatus(prev => ({
//           ...prev,
//           [currentQuestionIndex + 1]: 'visited'
//         }));
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSubmitTest = () => {
//     setShowConfirmSubmit(true);
//   };

//   const handleConfirmSubmit = async () => {
//     setShowConfirmSubmit(false);
//     setIsSubmitting(true);
//     setApiError(null);
    
//     try {
//       // Format user answers for the API
//       const userAnswers = testQuestions.map((question, index) => {
//         const selectedOptionIndex = selectedAnswers[index];
//         return {
//           question: question.question,
//           selected_option: selectedOptionIndex !== undefined 
//             ? question.options[selectedOptionIndex] 
//             : "" // Empty string for unattempted questions
//         };
//       });

//       const payload = {
//         student_id: studentId,
//         quiz_id: quizId,
//         user_answers: userAnswers
//       };
//     //   const payload = {
//     //   student_id:studentId,
//     //   quiz_id: quizId,
//     //   user_answers: questions.map((q, i) => ({
//     //     question: q.question,
//     //     selected_option: selectedAnswers[i]
//     //   }))
//     // };
       
//       const token= localStorage.getItem('access_token')
//       console.log('Submitting to evaluation API:', payload);


//       // Call the evaluation API
//       const response = await axios.post('http://127.0.0.1:8002/api/mcq/evaluate', payload, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         timeout: 30000 // 30 second timeout
//       });

//       console.log('Evaluation API response:', response.data);
//       setEvaluationResults(response.data);
//       setShowResults(true);
      
//     } catch (error) {
//       console.error('Error submitting test for evaluation:', error);
//       setApiError(error.response?.data?.message || error.message || 'Failed to evaluate test. Please try again.');
      
//       // Fallback to local calculation if API fails
//       const localResults = calculateResults();
//       setEvaluationResults({
//         quiz_id: quizId,
//         total_questions: testQuestions.length,
//         correct_answers: localResults.correct,
//         score_percentage: parseFloat(localResults.percentage),
//         strong_areas: [],
//         weak_areas: [],
//         feedback: "Test submitted successfully but evaluation service unavailable. Showing local results.",
//         recommendations: "• Please try submitting again later for detailed feedback.\n• Your answers have been saved locally."
//       });
//       setShowResults(true);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleAutoSubmit = async () => {
//     setIsSubmitting(true);
//     try {
//       const userAnswers = testQuestions.map((question, index) => {
//         const selectedOptionIndex = selectedAnswers[index];
//         return {
//           question: question.question,
//           selected_option: selectedOptionIndex !== undefined 
//             ? question.options[selectedOptionIndex] 
//             : ""
//         };
//       });

//       const payload = {
//         student_id: studentId,
//         quiz_id: quizId,
//         user_answers: userAnswers
//       };

//       const response = await axios.post('http://127.0.0.1:8002/api/mcq/evaluate', payload);
//       setEvaluationResults(response.data);
//     } catch (error) {
//       console.error('Error in auto-submit:', error);
//       const localResults = calculateResults();
//       setEvaluationResults({
//         quiz_id: quizId,
//         total_questions: testQuestions.length,
//         correct_answers: localResults.correct,
//         score_percentage: parseFloat(localResults.percentage),
//         strong_areas: [],
//         weak_areas: [],
//         feedback: "Test auto-submitted due to time out. Evaluation service unavailable.",
//         recommendations: "• Your answers have been saved.\n• Please contact support if you need detailed feedback."
//       });
//     } finally {
//       setIsSubmitting(false);
//       setShowResults(true);
//     }
//   };

//   const calculateResults = () => {
//     let correct = 0;
//     let incorrect = 0;
//     let unattempted = 0;

//     testQuestions.forEach((question, index) => {
//       if (selectedAnswers[index] === undefined) {
//         unattempted++;
//       } else if (selectedAnswers[index] === question.correct_index) {
//         correct++;
//       } else {
//         incorrect++;
//       }
//     });

//     // Calculate score (assuming 4 marks per correct answer, -1 for incorrect)
//     const totalMarks = testQuestions.length * 4;
//     const obtainedMarks = (correct * 4) - (incorrect * 1);
//     const percentage = totalMarks > 0 ? ((obtainedMarks / totalMarks) * 100).toFixed(2) : '0';
    
//     return { 
//       correct, 
//       incorrect, 
//       unattempted, 
//       total: testQuestions.length,
//       obtainedMarks,
//       totalMarks,
//       percentage
//     };
//   };

//   const handleExitTest = () => {
//     dispatch(clearTestData());
//     navigate('/AITestModule');
//   };

//   if (!testQuestions || testQuestions.length === 0) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//         <div className="relative flex min-h-screen w-full flex-col pt-1">
//           <div className="layout-container flex h-full grow flex-col">
//             <SmartLearnAINavbar />
//             <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//               <div className="text-center p-12 bg-white border border-black">
//                 <p className="text-gray-600 mb-4">No test questions found.</p>
//                 <button
//                   onClick={() => navigate('/AITestModule')}
//                   className="px-6 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
//                 >
//                   Go Back
//                 </button>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const currentQuestion = testQuestions[currentQuestionIndex];
//   const localResults = calculateResults();
//   const answeredCount = Object.keys(selectedAnswers).length;
//   const completionPercentage = (answeredCount / testQuestions.length) * 100;
//   const reviewedCount = Object.values(questionStatus).filter(s => s === 'review').length;
//   const visitedCount = Object.keys(questionStatus).length;

//   // Results View with API data
//   if (showResults) {
//     const results = evaluationResults || {
//       ...localResults,
//       strong_areas: [],
//       weak_areas: [],
//       feedback: "Test completed. Thank you for your submission.",
//       recommendations: ""
//     };

//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//         <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//           <div className="bg-green-600 h-full" style={{ width: '100%' }}></div>
//         </div>
        
//         <div className="relative flex min-h-screen w-full flex-col pt-1">
//           <div className="layout-container flex h-full grow flex-col">
//             <SmartLearnAINavbar />
            
//             <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//               <div className="max-w-4xl mx-auto">
//                 {/* Results Header */}
//                 <div className="bg-white border border-black p-8 mb-6">
//                   <h1 className="text-3xl font-bold mb-2">Test Results</h1>
//                   <p className="text-gray-600 mb-2">
//                     {studentssubject || 'Subject'} • {topic} • {studentsclass}
//                   </p>
//                   <p className="text-gray-500 text-sm mb-6">Quiz ID: {quizId}</p>
                  
//                   {/* Score Card */}
//                   <div className="mb-8 p-6 bg-gray-50 border border-gray-200">
//                     <div className="text-center mb-6">
//                       <div className="text-5xl font-bold text-black mb-2">
//                         {results.score_percentage?.toFixed(2) || localResults.percentage}%
//                       </div>
//                       <div className="text-xl text-gray-600">
//                         {results.correct_answers || localResults.correct} / {results.total_questions || localResults.total} Correct
//                       </div>
//                     </div>
                    
//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-blue-600">{results.total_questions || localResults.total}</div>
//                         <div className="text-sm text-gray-600">Total Questions</div>
//                       </div>
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-green-600">{results.correct_answers || localResults.correct}</div>
//                         <div className="text-sm text-gray-600">Correct</div>
//                       </div>
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-red-600">{results.total_questions - results.correct_answers || localResults.incorrect}</div>
//                         <div className="text-sm text-gray-600">Incorrect/Unattempted</div>
//                       </div>
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-gray-600">{results.score_percentage?.toFixed(1) || localResults.percentage}%</div>
//                         <div className="text-sm text-gray-600">Score</div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Strong & Weak Areas */}
//                   {results.strong_areas && results.strong_areas.length > 0 && (
//                     <div className="mb-6">
//                       <h2 className="text-xl font-bold mb-3">💪 Strong Areas</h2>
//                       <div className="flex flex-wrap gap-2">
//                         {results.strong_areas.map((area, index) => (
//                           <span key={index} className="px-3 py-1 bg-green-100 text-green-800 border border-green-300 rounded-full text-sm font-medium">
//                             {area.replace(/-/g, ' ')}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {results.weak_areas && results.weak_areas.length > 0 && (
//                     <div className="mb-6">
//                       <h2 className="text-xl font-bold mb-3">📚 Areas for Improvement</h2>
//                       <div className="flex flex-wrap gap-2">
//                         {results.weak_areas.map((area, index) => (
//                           <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-full text-sm font-medium">
//                             {area.replace(/-/g, ' ')}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Feedback Section */}
//                   {results.feedback && (
//                     <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                       <h2 className="text-xl font-bold mb-2">📝 Feedback</h2>
//                       <p className="text-gray-800">{results.feedback}</p>
//                     </div>
//                   )}

//                   {/* Recommendations */}
//                   {results.recommendations && (
//                     <div className="mb-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
//                       <h2 className="text-xl font-bold mb-2">🎯 Recommendations</h2>
//                       <div className="text-gray-800 whitespace-pre-line" 
//                            dangerouslySetInnerHTML={{ __html: results.recommendations }} />
//                     </div>
//                   )}

//                   {/* Question Review */}
//                   <div className="mb-8">
//                     <h2 className="text-xl font-bold mb-4">Question Review</h2>
//                     <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
//                       {testQuestions.map((question, index) => {
//                         const userAnswer = selectedAnswers[index];
//                         const isCorrect = userAnswer !== undefined && userAnswer === question.correct_index;
//                         const isAttempted = userAnswer !== undefined;
                        
//                         return (
//                           <div key={index} className="border border-gray-200 p-4 hover:border-black transition-colors">
//                             <div className="flex items-start gap-4">
//                               <div className={`w-8 h-8 flex items-center justify-center font-bold shrink-0 rounded-full
//                                 ${isAttempted 
//                                   ? isCorrect 
//                                     ? 'bg-green-500 text-white' 
//                                     : 'bg-red-500 text-white'
//                                   : 'bg-gray-200 text-gray-600'
//                                 }`}
//                               >
//                                 {index + 1}
//                               </div>
//                               <div className="flex-1">
//                                 <p className="font-medium mb-3 text-lg">{question.question}</p>
//                                 <div className="grid grid-cols-1 gap-2 text-sm">
//                                   {question.options.map((opt, optIndex) => (
//                                     <div 
//                                       key={optIndex}
//                                       className={`p-3 border rounded ${
//                                         optIndex === question.correct_index
//                                           ? 'border-green-500 bg-green-50'
//                                           : optIndex === userAnswer && optIndex !== question.correct_index
//                                           ? 'border-red-500 bg-red-50'
//                                           : 'border-gray-200'
//                                       }`}
//                                     >
//                                       <span className="font-bold mr-3">{String.fromCharCode(65 + optIndex)}.</span>
//                                       <span className={optIndex === question.correct_index ? 'font-medium' : ''}>
//                                         {opt}
//                                       </span>
//                                       {optIndex === question.correct_index && (
//                                         <span className="ml-3 text-green-600 font-bold text-xs px-2 py-1 bg-green-100 rounded">
//                                           ✓ Correct Answer
//                                         </span>
//                                       )}
//                                     </div>
//                                   ))}
//                                 </div>
//                                 {question.concept_tags && (
//                                   <div className="mt-3 flex flex-wrap gap-2">
//                                     {question.concept_tags.map((tag, tagIndex) => (
//                                       <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-xs rounded-full border border-gray-300">
//                                         {tag}
//                                       </span>
//                                     ))}
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-4">
//                     <button
//                       onClick={handleExitTest}
//                       className="px-8 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
//                     >
//                       Exit Test
//                     </button>
//                     <button
//                       onClick={() => window.print()}
//                       className="px-8 py-3 border-2 border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors"
//                     >
//                       Print Results
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Test Interface View
//   return (
//     <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//       {/* Top Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//         <div 
//           className="bg-black h-full transition-all duration-300" 
//           style={{ width: `${completionPercentage}%` }}
//         ></div>
//       </div>

//       <div className="relative flex min-h-screen w-full flex-col pt-1">
//         <div className="layout-container flex h-full grow flex-col">
//           <SmartLearnAINavbar />

//           <main className="flex-1 px-6 md:px-20 py-10 max-w-[1400px] mx-auto w-full">
//             {/* Test Header */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//               <div>
//                 <h1 className="text-2xl font-bold">
//                   {studentssubject || 'Subject'} Test
//                 </h1>
//                 <p className="text-gray-500 mt-1">
//                   {studentsclass} • {topic} • {quizId && `Quiz ID: ${quizId}`}
//                 </p>
//               </div>
//               <div className="flex items-center gap-4 mt-4 md:mt-0">
//                 <div className={`px-4 py-2 bg-white border font-mono text-xl rounded
//                   ${timeRemaining < 300 ? 'border-red-500 text-red-500' : 'border-black'}`}
//                 >
//                   <span>{formatTime(timeRemaining)}</span>
//                 </div>
//                 <button
//                   onClick={handleSubmitTest}
//                   disabled={isSubmitting}
//                   className={`px-6 py-2 bg-red-600 text-white font-bold text-sm tracking-widest uppercase rounded-lg 
//                     ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'} transition-colors`}
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Submit Test'}
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* Question Section */}
//               <div className="lg:col-span-2">
//                 <div className="border border-black bg-white p-6 rounded-lg">
//                   <div className="flex justify-between items-center mb-6">
//                     <span className="text-sm font-bold text-gray-500">
//                       Question {currentQuestionIndex + 1} of {testQuestions.length}
//                     </span>
//                     <span className={`px-3 py-1 text-sm font-medium border rounded-full
//                       ${questionStatus[currentQuestionIndex] === 'review' 
//                         ? 'bg-yellow-100 border-yellow-500 text-yellow-700' 
//                         : selectedAnswers[currentQuestionIndex] !== undefined 
//                         ? 'bg-green-100 border-green-500 text-green-700'
//                         : 'bg-gray-100 border-gray-500 text-gray-700'
//                       }`}
//                     >
//                       {questionStatus[currentQuestionIndex] === 'review' ? 'Marked for Review' : 
//                        selectedAnswers[currentQuestionIndex] !== undefined ? 'Answered' : 'Not Answered'}
//                     </span>
//                   </div>

//                   {/* Question Text */}
//                   <div className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
//                     <p className="text-lg font-medium leading-relaxed whitespace-pre-wrap">
//                       {currentQuestion.question}
//                     </p>
//                   </div>

//                   {/* Options */}
//                   <div className="space-y-3 mb-8">
//                     {currentQuestion.options && currentQuestion.options.map((option, optIndex) => (
//                       <div key={optIndex} className="relative">
//                         <input
//                           type="radio"
//                           id={`q${currentQuestionIndex}_opt${optIndex}`}
//                           name={`question_${currentQuestionIndex}`}
//                           value={optIndex}
//                           checked={selectedAnswers[currentQuestionIndex] === optIndex}
//                           onChange={() => handleAnswerSelect(currentQuestionIndex, optIndex)}
//                           className="hidden peer"
//                         />
//                         <label
//                           htmlFor={`q${currentQuestionIndex}_opt${optIndex}`}
//                           className={`flex items-start gap-4 p-4 border-2 cursor-pointer transition-all rounded-lg
//                             ${selectedAnswers[currentQuestionIndex] === optIndex
//                               ? 'border-black bg-gray-50' 
//                               : 'border-gray-200 hover:border-gray-400'
//                             }`}
//                         >
//                           <span className={`flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0 font-bold
//                             ${selectedAnswers[currentQuestionIndex] === optIndex
//                               ? 'border-black bg-black text-white'
//                               : 'border-gray-400'
//                             }`}
//                           >
//                             {String.fromCharCode(65 + optIndex)}
//                           </span>
//                           <span className="text-base whitespace-pre-wrap flex-1">{option}</span>
//                         </label>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Concept Tags */}
//                   {currentQuestion.concept_tags && (
//                     <div className="mb-6 flex flex-wrap gap-2">
//                       {currentQuestion.concept_tags.map((tag, index) => (
//                         <span key={index} className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-300">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {/* Navigation Buttons */}
//                   <div className="flex flex-wrap gap-3 justify-between items-center border-t border-gray-200 pt-6">
//                     <div className="flex gap-2">
//                       <button
//                         onClick={handlePrevious}
//                         disabled={currentQuestionIndex === 0}
//                         className={`px-4 py-2 border-2 border-black font-bold text-sm uppercase rounded-lg
//                           ${currentQuestionIndex === 0 
//                             ? 'opacity-50 cursor-not-allowed' 
//                             : 'hover:bg-gray-100'
//                           }`}
//                       >
//                         Previous
//                       </button>
//                       <button
//                         onClick={handleMarkForReview}
//                         className="px-4 py-2 border-2 border-yellow-500 text-yellow-600 font-bold text-sm uppercase rounded-lg hover:bg-yellow-50"
//                       >
//                         Mark for Review
//                       </button>
//                       <button
//                         onClick={handleClearResponse}
//                         className="px-4 py-2 border-2 border-red-500 text-red-600 font-bold text-sm uppercase rounded-lg hover:bg-red-50"
//                       >
//                         Clear
//                       </button>
//                     </div>
//                     <button
//                       onClick={handleSaveAndNext}
//                       disabled={currentQuestionIndex === testQuestions.length - 1}
//                       className={`px-6 py-2 bg-black text-white font-bold text-sm uppercase rounded-lg
//                         ${currentQuestionIndex === testQuestions.length - 1
//                           ? 'opacity-50 cursor-not-allowed'
//                           : 'hover:bg-gray-800'
//                         }`}
//                     >
//                       Save & Next
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Question Palette */}
//               <div className="lg:col-span-1">
//                 <div className="border border-black bg-white p-6 sticky top-4 rounded-lg">
//                   <h3 className="font-bold text-lg mb-4">Question Palette</h3>
                  
//                   <div className="grid grid-cols-5 gap-2 mb-6">
//                     {testQuestions.map((_, index) => {
//                       let bgColor = 'bg-gray-100';
//                       let borderColor = 'border-gray-300';
//                       let textColor = 'text-gray-700';
                      
//                       if (questionStatus[index] === 'review') {
//                         bgColor = 'bg-yellow-200';
//                         borderColor = 'border-yellow-500';
//                       } else if (selectedAnswers[index] !== undefined) {
//                         bgColor = 'bg-green-200';
//                         borderColor = 'border-green-500';
//                       }
                      
//                       if (currentQuestionIndex === index) {
//                         borderColor = 'border-black border-2';
//                       }
                      
//                       return (
//                         <button
//                           key={index}
//                           onClick={() => setCurrentQuestionIndex(index)}
//                           className={`w-10 h-10 ${bgColor} border-2 ${borderColor} ${textColor} font-medium
//                             hover:border-black transition-colors rounded`}
//                         >
//                           {index + 1}
//                         </button>
//                       );
//                     })}
//                   </div>

//                   <div className="space-y-3 text-sm">
//                     <div className="flex items-center gap-3">
//                       <div className="w-5 h-5 bg-green-200 border-2 border-green-500 rounded"></div>
//                       <span>Answered ({answeredCount})</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-5 h-5 bg-yellow-200 border-2 border-yellow-500 rounded"></div>
//                       <span>Marked for Review ({reviewedCount})</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-5 h-5 bg-gray-100 border-2 border-gray-300 rounded"></div>
//                       <span>Not Visited ({testQuestions.length - visitedCount})</span>
//                     </div>
//                   </div>

//                   <div className="mt-6 pt-6 border-t border-gray-200">
//                     <div className="text-sm text-gray-600 mb-3 font-bold">
//                       Summary
//                     </div>
//                     <div className="space-y-2 text-sm">
//                       <div className="flex justify-between">
//                         <span>Total Questions:</span>
//                         <span className="font-bold">{testQuestions.length}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Answered:</span>
//                         <span className="font-bold">{answeredCount}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Marked for Review:</span>
//                         <span className="font-bold">{reviewedCount}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Unanswered:</span>
//                         <span className="font-bold">{testQuestions.length - answeredCount}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>

//       {/* Confirm Submit Modal */}
//       {showConfirmSubmit && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 max-w-md w-full mx-4 border-2 border-black rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Submit Test?</h2>
//             {apiError && (
//               <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
//                 {apiError}
//               </div>
//             )}
//             <p className="text-gray-600 mb-6">
//               You have answered {answeredCount} out of {testQuestions.length} questions. 
//               {testQuestions.length - answeredCount > 0 && 
//                 ` ${testQuestions.length - answeredCount} questions are unanswered.`}
//             </p>
//             <p className="text-gray-600 mb-6 text-sm">
//               Your answers will be evaluated and you'll receive detailed feedback.
//             </p>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setShowConfirmSubmit(false)}
//                 disabled={isSubmitting}
//                 className="flex-1 py-3 border-2 border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmSubmit}
//                 disabled={isSubmitting}
//                 className="flex-1 py-3 bg-red-600 text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
//               >
//                 {isSubmitting ? 'Submitting...' : 'Submit'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestInterface;













// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';
// import { clearTestData } from '../actionslice';

// const TestInterface = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
  
//   // Get data from Redux store or location state
//   const reduxState = useSelector(state => state.app || {});
//   const locationState = location.state || {};
  
//   // Handle the data structure - the questions are in the 'questions' array
//   const testData = reduxState.studentsText || locationState.quizData || {};
//   const testQuestions = testData.questions || [];
//   const studentssubject = testData.subject || reduxState.studentssubject || locationState.subject || '';
//   const studentsdifficulty = testData.difficulty || reduxState.studentsdifficulty || locationState.difficulty || '';
//   const studentsclass = testData.class_level || reduxState.studentsclass || locationState.class || '';
//   const quizId = testData.quiz_id || '';
//   const topic = testData.topic || '';
//   const studentId = reduxState.studentId || locationState.studentId || 'STU001'; // Default or from your auth system
  
//   console.log('Test Data:', { testData, testQuestions, studentssubject, studentsclass });
  
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [questionStatus, setQuestionStatus] = useState({});
//   const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds
//   const [showResults, setShowResults] = useState(false);
//   const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
//   const [evaluationResults, setEvaluationResults] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [apiError, setApiError] = useState(null);

//   useEffect(() => {
//     // Check if we have test questions, if not redirect
//     if (!testQuestions || testQuestions.length === 0) {
//       navigate('/AITestModule');
//     }
    
//     // Initialize question status for all questions
//     const initialStatus = {};
//     testQuestions.forEach((_, index) => {
//       initialStatus[index] = 'not-visited';
//     });
//     setQuestionStatus(initialStatus);
    
//     // Mark first question as visited
//     setQuestionStatus(prev => ({
//       ...prev,
//       0: 'visited'
//     }));
//   }, [testQuestions, navigate]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeRemaining(prev => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           handleAutoSubmit();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
    
//     if (hours > 0) {
//       return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//     }
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const handleAnswerSelect = (questionIndex, optionIndex) => {
//     setSelectedAnswers({
//       ...selectedAnswers,
//       [questionIndex]: optionIndex
//     });
    
//     setQuestionStatus({
//       ...questionStatus,
//       [questionIndex]: 'attempted'
//     });
//   };

//   const handleMarkForReview = () => {
//     setQuestionStatus({
//       ...questionStatus,
//       [currentQuestionIndex]: 'review'
//     });
//   };

//   const handleClearResponse = () => {
//     const newSelectedAnswers = { ...selectedAnswers };
//     delete newSelectedAnswers[currentQuestionIndex];
//     setSelectedAnswers(newSelectedAnswers);
    
//     setQuestionStatus({
//       ...questionStatus,
//       [currentQuestionIndex]: 'visited'
//     });
//   };

//   const handleSaveAndNext = () => {
//     if (currentQuestionIndex < testQuestions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       // Mark the next question as visited if it's not already
//       if (questionStatus[currentQuestionIndex + 1] === 'not-visited') {
//         setQuestionStatus(prev => ({
//           ...prev,
//           [currentQuestionIndex + 1]: 'visited'
//         }));
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSubmitTest = () => {
//     setShowConfirmSubmit(true);
//   };

//   const calculateScorePercentage = () => {
//     let correct = 0;
//     testQuestions.forEach((question, index) => {
//       if (selectedAnswers[index] !== undefined && selectedAnswers[index] === question.correct_index) {
//         correct++;
//       }
//     });
//     return (correct / testQuestions.length) * 100;
//   };

//   const handleConfirmSubmit = async () => {
//     setShowConfirmSubmit(false);
//     setIsSubmitting(true);
//     setApiError(null);
    
//     try {
//       const scorePercentage = calculateScorePercentage();
//       const questionsAnswered = Object.keys(selectedAnswers).length;
      
//       // Format data for quiz submission API
//       const quizSubmitPayload = {
//         quiz_id: quizId,
//         subject: studentssubject,
//         class_level: studentsclass,
//         topic: topic,
//         difficulty: studentsdifficulty,
//         score_percentage: parseFloat(scorePercentage.toFixed(2)),
//         questions_answered: questionsAnswered
//       };

//       console.log('Submitting to quiz API:', quizSubmitPayload);
      
//       const token = localStorage.getItem('access_token');
//       console.log('paylode1',quizSubmitPayload)
//       // First submit to quiz API
//     const res= await axios.post('http://127.0.0.1:8002/api/quiz/submit', quizSubmitPayload, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         timeout: 30000 // 30 second timeout
//       });
//       console.log('res1',res)
//       // Then format user answers for evaluation API
//       const userAnswers = testQuestions.map((question, index) => {
//         const selectedOptionIndex = selectedAnswers[index];
//         return {
//           question: question.question,
//           selected_option: selectedOptionIndex !== undefined 
//             ? question.options[selectedOptionIndex] 
//             : "" // Empty string for unattempted questions
//         };
//       });

//       const evaluationPayload = {
//         student_id: studentId,
//         quiz_id: quizId,
//         user_answers: userAnswers
//       };

//       console.log('Submitting to evaluation API:', evaluationPayload);

//       // Call the evaluation API
//       const response = await axios.post('http://127.0.0.1:8002/api/mcq/evaluate', evaluationPayload, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         timeout: 30000 // 30 second timeout
//       });

//       console.log('Evaluation API response:', response.data);
//       setEvaluationResults(response.data);
//       setShowResults(true);
      
//     } catch (error) {
//       console.error('Error submitting test:', error);
//       setApiError(error.response?.data?.message || error.message || 'Failed to submit test. Please try again.');
      
//       // Fallback to local calculation if API fails
//       const localResults = calculateLocalResults();
//       setEvaluationResults({
//         quiz_id: quizId,
//         total_questions: testQuestions.length,
//         correct_answers: localResults.correct,
//         score_percentage: parseFloat(localResults.percentage),
//         strong_areas: [],
//         weak_areas: [],
//         feedback: "Test submitted successfully but evaluation service unavailable. Showing local results.",
//         recommendations: "• Please try submitting again later for detailed feedback.\n• Your answers have been saved locally."
//       });
//       setShowResults(true);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleAutoSubmit = async () => {
//     setIsSubmitting(true);
//     try {
//       const scorePercentage = calculateScorePercentage();
//       const questionsAnswered = Object.keys(selectedAnswers).length;
      
//       // Format data for quiz submission API
//       const quizSubmitPayload = {
//         quiz_id: quizId,
//         subject: studentssubject,
//         class_level: studentsclass,
//         topic: topic,
//         difficulty: studentsdifficulty,
//         score_percentage: parseFloat(scorePercentage.toFixed(2)),
//         questions_answered: questionsAnswered
//       };

//       const token = localStorage.getItem('access_token');
//       console.log('paylode2',quizSubmitPayload)
//       // Submit to quiz API
//       const res=await axios.post('http://127.0.0.1:8002/api/quiz/submit', quizSubmitPayload, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         }
//       });
//       console("res",res)
//       // Then submit to evaluation API
//       const userAnswers = testQuestions.map((question, index) => {
//         const selectedOptionIndex = selectedAnswers[index];
//         return {
//           question: question.question,
//           selected_option: selectedOptionIndex !== undefined 
//             ? question.options[selectedOptionIndex] 
//             : ""
//         };
//       });

//       const evaluationPayload = {
//         student_id: studentId,
//         quiz_id: quizId,
//         user_answers: userAnswers
//       };

//       const response = await axios.post('http://127.0.0.1:8002/api/mcq/evaluate', evaluationPayload, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         }
//       });
      
//       setEvaluationResults(response.data);
//     } catch (error) {
//       console.error('Error in auto-submit:', error);
//       const localResults = calculateLocalResults();
//       setEvaluationResults({
//         quiz_id: quizId,
//         total_questions: testQuestions.length,
//         correct_answers: localResults.correct,
//         score_percentage: parseFloat(localResults.percentage),
//         strong_areas: [],
//         weak_areas: [],
//         feedback: "Test auto-submitted due to time out. Evaluation service unavailable.",
//         recommendations: "• Your answers have been saved.\n• Please contact support if you need detailed feedback."
//       });
//     } finally {
//       setIsSubmitting(false);
//       setShowResults(true);
//     }
//   };

//   const calculateLocalResults = () => {
//     let correct = 0;
//     let incorrect = 0;
//     let unattempted = 0;

//     testQuestions.forEach((question, index) => {
//       if (selectedAnswers[index] === undefined) {
//         unattempted++;
//       } else if (selectedAnswers[index] === question.correct_index) {
//         correct++;
//       } else {
//         incorrect++;
//       }
//     });

//     // Calculate score (assuming 4 marks per correct answer, -1 for incorrect)
//     const totalMarks = testQuestions.length * 4;
//     const obtainedMarks = (correct * 4) - (incorrect * 1);
//     const percentage = totalMarks > 0 ? ((obtainedMarks / totalMarks) * 100).toFixed(2) : '0';
    
//     return { 
//       correct, 
//       incorrect, 
//       unattempted, 
//       total: testQuestions.length,
//       obtainedMarks,
//       totalMarks,
//       percentage
//     };
//   };

//   const handleExitTest = () => {
//     dispatch(clearTestData());
//     navigate('/AITestModule');
//   };

//   if (!testQuestions || testQuestions.length === 0) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//         <div className="relative flex min-h-screen w-full flex-col pt-1">
//           <div className="layout-container flex h-full grow flex-col">
//             <SmartLearnAINavbar />
//             <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//               <div className="text-center p-12 bg-white border border-black">
//                 <p className="text-gray-600 mb-4">No test questions found.</p>
//                 <button
//                   onClick={() => navigate('/AITestModule')}
//                   className="px-6 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
//                 >
//                   Go Back
//                 </button>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const currentQuestion = testQuestions[currentQuestionIndex];
//   const localResults = calculateLocalResults();
//   const answeredCount = Object.keys(selectedAnswers).length;
//   const completionPercentage = (answeredCount / testQuestions.length) * 100;
//   const reviewedCount = Object.values(questionStatus).filter(s => s === 'review').length;
//   const visitedCount = Object.keys(questionStatus).length;

//   // Results View with API data
//   if (showResults) {
//     const results = evaluationResults || {
//       ...localResults,
//       strong_areas: [],
//       weak_areas: [],
//       feedback: "Test completed. Thank you for your submission.",
//       recommendations: ""
//     };

//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//         <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//           <div className="bg-green-600 h-full" style={{ width: '100%' }}></div>
//         </div>
        
//         <div className="relative flex min-h-screen w-full flex-col pt-1">
//           <div className="layout-container flex h-full grow flex-col">
//             <SmartLearnAINavbar />
            
//             <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
//               <div className="max-w-4xl mx-auto">
//                 {/* Results Header */}
//                 <div className="bg-white border border-black p-8 mb-6">
//                   <h1 className="text-3xl font-bold mb-2">Test Results</h1>
//                   <p className="text-gray-600 mb-2">
//                     {studentssubject || 'Subject'} • {topic} • {studentsclass}
//                   </p>
//                   <p className="text-gray-500 text-sm mb-6">Quiz ID: {quizId}</p>
                  
//                   {/* Score Card */}
//                   <div className="mb-8 p-6 bg-gray-50 border border-gray-200">
//                     <div className="text-center mb-6">
//                       <div className="text-5xl font-bold text-black mb-2">
//                         {results.score_percentage?.toFixed(2) || localResults.percentage}%
//                       </div>
//                       <div className="text-xl text-gray-600">
//                         {results.correct_answers || localResults.correct} / {results.total_questions || localResults.total} Correct
//                       </div>
//                     </div>
                    
//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-blue-600">{results.total_questions || localResults.total}</div>
//                         <div className="text-sm text-gray-600">Total Questions</div>
//                       </div>
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-green-600">{results.correct_answers || localResults.correct}</div>
//                         <div className="text-sm text-gray-600">Correct</div>
//                       </div>
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-red-600">{results.total_questions - results.correct_answers || localResults.incorrect}</div>
//                         <div className="text-sm text-gray-600">Incorrect/Unattempted</div>
//                       </div>
//                       <div className="p-4 bg-white border border-gray-200 text-center">
//                         <div className="text-3xl font-bold text-gray-600">{answeredCount}</div>
//                         <div className="text-sm text-gray-600">Questions Answered</div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Strong & Weak Areas */}
//                   {results.strong_areas && results.strong_areas.length > 0 && (
//                     <div className="mb-6">
//                       <h2 className="text-xl font-bold mb-3">💪 Strong Areas</h2>
//                       <div className="flex flex-wrap gap-2">
//                         {results.strong_areas.map((area, index) => (
//                           <span key={index} className="px-3 py-1 bg-green-100 text-green-800 border border-green-300 rounded-full text-sm font-medium">
//                             {area.replace(/-/g, ' ')}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {results.weak_areas && results.weak_areas.length > 0 && (
//                     <div className="mb-6">
//                       <h2 className="text-xl font-bold mb-3">📚 Areas for Improvement</h2>
//                       <div className="flex flex-wrap gap-2">
//                         {results.weak_areas.map((area, index) => (
//                           <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-full text-sm font-medium">
//                             {area.replace(/-/g, ' ')}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Feedback Section */}
//                   {results.feedback && (
//                     <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                       <h2 className="text-xl font-bold mb-2">📝 Feedback</h2>
//                       <p className="text-gray-800">{results.feedback}</p>
//                     </div>
//                   )}

//                   {/* Recommendations */}
//                   {results.recommendations && (
//                     <div className="mb-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
//                       <h2 className="text-xl font-bold mb-2">🎯 Recommendations</h2>
//                       <div className="text-gray-800 whitespace-pre-line" 
//                            dangerouslySetInnerHTML={{ __html: results.recommendations }} />
//                     </div>
//                   )}

//                   {/* Question Review */}
//                   <div className="mb-8">
//                     <h2 className="text-xl font-bold mb-4">Question Review</h2>
//                     <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
//                       {testQuestions.map((question, index) => {
//                         const userAnswer = selectedAnswers[index];
//                         const isCorrect = userAnswer !== undefined && userAnswer === question.correct_index;
//                         const isAttempted = userAnswer !== undefined;
                        
//                         return (
//                           <div key={index} className="border border-gray-200 p-4 hover:border-black transition-colors">
//                             <div className="flex items-start gap-4">
//                               <div className={`w-8 h-8 flex items-center justify-center font-bold shrink-0 rounded-full
//                                 ${isAttempted 
//                                   ? isCorrect 
//                                     ? 'bg-green-500 text-white' 
//                                     : 'bg-red-500 text-white'
//                                   : 'bg-gray-200 text-gray-600'
//                                 }`}
//                               >
//                                 {index + 1}
//                               </div>
//                               <div className="flex-1">
//                                 <p className="font-medium mb-3 text-lg">{question.question}</p>
//                                 <div className="grid grid-cols-1 gap-2 text-sm">
//                                   {question.options.map((opt, optIndex) => (
//                                     <div 
//                                       key={optIndex}
//                                       className={`p-3 border rounded ${
//                                         optIndex === question.correct_index
//                                           ? 'border-green-500 bg-green-50'
//                                           : optIndex === userAnswer && optIndex !== question.correct_index
//                                           ? 'border-red-500 bg-red-50'
//                                           : 'border-gray-200'
//                                       }`}
//                                     >
//                                       <span className="font-bold mr-3">{String.fromCharCode(65 + optIndex)}.</span>
//                                       <span className={optIndex === question.correct_index ? 'font-medium' : ''}>
//                                         {opt}
//                                       </span>
//                                       {optIndex === question.correct_index && (
//                                         <span className="ml-3 text-green-600 font-bold text-xs px-2 py-1 bg-green-100 rounded">
//                                           ✓ Correct Answer
//                                         </span>
//                                       )}
//                                     </div>
//                                   ))}
//                                 </div>
//                                 {question.concept_tags && (
//                                   <div className="mt-3 flex flex-wrap gap-2">
//                                     {question.concept_tags.map((tag, tagIndex) => (
//                                       <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-xs rounded-full border border-gray-300">
//                                         {tag}
//                                       </span>
//                                     ))}
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-4">
//                     <button
//                       onClick={handleExitTest}
//                       className="px-8 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
//                     >
//                       Exit Test
//                     </button>
//                     <button
//                       onClick={() => window.print()}
//                       className="px-8 py-3 border-2 border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors"
//                     >
//                       Print Results
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Test Interface View
//   return (
//     <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
//       {/* Top Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
//         <div 
//           className="bg-black h-full transition-all duration-300" 
//           style={{ width: `${completionPercentage}%` }}
//         ></div>
//       </div>

//       <div className="relative flex min-h-screen w-full flex-col pt-1">
//         <div className="layout-container flex h-full grow flex-col">
//           <SmartLearnAINavbar />

//           <main className="flex-1 px-6 md:px-20 py-10 max-w-[1400px] mx-auto w-full">
//             {/* Test Header */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//               <div>
//                 <h1 className="text-2xl font-bold">
//                   {studentssubject || 'Subject'} Test
//                 </h1>
//                 <p className="text-gray-500 mt-1">
//                   {studentsclass} • {topic} • {quizId && `Quiz ID: ${quizId}`}
//                 </p>
//               </div>
//               <div className="flex items-center gap-4 mt-4 md:mt-0">
//                 <div className={`px-4 py-2 bg-white border font-mono text-xl rounded
//                   ${timeRemaining < 300 ? 'border-red-500 text-red-500' : 'border-black'}`}
//                 >
//                   <span>{formatTime(timeRemaining)}</span>
//                 </div>
//                 <button
//                   onClick={handleSubmitTest}
//                   disabled={isSubmitting}
//                   className={`px-6 py-2 bg-red-600 text-white font-bold text-sm tracking-widest uppercase rounded-lg 
//                     ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'} transition-colors`}
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Submit Test'}
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* Question Section */}
//               <div className="lg:col-span-2">
//                 <div className="border border-black bg-white p-6 rounded-lg">
//                   <div className="flex justify-between items-center mb-6">
//                     <span className="text-sm font-bold text-gray-500">
//                       Question {currentQuestionIndex + 1} of {testQuestions.length}
//                     </span>
//                     <span className={`px-3 py-1 text-sm font-medium border rounded-full
//                       ${questionStatus[currentQuestionIndex] === 'review' 
//                         ? 'bg-yellow-100 border-yellow-500 text-yellow-700' 
//                         : selectedAnswers[currentQuestionIndex] !== undefined 
//                         ? 'bg-green-100 border-green-500 text-green-700'
//                         : 'bg-gray-100 border-gray-500 text-gray-700'
//                       }`}
//                     >
//                       {questionStatus[currentQuestionIndex] === 'review' ? 'Marked for Review' : 
//                        selectedAnswers[currentQuestionIndex] !== undefined ? 'Answered' : 'Not Answered'}
//                     </span>
//                   </div>

//                   {/* Question Text */}
//                   <div className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
//                     <p className="text-lg font-medium leading-relaxed whitespace-pre-wrap">
//                       {currentQuestion.question}
//                     </p>
//                   </div>

//                   {/* Options */}
//                   <div className="space-y-3 mb-8">
//                     {currentQuestion.options && currentQuestion.options.map((option, optIndex) => (
//                       <div key={optIndex} className="relative">
//                         <input
//                           type="radio"
//                           id={`q${currentQuestionIndex}_opt${optIndex}`}
//                           name={`question_${currentQuestionIndex}`}
//                           value={optIndex}
//                           checked={selectedAnswers[currentQuestionIndex] === optIndex}
//                           onChange={() => handleAnswerSelect(currentQuestionIndex, optIndex)}
//                           className="hidden peer"
//                         />
//                         <label
//                           htmlFor={`q${currentQuestionIndex}_opt${optIndex}`}
//                           className={`flex items-start gap-4 p-4 border-2 cursor-pointer transition-all rounded-lg
//                             ${selectedAnswers[currentQuestionIndex] === optIndex
//                               ? 'border-black bg-gray-50' 
//                               : 'border-gray-200 hover:border-gray-400'
//                             }`}
//                         >
//                           <span className={`flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0 font-bold
//                             ${selectedAnswers[currentQuestionIndex] === optIndex
//                               ? 'border-black bg-black text-white'
//                               : 'border-gray-400'
//                             }`}
//                           >
//                             {String.fromCharCode(65 + optIndex)}
//                           </span>
//                           <span className="text-base whitespace-pre-wrap flex-1">{option}</span>
//                         </label>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Concept Tags */}
//                   {currentQuestion.concept_tags && (
//                     <div className="mb-6 flex flex-wrap gap-2">
//                       {currentQuestion.concept_tags.map((tag, index) => (
//                         <span key={index} className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-300">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {/* Navigation Buttons */}
//                   <div className="flex flex-wrap gap-3 justify-between items-center border-t border-gray-200 pt-6">
//                     <div className="flex gap-2">
//                       <button
//                         onClick={handlePrevious}
//                         disabled={currentQuestionIndex === 0}
//                         className={`px-4 py-2 border-2 border-black font-bold text-sm uppercase rounded-lg
//                           ${currentQuestionIndex === 0 
//                             ? 'opacity-50 cursor-not-allowed' 
//                             : 'hover:bg-gray-100'
//                           }`}
//                       >
//                         Previous
//                       </button>
//                       <button
//                         onClick={handleMarkForReview}
//                         className="px-4 py-2 border-2 border-yellow-500 text-yellow-600 font-bold text-sm uppercase rounded-lg hover:bg-yellow-50"
//                       >
//                         Mark for Review
//                       </button>
//                       <button
//                         onClick={handleClearResponse}
//                         className="px-4 py-2 border-2 border-red-500 text-red-600 font-bold text-sm uppercase rounded-lg hover:bg-red-50"
//                       >
//                         Clear
//                       </button>
//                     </div>
//                     <button
//                       onClick={handleSaveAndNext}
//                       disabled={currentQuestionIndex === testQuestions.length - 1}
//                       className={`px-6 py-2 bg-black text-white font-bold text-sm uppercase rounded-lg
//                         ${currentQuestionIndex === testQuestions.length - 1
//                           ? 'opacity-50 cursor-not-allowed'
//                           : 'hover:bg-gray-800'
//                         }`}
//                     >
//                       Save & Next
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Question Palette */}
//               <div className="lg:col-span-1">
//                 <div className="border border-black bg-white p-6 sticky top-4 rounded-lg">
//                   <h3 className="font-bold text-lg mb-4">Question Palette</h3>
                  
//                   <div className="grid grid-cols-5 gap-2 mb-6">
//                     {testQuestions.map((_, index) => {
//                       let bgColor = 'bg-gray-100';
//                       let borderColor = 'border-gray-300';
//                       let textColor = 'text-gray-700';
                      
//                       if (questionStatus[index] === 'review') {
//                         bgColor = 'bg-yellow-200';
//                         borderColor = 'border-yellow-500';
//                       } else if (selectedAnswers[index] !== undefined) {
//                         bgColor = 'bg-green-200';
//                         borderColor = 'border-green-500';
//                       }
                      
//                       if (currentQuestionIndex === index) {
//                         borderColor = 'border-black border-2';
//                       }
                      
//                       return (
//                         <button
//                           key={index}
//                           onClick={() => setCurrentQuestionIndex(index)}
//                           className={`w-10 h-10 ${bgColor} border-2 ${borderColor} ${textColor} font-medium
//                             hover:border-black transition-colors rounded`}
//                         >
//                           {index + 1}
//                         </button>
//                       );
//                     })}
//                   </div>

//                   <div className="space-y-3 text-sm">
//                     <div className="flex items-center gap-3">
//                       <div className="w-5 h-5 bg-green-200 border-2 border-green-500 rounded"></div>
//                       <span>Answered ({answeredCount})</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-5 h-5 bg-yellow-200 border-2 border-yellow-500 rounded"></div>
//                       <span>Marked for Review ({reviewedCount})</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-5 h-5 bg-gray-100 border-2 border-gray-300 rounded"></div>
//                       <span>Not Visited ({testQuestions.length - visitedCount})</span>
//                     </div>
//                   </div>

//                   <div className="mt-6 pt-6 border-t border-gray-200">
//                     <div className="text-sm text-gray-600 mb-3 font-bold">
//                       Summary
//                     </div>
//                     <div className="space-y-2 text-sm">
//                       <div className="flex justify-between">
//                         <span>Total Questions:</span>
//                         <span className="font-bold">{testQuestions.length}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Answered:</span>
//                         <span className="font-bold">{answeredCount}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Marked for Review:</span>
//                         <span className="font-bold">{reviewedCount}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Unanswered:</span>
//                         <span className="font-bold">{testQuestions.length - answeredCount}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>

//       {/* Confirm Submit Modal */}
//       {showConfirmSubmit && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 max-w-md w-full mx-4 border-2 border-black rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Submit Test?</h2>
//             {apiError && (
//               <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
//                 {apiError}
//               </div>
//             )}
//             <p className="text-gray-600 mb-6">
//               You have answered {answeredCount} out of {testQuestions.length} questions. 
//               {testQuestions.length - answeredCount > 0 && 
//                 ` ${testQuestions.length - answeredCount} questions are unanswered.`}
//             </p>
//             <p className="text-gray-600 mb-6 text-sm">
//               Your answers will be evaluated and you'll receive detailed feedback.
//             </p>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setShowConfirmSubmit(false)}
//                 disabled={isSubmitting}
//                 className="flex-1 py-3 border-2 border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmSubmit}
//                 disabled={isSubmitting}
//                 className="flex-1 py-3 bg-red-600 text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
//               >
//                 {isSubmitting ? 'Submitting...' : 'Submit'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestInterface;








import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';
import { clearTestData } from '../actionslice';

const TestInterface = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  
  // Get data from Redux store or location state
  const reduxState = useSelector(state => state.app || {});
  const locationState = location.state || {};
  
  // Handle the data structure - the questions are in the 'questions' array
  const testData = reduxState.studentsText || locationState.quizData || {};
  const testQuestions = testData.questions || [];
  const studentssubject = testData.subject || reduxState.studentssubject || locationState.subject || '';
  const studentsdifficulty = testData.difficulty || reduxState.studentsdifficulty || locationState.difficulty || '';
  const studentsclass = testData.class_level || reduxState.studentsclass || locationState.class || '';
  const quizId = testData.quiz_id || '';
  const topic = testData.topic || '';
  const studentId = reduxState.studentId || locationState.studentId || 'STU001'; // Default or from your auth system
  
  // Extract topics from questions for study session
  const extractTopicsCovered = () => {
    const topics = new Set();
    testQuestions.forEach(question => {
      if (question.concept_tags && Array.isArray(question.concept_tags)) {
        question.concept_tags.forEach(tag => topics.add(tag));
      }
    });
    // If no concept tags, use the main topic
    if (topics.size === 0 && topic) {
      return [topic];
    }
    return Array.from(topics);
  };
  
  console.log('Test Data:', { testData, testQuestions, studentssubject, studentsclass });
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questionStatus, setQuestionStatus] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds
  const [showResults, setShowResults] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [evaluationResults, setEvaluationResults] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [startTime] = useState(new Date()); // Record when test started

  useEffect(() => {
    // Check if we have test questions, if not redirect
    if (!testQuestions || testQuestions.length === 0) {
      navigate('/AITestModule');
    }
    
    // Initialize question status for all questions
    const initialStatus = {};
    testQuestions.forEach((_, index) => {
      initialStatus[index] = 'not-visited';
    });
    setQuestionStatus(initialStatus);
    
    // Mark first question as visited
    setQuestionStatus(prev => ({
      ...prev,
      0: 'visited'
    }));
  }, [testQuestions, navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateDuration = () => {
    const endTime = new Date();
    const durationMs = endTime - startTime;
    const durationMinutes = Math.floor(durationMs / 60000); // Convert to minutes
    return Math.max(1, durationMinutes); // At least 1 minute
  };

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex
    });
    
    setQuestionStatus({
      ...questionStatus,
      [questionIndex]: 'attempted'
    });
  };

  const handleMarkForReview = () => {
    setQuestionStatus({
      ...questionStatus,
      [currentQuestionIndex]: 'review'
    });
  };

  const handleClearResponse = () => {
    const newSelectedAnswers = { ...selectedAnswers };
    delete newSelectedAnswers[currentQuestionIndex];
    setSelectedAnswers(newSelectedAnswers);
    
    setQuestionStatus({
      ...questionStatus,
      [currentQuestionIndex]: 'visited'
    });
  };

  const handleSaveAndNext = () => {
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Mark the next question as visited if it's not already
      if (questionStatus[currentQuestionIndex + 1] === 'not-visited') {
        setQuestionStatus(prev => ({
          ...prev,
          [currentQuestionIndex + 1]: 'visited'
        }));
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitTest = () => {
    setShowConfirmSubmit(true);
  };

  const calculateScorePercentage = () => {
    let correct = 0;
    testQuestions.forEach((question, index) => {
      if (selectedAnswers[index] !== undefined && selectedAnswers[index] === question.correct_index) {
        correct++;
      }
    });
    return (correct / testQuestions.length) * 100;
  };

  const submitStudySession = async (token) => {
    try {
      const durationMinutes = calculateDuration();
      const topicsCovered = extractTopicsCovered();
      
      const studySessionPayload = {
        subject: studentssubject,
        duration_minutes: durationMinutes,
        topics_covered: topicsCovered
      };

      console.log('Submitting to study session API:', studySessionPayload);
      
      const response = await axios.post('http://127.0.0.1:8002/api/study/session', studySessionPayload, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        timeout: 30000
      });
      
      console.log('Study session API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting study session:', error);
      // Don't throw error - we don't want to fail the entire test submission if study session fails
      return null;
    }
  };

  const handleConfirmSubmit = async () => {
    setShowConfirmSubmit(false);
    setIsSubmitting(true);
    setApiError(null);
    
    try {
      const token = localStorage.getItem('access_token');
      
      // Submit study session first (optional - won't block test submission)
      await submitStudySession(token);
      
      const scorePercentage = calculateScorePercentage();
      const questionsAnswered = Object.keys(selectedAnswers).length;
      
      // Format data for quiz submission API
      const quizSubmitPayload = {
        quiz_id: quizId,
        subject: studentssubject,
        class_level: studentsclass,
        topic: topic,
        difficulty: studentsdifficulty,
        score_percentage: parseFloat(scorePercentage.toFixed(2)),
        questions_answered: questionsAnswered
      };

      console.log('Submitting to quiz API:', quizSubmitPayload);
      
      // Submit to quiz API
      const quizRes = await axios.post('http://127.0.0.1:8002/api/quiz/submit', quizSubmitPayload, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        timeout: 30000
      });
      console.log('Quiz API response:', quizRes.data);
      
      // Then format user answers for evaluation API
      const userAnswers = testQuestions.map((question, index) => {
        const selectedOptionIndex = selectedAnswers[index];
        return {
          question: question.question,
          selected_option: selectedOptionIndex !== undefined 
            ? question.options[selectedOptionIndex] 
            : "" // Empty string for unattempted questions
        };
      });

      const evaluationPayload = {
        student_id: studentId,
        quiz_id: quizId,
        user_answers: userAnswers
      };

      console.log('Submitting to evaluation API:', evaluationPayload);

      // Call the evaluation API
      const response = await axios.post('http://127.0.0.1:8002/api/mcq/evaluate', evaluationPayload, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        timeout: 30000
      });

      console.log('Evaluation API response:', response.data);
      setEvaluationResults(response.data);
      setShowResults(true);
      
    } catch (error) {
      console.error('Error submitting test:', error);
      setApiError(error.response?.data?.message || error.message || 'Failed to submit test. Please try again.');
      
      // Fallback to local calculation if API fails
      const localResults = calculateLocalResults();
      setEvaluationResults({
        quiz_id: quizId,
        total_questions: testQuestions.length,
        correct_answers: localResults.correct,
        score_percentage: parseFloat(localResults.percentage),
        strong_areas: [],
        weak_areas: [],
        feedback: "Test submitted successfully but evaluation service unavailable. Showing local results.",
        recommendations: "• Please try submitting again later for detailed feedback.\n• Your answers have been saved locally."
      });
      setShowResults(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAutoSubmit = async () => {
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('access_token');
      
      // Submit study session
      await submitStudySession(token);
      
      const scorePercentage = calculateScorePercentage();
      const questionsAnswered = Object.keys(selectedAnswers).length;
      
      // Format data for quiz submission API
      const quizSubmitPayload = {
        quiz_id: quizId,
        subject: studentssubject,
        class_level: studentsclass,
        topic: topic,
        difficulty: studentsdifficulty,
        score_percentage: parseFloat(scorePercentage.toFixed(2)),
        questions_answered: questionsAnswered
      };

      // Submit to quiz API
      await axios.post('http://127.0.0.1:8002/api/quiz/submit', quizSubmitPayload, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      
      // Then submit to evaluation API
      const userAnswers = testQuestions.map((question, index) => {
        const selectedOptionIndex = selectedAnswers[index];
        return {
          question: question.question,
          selected_option: selectedOptionIndex !== undefined 
            ? question.options[selectedOptionIndex] 
            : ""
        };
      });

      const evaluationPayload = {
        student_id: studentId,
        quiz_id: quizId,
        user_answers: userAnswers
      };

      const response = await axios.post('http://127.0.0.1:8002/api/mcq/evaluate', evaluationPayload, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      
      setEvaluationResults(response.data);
    } catch (error) {
      console.error('Error in auto-submit:', error);
      const localResults = calculateLocalResults();
      setEvaluationResults({
        quiz_id: quizId,
        total_questions: testQuestions.length,
        correct_answers: localResults.correct,
        score_percentage: parseFloat(localResults.percentage),
        strong_areas: [],
        weak_areas: [],
        feedback: "Test auto-submitted due to time out. Evaluation service unavailable.",
        recommendations: "• Your answers have been saved.\n• Please contact support if you need detailed feedback."
      });
    } finally {
      setIsSubmitting(false);
      setShowResults(true);
    }
  };

  const calculateLocalResults = () => {
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    testQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === undefined) {
        unattempted++;
      } else if (selectedAnswers[index] === question.correct_index) {
        correct++;
      } else {
        incorrect++;
      }
    });

    // Calculate score (assuming 4 marks per correct answer, -1 for incorrect)
    const totalMarks = testQuestions.length * 4;
    const obtainedMarks = (correct * 4) - (incorrect * 1);
    const percentage = totalMarks > 0 ? ((obtainedMarks / totalMarks) * 100).toFixed(2) : '0';
    
    return { 
      correct, 
      incorrect, 
      unattempted, 
      total: testQuestions.length,
      obtainedMarks,
      totalMarks,
      percentage
    };
  };

  const handleExitTest = () => {
    dispatch(clearTestData());
    navigate('/AITestModule');
  };

  if (!testQuestions || testQuestions.length === 0) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
        <div className="relative flex min-h-screen w-full flex-col pt-1">
          <div className="layout-container flex h-full grow flex-col">
            <SmartLearnAINavbar />
            <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
              <div className="text-center p-12 bg-white border border-black">
                <p className="text-gray-600 mb-4">No test questions found.</p>
                <button
                  onClick={() => navigate('/AITestModule')}
                  className="px-6 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = testQuestions[currentQuestionIndex];
  const localResults = calculateLocalResults();
  const answeredCount = Object.keys(selectedAnswers).length;
  const completionPercentage = (answeredCount / testQuestions.length) * 100;
  const reviewedCount = Object.values(questionStatus).filter(s => s === 'review').length;
  const visitedCount = Object.keys(questionStatus).length;

  // Results View with API data
  if (showResults) {
    const results = evaluationResults || {
      ...localResults,
      strong_areas: [],
      weak_areas: [],
      feedback: "Test completed. Thank you for your submission.",
      recommendations: ""
    };

    return (
      <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
          <div className="bg-green-600 h-full" style={{ width: '100%' }}></div>
        </div>
        
        <div className="relative flex min-h-screen w-full flex-col pt-1">
          <div className="layout-container flex h-full grow flex-col">
            <SmartLearnAINavbar />
            
            <main className="flex-1 px-6 md:px-20 py-10 max-w-[1200px] mx-auto w-full">
              <div className="max-w-4xl mx-auto">
                {/* Results Header */}
                <div className="bg-white border border-black p-8 mb-6">
                  <h1 className="text-3xl font-bold mb-2">Test Results</h1>
                  <p className="text-gray-600 mb-2">
                    {studentssubject || 'Subject'} • {topic} • {studentsclass}
                  </p>
                  <p className="text-gray-500 text-sm mb-6">Quiz ID: {quizId}</p>
                  
                  {/* Score Card */}
                  <div className="mb-8 p-6 bg-gray-50 border border-gray-200">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-black mb-2">
                        {results.score_percentage?.toFixed(2) || localResults.percentage}%
                      </div>
                      <div className="text-xl text-gray-600">
                        {results.correct_answers || localResults.correct} / {results.total_questions || localResults.total} Correct
                      </div>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 bg-white border border-gray-200 text-center">
                        <div className="text-3xl font-bold text-blue-600">{results.total_questions || localResults.total}</div>
                        <div className="text-sm text-gray-600">Total Questions</div>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 text-center">
                        <div className="text-3xl font-bold text-green-600">{results.correct_answers || localResults.correct}</div>
                        <div className="text-sm text-gray-600">Correct</div>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 text-center">
                        <div className="text-3xl font-bold text-red-600">{results.total_questions - results.correct_answers || localResults.incorrect}</div>
                        <div className="text-sm text-gray-600">Incorrect/Unattempted</div>
                      </div>
                      <div className="p-4 bg-white border border-gray-200 text-center">
                        <div className="text-3xl font-bold text-gray-600">{answeredCount}</div>
                        <div className="text-sm text-gray-600">Questions Answered</div>
                      </div>
                    </div>
                  </div>

                  {/* Study Session Info */}
                  <div className="mb-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">📊 Study Session Summary</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="text-lg font-semibold">{calculateDuration()} minutes</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Topics Covered</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {extractTopicsCovered().map((topic, index) => (
                            <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Strong & Weak Areas */}
                  {results.strong_areas && results.strong_areas.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-xl font-bold mb-3">💪 Strong Areas</h2>
                      <div className="flex flex-wrap gap-2">
                        {results.strong_areas.map((area, index) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-800 border border-green-300 rounded-full text-sm font-medium">
                            {area.replace(/-/g, ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.weak_areas && results.weak_areas.length > 0 && (
                    <div className="mb-6">
                      <h2 className="text-xl font-bold mb-3">📚 Areas for Improvement</h2>
                      <div className="flex flex-wrap gap-2">
                        {results.weak_areas.map((area, index) => (
                          <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-full text-sm font-medium">
                            {area.replace(/-/g, ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Feedback Section */}
                  {results.feedback && (
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h2 className="text-xl font-bold mb-2">📝 Feedback</h2>
                      <p className="text-gray-800">{results.feedback}</p>
                    </div>
                  )}

                  {/* Recommendations */}
                  {results.recommendations && (
                    <div className="mb-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h2 className="text-xl font-bold mb-2">🎯 Recommendations</h2>
                      <div className="text-gray-800 whitespace-pre-line" 
                           dangerouslySetInnerHTML={{ __html: results.recommendations }} />
                    </div>
                  )}

                  {/* Question Review */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Question Review</h2>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                      {testQuestions.map((question, index) => {
                        const userAnswer = selectedAnswers[index];
                        const isCorrect = userAnswer !== undefined && userAnswer === question.correct_index;
                        const isAttempted = userAnswer !== undefined;
                        
                        return (
                          <div key={index} className="border border-gray-200 p-4 hover:border-black transition-colors">
                            <div className="flex items-start gap-4">
                              <div className={`w-8 h-8 flex items-center justify-center font-bold shrink-0 rounded-full
                                ${isAttempted 
                                  ? isCorrect 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-red-500 text-white'
                                  : 'bg-gray-200 text-gray-600'
                                }`}
                              >
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium mb-3 text-lg">{question.question}</p>
                                <div className="grid grid-cols-1 gap-2 text-sm">
                                  {question.options.map((opt, optIndex) => (
                                    <div 
                                      key={optIndex}
                                      className={`p-3 border rounded ${
                                        optIndex === question.correct_index
                                          ? 'border-green-500 bg-green-50'
                                          : optIndex === userAnswer && optIndex !== question.correct_index
                                          ? 'border-red-500 bg-red-50'
                                          : 'border-gray-200'
                                      }`}
                                    >
                                      <span className="font-bold mr-3">{String.fromCharCode(65 + optIndex)}.</span>
                                      <span className={optIndex === question.correct_index ? 'font-medium' : ''}>
                                        {opt}
                                      </span>
                                      {optIndex === question.correct_index && (
                                        <span className="ml-3 text-green-600 font-bold text-xs px-2 py-1 bg-green-100 rounded">
                                          ✓ Correct Answer
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                                {question.concept_tags && (
                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {question.concept_tags.map((tag, tagIndex) => (
                                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-xs rounded-full border border-gray-300">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={handleExitTest}
                      className="px-8 py-3 bg-black text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Exit Test
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="px-8 py-3 border-2 border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Print Results
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  // Test Interface View
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
        <div 
          className="bg-black h-full transition-all duration-300" 
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>

      <div className="relative flex min-h-screen w-full flex-col pt-1">
        <div className="layout-container flex h-full grow flex-col">
          <SmartLearnAINavbar />

          <main className="flex-1 px-6 md:px-20 py-10 max-w-[1400px] mx-auto w-full">
            {/* Test Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold">
                  {studentssubject || 'Subject'} Test
                </h1>
                <p className="text-gray-500 mt-1">
                  {studentsclass} • {topic} • {quizId && `Quiz ID: ${quizId}`}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <div className={`px-4 py-2 bg-white border font-mono text-xl rounded
                  ${timeRemaining < 300 ? 'border-red-500 text-red-500' : 'border-black'}`}
                >
                  <span>{formatTime(timeRemaining)}</span>
                </div>
                <button
                  onClick={handleSubmitTest}
                  disabled={isSubmitting}
                  className={`px-6 py-2 bg-red-600 text-white font-bold text-sm tracking-widest uppercase rounded-lg 
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'} transition-colors`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Test'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Question Section */}
              <div className="lg:col-span-2">
                <div className="border border-black bg-white p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-gray-500">
                      Question {currentQuestionIndex + 1} of {testQuestions.length}
                    </span>
                    <span className={`px-3 py-1 text-sm font-medium border rounded-full
                      ${questionStatus[currentQuestionIndex] === 'review' 
                        ? 'bg-yellow-100 border-yellow-500 text-yellow-700' 
                        : selectedAnswers[currentQuestionIndex] !== undefined 
                        ? 'bg-green-100 border-green-500 text-green-700'
                        : 'bg-gray-100 border-gray-500 text-gray-700'
                      }`}
                    >
                      {questionStatus[currentQuestionIndex] === 'review' ? 'Marked for Review' : 
                       selectedAnswers[currentQuestionIndex] !== undefined ? 'Answered' : 'Not Answered'}
                    </span>
                  </div>

                  {/* Question Text */}
                  <div className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                    <p className="text-lg font-medium leading-relaxed whitespace-pre-wrap">
                      {currentQuestion.question}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {currentQuestion.options && currentQuestion.options.map((option, optIndex) => (
                      <div key={optIndex} className="relative">
                        <input
                          type="radio"
                          id={`q${currentQuestionIndex}_opt${optIndex}`}
                          name={`question_${currentQuestionIndex}`}
                          value={optIndex}
                          checked={selectedAnswers[currentQuestionIndex] === optIndex}
                          onChange={() => handleAnswerSelect(currentQuestionIndex, optIndex)}
                          className="hidden peer"
                        />
                        <label
                          htmlFor={`q${currentQuestionIndex}_opt${optIndex}`}
                          className={`flex items-start gap-4 p-4 border-2 cursor-pointer transition-all rounded-lg
                            ${selectedAnswers[currentQuestionIndex] === optIndex
                              ? 'border-black bg-gray-50' 
                              : 'border-gray-200 hover:border-gray-400'
                            }`}
                        >
                          <span className={`flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0 font-bold
                            ${selectedAnswers[currentQuestionIndex] === optIndex
                              ? 'border-black bg-black text-white'
                              : 'border-gray-400'
                            }`}
                          >
                            {String.fromCharCode(65 + optIndex)}
                          </span>
                          <span className="text-base whitespace-pre-wrap flex-1">{option}</span>
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Concept Tags */}
                  {currentQuestion.concept_tags && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {currentQuestion.concept_tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex flex-wrap gap-3 justify-between items-center border-t border-gray-200 pt-6">
                    <div className="flex gap-2">
                      <button
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        className={`px-4 py-2 border-2 border-black font-bold text-sm uppercase rounded-lg
                          ${currentQuestionIndex === 0 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-gray-100'
                          }`}
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleMarkForReview}
                        className="px-4 py-2 border-2 border-yellow-500 text-yellow-600 font-bold text-sm uppercase rounded-lg hover:bg-yellow-50"
                      >
                        Mark for Review
                      </button>
                      <button
                        onClick={handleClearResponse}
                        className="px-4 py-2 border-2 border-red-500 text-red-600 font-bold text-sm uppercase rounded-lg hover:bg-red-50"
                      >
                        Clear
                      </button>
                    </div>
                    <button
                      onClick={handleSaveAndNext}
                      disabled={currentQuestionIndex === testQuestions.length - 1}
                      className={`px-6 py-2 bg-black text-white font-bold text-sm uppercase rounded-lg
                        ${currentQuestionIndex === testQuestions.length - 1
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-gray-800'
                        }`}
                    >
                      Save & Next
                    </button>
                  </div>
                </div>
              </div>

              {/* Question Palette */}
              <div className="lg:col-span-1">
                <div className="border border-black bg-white p-6 sticky top-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Question Palette</h3>
                  
                  <div className="grid grid-cols-5 gap-2 mb-6">
                    {testQuestions.map((_, index) => {
                      let bgColor = 'bg-gray-100';
                      let borderColor = 'border-gray-300';
                      let textColor = 'text-gray-700';
                      
                      if (questionStatus[index] === 'review') {
                        bgColor = 'bg-yellow-200';
                        borderColor = 'border-yellow-500';
                      } else if (selectedAnswers[index] !== undefined) {
                        bgColor = 'bg-green-200';
                        borderColor = 'border-green-500';
                      }
                      
                      if (currentQuestionIndex === index) {
                        borderColor = 'border-black border-2';
                      }
                      
                      return (
                        <button
                          key={index}
                          onClick={() => setCurrentQuestionIndex(index)}
                          className={`w-10 h-10 ${bgColor} border-2 ${borderColor} ${textColor} font-medium
                            hover:border-black transition-colors rounded`}
                        >
                          {index + 1}
                        </button>
                      );
                    })}
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-200 border-2 border-green-500 rounded"></div>
                      <span>Answered ({answeredCount})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-yellow-200 border-2 border-yellow-500 rounded"></div>
                      <span>Marked for Review ({reviewedCount})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-100 border-2 border-gray-300 rounded"></div>
                      <span>Not Visited ({testQuestions.length - visitedCount})</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-3 font-bold">
                      Summary
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Total Questions:</span>
                        <span className="font-bold">{testQuestions.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Answered:</span>
                        <span className="font-bold">{answeredCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Marked for Review:</span>
                        <span className="font-bold">{reviewedCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Unanswered:</span>
                        <span className="font-bold">{testQuestions.length - answeredCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Confirm Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 max-w-md w-full mx-4 border-2 border-black rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Submit Test?</h2>
            {apiError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {apiError}
              </div>
            )}
            <p className="text-gray-600 mb-6">
              You have answered {answeredCount} out of {testQuestions.length} questions. 
              {testQuestions.length - answeredCount > 0 && 
                ` ${testQuestions.length - answeredCount} questions are unanswered.`}
            </p>
            <p className="text-gray-600 mb-6 text-sm">
              Your answers will be evaluated and you'll receive detailed feedback.
              Your study session will also be recorded.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                disabled={isSubmitting}
                className="flex-1 py-3 border-2 border-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSubmit}
                disabled={isSubmitting}
                className="flex-1 py-3 bg-red-600 text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestInterface;