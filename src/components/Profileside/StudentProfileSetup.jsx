// import React from 'react';
// import { useNavigate } from "react-router-dom";

// const StudentProfileSetup = () => {
// let navigate=useNavigate()



//   return (
//     <div className="bg-white min-h-screen font-sans text-black antialiased">
//       {/* Global Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-[2px] bg-gray-200 z-50">
//         <div className="h-full bg-black" style={{ width: '33%' }}></div>
//       </div>

//       <main className="min-h-screen flex items-center justify-center p-6 md:p-12">
//         {/* Main Onboarding Card */}
//         <div className="w-full max-w-[960px] bg-white border border-gray-300 shadow-sm relative overflow-hidden flex flex-col min-h-[700px]">
//           {/* Step Header */}
//           <div className="px-8 pt-12 pb-6 flex flex-col items-center text-center">
//             <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500 mb-4">Step 01 of 03</span>
//             <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">Welcome to the Future of Learning</h1>
//             <p className="mt-4 text-gray-500 max-w-lg">Let's set up your academic profile to personalize your AI learning assistant.</p>
//           </div>

//           {/* Content Area */}
//           <div className="flex-1 px-8 md:px-20 pb-12 overflow-y-auto">
//             <div className="max-w-2xl mx-auto">
//               {/* Profile Photo Uploader */}
//               <div className="flex flex-col items-center mb-12">
//                 <div className="relative group">
//                   <div className="w-28 h-28 rounded-full border border-gray-300 flex items-center justify-center bg-white overflow-hidden hover:border-black transition-colors cursor-pointer">
//                     <span className="material-symbols-outlined text-3xl font-light text-gray-500">add_a_photo</span>
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 bg-black text-white p-1 rounded-full border-2 border-white">
//                     <span className="material-symbols-outlined text-sm block">edit</span>
//                   </div>
//                 </div>
//                 <p className="mt-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Profile Photo</p>
//               </div>

//               {/* Input Fields */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                 <div className="flex flex-col gap-2">
//                   <label className="text-xs font-bold uppercase tracking-widest text-black">Full Name</label>
//                   <input 
//                     className="border-b border-gray-300 border-t-0 border-x-0 p-3 px-0 focus:ring-0 focus:border-black placeholder:text-gray-400 text-lg transition-colors bg-transparent focus:outline-none" 
//                     placeholder="Johnathan Doe" 
//                     type="text"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="text-xs font-bold uppercase tracking-widest text-black">Nickname</label>
//                   <input 
//                     className="border-b border-gray-300 border-t-0 border-x-0 p-3 px-0 focus:ring-0 focus:border-black placeholder:text-gray-400 text-lg transition-colors bg-transparent focus:outline-none" 
//                     placeholder="John" 
//                     type="text"
//                   />
//                 </div>
//               </div>

//               {/* Grade Level Selection */}
//               <div className="mb-12">
//                 <h2 className="text-2xl font-bold mb-6">Grade Level</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                   {['Freshman', 'Sophomore', 'Junior', 'Senior'].map((grade, index) => (
//                     <div 
//                       key={grade}
//                       className={`border p-4 text-center cursor-pointer flex flex-col justify-between aspect-square transition-all hover:border-black ${
//                         index === 0 ? 'border-black bg-black text-white' : 'border-gray-300 hover:bg-gray-50'
//                       }`}
//                     >
//                       <span className="text-xs font-bold">0{index + 1}</span>
//                       <span className="text-sm uppercase tracking-tighter">{grade}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Stream Selection */}
//               <div className="mb-12">
//                 <h2 className="text-2xl font-bold mb-6">Select Your Stream</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                   {['Computer Science', 'Science', 'Commerce', 'Arts', 'Medical', 'Engineering'].map((stream) => (
//                     <div 
//                       key={stream}
//                       className="border border-gray-300 p-4 flex items-center justify-between group cursor-pointer hover:bg-black hover:text-white transition-colors"
//                     >
//                       <span className="text-sm font-medium">{stream}</span>
//                       <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100">check</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* AI Tone Preferences */}
//               <div className="mb-12">
//                 <h2 className="text-2xl font-bold mb-6">AI Learning Style</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   {[
//                     { icon: 'psychology', label: 'Strict', description: 'Focus on discipline and structure' },
//                     { icon: 'face', label: 'Friendly', description: 'Encouraging and supportive approach' },
//                     { icon: 'auto_awesome', label: 'Adaptive', description: 'Adjusts to your mood and energy' }
//                   ].map((style) => (
//                     <div 
//                       key={style.label}
//                       className="border border-gray-300 p-6 flex flex-col items-center gap-4 text-center hover:border-black transition-colors cursor-pointer"
//                     >
//                       <span className="material-symbols-outlined text-3xl">{style.icon}</span>
//                       <div>
//                         <p className="text-xs font-bold uppercase tracking-widest">{style.label}</p>
//                         <p className="text-xs text-gray-500 mt-1">{style.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Settings Toggles */}
//               <div className="mb-12">
//                 <h2 className="text-2xl font-bold mb-6">Learning Preferences</h2>
//                 <div className="space-y-4">
//                   {[
//                     { label: 'Proactive Notifications', description: 'Get reminders for study sessions' },
//                     { label: 'Daily Study Summaries', description: 'Receive end-of-day progress reports' },
//                     { label: 'Focus Mode', description: 'Minimal distractions during study' }
//                   ].map((setting) => (
//                     <div 
//                       key={setting.label}
//                       className="flex items-center justify-between p-4 border border-gray-300 hover:border-black transition-colors"
//                     >
//                       <div>
//                         <p className="text-sm font-bold uppercase tracking-widest">{setting.label}</p>
//                         <p className="text-xs text-gray-500">{setting.description}</p>
//                       </div>
//                       <button className="w-12 h-6 bg-gray-300 rounded-full p-1 flex items-center">
//                         <div className="w-4 h-4 bg-white rounded-full transition-transform translate-x-0"></div>
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Academic Identity Placeholder */}
//               <div className="mt-16 pt-16 border-t border-gray-300 opacity-30 select-none grayscale pointer-events-none">
//                 <h2 className="text-2xl font-bold mb-8">Academic Identity</h2>
//                 <div className="grid grid-cols-3 gap-4 mb-8">
//                   <div className="border border-black p-4 text-center">Freshman</div>
//                   <div className="border border-gray-300 p-4 text-center">Sophomore</div>
//                   <div className="border border-gray-300 p-4 text-center">Senior</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Sticky Navigation Footer */}
//           <div className="px-8 py-6 border-t border-gray-300 flex justify-between items-center bg-white">
//             <button className="px-8 py-3 text-sm font-bold uppercase tracking-widest border border-gray-300 hover:border-black transition-all text-black flex items-center gap-2 hover:bg-gray-50">
//               <span className="material-symbols-outlined text-sm">arrow_back</span>
//               Back
//             </button>
//             <button onClick={()=>navigate('/SmartLearnAIHome')} className="px-10 py-3 text-sm font-bold uppercase tracking-widest bg-black text-white hover:bg-gray-800 transition-all flex items-center gap-2">
//               Next Step
//               <span className="material-symbols-outlined text-sm">arrow_forward</span>
//             </button>
//           </div>
//         </div>
//       </main>

//       {/* Loading State Overlay (Hidden) */}
//       <div className="hidden fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center">
//         <div className="w-16 h-16 border-[1px] border-gray-300 border-t-black rounded-full animate-spin mb-8"></div>
//         <div className="text-center">
//           <p className="text-black text-sm tracking-tighter mb-2">PROCESSING_DATA_STREAM...</p>
//           <p className="text-gray-500 text-xs uppercase tracking-widest animate-pulse">AI is analyzing your syllabus and goals...</p>
//         </div>
//       </div>

//       {/* Background Decoration */}
//       <div className="fixed top-0 right-0 p-12 -z-10 opacity-5">
//         <span className="text-[200px] font-extrabold tracking-tighter leading-none select-none">AI</span>
//       </div>
//     </div>
//   );
// };

// export default StudentProfileSetup;



// StudentProfileSetup.jsx
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const StudentProfileSetup = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    class_number: '',
    medium: '',
    learningstyle: '',
    image: null
  });
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  // API base URL
  const API_BASE_URL = 'http://127.0.0.1:8000';

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, image: 'Please upload a valid image (JPEG, PNG, GIF)' }));
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, image: 'Image size should be less than 5MB' }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        image: file
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Clear error
      if (errors.image) {
        setErrors(prev => ({ ...prev, image: '' }));
      }
    }
  };

  // Handle grade selection
  const handleGradeSelect = (gradeNumber) => {
    setFormData(prev => ({
      ...prev,
      class_number: gradeNumber
    }));
    
    // Clear error
    if (errors.class_number) {
      setErrors(prev => ({ ...prev, class_number: '' }));
    }
  };

  // Handle medium selection
  const handleMediumSelect = (medium) => {
    setFormData(prev => ({
      ...prev,
      medium: medium
    }));
    
    // Clear error
    if (errors.medium) {
      setErrors(prev => ({ ...prev, medium: '' }));
    }
  };

  // Handle learning style selection
  const handleLearningStyleSelect = (style) => {
    setFormData(prev => ({
      ...prev,
      learningstyle: style
    }));
    
    // Clear error
    if (errors.learningstyle) {
      setErrors(prev => ({ ...prev, learningstyle: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.class_number) {
      newErrors.class_number = 'Please select a class';
    } else if (formData.class_number < 1 || formData.class_number > 10) {
      newErrors.class_number = 'Class must be between 1 and 10';
    }
    
    if (!formData.medium) {
      newErrors.medium = 'Please select a medium';
    } else if (!['malayalam', 'english'].includes(formData.medium.toLowerCase())) {
      newErrors.medium = 'Medium must be either Malayalam or English';
    }
    
    if (!formData.learningstyle) {
      newErrors.learningstyle = 'Please select a learning style';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Get JWT token from localStorage
  const getToken = () => {
    return localStorage.getItem('access_token');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Create FormData for multipart/form-data
      const submitFormData = new FormData();
      submitFormData.append('name', formData.name);
      submitFormData.append('class_number', formData.class_number);
      submitFormData.append('medium', formData.medium);
      submitFormData.append('learningstyle', formData.learningstyle);
      
      // Only append image if it exists
      if (formData.image) {
        submitFormData.append('image', formData.image);
      }

      // Get JWT token
      const token = getToken();
      if (!token) {
        throw new Error('No authentication token found. Please login first.');
      }

      // Make API call
      const response = await axios.post(`${API_BASE_URL}/students/create`,submitFormData,{
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        }
      );

      console.log('Student created successfully:', response.data);
      
      // Show success message or redirect
      alert('Student profile created successfully!');
      navigate('/SmartLearnAIHome');
      
    } catch (error) {
      console.error('Error creating student:', error);
      
      let errorMessage = 'Failed to create student profile';
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 401) {
          errorMessage = 'Authentication failed. Please login again.';
        } else if (error.response.status === 403) {
          errorMessage = 'You do not have permission to perform this action.';
        } else if (error.response.status === 422) {
          errorMessage = 'Validation error. Please check your input.';
        } else {
          errorMessage = error.response.data?.detail || `Server error: ${error.response.status}`;
        }
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = 'No response from server. Please check your connection.';
      } else {
        // Something happened in setting up the request that triggered an Error
        errorMessage = error.message;
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Grade options (1 to 10)
  const gradeOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  // Medium options
  const mediumOptions = ['English', 'Malayalam'];

  // Learning style options (matching backend expectations)
  const learningStyleOptions = [
    { value: 'strict', label: 'Strict', description: 'Focus on discipline and structure' },
    { value: 'friendly', label: 'Friendly', description: 'Encouraging and supportive approach' },
    { value: 'adaptive', label: 'Adaptive', description: 'Adjusts to your mood and energy' }
  ];

  // Stream options (for UI only, not sent to backend)
  const streamOptions = ['Computer Science', 'Science', 'Commerce', 'Arts', 'Medical', 'Engineering'];

  return (
    <div className="bg-white min-h-screen font-sans text-black antialiased">
      {/* Global Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gray-200 z-50">
        <div className="h-full bg-black" style={{ width: '33%' }}></div>
      </div>

      <main className="min-h-screen flex items-center justify-center p-6 md:p-12">
        {/* Main Onboarding Card */}
        <div className="w-full max-w-[960px] bg-white border border-gray-300 shadow-sm relative overflow-hidden flex flex-col min-h-[700px]">
          {/* Step Header */}
          <div className="px-8 pt-12 pb-6 flex flex-col items-center text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500 mb-4">Step 01 of 03</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">Welcome to the Future of Learning</h1>
            <p className="mt-4 text-gray-500 max-w-lg">Let's set up your academic profile to personalize your AI learning assistant.</p>
          </div>

          {/* Content Area */}
          <div className="flex-1 px-8 md:px-20 pb-12 overflow-y-auto">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              {/* Profile Photo Uploader */}
              <div className="flex flex-col items-center mb-12">
                <label className="relative group cursor-pointer">
                  <div className="w-28 h-28 rounded-full border border-gray-300 flex items-center justify-center bg-white overflow-hidden hover:border-black transition-colors">
                    {imagePreview ? (
                      <img 
                        src={imagePreview} 
                        alt="Profile preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-3xl font-light text-gray-500">add_a_photo</span>
                    )}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-black text-white p-1 rounded-full border-2 border-white">
                    <span className="material-symbols-outlined text-sm block">edit</span>
                  </div>
                  <input 
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="mt-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {formData.image ? 'Change Profile Photo' : 'Upload Profile Photo'}
                </p>
                {errors.image && (
                  <p className="mt-2 text-xs text-red-500">{errors.image}</p>
                )}
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black">Full Name *</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`border-b p-3 px-0 focus:ring-0 placeholder:text-gray-400 text-lg transition-colors bg-transparent focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-gray-300 border-t-0 border-x-0 focus:border-black'
                    }`} 
                    placeholder="Johnathan Doe" 
                    type="text"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>
              </div>

              {/* Class Selection */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Class *</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {gradeOptions.map((grade) => (
                    <div 
                      key={grade}
                      onClick={() => handleGradeSelect(grade)}
                      className={`border p-4 text-center cursor-pointer flex flex-col justify-between aspect-square transition-all hover:border-black ${
                        formData.class_number === grade 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-xs font-bold">Class</span>
                      <span className="text-lg font-bold">{grade}</span>
                    </div>
                  ))}
                </div>
                {errors.class_number && (
                  <p className="text-sm text-red-500 mt-2">{errors.class_number}</p>
                )}
              </div>

              {/* Medium Selection */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Select Your Medium *</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {mediumOptions.map((medium) => (
                    <div 
                      key={medium}
                      onClick={() => handleMediumSelect(medium.toLowerCase())}
                      className={`border p-4 flex items-center justify-between group cursor-pointer transition-colors ${
                        formData.medium === medium.toLowerCase() 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:bg-black hover:text-white'
                      }`}
                    >
                      <span className="text-sm font-medium">{medium}</span>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100">
                        {formData.medium === medium.toLowerCase() ? 'check' : ''}
                      </span>
                    </div>
                  ))}
                </div>
                {errors.medium && (
                  <p className="text-sm text-red-500 mt-2">{errors.medium}</p>
                )}
              </div>

              {/* Stream Selection (UI only - not sent to backend) */}
              {/* <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Select Your Stream (Optional)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {streamOptions.map((stream) => (
                    <div 
                      key={stream}
                      className="border border-gray-300 p-4 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm font-medium">{stream}</span>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100">check</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* AI Learning Style */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">AI Learning Style *</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {learningStyleOptions.map((style) => (
                    <div 
                      key={style.value}
                      onClick={() => handleLearningStyleSelect(style.value)}
                      className={`border p-6 flex flex-col items-center gap-4 text-center cursor-pointer transition-colors ${
                        formData.learningstyle === style.value 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:border-black'
                      }`}
                    >
                      <span className="material-symbols-outlined text-3xl">
                        {style.value === 'strict' ? 'psychology' : 
                         style.value === 'friendly' ? 'face' : 'auto_awesome'}
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest">{style.label}</p>
                        <p className="text-xs opacity-80 mt-1">{style.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.learningstyle && (
                  <p className="text-sm text-red-500 mt-2">{errors.learningstyle}</p>
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-300">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                    loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creating Profile...
                    </>
                  ) : (
                    'Create Student Profile'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Loading State Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white bg-opacity-90 z-[100] flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-[1px] border-gray-300 border-t-black rounded-full animate-spin mb-8"></div>
          <div className="text-center">
            <p className="text-black text-sm tracking-tighter mb-2">CREATING_STUDENT_PROFILE...</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest animate-pulse">Please wait while we create your profile...</p>
          </div>
        </div>
      )}

      {/* Background Decoration */}
      <div className="fixed top-0 right-0 p-12 -z-10 opacity-5">
        <span className="text-[200px] font-extrabold tracking-tighter leading-none select-none">AI</span>
      </div>
    </div>
  );
};

export default StudentProfileSetup;