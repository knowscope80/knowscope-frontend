// import React, { useState } from "react";
// import axios from "axios";
// import AdminNavbar from "./navbarside/AdminNavbar"

// const AddSyllabus = () => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     class_name: "",
//     subject: "",
//     part: "",
//     file: null
//   });

//   // Static data for existing chapters table
//   const chapters = [
//     {
//       subject: "Quantum Physics",
//       chapter: "Intro to Wave Mechanics",
//       level: "Undergraduate",
//       levelColor: "bg-blue-50 text-blue-700",
//       created: "Oct 24, 2023",
//     },
//     {
//       subject: "Calculus III",
//       chapter: "Multiple Integrals",
//       level: "Undergraduate",
//       levelColor: "bg-blue-50 text-blue-700",
//       created: "Oct 22, 2023",
//     },
//     {
//       subject: "Organic Chemistry",
//       chapter: "Hydrocarbons & Bonds",
//       level: "Higher Secondary",
//       levelColor: "bg-purple-50 text-purple-700",
//       created: "Oct 20, 2023",
//     },
//     {
//       subject: "AI & ML",
//       chapter: "Neural Networks 101",
//       level: "Postgraduate",
//       levelColor: "bg-gray-100 text-gray-700",
//       created: "Oct 18, 2023",
//     },
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       file: e.target.files[0]
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const token = localStorage.getItem("access_token"); // or however you store your token
      
//       if (!token) {
//         alert("Authentication required. Please login again.");
//         return;
//       }

//       const submitData = new FormData();
//       submitData.append("class_name", formData.class_name);
//       submitData.append("subject", formData.subject);
//       submitData.append("part", formData.part);
//       submitData.append("file", formData.file);

//       const response = await axios.post("http://127.0.0.1:8001/api/textbook/upload-textbook",submitData,{
//           headers: {
//             "Authorization": `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.data) {
//         alert("Textbook uploaded successfully!");
//         console.log("Upload response:", response.data);
        
//         // Reset form
//         setFormData({
//           class_name: "",
//           subject: "",
//           part: "",
//           file: null
//         });
        
//         // Reset file input
//         document.getElementById("pdf-upload").value = "";
//       }
//     } catch (error) {
//       console.error("Upload error:", error);
//       if (error.response?.status === 401) {
//         alert("Session expired. Please login again.");
//       } else if (error.response?.data?.detail) {
//         alert(`Upload failed: ${error.response.data.detail}`);
//       } else {
//         alert("Failed to upload textbook. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50 text-slate-900 font-sans antialiased">
//       {/* Main Content Area */}
//       <main className="flex-1 ">
//        <AdminNavbar/>
//           <div className="p-8" >
//         {/* Page Header */}
//         <header className="mb-8" data-purpose="page-title">
//           <h2 className="text-2xl font-bold text-black">Add New Syllabus Chapter</h2>
//           <p className="text-gray-500 text-sm mt-1">Populate the curriculum for the AI learning engine.</p>
//         </header>

//         {/* Syllabus Form */}
//         <section className="bg-white rounded-xl border border-gray-200 shadow-sm mb-12" data-purpose="add-syllabus-form">
//           <form className="p-6 space-y-6" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {/* Class Name / Education Level */}
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-medium text-gray-700" htmlFor="class_name">Class / Education Level *</label>
//                 <select
//                   className="rounded-lg border-gray-300 text-sm focus:border-black focus:ring-black outline-none"
//                   id="class_name"
//                   name="class_name"
//                   value={formData.class_name}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Select Level</option>
//                   <option value="1">Class 1</option>
//                   <option value="2">Class 2</option>
//                   <option value="3">Class 3</option>
//                   <option value="4">Class 4</option>
//                   <option value="5">Class 5</option>
//                   <option value="6">Class 6</option>
//                   <option value="7">Class 7</option>
//                   <option value="8">Class 8</option>
//                   <option value="9">Class 9</option>
//                   <option value="10">Class 10</option>
//                 </select>
//               </div>

//               {/* Subject Field */}
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-medium text-gray-700" htmlFor="subject">Subject Name *</label>
//                 <input
//                   className="rounded-lg border-0 outline-none text-sm focus:ring-0 focus:outline-none"
//                   id="subject"
//                   name="subject"
//                   placeholder="e.g. Mathematics"
//                   type="text"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               {/* Part Field */}
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-medium text-gray-700" htmlFor="part">Part / Volume</label>
//                 <input
//                   className="rounded-lg border-0 outline-none text-sm focus:ring-0 focus:outline-none"
//                   id="part"
//                   name="part"
//                   placeholder="e.g. Part 1, Volume A"
//                   type="text"
//                   value={formData.part}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-6">
//               {/* Upload PDF */}
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-medium text-gray-700">Upload PDF Textbook *</label>
//                 <div className="flex items-center justify-center w-full">
//                   <label
//                     htmlFor="pdf-upload"
//                     className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
//                   >
//                     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                       <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
//                       </svg>
//                       <p className="mb-2 text-sm text-gray-500">
//                         <span className="font-semibold">
//                           {formData.file ? formData.file.name : "Click to upload"}
//                         </span> or drag and drop
//                       </p>
//                       <p className="text-xs text-gray-400">PDF (Max 10MB)</p>
//                     </div>
//                     <input 
//                       accept=".pdf" 
//                       className="hidden" 
//                       id="pdf-upload" 
//                       type="file"
//                       onChange={handleFileChange}
//                       required
//                     />
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {/* Save Button */}
//             <div className="flex justify-end pt-4">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`bg-black text-white px-8 py-2.5 rounded-lg font-medium transition-all focus:ring-2 focus:ring-offset-2 focus:ring-black ${
//                   loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
//                 }`}
//               >
//                 {loading ? "Uploading..." : "Save Chapter"}
//               </button>
//             </div>
//           </form>
//         </section>

//         {/* Existing Chapters Table */}
//         <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden" data-purpose="existing-syllabus-list">
//           <div className="p-6 border-b border-gray-100 flex items-center justify-between">
//             <h3 className="text-lg font-bold text-black">Existing Chapters</h3>
//             <div className="flex items-center gap-2">
//               <span className="text-xs text-gray-500 uppercase font-semibold">Total: {chapters.length} Chapters</span>
//             </div>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full text-left text-sm" id="syllabus-table">
//               <thead className="bg-gray-50 text-gray-600 font-medium">
//                 <tr>
//                   <th className="px-6 py-4">Subject</th>
//                   <th className="px-6 py-4">Chapter</th>
//                   <th className="px-6 py-4">Education Level</th>
//                   <th className="px-6 py-4">Created Date</th>
//                   <th className="px-6 py-4 text-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {chapters.map((row, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50 transition-colors">
//                     <td className="px-6 py-4 font-medium text-black">{row.subject}</td>
//                     <td className="px-6 py-4">{row.chapter}</td>
//                     <td className="px-6 py-4">
//                       <span className={`px-2 py-1 ${row.levelColor} text-xs rounded-md`}>{row.level}</span>
//                     </td>
//                     <td className="px-6 py-4 text-gray-500">{row.created}</td>
//                     <td className="px-6 py-4 text-right space-x-3">
//                       <button className="text-gray-400 hover:text-black font-semibold">Edit</button>
//                       <button className="text-red-400 hover:text-red-600 font-semibold">Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-sm text-gray-500">
//             <p>Showing 1 to {chapters.length} of {chapters.length} chapters</p>
//             <div className="flex gap-2">
//               <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white disabled:opacity-50" disabled>Previous</button>
//               <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white">Next</button>
//             </div>
//           </div>
//         </section>
//         </div>
//       </main>
      
//     </div>
//   );
// };

// export default AddSyllabus;












import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./navbarside/AdminNavbar";

const AddSyllabus = () => {
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [formData, setFormData] = useState({
    class_name: "",
    subject: "",
    part: "",
    file: null
  });
  const [textbooks, setTextbooks] = useState([]);
  const [selectedClass, setSelectedClass] = useState("10");
  const [error, setError] = useState(null);

  // Function to remove duplicates based on file_name
  const removeDuplicates = (data) => {
    const seen = new Set();
    return data.filter(item => {
      // Create a unique key based on subject, part, and file_name
      const uniqueKey = `${item.subject}-${item.part}-${item.file_name}`;
      if (!seen.has(uniqueKey)) {
        seen.add(uniqueKey);
        return true;
      }
      return false;
    });
  };

  // Fetch textbooks when selectedClass changes
  useEffect(() => {
    const fetchTextbooks = async () => {
      if (!selectedClass) return;
      
      setFetchLoading(true);
      setError(null);
      
      try {
        const token = localStorage.getItem("access_token");
        
        if (!token) {
          setError("Authentication required. Please login again.");
          return;
        }

        const response = await axios.get(
          `http://127.0.0.1:8001/api/textbook/textbooksnames/${selectedClass}`,
          {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          }
        );

        // Transform the data to flatten the structure for display
        const flattenedData = response.data.flatMap(item => 
          item.parts.map(part => ({
            id: part.id,
            subject: item.subject,
            part: part.part,
            file_name: part.file_name,
            file_url: part.file_url,
            uploaded_at: part.uploaded_at,
            class: selectedClass
          }))
        );

        // Remove duplicates from the flattened data
        const uniqueData = removeDuplicates(flattenedData);
        setTextbooks(uniqueData);
      } catch (error) {
        console.error("Error fetching textbooks:", error);
        if (error.response?.status === 401) {
          setError("Session expired. Please login again.");
        } else if (error.response?.status === 404) {
          setTextbooks([]); // No data found for this class
        } else {
          setError("Failed to fetch textbooks. Please try again.");
        }
      } finally {
        setFetchLoading(false);
      }
    };

    fetchTextbooks();
  }, [selectedClass]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("access_token");
      
      if (!token) {
        alert("Authentication required. Please login again.");
        return;
      }

      const submitData = new FormData();
      submitData.append("class_name", formData.class_name);
      submitData.append("subject", formData.subject);
      submitData.append("part", formData.part);
      submitData.append("file", formData.file);
      console.log(token)
      const response = await axios.post("http://127.0.0.1:8001/api/textbook/upload-textbook",submitData,{
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
      }
      );

      if (response.data) {
        alert("Textbook uploaded successfully!");
        
        // Reset form
        setFormData({
          class_name: "",
          subject: "",
          part: "",
          file: null
        });
        
        // Reset file input
        document.getElementById("pdf-upload").value = "";
        
        // Refresh the textbooks list
        setSelectedClass(formData.class_name || "10");
      }
    } catch (error) {
      console.error("Upload error:", error);
      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
      } else if (error.response?.data?.detail) {
        alert(`Upload failed: ${error.response.data.detail}`);
      } else {
        alert("Failed to upload textbook. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this textbook?')) return;
    
    try {
      const token = localStorage.getItem("access_token");
      
      if (!token) {
        alert("Authentication required. Please login again.");
        return;
      }

      // Add delete API endpoint here if available
      // await axios.delete(`http://127.0.0.1:8001/api/textbook/${id}`, {
      //   headers: { "Authorization": `Bearer ${token}` }
      // });
      
      // Remove from local state
      setTextbooks(prev => prev.filter(book => book.id !== id));
      alert("Textbook deleted successfully!");
      
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete textbook. Please try again.");
    }
  };

  const handleViewPdf = (fileUrl) => {
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-900 font-sans antialiased">
      {/* Main Content Area */}
      <main className="flex-1">
        <AdminNavbar />
        <div className="p-8">
          {/* Page Header */}
          <header className="mb-8" data-purpose="page-title">
            <h2 className="text-2xl font-bold text-black">Add New Syllabus Chapter</h2>
            <p className="text-gray-500 text-sm mt-1">Populate the curriculum for the AI learning engine.</p>
          </header>

          {/* Syllabus Form */}
          <section className="bg-white rounded-xl border border-gray-200 shadow-sm mb-12" data-purpose="add-syllabus-form">
            <form className="p-6 space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Class Name / Education Level */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="class_name">Class / Education Level *</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-black focus:ring-black outline-none"
                    id="class_name"
                    name="class_name"
                    value={formData.class_name}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Level</option>
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>Class {num}</option>
                    ))}
                  </select>
                </div>

                {/* Subject Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="subject">Subject Name *</label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-black focus:ring-black outline-none"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Mathematics"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Part Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="part">Part / Volume</label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-black focus:ring-black outline-none"
                    id="part"
                    name="part"
                    placeholder="e.g. Part 1, Volume A"
                    type="text"
                    value={formData.part}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Upload PDF */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Upload PDF Textbook *</label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="pdf-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">
                            {formData.file ? formData.file.name : "Click to upload"}
                          </span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-400">PDF (Max 10MB)</p>
                      </div>
                      <input 
                        accept=".pdf" 
                        className="hidden" 
                        id="pdf-upload" 
                        type="file"
                        onChange={handleFileChange}
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-black text-white px-8 py-2.5 rounded-lg font-medium transition-all focus:ring-2 focus:ring-offset-2 focus:ring-black ${
                    loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
                  }`}
                >
                  {loading ? "Uploading..." : "Save Chapter"}
                </button>
              </div>
            </form>
          </section>

          {/* Existing Textbooks Table */}
          <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden" data-purpose="existing-syllabus-list">
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-black">Existing Textbooks</h3>
              
              {/* Class Filter */}
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-gray-700">Filter by Class:</label>
                <select
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:border-black focus:ring-black outline-none"
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>Class {num}</option>
                  ))}
                </select>
                <span className="text-xs text-gray-500 uppercase font-semibold">
                  Total: {textbooks.length} {textbooks.length === 1 ? 'Item' : 'Items'}
                </span>
              </div>
            </div>

            {/* Loading State */}
            {fetchLoading && (
              <div className="p-8 text-center">
                <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-black border-r-transparent"></div>
                <p className="mt-2 text-sm text-gray-500">Loading textbooks...</p>
              </div>
            )}

            {/* Error State */}
            {error && !fetchLoading && (
              <div className="p-8 text-center">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Table */}
            {!fetchLoading && !error && (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm" id="syllabus-table">
                    <thead className="bg-gray-50 text-gray-600 font-medium">
                      <tr>
                        <th className="px-6 py-4">Subject</th>
                        <th className="px-6 py-4">Part</th>
                        <th className="px-6 py-4">File Name</th>
                        <th className="px-6 py-4">Uploaded Date</th>
                        <th className="px-6 py-4">Class</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {textbooks.length > 0 ? (
                        textbooks.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-black">{item.subject}</td>
                            <td className="px-6 py-4">Part {item.part}</td>
                            <td className="px-6 py-4">
                              <button 
                                onClick={() => handleViewPdf(item.file_url)}
                                className="text-blue-600 hover:text-blue-800 hover:underline truncate max-w-[200px] block"
                              >
                                {item.file_name}
                              </button>
                            </td>
                            <td className="px-6 py-4 text-gray-500">{formatDate(item.uploaded_at)}</td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                                Class {item.class}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right space-x-3">
                              <button 
                                onClick={() => handleViewPdf(item.file_url)}
                                className="text-gray-400 hover:text-black font-semibold"
                              >
                                View
                              </button>
                              <button 
                                onClick={() => handleDelete(item.id)}
                                className="text-red-400 hover:text-red-600 font-semibold"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                            No textbooks found for Class {selectedClass}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination - Only show if there are items */}
               
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default AddSyllabus;