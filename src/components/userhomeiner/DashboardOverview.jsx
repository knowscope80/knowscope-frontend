// // DashboardOverview.jsx
// import React from 'react';
// import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar'

// const DashboardOverview = () => {
//     const shades = ['bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-black'];
//   const heatmapCells = Array.from({ length: 52 * 7 }, (_, i) => {
//     const shade = shades[Math.floor(Math.random() * shades.length)];
//     return <div key={i} className="aspect-square rounded-sm border border-gray-50" className={`aspect-square rounded-sm ${shade}`} />;
//   });
//   return (
//     <div className="bg-gray-100 min-h-screen font-sans text-black">
//       <div className="layout-container flex h-full grow flex-col">
//         {/* Top Navigation */}
//         <SmartLearnAINavbar/>

        
//       </div>


//        <div className="min-h-screen flex flex-col">
//         {/* Top Navigation */}
        

//         <main className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-6">
          

//           {/* Mastery Heatmap Section */}
//           <section className="bg-white border border-gray-300 p-6 rounded-lg">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-bold">Mastery Heatmap</h3>
//               <div className="flex items-center gap-2 text-[10px] text-gray-600 uppercase font-bold tracking-widest">
//                 <span>Less</span>
//                 <div className="flex gap-1">
//                   <div className="w-3 h-3 bg-gray-100 border border-gray-200"></div>
//                   <div className="w-3 h-3 bg-gray-300"></div>
//                   <div className="w-3 h-3 bg-gray-500"></div>
//                   <div className="w-3 h-3 bg-black"></div>
//                 </div>
//                 <span>More</span>
//               </div>
//             </div>
//             <div className="grid grid-cols-52 gap-0.5 mb-2">
//               {heatmapCells}
//             </div>
//             <div className="flex justify-between text-[10px] text-gray-400 font-medium px-1">
//               {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
//                 <span key={index}>{month}</span>
//               ))}
//             </div>
//           </section>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Subject Completion Bar Chart */}
//             <section className="bg-white border border-gray-300 p-6 rounded-lg">
//               <h3 className="text-lg font-bold mb-8">Subject Progress</h3>
//               <div className="flex items-end justify-around h-64 gap-4 px-8">
//                 {[
//                   { percentage: 85, subject: 'Physics' },
//                   { percentage: 62, subject: 'Chemistry' },
//                   { percentage: 94, subject: 'Math' },
//                   { percentage: 45, subject: 'Bio' }
//                 ].map((item, index) => (
//                   <div key={index} className="flex flex-col items-center gap-3 w-full max-w-[80px]">
//                     <span className="text-xs font-bold">{item.percentage}%</span>
//                     <div 
//                       className={`w-full rounded-t-lg ${index === 3 ? 'bg-gray-300' : 'bg-black'}`} 
//                       style={{ height: `${item.percentage}%` }}
//                     ></div>
//                     <span className={`text-sm font-medium ${index === 3 ? 'text-gray-400' : ''}`}>
//                       {item.subject}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Strengths & Weaknesses */}
//             <section className="bg-white border border-gray-300 p-6 rounded-lg">
//               <h3 className="text-lg font-bold mb-6">Topic Analysis</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                 {/* Strengths */}
//                 <div className="space-y-4">
//                   <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2">Strengths</h4>
//                   <ul className="space-y-3">
//                     {['Quantum Mechanics', 'Calculus III', 'Thermodynamics', 'Linear Algebra'].map((strength, index) => (
//                       <li key={index} className="flex items-center gap-3">
//                         <span className="material-symbols-outlined text-black font-bold text-lg">check_circle</span>
//                         <span className="text-sm font-medium">{strength}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Weaknesses */}
//                 <div className="space-y-4">
//                   <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2">Weaknesses</h4>
//                   <ul className="space-y-3">
//                     {[
//                       { topic: 'Organic Chemistry', hasData: true },
//                       { topic: 'Electromagnetism', hasData: true },
//                       { topic: 'Fluid Dynamics', hasData: true },
//                       { topic: 'Not enough data', hasData: false }
//                     ].map((weakness, index) => (
//                       <li key={index} className="flex items-center gap-3">
//                         <span className={`material-symbols-outlined text-black font-bold text-lg ${!weakness.hasData ? 'opacity-20' : ''}`}>
//                           error
//                         </span>
//                         <span className={`text-sm font-medium ${!weakness.hasData ? 'text-gray-400 italic' : ''}`}>
//                           {weakness.topic}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </section>
//           </div>

    
//             <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Streaks</p>
//                 <p className="text-2xl font-black">12 Days</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">local_fire_department</span>
//             </div>
            
//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Points</p>
//                 <p className="text-2xl font-black">2,450</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">database</span>
//             </div>
            
//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Ranking</p>
//                 <p className="text-2xl font-black">#42</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">leaderboard</span>
//             </div>
            
//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Focus Score</p>
//                 <p className="text-2xl font-black">88</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">target</span>
//             </div>
//           </div>
//         </main>

//         <footer className="border-t border-gray-300 p-10 text-center">
//           <p className="text-sm text-gray-400">© 2024 SmartLearn AI. All analytics are generated based on real-time study habits.</p>
//         </footer>
//       </div>
      
//     </div>
//   );
// };

// export default DashboardOverview;






// // DashboardOverview.jsx
// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';

// const DashboardOverview = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // State for different API data
//   const [userStats, setUserStats] = useState({
//     current_streak: 0,
//     longest_streak: 0,
//     total_points: 0,
//     rank: 0,
//     focus_score: 0
//   });
  
//   const [heatmapData, setHeatmapData] = useState({
//     cells: [],
//     month_labels: []
//   });
  
//   const [topicAnalysis, setTopicAnalysis] = useState({
//     strengths: [],
//     weaknesses: []
//   });
  
//   const [activities, setActivities] = useState([]);
  
//   // Get student ID from Redux
//   const reduxState = useSelector(state => state.app || {});
//   const studentId = reduxState.studentId || 'STU001';

//   // Fetch all dashboard data
//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       setLoading(true);
//       setError(null);
      
//       try {
//         const token = localStorage.getItem('access_token');
        
//         if (!token) {
//           throw new Error('No authentication token found');
//         }

//         // Headers for all requests
//         const headers = {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         };

//         // Fetch all APIs in parallel
//         const [
//           overviewResponse,
//           heatmapResponse,
//           topicAnalysisResponse,
//           activityResponse
//         ] = await Promise.allSettled([
//           axios.get('http://127.0.0.1:8002/api/dashboard/overview', { headers }),
//           axios.get('http://127.0.0.1:8002/api/dashboard/mastery-heatmap', { headers }),
//           axios.get('http://127.0.0.1:8002/api/dashboard/topic-analysis', { headers }),
//           axios.get('http://127.0.0.1:8002/api/dashboard/activity-feed', { headers })
//         ]);

//         // Process overview response
//         if (overviewResponse.status === 'fulfilled' && overviewResponse.value.data.success) {
//           setUserStats(overviewResponse.value.data.data.user_stats);
//         } else {
//           console.error('Failed to fetch overview:', overviewResponse.reason);
//         }

//         // Process heatmap response
//         if (heatmapResponse.status === 'fulfilled' && heatmapResponse.value.data.success) {
//           setHeatmapData(heatmapResponse.value.data.data);
//         } else {
//           console.error('Failed to fetch heatmap:', heatmapResponse.reason);
//         }

//         // Process topic analysis response
//         if (topicAnalysisResponse.status === 'fulfilled' && topicAnalysisResponse.value.data.success) {
//           setTopicAnalysis(topicAnalysisResponse.value.data.data);
//         } else {
//           console.error('Failed to fetch topic analysis:', topicAnalysisResponse.reason);
//         }

//         // Process activity feed response
//         if (activityResponse.status === 'fulfilled' && activityResponse.value.data.success) {
//           setActivities(activityResponse.value.data.data.activities || []);
//         } else {
//           console.error('Failed to fetch activities:', activityResponse.reason);
//         }

//       } catch (err) {
//         console.error('Error fetching dashboard data:', err);
//         setError(err.response?.data?.message || err.message || 'Failed to load dashboard data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   // Format date for display
//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleDateString('en-US', { 
//       month: 'short', 
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   // Get activity icon based on type
//   const getActivityIcon = (type) => {
//     switch(type) {
//       case 'quiz':
//         return 'quiz';
//       case 'study':
//         return 'menu_book';
//       default:
//         return 'circle';
//     }
//   };

//   // Get activity color based on type
//   const getActivityColor = (type) => {
//     switch(type) {
//       case 'quiz':
//         return 'text-blue-600';
//       case 'study':
//         return 'text-green-600';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   if (loading) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black">
//         <div className="layout-container flex h-full grow flex-col">
//           <SmartLearnAINavbar />
//           <main className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-6">
//             <div className="flex items-center justify-center h-64">
//               <div className="text-center">
//                 <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent"></div>
//                 <p className="mt-4 text-gray-600">Loading dashboard data...</p>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black">
//         <div className="layout-container flex h-full grow flex-col">
//           <SmartLearnAINavbar />
//           <main className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-6">
//             <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
//               <span className="material-symbols-outlined text-red-600 text-4xl mb-2">error</span>
//               <h3 className="text-lg font-bold text-red-600 mb-2">Error Loading Dashboard</h3>
//               <p className="text-red-500">{error}</p>
//               <button 
//                 onClick={() => window.location.reload()} 
//                 className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//               >
//                 Retry
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen font-sans text-black">
//       <div className="layout-container flex h-full grow flex-col">
//         {/* Top Navigation */}
//         <SmartLearnAINavbar />
//       </div>

//       <div className="min-h-screen flex flex-col">
//         <main className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-6">
//           {/* Stats Cards */}
//           <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Current Streak</p>
//                 <p className="text-2xl font-black">{userStats.current_streak} Days</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">local_fire_department</span>
//             </div>
            
//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Longest Streak</p>
//                 <p className="text-2xl font-black">{userStats.longest_streak} Days</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">stars</span>
//             </div>
            
//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Total Points</p>
//                 <p className="text-2xl font-black">{userStats.total_points.toLocaleString()}</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">database</span>
//             </div>
            
//             {/* <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between"> */}
//               {/* <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Rank</p>
//                 <p className="text-2xl font-black">#{userStats.rank}</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">leaderboard</span>
//             </div> */}

//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Focus Score</p>
//                 <p className="text-2xl font-black">{userStats.focus_score}%</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">target</span>
//             </div>
//           </div>

//           {/* Mastery Heatmap Section */}
//           <section className="bg-white border border-gray-300 p-6 rounded-lg">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-bold">Mastery Heatmap</h3>
//               <div className="flex items-center gap-2 text-[10px] text-gray-600 uppercase font-bold tracking-widest">
//                 <span>Less</span>
//                 <div className="flex gap-1">
//                   <div className="w-3 h-3 bg-gray-100 border border-gray-200"></div>
//                   <div className="w-3 h-3 bg-gray-300"></div>
//                   <div className="w-3 h-3 bg-gray-500"></div>
//                   <div className="w-3 h-3 bg-black"></div>
//                 </div>
//                 <span>More</span>
//               </div>
//             </div>
            
//             {heatmapData.cells && heatmapData.cells.length > 0 ? (
//               <>
//                 <div className="grid grid-cols-52 gap-0.5 mb-2">
//                   {heatmapData.cells.map((cell, index) => (
//                     <div 
//                       key={index} 
//                       className={`aspect-square rounded-sm ${cell.shade || 'bg-gray-100'}`}
//                       title={`${cell.date}: Mastery Level ${cell.mastery_level}`}
//                     />
//                   ))}
//                 </div>
//                 <div className="flex justify-between text-[10px] text-gray-400 font-medium px-1">
//                   {heatmapData.month_labels && heatmapData.month_labels.map((month, index) => (
//                     <span key={index} style={{ gridColumn: month.col_index + 1 }}>{month.month}</span>
//                   ))}
//                 </div>
//               </>
//             ) : (
//               <div className="text-center py-12 text-gray-400">
//                 No heatmap data available
//               </div>
//             )}
//           </section>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Subject Progress - You'll need another API for this or derive from activities */}
//             <section className="bg-white border border-gray-300 p-6 rounded-lg">
//               <h3 className="text-lg font-bold mb-8">Recent Activity</h3>
//               <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
//                 {activities.length > 0 ? (
//                   activities.slice(0, 10).map((activity, index) => (
//                     <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
//                       <div className="flex items-start gap-3">
//                         <span className={`material-symbols-outlined ${getActivityColor(activity.activity_type)}`}>
//                           {getActivityIcon(activity.activity_type)}
//                         </span>
//                         <div className="flex-1">
//                           <div className="flex justify-between items-start">
//                             <div>
//                               <p className="font-medium text-sm">
//                                 {activity.subject} - {activity.topic}
//                               </p>
//                               <p className="text-xs text-gray-500">
//                                 {activity.activity_type === 'quiz' 
//                                   ? `Score: ${activity.score_percentage}%` 
//                                   : `Duration: ${activity.duration_minutes || 0} minutes`}
//                               </p>
//                             </div>
//                             <span className="text-xs text-gray-400">
//                               {formatDate(activity.timestamp)}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-center py-8 text-gray-400">
//                     No recent activities
//                   </div>
//                 )}
//               </div>
//             </section>

//             {/* Strengths & Weaknesses */}
//             <section className="bg-white border border-gray-300 p-6 rounded-lg">
//               <h3 className="text-lg font-bold mb-6">Topic Analysis</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                 {/* Strengths */}
//                 <div className="space-y-4">
//                   <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2">Strengths</h4>
//                   <ul className="space-y-3">
//                     {topicAnalysis.strengths && topicAnalysis.strengths.length > 0 ? (
//                       topicAnalysis.strengths.map((strength, index) => (
//                         <li key={index} className="flex items-center gap-3">
//                           <span className="material-symbols-outlined text-green-600 font-bold text-lg">check_circle</span>
//                           <span className="text-sm font-medium">{strength.topic}</span>
//                           {strength.mastery_level && (
//                             <span className="text-xs text-gray-500 ml-auto">{strength.mastery_level}%</span>
//                           )}
//                         </li>
//                       ))
//                     ) : (
//                       <li className="text-sm text-gray-400 italic">No strengths data yet</li>
//                     )}
//                   </ul>
//                 </div>

//                 {/* Weaknesses */}
//                 <div className="space-y-4">
//                   <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2">Weaknesses</h4>
//                   <ul className="space-y-3">
//                     {topicAnalysis.weaknesses && topicAnalysis.weaknesses.length > 0 ? (
//                       topicAnalysis.weaknesses.map((weakness, index) => (
//                         <li key={index} className="flex items-center gap-3">
//                           <span className={`material-symbols-outlined text-red-600 font-bold text-lg ${!weakness.has_data ? 'opacity-50' : ''}`}>
//                             error
//                           </span>
//                           <span className={`text-sm font-medium ${!weakness.has_data ? 'text-gray-400 italic' : ''}`}>
//                             {weakness.topic}
//                           </span>
//                           {weakness.mastery_level !== undefined && (
//                             <span className="text-xs text-gray-500 ml-auto">{weakness.mastery_level}%</span>
//                           )}
//                         </li>
//                       ))
//                     ) : (
//                       <li className="text-sm text-gray-400 italic">No weaknesses data yet</li>
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </main>

//         <footer className="border-t border-gray-300 p-10 text-center">
//           <p className="text-sm text-gray-400">© 2024 SmartLearn AI. All analytics are generated based on real-time study habits.</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default DashboardOverview;



// // DashboardOverview.jsx
// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';

// const DashboardOverview = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // State for different API data
//   const [userStats, setUserStats] = useState({
//     current_streak: 0,
//     longest_streak: 0,
//     total_points: 0,
//     rank: 0,
//     focus_score: 0
//   });
  
//   const [heatmapData, setHeatmapData] = useState({
//     cells: [],
//     month_labels: []
//   });
  
//   const [topicAnalysis, setTopicAnalysis] = useState({
//     strengths: [],
//     weaknesses: [],
//     summary: {
//       total_strengths: 0,
//       total_weaknesses: 0
//     }
//   });
  
//   const [activities, setActivities] = useState([]);
  
//   // Get student ID from Redux
//   const reduxState = useSelector(state => state.app || {});
//   const studentId = reduxState.studentId || 'STU001';

//   // Fetch all dashboard data
//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       setLoading(true);
//       setError(null);
      
//       try {
//         const token = localStorage.getItem('access_token');
        
//         if (!token) {
//           throw new Error('No authentication token found');
//         }

//         // Headers for all requests
//         const headers = {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         };

//         // Fetch all APIs in parallel
//         const [
//           overviewResponse,
//           heatmapResponse,
//           topicAnalysisResponse,
//           activityResponse
//         ] = await Promise.allSettled([
//           axios.get('http://127.0.0.1:8002/api/dashboard/overview', { headers }),
//           axios.get('http://127.0.0.1:8002/api/dashboard/mastery-heatmap', { headers }),
//           axios.get('http://127.0.0.1:8002/api/dashboard/topic-analysis', { headers }),
//           axios.get('http://127.0.0.1:8002/api/dashboard/activity-feed', { headers })
//         ]);

//         // Process overview response
//         if (overviewResponse.status === 'fulfilled' && overviewResponse.value.data.success) {
//           setUserStats(overviewResponse.value.data.data.user_stats);
//         } else {
//           console.error('Failed to fetch overview:', overviewResponse.reason);
//         }

//         // Process heatmap response
//         if (heatmapResponse.status === 'fulfilled' && heatmapResponse.value.data.success) {
//           setHeatmapData(heatmapResponse.value.data.data);
//         } else {
//           console.error('Failed to fetch heatmap:', heatmapResponse.reason);
//         }

//         // Process topic analysis response
//         if (topicAnalysisResponse.status === 'fulfilled' && topicAnalysisResponse.value.data.success) {
//           setTopicAnalysis(topicAnalysisResponse.value.data.data);
//         } else {
//           console.error('Failed to fetch topic analysis:', topicAnalysisResponse.reason);
//         }

//         // Process activity feed response
//         if (activityResponse.status === 'fulfilled' && activityResponse.value.data.success) {
//           setActivities(activityResponse.value.data.data.activities || []);
//         } else {
//           console.error('Failed to fetch activities:', activityResponse.reason);
//         }

//       } catch (err) {
//         console.error('Error fetching dashboard data:', err);
//         setError(err.response?.data?.message || err.message || 'Failed to load dashboard data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   // Format date for display
//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleDateString('en-US', { 
//       month: 'short', 
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   // Get activity icon based on type
//   const getActivityIcon = (type) => {
//     switch(type) {
//       case 'quiz':
//         return 'quiz';
//       case 'study':
//         return 'menu_book';
//       default:
//         return 'circle';
//     }
//   };

//   // Get activity color based on type
//   const getActivityColor = (type) => {
//     switch(type) {
//       case 'quiz':
//         return 'text-blue-600';
//       case 'study':
//         return 'text-green-600';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   // Group activities by date for better display
//   const groupActivitiesByDate = (activities) => {
//     const grouped = {};
//     activities.forEach(activity => {
//       const date = new Date(activity.timestamp).toLocaleDateString();
//       if (!grouped[date]) {
//         grouped[date] = [];
//       }
//       grouped[date].push(activity);
//     });
//     return grouped;
//   };

//   if (loading) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black">
//         <div className="layout-container flex h-full grow flex-col">
//           <SmartLearnAINavbar />
//           <main className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-6">
//             <div className="flex items-center justify-center h-64">
//               <div className="text-center">
//                 <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent"></div>
//                 <p className="mt-4 text-gray-600">Loading dashboard data...</p>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-gray-100 min-h-screen font-sans text-black">
//         <div className="layout-container flex h-full grow flex-col">
//           <SmartLearnAINavbar />
//           <main className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-6">
//             <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
//               <span className="material-symbols-outlined text-red-600 text-4xl mb-2">error</span>
//               <h3 className="text-lg font-bold text-red-600 mb-2">Error Loading Dashboard</h3>
//               <p className="text-red-500">{error}</p>
//               <button 
//                 onClick={() => window.location.reload()} 
//                 className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//               >
//                 Retry
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen font-sans text-black">
//       <div className="layout-container flex h-full grow flex-col">
//         {/* Top Navigation */}
//         <SmartLearnAINavbar />
//       </div>

//       <div className="min-h-screen flex flex-col">
//         <main className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-6">
//           {/* Stats Cards */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Current Streak</p>
//                 <p className="text-2xl font-black">{userStats.current_streak} Days</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">local_fire_department</span>
//             </div>
            
//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Longest Streak</p>
//                 <p className="text-2xl font-black">{userStats.longest_streak} Days</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">stars</span>
//             </div>
            
//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Total Points</p>
//                 <p className="text-2xl font-black">{userStats.total_points.toLocaleString()}</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">database</span>
//             </div>
            
//             <div className="p-6 bg-white border border-black rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-xs font-bold text-gray-500 uppercase">Focus Score</p>
//                 <p className="text-2xl font-black">{userStats.focus_score}%</p>
//               </div>
//               <span className="material-symbols-outlined text-3xl opacity-20">target</span>
//             </div>
//           </div>

//           {/* Mastery Heatmap Section */}
//           <section className="bg-white border border-gray-300 p-6 rounded-lg">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-bold">Mastery Heatmap</h3>
//               <div className="flex items-center gap-2 text-[10px] text-gray-600 uppercase font-bold tracking-widest">
//                 <span>Less</span>
//                 <div className="flex gap-1">
//                   <div className="w-3 h-3 bg-gray-100 border border-gray-200"></div>
//                   <div className="w-3 h-3 bg-gray-300"></div>
//                   <div className="w-3 h-3 bg-gray-500"></div>
//                   <div className="w-3 h-3 bg-black"></div>
//                 </div>
//                 <span>More</span>
//               </div>
//             </div>
            
//             {heatmapData.cells && heatmapData.cells.length > 0 ? (
//               <>
//                 <div 
//                   className="grid gap-0.5 mb-2" 
//                   style={{ 
//                     gridTemplateColumns: `repeat(${Math.ceil(heatmapData.cells.length / 7)}, minmax(0, 1fr))` 
//                   }}
//                 >
//                   {heatmapData.cells.map((cell, index) => (
//                     <div 
//                       key={index} 
//                       className={`aspect-square rounded-sm ${cell.shade || 'bg-gray-100'} hover:ring-1 hover:ring-black transition-all`}
//                       title={`${cell.date}: Mastery Level ${cell.mastery_level}`}
//                     />
//                   ))}
//                 </div>
//                 <div className="flex text-[10px] text-gray-400 font-medium px-1" style={{ gap: 'calc(100% / 12)' }}>
//                   {heatmapData.month_labels && heatmapData.month_labels.map((month, index) => (
//                     <span key={index} style={{ marginLeft: index === 0 ? 0 : `${(month.col_index / heatmapData.cells.length) * 100}%` }}>
//                       {month.month}
//                     </span>
//                   ))}
//                 </div>
//               </>
//             ) : (
//               <div className="text-center py-12 text-gray-400">
//                 No heatmap data available
//               </div>
//             )}
//           </section>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Recent Activity Feed */}
//             <section className="bg-white border border-gray-300 p-6 rounded-lg">
//               <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
//               <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
//                 {activities.length > 0 ? (
//                   activities.slice(0, 15).map((activity, index) => (
//                     <div key={index} className="border-b border-gray-100 pb-3 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded">
//                       <div className="flex items-start gap-3">
//                         <span className={`material-symbols-outlined ${getActivityColor(activity.activity_type)}`}>
//                           {getActivityIcon(activity.activity_type)}
//                         </span>
//                         <div className="flex-1">
//                           <div className="flex justify-between items-start">
//                             <div>
//                               <p className="font-medium text-sm">
//                                 <span className="font-bold">{activity.subject}</span> - {typeof activity.topic === 'string' && activity.topic.length > 50 
//                                   ? activity.topic.substring(0, 50) + '...' 
//                                   : activity.topic}
//                               </p>
//                               <p className="text-xs text-gray-500">
//                                 {activity.activity_type === 'quiz' 
//                                   ? `Score: ${activity.score_percentage}%` 
//                                   : `Duration: ${activity.duration_minutes || 0} minutes`}
//                               </p>
//                             </div>
//                             <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
//                               {formatDate(activity.timestamp)}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-center py-8 text-gray-400">
//                     No recent activities
//                   </div>
//                 )}
//               </div>
//             </section>

//             {/* Strengths & Weaknesses */}
//             <section className="bg-white border border-gray-300 p-6 rounded-lg">
//               <h3 className="text-lg font-bold mb-6">Topic Analysis</h3>
              
//               {/* Summary Stats */}
//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="bg-green-50 p-3 rounded-lg border border-green-200">
//                   <p className="text-xs text-green-600 font-bold">STRENGTHS</p>
//                   <p className="text-2xl font-black text-green-700">{topicAnalysis.summary?.total_strengths || 0}</p>
//                 </div>
//                 <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
//                   <p className="text-xs text-yellow-600 font-bold">WEAKNESSES</p>
//                   <p className="text-2xl font-black text-yellow-700">{topicAnalysis.summary?.total_weaknesses || 0}</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                 {/* Strengths */}
//                 <div className="space-y-4">
//                   <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2">
//                     Strengths ({topicAnalysis.strengths?.length || 0})
//                   </h4>
//                   <ul className="space-y-3">
//                     {topicAnalysis.strengths && topicAnalysis.strengths.length > 0 ? (
//                       topicAnalysis.strengths.map((strength, index) => (
//                         <li key={index} className="flex items-center gap-3 group hover:bg-green-50 p-2 rounded transition-colors">
//                           <span className="material-symbols-outlined text-green-600 font-bold text-lg">check_circle</span>
//                           <div className="flex-1">
//                             <span className="text-sm font-medium block">{strength.topic}</span>
//                             <span className="text-xs text-gray-500">{strength.subject}</span>
//                           </div>
//                           {strength.mastery_level !== undefined && (
//                             <div className="text-right">
//                               <span className="text-xs font-bold text-green-600">{strength.mastery_level}%</span>
//                               <span className="text-xs text-gray-400 block">({strength.attempt_count} attempts)</span>
//                             </div>
//                           )}
//                         </li>
//                       ))
//                     ) : (
//                       <li className="text-sm text-gray-400 italic">No strengths identified yet</li>
//                     )}
//                   </ul>
//                 </div>

//                 {/* Weaknesses */}
//                 <div className="space-y-4">
//                   <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2">
//                     Weaknesses ({topicAnalysis.weaknesses?.length || 0})
//                   </h4>
//                   <ul className="space-y-3">
//                     {topicAnalysis.weaknesses && topicAnalysis.weaknesses.length > 0 ? (
//                       topicAnalysis.weaknesses.map((weakness, index) => (
//                         <li key={index} className="flex items-center gap-3 group hover:bg-yellow-50 p-2 rounded transition-colors">
//                           <span className={`material-symbols-outlined text-red-600 font-bold text-lg ${!weakness.has_data ? 'opacity-50' : ''}`}>
//                             {weakness.has_data ? 'error' : 'help'}
//                           </span>
//                           <div className="flex-1">
//                             <span className={`text-sm font-medium ${!weakness.has_data ? 'text-gray-400 italic' : ''}`}>
//                               {weakness.topic}
//                             </span>
//                             <span className="text-xs text-gray-500 block">{weakness.subject}</span>
//                           </div>
//                           {weakness.mastery_level !== undefined && (
//                             <div className="text-right">
//                               <span className={`text-xs font-bold ${weakness.mastery_level < 30 ? 'text-red-600' : 'text-yellow-600'}`}>
//                                 {weakness.mastery_level}%
//                               </span>
//                               <span className="text-xs text-gray-400 block">({weakness.attempt_count} attempts)</span>
//                             </div>
//                           )}
//                         </li>
//                       ))
//                     ) : (
//                       <li className="text-sm text-gray-400 italic">No weaknesses identified yet</li>
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </main>

//         <footer className="border-t border-gray-300 p-10 text-center">
//           <p className="text-sm text-gray-400">© 2024 SmartLearn AI. All analytics are generated based on real-time study habits.</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default DashboardOverview;

















// DashboardOverview.jsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';

const DashboardOverview = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State for different API data
  const [userStats, setUserStats] = useState({
    current_streak: 0,
    longest_streak: 0,
    total_points: 0,
    rank: 0,
    focus_score: 0
  });
  
  const [heatmapData, setHeatmapData] = useState({
    cells: [],
    month_labels: []
  });
  
  const [topicAnalysis, setTopicAnalysis] = useState({
    strengths: [],
    weaknesses: [],
    summary: {
      total_strengths: 0,
      total_weaknesses: 0
    }
  });
  
  const [activities, setActivities] = useState([]);
  
  // Get student ID from Redux
  const reduxState = useSelector(state => state.app || {});
  const studentId = reduxState.studentId || 'STU001';

  // Fetch all dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const token = localStorage.getItem('access_token');
        
        if (!token) {
          throw new Error('No authentication token found');
        }

        // Headers for all requests
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        };

        // Fetch all APIs in parallel
        const [
          overviewResponse,
          heatmapResponse,
          topicAnalysisResponse,
          activityResponse
        ] = await Promise.allSettled([
          axios.get('http://127.0.0.1:8002/api/dashboard/overview', { headers }),
          axios.get('http://127.0.0.1:8002/api/dashboard/mastery-heatmap', { headers }),
          axios.get('http://127.0.0.1:8002/api/dashboard/topic-analysis', { headers }),
          axios.get('http://127.0.0.1:8002/api/dashboard/activity-feed', { headers })
        ]);

        // Process overview response
        if (overviewResponse.status === 'fulfilled' && overviewResponse.value.data.success) {
          setUserStats(overviewResponse.value.data.data.user_stats);
        } else {
          console.error('Failed to fetch overview:', overviewResponse.reason);
        }

        // Process heatmap response
        if (heatmapResponse.status === 'fulfilled' && heatmapResponse.value.data.success) {
          setHeatmapData(heatmapResponse.value.data.data);
        } else {
          console.error('Failed to fetch heatmap:', heatmapResponse.reason);
        }

        // Process topic analysis response
        if (topicAnalysisResponse.status === 'fulfilled' && topicAnalysisResponse.value.data.success) {
          setTopicAnalysis(topicAnalysisResponse.value.data.data);
        } else {
          console.error('Failed to fetch topic analysis:', topicAnalysisResponse.reason);
        }

        // Process activity feed response
        if (activityResponse.status === 'fulfilled' && activityResponse.value.data.success) {
          setActivities(activityResponse.value.data.data.activities || []);
        } else {
          console.error('Failed to fetch activities:', activityResponse.reason);
        }

      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError(err.response?.data?.message || err.message || 'Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Format date for display
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Get activity icon based on type
  const getActivityIcon = (type) => {
    switch(type) {
      case 'quiz':
        return 'quiz';
      case 'study':
        return 'menu_book';
      default:
        return 'circle';
    }
  };

  // Get activity color based on type
  const getActivityColor = (type) => {
    switch(type) {
      case 'quiz':
        return 'text-blue-600';
      case 'study':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans text-black">
        <div className="layout-container flex h-full grow flex-col">
          <SmartLearnAINavbar />
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent"></div>
                <p className="mt-4 text-sm sm:text-base text-gray-600">Loading dashboard data...</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans text-black">
        <div className="layout-container flex h-full grow flex-col">
          <SmartLearnAINavbar />
          <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-4 sm:py-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6 text-center max-w-lg mx-auto">
              <span className="material-symbols-outlined text-red-600 text-3xl sm:text-4xl mb-2">error</span>
              <h3 className="text-base sm:text-lg font-bold text-red-600 mb-2">Error Loading Dashboard</h3>
              <p className="text-sm sm:text-base text-red-500 break-words">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-4 py-2 bg-red-600 text-white text-sm sm:text-base rounded-lg hover:bg-red-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-black">
      <div className="layout-container flex h-full grow flex-col">
        {/* Top Navigation */}
        <SmartLearnAINavbar />
      </div>

      <div className="min-h-screen flex flex-col">
        <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
          {/* Stats Cards - Responsive Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="p-4 sm:p-5 md:p-6 bg-white border border-black rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase truncate">Current Streak</p>
                <p className="text-lg sm:text-xl md:text-2xl font-black">{userStats.current_streak} <span className="text-xs sm:text-sm font-normal text-gray-500">days</span></p>
              </div>
              <span className="material-symbols-outlined text-2xl sm:text-3xl opacity-20 flex-shrink-0 ml-2">local_fire_department</span>
            </div>
            
            <div className="p-4 sm:p-5 md:p-6 bg-white border border-black rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase truncate">Longest Streak</p>
                <p className="text-lg sm:text-xl md:text-2xl font-black">{userStats.longest_streak} <span className="text-xs sm:text-sm font-normal text-gray-500">days</span></p>
              </div>
              <span className="material-symbols-outlined text-2xl sm:text-3xl opacity-20 flex-shrink-0 ml-2">stars</span>
            </div>
            
            <div className="p-4 sm:p-5 md:p-6 bg-white border border-black rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase truncate">Total Points</p>
                <p className="text-lg sm:text-xl md:text-2xl font-black">{userStats.total_points.toLocaleString()}</p>
              </div>
              <span className="material-symbols-outlined text-2xl sm:text-3xl opacity-20 flex-shrink-0 ml-2">database</span>
            </div>
            
            <div className="p-4 sm:p-5 md:p-6 bg-white border border-black rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase truncate">Focus Score</p>
                <p className="text-lg sm:text-xl md:text-2xl font-black">{userStats.focus_score}%</p>
              </div>
              <span className="material-symbols-outlined text-2xl sm:text-3xl opacity-20 flex-shrink-0 ml-2">target</span>
            </div>
          </div>

          {/* Mastery Heatmap Section - Responsive */}
          {/* <section className="bg-white border border-gray-300 p-4 sm:p-5 md:p-6 rounded-lg overflow-x-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold">Mastery Heatmap</h3>
              <div className="flex items-center gap-2 text-[8px] sm:text-[10px] text-gray-600 uppercase font-bold tracking-widest">
                <span>Less</span>
                <div className="flex gap-0.5 sm:gap-1">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-100 border border-gray-200"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black"></div>
                </div>
                <span>More</span>
              </div>
            </div>
            
            {heatmapData.cells && heatmapData.cells.length > 0 ? (
              <div className="min-w-[600px] sm:min-w-0">
                <div 
                  className="grid gap-0.5 mb-2" 
                  style={{ 
                    gridTemplateColumns: `repeat(${Math.ceil(heatmapData.cells.length / 7)}, minmax(12px, 1fr))` 
                  }}
                >
                  {heatmapData.cells.map((cell, index) => (
                    <div 
                      key={index} 
                      className={`aspect-square rounded-sm ${cell.shade || 'bg-gray-100'} hover:ring-1 hover:ring-black transition-all`}
                      title={`${cell.date}: Mastery Level ${cell.mastery_level}`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap text-[8px] sm:text-[10px] text-gray-400 font-medium px-1 gap-2 sm:gap-4">
                  {heatmapData.month_labels && heatmapData.month_labels.map((month, index) => (
                    <span key={index} className="whitespace-nowrap">
                      {month.month}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12 text-sm sm:text-base text-gray-400">
                No heatmap data available
              </div>
            )}
          </section> */}

          {/* Two Column Layout - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Recent Activity Feed - Responsive */}
            <section className="bg-white border border-gray-300 p-4 sm:p-5 md:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Recent Activity</h3>
              <div className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-gray-300">
                {activities.length > 0 ? (
                  activities.slice(0, 15).map((activity, index) => (
                    <div key={index} className="border-b border-gray-100 pb-2 sm:pb-3 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className={`material-symbols-outlined text-lg sm:text-xl flex-shrink-0 ${getActivityColor(activity.activity_type)}`}>
                          {getActivityIcon(activity.activity_type)}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-xs sm:text-sm break-words">
                                <span className="font-bold">{activity.subject}</span> - {
                                  typeof activity.topic === 'string' && activity.topic.length > 30 
                                    ? activity.topic.substring(0, 30) + '...' 
                                    : activity.topic
                                }
                              </p>
                              <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                                {activity.activity_type === 'quiz' 
                                  ? `Score: ${activity.score_percentage}%` 
                                  : `Duration: ${activity.duration_minutes || 0} min`}
                              </p>
                            </div>
                            <span className="text-[8px] sm:text-xs text-gray-400 whitespace-nowrap">
                              {formatDate(activity.timestamp)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6 sm:py-8 text-sm sm:text-base text-gray-400">
                    No recent activities
                  </div>
                )}
              </div>
            </section>

            {/* Strengths & Weaknesses - Responsive */}
            <section className="bg-white border border-gray-300 p-4 sm:p-5 md:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Topic Analysis</h3>
              
              {/* Summary Stats - Responsive */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-green-50 p-2 sm:p-3 rounded-lg border border-green-200">
                  <p className="text-[10px] sm:text-xs text-green-600 font-bold">STRENGTHS</p>
                  <p className="text-xl sm:text-2xl font-black text-green-700">{topicAnalysis.summary?.total_strengths || 0}</p>
                </div>
                <div className="bg-yellow-50 p-2 sm:p-3 rounded-lg border border-yellow-200">
                  <p className="text-[10px] sm:text-xs text-yellow-600 font-bold">WEAKNESSES</p>
                  <p className="text-xl sm:text-2xl font-black text-yellow-700">{topicAnalysis.summary?.total_weaknesses || 0}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Strengths */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-1 sm:pb-2">
                    Strengths ({topicAnalysis.strengths?.length || 0})
                  </h4>
                  <ul className="space-y-2 sm:space-y-3 max-h-60 overflow-y-auto pr-1 scrollbar-thin">
                    {topicAnalysis.strengths && topicAnalysis.strengths.length > 0 ? (
                      topicAnalysis.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 group hover:bg-green-50 p-2 rounded transition-colors">
                          <span className="material-symbols-outlined text-green-600 text-base sm:text-lg flex-shrink-0 mt-0.5">check_circle</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-1">
                              <div className="min-w-0 flex-1">
                                <span className="text-xs sm:text-sm font-medium block truncate">{strength.topic}</span>
                                <span className="text-[10px] sm:text-xs text-gray-500 block">{strength.subject}</span>
                              </div>
                              {strength.mastery_level !== undefined && (
                                <div className="text-right flex-shrink-0">
                                  <span className="text-[10px] sm:text-xs font-bold text-green-600 block">{strength.mastery_level}%</span>
                                  <span className="text-[8px] sm:text-xs text-gray-400">({strength.attempt_count} tries)</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="text-xs sm:text-sm text-gray-400 italic">No strengths identified yet</li>
                    )}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-1 sm:pb-2">
                    Weaknesses ({topicAnalysis.weaknesses?.length || 0})
                  </h4>
                  <ul className="space-y-2 sm:space-y-3 max-h-60 overflow-y-auto pr-1 scrollbar-thin">
                    {topicAnalysis.weaknesses && topicAnalysis.weaknesses.length > 0 ? (
                      topicAnalysis.weaknesses.map((weakness, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 group hover:bg-yellow-50 p-2 rounded transition-colors">
                          <span className={`material-symbols-outlined text-red-600 text-base sm:text-lg flex-shrink-0 mt-0.5 ${!weakness.has_data ? 'opacity-50' : ''}`}>
                            {weakness.has_data ? 'error' : 'help'}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-1">
                              <div className="min-w-0 flex-1">
                                <span className={`text-xs sm:text-sm font-medium block truncate ${!weakness.has_data ? 'text-gray-400 italic' : ''}`}>
                                  {weakness.topic}
                                </span>
                                <span className="text-[10px] sm:text-xs text-gray-500 block">{weakness.subject}</span>
                              </div>
                              {weakness.mastery_level !== undefined && (
                                <div className="text-right flex-shrink-0">
                                  <span className={`text-[10px] sm:text-xs font-bold block ${
                                    weakness.mastery_level < 30 ? 'text-red-600' : 'text-yellow-600'
                                  }`}>
                                    {weakness.mastery_level}%
                                  </span>
                                  <span className="text-[8px] sm:text-xs text-gray-400">({weakness.attempt_count} tries)</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="text-xs sm:text-sm text-gray-400 italic">No weaknesses identified yet</li>
                    )}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer - Responsive */}
        <footer className="border-t border-gray-300 px-4 sm:px-6 py-6 sm:py-8 md:py-10 text-center">
          <p className="text-xs sm:text-sm text-gray-400">© 2024 SmartLearn AI. All analytics are generated based on real-time study habits.</p>
        </footer>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #999;
        }
      `}</style>
    </div>
  );
};

export default DashboardOverview;