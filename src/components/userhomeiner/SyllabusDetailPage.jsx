// import React from 'react';

// import SmartLearnAINavbar from '../userhomeiner/navbarside/SmartLearnAINavbar'
// import { useSelector } from "react-redux";


// // ===== SyllabusDetailPage.jsx =====
// // A React component (using Tailwind CSS) that replicates the given HTML page.
// // Includes: Header, Breadcrumb, Syllabus List, and Footer.

// const SyllabusDetailPage = () => {


//    const syllabusName = useSelector((state) => state.app.syllabusname);
//    console.log('syllabusName',syllabusName)
//   // Sample data for syllabus items – extracted from the static HTML.
//   // In a real app, this might come from props or an API.
//   const syllabusItems = [
//     { id: 1, title: 'Unit 1: Atomic Structure', size: '2.4 MB' },
//     { id: 2, title: 'Unit 2: Chemical Bonding', size: '1.8 MB' },
//     { id: 3, title: 'Unit 3: Thermodynamics', size: '3.1 MB' },
//     { id: 4, title: 'Lab Safety Manual', size: '5.5 MB' },
//   ];

//   // Reusable PDF Icon component (simplified, with group-hover effect)
//   const PdfIcon = () => (
//     <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg border border-subtle group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
//       <svg
//         className="w-6 h-6 text-gray-400 group-hover:text-red-500"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//         />
//       </svg>
//     </div>
//   );

//   return (
//     <div className="min-h-screen flex flex-col">
      
//   <SmartLearnAINavbar/>


     
//       {/* Main Content */}
//       <main className="max-w-5xl mx-auto px-6 py-8 flex-1 w-full">
//         <div className="mb-10">
//           <h2 className="text-3xl font-bold tracking-tight">Syllabus Overview</h2>
//           <p className="text-gray-500 mt-2">Chemistry (CHEM-101) — Academic Year 2023/24</p>
//         </div>

//         {/* Syllabus Documents List */}
//         <div className="space-y-4" data-purpose="syllabus-list">
//           {syllabusItems.map((item) => (
//             <div
//               key={item.id}
//               className="group flex items-center justify-between p-5 border border-subtle rounded-xl hover:border-black transition-all bg-white shadow-sm hover:shadow-md"
//             >
//               <div className="flex items-center gap-4">
//                 <PdfIcon />
//                 <div>
//                   <h3 className="font-semibold text-base">{item.title}</h3>
//                   <p className="text-xs text-gray-400">PDF Document • {item.size}</p>
//                 </div>
//               </div>
//               <button className="px-5 py-2 text-sm font-medium border border-black rounded-full hover:bg-black hover:text-white btn-transition">
//                 View PDF
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Empty State / End Message */}
//         <div className="mt-12 text-center">
//           <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
//             End of Current Syllabus
//           </p>
//         </div>
//       </main>

      

//       {/* Global style injection for custom utilities (optional, can be in index.css) */}
//       <style jsx>{`
//         /* Subtle border color to match minimalist aesthetic */
//         .border-subtle {
//           border-color: #e5e5e5;
//         }
//         /* Minimalist transition for hover states */
//         .btn-transition {
//           transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         body {
//           font-family: 'Inter', sans-serif;
//           background-color: #ffffff;
//           color: #000000;
//           -webkit-font-smoothing: antialiased;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SyllabusDetailPage;




import React, { useState, useEffect } from 'react';
import SmartLearnAINavbar from '../userhomeiner/navbarside/SmartLearnAINavbar';
import { useSelector } from "react-redux";
import axios from 'axios';

const SyllabusDetailPage = () => {
  const syllabusName = useSelector((state) => state.app.syllabusname);
  const [syllabusItems, setSyllabusItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('syllabusName', syllabusName);

  useEffect(() => {
    const fetchSyllabusItems = async () => {
      if (!syllabusName) return;
      
      try {
        setLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:8001/api/textbook/textbookbysubject/${syllabusName}/`
        );
        
        // Handle the API response - it might be an array or a single object
        const items = Array.isArray(response.data) ? response.data : [response.data];
        setSyllabusItems(items);
        setError(null);
      } catch (err) {
        console.error('Error fetching syllabus items:', err);
        setError('Failed to load syllabus items. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchSyllabusItems();
  }, [syllabusName]);

  const handleViewPDF = (fileUrl) => {
    // Open PDF in a new tab
    window.open(fileUrl, '_blank', 'noopener,noreferrer');
  };

  const PdfIcon = () => (
    <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg border border-subtle group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
      <svg
        className="w-6 h-6 text-gray-400 group-hover:text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </div>
  );

  // Format file size from bytes to MB (if available) or use default
  const formatFileSize = (bytes) => {
    if (!bytes) return 'Size unknown';
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  // Get unit title from filename
  const getUnitTitle = (item, index) => {
    if (item.part) {
      return `${item.subject.charAt(0).toUpperCase() + item.subject.slice(1)} - Part ${item.part}`;
    }
    // If no part number, use filename without extension
    const fileNameWithoutExt = item.file_name.replace('.pdf', '');
    return fileNameWithoutExt.replace(/_/g, ' ');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <SmartLearnAINavbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-600">Loading syllabus items...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <SmartLearnAINavbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SmartLearnAINavbar />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8 flex-1 w-full">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Syllabus Overview</h2>
          <p className="text-gray-500 mt-2">
            {syllabusName ? syllabusName.charAt(0).toUpperCase() + syllabusName.slice(1) : 'Subject'} — Class {syllabusItems[0]?.class_name || 'N/A'}
          </p>
        </div>

        {/* Syllabus Documents List */}
        {syllabusItems.length > 0 ? (
          <div className="space-y-4" data-purpose="syllabus-list">
            {syllabusItems.map((item, index) => (
              <div
                key={item.id || index}
                className="group flex items-center justify-between p-5 border border-subtle rounded-xl hover:border-black transition-all bg-white shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-4 flex-1">
                  <PdfIcon />
                  <div>
                    <h3 className="font-semibold text-base">{getUnitTitle(item, index)}</h3>
                    <p className="text-xs text-gray-400">
                      PDF Document • {formatFileSize(item.file_size)} • Uploaded: {new Date(item.uploaded_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => handleViewPDF(item.file_url)}
                  className="px-5 py-2 text-sm font-medium border border-black rounded-full hover:bg-black hover:text-white btn-transition"
                >
                  View PDF
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No syllabus items found for {syllabusName}</p>
          </div>
        )}

        {/* End Message */}
        {syllabusItems.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
              End of Syllabus Items
            </p>
          </div>
        )}
      </main>

      {/* Global style injection */}
      <style jsx>{`
        .border-subtle {
          border-color: #e5e5e5;
        }
        .btn-transition {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        body {
          font-family: 'Inter', sans-serif;
          background-color: #ffffff;
          color: #000000;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </div>
  );
};

export default SyllabusDetailPage;