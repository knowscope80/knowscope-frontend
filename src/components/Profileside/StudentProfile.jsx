// // StudentProfile.jsx
// import React from 'react';
// import { useNavigate } from "react-router-dom";

// const StudentProfile = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen font-sans text-black">
//       <div className="layout-container flex h-full grow flex-col">
//         <main className="flex-1 flex flex-col max-w-[1200px] mx-auto w-full p-6 md:p-12 gap-12">
//           <section className="flex flex-col md:flex-row items-center md:items-end gap-8 pb-8 border-b border-gray-300">
//             <div className="relative">
//               <div className="size-40 rounded-full border-2 border-black overflow-hidden bg-white">
//                 <img 
//                   alt="Profile Picture" 
//                   className="w-full h-full object-cover grayscale" 
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXKJZl3C4-iNR1Jq4QAqQ-3kNYxZZlB9R7A8xS-ZwcYhyEtJcsAjdx2y3tGFiDUO_e_0l7w4FaAzXecDHaeSU5o53mZeb8oOiFIz48V6781QwAhEXCaYzN-OYmY6wGwGcxo9jgO0z-_MibI-J5qyoa79fZten_-KKDPNFeI-Yw9P_djcujJbIsmc3DaEvYuThFZ08ssVa91_fyI25F_jn9mULZUAPkwM3NMye_BWJQoKCMl4mFU24Dbo-MtEm7AeEySPRZxMenxxp1"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col items-center md:items-start flex-1 gap-2">
//               <div className="bg-black text-white text-[10px] md:text-xs font-black uppercase px-3 py-1 tracking-widest rounded-sm mb-1">
//                 Goal: Ace Finals
//               </div>
//               <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none">John Doe</h1>
//               <p className="text-gray-600 font-medium text-lg">Student ID: SL-98234 — Year 2024</p>
//             </div>
//           </section>

//           {/* Stats Grid Section */}
//           <section>
//             <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-500">Success Metrics</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
//                 <span className="material-symbols-outlined text-black scale-110">schedule</span>
//                 <div>
//                   <p className="text-3xl font-black text-black tracking-tight">128h</p>
//                   <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">Studied</p>
//                 </div>
//               </div>
//               <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
//                 <span className="material-symbols-outlined text-black scale-110">menu_book</span>
//                 <div>
//                   <p className="text-3xl font-black text-black tracking-tight">5</p>
//                   <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">Courses</p>
//                 </div>
//               </div>
//               <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
//                 <span className="material-symbols-outlined text-black scale-110">school</span>
//                 <div>
//                   <p className="text-3xl font-black text-black tracking-tight">42</p>
//                   <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">Tests Taken</p>
//                 </div>
//               </div>
//               <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
//                 <span className="material-symbols-outlined text-black scale-110">psychology</span>
//                 <div>
//                   <p className="text-3xl font-black text-black tracking-tight">94%</p>
//                   <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">AI Accuracy</p>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* Academic Details */}
//             <div className="lg:col-span-1 space-y-6">
//               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Academic Details</h3>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center py-4 border-b border-gray-300">
//                   <div>
//                     <p className="text-xs font-bold uppercase text-gray-500 mb-1">Class Number:</p>
//                     <p className="text-lg font-bold text-black">10</p>
//                   </div>
//                   <a className="text-sm font-bold text-gray-500 hover:text-black underline" href="#">Edit</a>
//                 </div>
//                 <div className="flex justify-between items-center py-4 border-b border-gray-300">
//                   <div>
//                     <p className="text-xs font-bold uppercase text-gray-500 mb-1">Medium</p>
//                     <p className="text-lg font-bold text-black">Malayalam</p>
//                   </div>
//                   <a className="text-sm font-bold text-gray-500 hover:text-black underline" href="#">Edit</a>
//                 </div>
//                 <div className="flex justify-between items-center py-4 border-b border-gray-300">
//                   <div>
//                     <p className="text-xs font-bold uppercase text-gray-500 mb-1">Target Date</p>
//                     <p className="text-lg font-bold text-black">June 2024</p>
//                   </div>
//                   <a className="text-sm font-bold text-gray-500 hover:text-black underline" href="#">Edit</a>
//                 </div>
//               </div>
//             </div>

//             {/* AI Persona Insight */}
//             <div className="lg:col-span-2">
//               <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-500">AI Persona Insight</h3>
//               <div className="bg-black text-white p-10 flex flex-col gap-6 relative overflow-hidden">
//                 <span className="material-symbols-outlined absolute top-4 right-4 text-white/10 text-8xl pointer-events-none">auto_awesome</span>
//                 <h4 className="text-2xl font-black uppercase tracking-tight">Learner Profile Analysis</h4>
//                 <p className="text-xl font-medium leading-relaxed opacity-90 relative z-10">
//                   AI recognizes you are strongest in <span className="underline decoration-white/40 decoration-4 underline-offset-4">Mathematics</span> and need more focus on <span className="underline decoration-white/40 decoration-4 underline-offset-4">Physics</span>. Your preferred learning tone is <span className="italic">Concise</span>.
//                 </p>
//                 <div className="flex gap-4 mt-4">
//                   <div className="px-4 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest">Logic-Oriented</div>
//                   <div className="px-4 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest">Visual Learner</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Account Actions Section */}
//           <section className="border-t border-gray-300 pt-12 mt-4 pb-20">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//               <div className="flex items-center gap-4">
//                 <div className="size-12 rounded bg-green-100 flex items-center justify-center text-green-600">
//                   <span className="material-symbols-outlined">check_circle</span>
//                 </div>
//                 <div>
//                   <p className="text-sm font-black uppercase tracking-wider text-black">Connected to Google</p>
//                   <p className="text-xs font-medium text-gray-600">john.doe@gmail.com</p>
//                 </div>
//               </div>
//               <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
//                 <button className="flex-1 md:flex-none px-10 py-3 bg-white border border-black text-black font-black uppercase text-xs tracking-[0.2em] hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
//                   Logout
//                 </button>
//                 <button className="flex-1 md:flex-none px-10 py-3 bg-gray-100 text-gray-500 font-bold uppercase text-xs tracking-[0.2em] hover:bg-red-50 hover:text-red-600 transition-colors">
//                   Delete Data
//                 </button>
//               </div>
//             </div>
//           </section>
//         </main>

//         {/* Simple Footer */}
//         <footer className="p-8 border-t border-gray-300 text-center">
//           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
//             SmartLearn AI © 2024 — Precision Learning Systems
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default StudentProfile;





// StudentProfile.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const StudentProfile = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    studiedHours: 128,
    courses: 5,
    testsTaken: 42,
    aiAccuracy: 94
  });

  // API base URL
  const API_BASE_URL = 'http://127.0.0.1:8000';

  // Get JWT token from localStorage
  const getToken = () => {
    return localStorage.getItem('access_token');
  };

  // Fetch student profile data
  const fetchStudentProfile = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = getToken();
      console.log(token)
      if (!token) {
        throw new Error('No authentication token found. Please login first.');
      }

      const response = await axios.get(
        `${API_BASE_URL}/students/authenticateduser`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      setStudentData(response.data);
      
      // Update stats with dynamic data if available
      if (response.data) {
        // You can modify stats based on backend data if needed
        setStats(prev => ({
          ...prev,
          // Example: courses: response.data.courses_count || prev.courses
        }));
      }

    } catch (error) {
      console.error('Error fetching student profile:', error);
      
      let errorMessage = 'Failed to load student profile';
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = 'Authentication failed. Please login again.';
          // Redirect to login if needed
          // navigate('/login');
        } else if (error.response.status === 404) {
          errorMessage = 'Student profile not found. Please create your profile first.';
          navigate('/student-profile-setup');
        } else {
          errorMessage = error.response.data?.error || `Server error: ${error.response.status}`;
        }
      } else if (error.request) {
        errorMessage = 'No response from server. Please check your connection.';
      } else {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/SmartLearnAIHowItWorks');
  };

  // Handle delete data
  const handleDeleteData = () => {
    if (window.confirm('Are you sure you want to delete your data? This action cannot be undone.')) {
      // Implement delete functionality here
      alert('Delete functionality to be implemented');
    }
  };

  // Handle edit actions
  const handleEdit = (field) => {
    alert(`Edit ${field} functionality to be implemented`);
  };

  // Get learning style label
  const getLearningStyleLabel = (style) => {
    const styles = {
      'strict': 'Strict',
      'friendly': 'Friendly', 
      'adaptive': 'Adaptive',
      'concise': 'Concise'
    };
    return styles[style] || style || 'Not specified';
  };

  // Get learning style description
  const getLearningStyleDescription = (style) => {
    const descriptions = {
      'strict': 'Focus on discipline and structure',
      'friendly': 'Encouraging and supportive approach',
      'adaptive': 'Adjusts to your mood and energy',
      'concise': 'Direct and to the point explanations'
    };
    return descriptions[style] || 'Learning style not specified';
  };

  // Get medium display name
  const getMediumDisplay = (medium) => {
    if (!medium) return 'Not specified';
    return medium.charAt(0).toUpperCase() + medium.slice(1);
  };

  // Get image URL - handles both local and external images
  const getImageUrl = (imageName) => {
    if (!imageName) {
      return "https://lh3.googleusercontent.com/aida-public/AB6AXuDXKJZl3C4-iNR1Jq4QAqQ-3kNYxZZlB9R7A8xS-ZwcYhyEtJcsAjdx2y3tGFiDUO_e_0l7w4FaAzXecDHaeSU5o53mZeb8oOiFIz48V6781QwAhEXCaYzN-OYmY6wGwGcxo9jgO0z-_MibI-J5qyoa79fZten_-KKDPNFeI-Yw9P_djcujJbIsmc3DaEvYuThFZ08ssVa91_fyI25F_jn9mULZUAPkwM3NMye_BWJQoKCMl4mFU24Dbo-MtEm7AeEySPRZxMenxxp1";
    }
    
    // Check if it's a full URL
    if (imageName.startsWith('http')) {
      return imageName;
    }
    
    // Assume it's stored locally in backend
    return `${API_BASE_URL}/uploads/${imageName}`;
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchStudentProfile();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans text-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-black text-sm tracking-tighter mb-2">LOADING_PROFILE...</p>
          <p className="text-gray-500 text-xs uppercase tracking-widest">Fetching your academic data</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans text-black flex items-center justify-center">
        <div className="text-center max-w-md mx-4">
          <div className="w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-red-500 text-3xl">error</span>
          </div>
          <h2 className="text-xl font-bold text-black mb-2">Profile Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={fetchStudentProfile}
              className="px-6 py-3 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-gray-800 transition-colors"
            >
              Retry
            </button>
            {error.includes('profile not found') && (
              <button
                onClick={() => navigate('/student-profile-setup')}
                className="px-6 py-3 bg-white border border-black text-black font-bold uppercase text-xs tracking-widest hover:bg-gray-50 transition-colors"
              >
                Create Profile
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // If no student data found
  if (!studentData) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans text-black flex items-center justify-center">
        <div className="text-center max-w-md mx-4">
          <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-gray-400 text-3xl">person_off</span>
          </div>
          <h2 className="text-xl font-bold text-black mb-2">No Profile Found</h2>
          <p className="text-gray-600 mb-6">You haven't created a student profile yet.</p>
          <button
            onClick={() => navigate('/student-profile-setup')}
            className="px-10 py-3 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-gray-800 transition-colors"
          >
            Create Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-black">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1 flex flex-col max-w-[1200px] mx-auto w-full p-6 md:p-12 gap-12">
          {/* Profile Header */}
          <section className="flex flex-col md:flex-row items-center md:items-end gap-8 pb-8 border-b border-gray-300">
            <div className="relative">
              <div className="size-40 rounded-full border-2 border-black overflow-hidden bg-white">
                <img 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover" 
                  src={getImageUrl(studentData.image)}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDXKJZl3C4-iNR1Jq4QAqQ-3kNYxZZlB9R7A8xS-ZwcYhyEtJcsAjdx2y3tGFiDUO_e_0l7w4FaAzXecDHaeSU5o53mZeb8oOiFIz48V6781QwAhEXCaYzN-OYmY6wGwGcxo9jgO0z-_MibI-J5qyoa79fZten_-KKDPNFeI-Yw9P_djcujJbIsmc3DaEvYuThFZ08ssVa91_fyI25F_jn9mULZUAPkwM3NMye_BWJQoKCMl4mFU24Dbo-MtEm7AeEySPRZxMenxxp1";
                  }}
                />
              </div>
              <button 
                onClick={() => handleEdit('profile picture')}
                className="absolute -bottom-2 -right-2 bg-black text-white p-2 rounded-full border-2 border-white hover:bg-gray-800 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
            <div className="flex flex-col items-center md:items-start flex-1 gap-2">
              <div className="bg-black text-white text-[10px] md:text-xs font-black uppercase px-3 py-1 tracking-widest rounded-sm mb-1">
                Goal: Ace Finals
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none">
                {studentData.name || 'Student Name'}
              </h1>
              <p className="text-gray-600 font-medium text-lg">
                Student ID: {studentData.id ? `SL-${studentData.id.slice(-5).toUpperCase()}` : 'Not assigned'} — Year 2024
              </p>
              <p className="text-gray-500 text-sm">
                Created by: {studentData.created_by ? `User ${studentData.created_by.slice(-6)}` : 'System'}
              </p>
            </div>
          </section>

          {/* Stats Grid Section */}
          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-500">Success Metrics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
                <span className="material-symbols-outlined text-black scale-110">schedule</span>
                <div>
                  <p className="text-3xl font-black text-black tracking-tight">{stats.studiedHours}h</p>
                  <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">Studied</p>
                </div>
              </div>
              <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
                <span className="material-symbols-outlined text-black scale-110">menu_book</span>
                <div>
                  <p className="text-3xl font-black text-black tracking-tight">{stats.courses}</p>
                  <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">Courses</p>
                </div>
              </div>
              <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
                <span className="material-symbols-outlined text-black scale-110">school</span>
                <div>
                  <p className="text-3xl font-black text-black tracking-tight">{stats.testsTaken}</p>
                  <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">Tests Taken</p>
                </div>
              </div>
              <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
                <span className="material-symbols-outlined text-black scale-110">psychology</span>
                <div>
                  <p className="text-3xl font-black text-black tracking-tight">{stats.aiAccuracy}%</p>
                  <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">AI Accuracy</p>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Academic Details */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Academic Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-300">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 mb-1">Name:</p>
                    <p className="text-lg font-bold text-black">{studentData.name || 'Not specified'}</p>
                  </div>
                  <button 
                    onClick={() => handleEdit('name')}
                    className="text-sm font-bold text-gray-500 hover:text-black underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-300">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 mb-1">Class Number:</p>
                    <p className="text-lg font-bold text-black">
                      {studentData.class_number ? `Class ${studentData.class_number}` : 'Not specified'}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleEdit('class')}
                    className="text-sm font-bold text-gray-500 hover:text-black underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-300">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 mb-1">Medium</p>
                    <p className="text-lg font-bold text-black">{getMediumDisplay(studentData.medium)}</p>
                  </div>
                  <button 
                    onClick={() => handleEdit('medium')}
                    className="text-sm font-bold text-gray-500 hover:text-black underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-300">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 mb-1">Learning Style</p>
                    <p className="text-lg font-bold text-black">{getLearningStyleLabel(studentData.learningstyle)}</p>
                  </div>
                  <button 
                    onClick={() => handleEdit('learning style')}
                    className="text-sm font-bold text-gray-500 hover:text-black underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-300">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 mb-1">Target Date</p>
                    <p className="text-lg font-bold text-black">June 2024</p>
                  </div>
                  <button 
                    onClick={() => handleEdit('target date')}
                    className="text-sm font-bold text-gray-500 hover:text-black underline"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>

            {/* AI Persona Insight */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-500">AI Persona Insight</h3>
              <div className="bg-black text-white p-10 flex flex-col gap-6 relative overflow-hidden">
                <span className="material-symbols-outlined absolute top-4 right-4 text-white/10 text-8xl pointer-events-none">auto_awesome</span>
                <h4 className="text-2xl font-black uppercase tracking-tight">Learner Profile Analysis</h4>
                <p className="text-xl font-medium leading-relaxed opacity-90 relative z-10">
                  AI recognizes you are strongest in <span className="underline decoration-white/40 decoration-4 underline-offset-4">Mathematics</span> and need more focus on <span className="underline decoration-white/40 decoration-4 underline-offset-4">Physics</span>. Your preferred learning tone is <span className="italic">{getLearningStyleLabel(studentData.learningstyle)}</span>.
                </p>
                <p className="text-lg opacity-80 relative z-10">
                  {getLearningStyleDescription(studentData.learningstyle)}
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="px-4 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest">
                    {studentData.class_number ? `Class ${studentData.class_number}` : 'Student'}
                  </div>
                  <div className="px-4 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest">
                    {getMediumDisplay(studentData.medium)} Medium
                  </div>
                  <div className="px-4 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest">
                    {getLearningStyleLabel(studentData.learningstyle)} Learning
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Actions Section */}
          <section className="border-t border-gray-300 pt-12 mt-4 pb-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded bg-green-100 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-wider text-black">Connected to SmartLearn AI</p>
                  <p className="text-xs font-medium text-gray-600">Profile ID: {studentData.id || 'Not available'}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
                <button
                  onClick={handleLogout}
                  className="flex-1 md:flex-none px-10 py-3 bg-white border border-black text-black font-black uppercase text-xs tracking-[0.2em] hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Logout
                </button>
                <button
                  onClick={handleDeleteData}
                  className="flex-1 md:flex-none px-10 py-3 bg-gray-100 text-gray-500 font-bold uppercase text-xs tracking-[0.2em] hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  Delete Data
                </button>
                <button
                  onClick={() => fetchStudentProfile()}
                  className="flex-1 md:flex-none px-10 py-3 bg-black text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">refresh</span>
                  Refresh
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Simple Footer */}
        <footer className="p-8 border-t border-gray-300 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            SmartLearn AI © 2024 — Precision Learning Systems
          </p>
          <p className="text-[8px] font-medium tracking-widest text-gray-400 mt-2">
            Profile last updated: {new Date().toLocaleDateString()}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default StudentProfile;