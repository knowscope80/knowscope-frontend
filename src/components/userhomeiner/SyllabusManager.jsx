import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';
import { useDispatch } from "react-redux";
import { setSyllabusName } from "../actionslice";



const SyllabusManager = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profiledata, setProfiledata] = useState(null);
  const navigate=useNavigate()
  const dispatch = useDispatch();
  

  useEffect(() => {
    fetchUserProfileFun();
  }, []);
  


  
  const fetchUserProfileFun = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await axios.get("http://127.0.0.1:8000/students/authenticateduser", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfiledata(response.data);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("Failed to load user profile. Please try again later.");
      setLoading(false);
    }
  };

  // Fetch subjects based on profile data
  useEffect(() => {
    const fetchSubjects = async () => {
      if (!profiledata || !profiledata.class_number) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:8001/api/textbook/textbooksnames/${profiledata.class_number}`
        );

        // Transform API data to match UI structure
        const transformedSubjects = response.data.map((item) => ({
          id: item.subject.toLowerCase().replace(/\s+/g, ''),
          name: item.subject,
          description: getSubjectDescription(item.subject),
          progress: Math.floor(Math.random() * 30) + 50, // Random progress for demo
          icon: getSubjectIcon(item.subject),
          parts: item.parts
        }));

        setSubjects(transformedSubjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching subjects:', err);
        setError('Failed to load subjects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [profiledata]); // Re-fetch when profile data changes

  const getSubjectIcon = (subjectName) => {
    const icons = {
      english: (
        <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
      ),
      malayalam: (
        <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="m5 8 6 6"></path>
          <path d="m4 14 6-6 2-3"></path>
          <path d="M2 5h12"></path>
          <path d="M7 2h1"></path>
          <path d="m22 22-5-10-5 10"></path>
          <path d="M14 18h6"></path>
        </svg>
      ),
      chemistry: (
        <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2"></path>
          <path d="M8.5 2h7"></path>
          <path d="M7 16h10"></path>
        </svg>
      ),
      physics: (
        <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="1"></circle>
          <path d="M15.93 11.01c.73.84.73 2.14 0 2.98l-7.86 9.01c-.73.84-1.91.84-2.64 0a1.72 1.72 0 0 1 0-2.48l7.86-9.01c.73-.84 1.91-.84 2.64 0Z"></path>
          <path d="M8.07 11.01c-.73.84-.73 2.14 0 2.98l7.86 9.01c.73.84 1.91.84 2.64 0a1.72 1.72 0 0 0 0-2.48l-7.86-9.01c-.73-.84-1.91-.84-2.64 0Z"></path>
          <path d="M11 8.07c.84-.73 2.14-.73 2.98 0l9.01 7.86c.84.73.84 1.91 0 2.64a1.72 1.72 0 0 1-2.48 0l-9.01-7.86c-.84-.73-.84-1.91 0-2.64Z"></path>
        </svg>
      ),
      biology: (
        <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18h8"></path>
          <path d="M3 22h18"></path>
          <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
          <path d="M9 14h2"></path>
          <path d="M9 12a2 2 0 1 1-2-2V6h6v4a2 2 0 1 1-2 2Z"></path>
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
        </svg>
      ),
      hindi: (
        <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16v16H4z"></path>
          <path d="M4 8h16"></path>
          <path d="M8 4v16"></path>
        </svg>
      ),
      mathematics: (
        <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16v16H4z"></path>
          <path d="M4 12h16"></path>
          <path d="M12 4v16"></path>
        </svg>
      ),
      socialscience: (
        <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v20M2 12h20"></path>
          <path d="M4 4l16 16"></path>
        </svg>
      )
    };

    // Default icon for subjects not in the list
    const defaultIcon = (
      <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
      </svg>
    );

    // Normalize subject name to lowercase for lookup
    const normalizedSubject = subjectName.toLowerCase().replace(/\s+/g, '');
    return icons[normalizedSubject] || defaultIcon;
  };

  // Get description based on subject name
  const getSubjectDescription = (subjectName) => {
    const descriptions = {
      english: 'Literature & Language',
      malayalam: 'Regional Language',
      chemistry: 'Molecules & Reactions',
      physics: 'Forces & Energy',
      biology: 'Life & Organisms',
      hindi: 'Language & Literature',
      mathematics: 'Numbers & Equations',
      socialscience: 'History, Geography & Civics'
    };

    const normalizedSubject = subjectName.toLowerCase().replace(/\s+/g, '');
    return descriptions[normalizedSubject] || 'Academic Subject';
  };

  const handleSubjectClick = (subjectname, subjectData) => {
    
    navigate('/SyllabusDetailPage')
     dispatch(setSyllabusName(subjectname));

    console.log(`Subject clicked: ${subjectname}`, subjectData);
    // Add your navigation or modal logic here
    // You can access subject.parts for textbook parts
  };

  // Display class information
  const ClassInfo = () => {
    if (!profiledata) return null;
    
    return (
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Your Syllabus</h2>
          <p className="text-gray-500 mt-1">
            Class {profiledata.class_number} • {profiledata.medium?.charAt(0).toUpperCase() + profiledata.medium?.slice(1)} Medium
          </p>
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-lg">
          <span className="text-sm font-medium">{subjects.length} Subjects Available</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Main Header */}
      <SmartLearnAINavbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-8 md:px-12 flex-1">
        {/* Class Info - Replaces ClassSelector */}
        <ClassInfo />

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* No Profile Data State */}
        {!loading && !error && !profiledata && (
          <div className="text-center py-12">
            <p className="text-gray-500">Unable to load user profile. Please try again later.</p>
          </div>
        )}

        {/* Subject Grid Section */}
        {!loading && !error && profiledata && (
          <>
            {subjects.length > 0 ? (
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject) => (
                  <article
                    key={subject.id}
                    onClick={() => handleSubjectClick(subject.name, subject)}
                    className="subject-card group p-8 bg-white border border-gray-200 rounded-lg cursor-pointer flex flex-col justify-between h-64 hover:transform hover:-translate-y-1 hover:border-black transition-all duration-200"
                  >
                    <div>
                      {subject.icon}
                      <h2 className="text-xl font-bold">{subject.name}</h2>
                      <p className="text-sm text-gray-500 mt-1">{subject.description}</p>
                      {subject.parts && (
                        <p className="text-xs text-gray-400 mt-2">
                          {subject.parts.length} part{subject.parts.length > 1 ? 's' : ''} available
                        </p>
                      )}
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm font-bold">{subject.progress}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-black transition-all duration-300" 
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </article>
                ))}
              </section>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No subjects available for Class {profiledata.class_number}.</p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Global Styles */}
      <style jsx>{`
        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default SyllabusManager;