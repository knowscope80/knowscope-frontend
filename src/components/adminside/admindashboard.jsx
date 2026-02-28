// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AdminNavbar from "./navbarside/AdminNavbar";

// const AdminDashboard = () => {
//   const [recentUsers, setRecentUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Stats data (static for now)
//   const stats = [
//     { label: "Total Students", value: "12,450", trend: "+12%", trendColor: "text-green-600" },
//     { label: "Chapters", value: "842", trend: "Static", trendColor: "text-gray-400" },
//     { label: "Tests Created", value: "2,105", trend: "+5.4%", trendColor: "text-green-600" },
//     { label: "Doubts Asked", value: "45,290", trend: "High Vol.", trendColor: "text-blue-600" },
//     { label: "AI Usage (Tokens)", value: "1.2M", trend: "Quota: 80%", trendColor: "text-orange-600" },
//   ];

//   // Fetch recent users from API
//   useEffect(() => {
//     const fetchRecentUsers = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('http://127.0.0.1:8000/auth/auth_recent_users');
        
//         // Transform API data to match activity format
//         const transformedActivities = transformToActivities(response.data);
        
//         setRecentUsers(transformedActivities);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch recent users. Please try again later.');
//         console.error('Error fetching recent users:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecentUsers();
//   }, []);

//   // Transform API user data to activity format
//   const transformToActivities = (users) => {
//     return users.map((user, index) => {
//       // Get initials from name or email
//       let initials = "??";
//       if (user.name) {
//         const nameParts = user.name.split(' ');
//         if (nameParts.length >= 2) {
//           initials = (nameParts[0][0] + nameParts[1][0]).toUpperCase();
//         } else {
//           initials = user.name.substring(0, 2).toUpperCase();
//         }
//       } else if (user.email) {
//         initials = user.email.substring(0, 2).toUpperCase();
//       }

//       // Determine action based on role or default
//       let action = "User Authenticated";
//       if (user.role === 'admin') {
//         action = "Admin Logged In";
//       } else if (user.role === 'user') {
//         action = "User Logged In";
//       }

//       // Generate random time for demo (in a real app, you'd have actual timestamps)
//       const times = ['Just now', '2 mins ago', '5 mins ago', '10 mins ago', '15 mins ago', '30 mins ago', '1 hour ago'];
//       const randomTime = times[index % times.length];

//       // Determine status
//       let status = { 
//         label: "Success", 
//         color: "bg-green-100 text-green-700" 
//       };
      
//       if (user.role === 'admin') {
//         status = { label: "Admin", color: "bg-purple-100 text-purple-700" };
//       }

//       return {
//         initials: initials,
//         name: user.name || 'Anonymous User',
//         email: user.email || 'No Email',
//         action: action,
//         time: randomTime,
//         status: status,
//         ref: `#${user.id.substring(0, 8)}`,
//         picture: user.picture
//       };
//     });
//   };

//   // Navigation items (top bar)
//   const navItems = [
//     { name: "Dashboard", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
//     { name: "Users", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
//     { name: "Syllabus", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
//     { name: "Vector Database", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
//     { name: "Study Plans", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
//   ];

//   if (loading) {
//     return (
//       <div className="flex h-screen overflow-hidden bg-white font-['Inter',sans-serif]">
//         <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
//           <AdminNavbar />
//           <div className="flex-1 flex items-center justify-center">
//             <div className="text-center">
//               <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent"></div>
//               <p className="mt-4 text-gray-600">Loading dashboard...</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex h-screen overflow-hidden bg-white font-['Inter',sans-serif]">
//         <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
//           <AdminNavbar />
//           <div className="flex-1 flex items-center justify-center">
//             <div className="text-center text-red-600">
//               <p>{error}</p>
//               <button 
//                 onClick={() => window.location.reload()} 
//                 className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
//               >
//                 Retry
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen overflow-hidden bg-white font-['Inter',sans-serif]">
//       {/* Main Content Container */}
//       <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
//         {/* Top Navigation Bar */}
//         <AdminNavbar />

//         {/* Scrollable Dashboard Content */}
//         <div className="flex-1 overflow-y-auto p-8" data-purpose="dashboard-page-content">
//           {/* Stats Grid */}
//           <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10" data-purpose="statistics-cards">
//             {stats.map((stat, index) => (
//               <div key={index} className="p-6 border border-[#E5E5E5] rounded-xl bg-white shadow-sm" data-purpose="stat-card">
//                 <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
//                 <div className="flex items-end justify-between">
//                   <h3 className="text-2xl font-bold">{stat.value}</h3>
//                   <span className={`${stat.trendColor} text-xs font-medium`}>{stat.trend}</span>
//                 </div>
//               </div>
//             ))}
//           </section>

//           {/* Recent Activity Section */}
//           <section className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-sm" data-purpose="activity-table-container">
//             <div className="p-6 border-b border-[#E5E5E5] flex items-center justify-between">
//               <h2 className="text-lg font-bold">Recently Authenticated Students</h2>
//               <button className="text-sm font-semibold text-black hover:underline">View All</button>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full text-left border-collapse" id="activity-table">
//                 <thead>
//                   <tr className="bg-gray-50 border-b border-[#E5E5E5]">
//                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
//                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
//                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
//                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Timestamp</th>
//                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
//                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">User ID</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-[#E5E5E5]">
//                   {recentUsers.length > 0 ? (
//                     recentUsers.map((user, idx) => (
//                       <tr key={idx} className="hover:bg-gray-50 transition-colors">
//                         <td className="px-6 py-4">
//                           <div className="flex items-center gap-3">
//                             {user.picture ? (
//                               <img 
//                                 src={user.picture} 
//                                 alt={user.name}
//                                 className="w-8 h-8 rounded-full object-cover"
//                               />
//                             ) : (
//                               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-[10px]">
//                                 {user.initials}
//                               </div>
//                             )}
//                             <span className="text-sm font-semibold">{user.name}</span>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
//                         <td className="px-6 py-4 text-sm">{user.action}</td>
//                         <td className="px-6 py-4 text-sm text-gray-500">{user.time}</td>
//                         <td className="px-6 py-4">
//                           <span className={`px-2 py-1 ${user.status.color} text-[10px] font-bold rounded-full uppercase`}>
//                             {user.status.label}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 text-sm text-right font-mono text-gray-400">{user.ref}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
//                         No recent users found
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;










import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./navbarside/AdminNavbar";

const AdminDashboard = () => {
  const [recentUsers, setRecentUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Stats data (static for now)
  const stats = [
    { label: "Total Students", value: "12,450", trend: "+12%", trendColor: "text-green-600" },
    { label: "Chapters", value: "842", trend: "Static", trendColor: "text-gray-400" },
    { label: "Tests Created", value: "2,105", trend: "+5.4%", trendColor: "text-green-600" },
    { label: "Doubts Asked", value: "45,290", trend: "High Vol.", trendColor: "text-blue-600" },
    { label: "AI Usage (Tokens)", value: "1.2M", trend: "Quota: 80%", trendColor: "text-orange-600" },
  ];

  // Fetch recent users from API
  useEffect(() => {
    const fetchRecentUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:8000/auth/auth_recent_users');
        
        // Transform API data to match activity format
        const transformedActivities = transformToActivities(response.data);
        
        setRecentUsers(transformedActivities);
        setError(null);
      } catch (err) {
        setError('Failed to fetch recent users. Please try again later.');
        console.error('Error fetching recent users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentUsers();
  }, []);

  // Transform API user data to activity format
  const transformToActivities = (users) => {
    return users.map((user, index) => {
      // Get initials from name or email
      let initials = "??";
      if (user.name) {
        const nameParts = user.name.split(' ');
        if (nameParts.length >= 2) {
          initials = (nameParts[0][0] + nameParts[1][0]).toUpperCase();
        } else {
          initials = user.name.substring(0, 2).toUpperCase();
        }
      } else if (user.email) {
        initials = user.email.substring(0, 2).toUpperCase();
      }

      // Determine role display
      let role = "Student";
      let roleColor = "bg-blue-100 text-blue-700";
      
      if (user.role === 'admin') {
        role = "Admin";
        roleColor = "bg-purple-100 text-purple-700";
      } else if (user.role === 'user') {
        role = "User";
        roleColor = "bg-green-100 text-green-700";
      }

      return {
        initials: initials,
        name: user.name || 'Anonymous User',
        email: user.email || 'No Email',
        role: role,
        roleColor: roleColor,
        ref: `#${user.id.substring(0, 8)}`,
        picture: user.picture
      };
    });
  };

  // Navigation items (top bar)
  const navItems = [
    { name: "Dashboard", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
    { name: "Users", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { name: "Syllabus", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { name: "Vector Database", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
    { name: "Study Plans", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
  ];

  if (loading) {
    return (
      <div className="flex h-screen overflow-hidden bg-white font-['Inter',sans-serif]">
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <AdminNavbar />
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading dashboard...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen overflow-hidden bg-white font-['Inter',sans-serif]">
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <AdminNavbar />
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-red-600">
              <p>{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Retry
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white font-['Inter',sans-serif]">
      {/* Main Content Container */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navigation Bar */}
        <AdminNavbar />

        {/* Scrollable Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8" data-purpose="dashboard-page-content">
          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10" data-purpose="statistics-cards">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 border border-[#E5E5E5] rounded-xl bg-white shadow-sm" data-purpose="stat-card">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <span className={`${stat.trendColor} text-xs font-medium`}>{stat.trend}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Recent Users Section */}
          <section className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-sm" data-purpose="users-table-container">
            <div className="p-6 border-b border-[#E5E5E5] flex items-center justify-between">
              <h2 className="text-lg font-bold">Recently Authenticated Students</h2>
             
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse" id="users-table">
                <thead>
                  <tr className="bg-gray-50 border-b border-[#E5E5E5]">
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">User ID</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E5]">
                  {recentUsers.length > 0 ? (
                    recentUsers.map((user, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {user.picture ? (
                              <img 
                                src={user.picture} 
                                alt={user.name}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-[10px]">
                                {user.initials}
                              </div>
                            )}
                            <span className="text-sm font-semibold">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 ${user.roleColor} text-[10px] font-bold rounded-full uppercase`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-right font-mono text-gray-400">{user.ref}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                        No recent users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;