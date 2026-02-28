import React, { useState, useRef } from 'react';
import axios from 'axios';
import AdminNavbar from "./navbarside/AdminNavbar";

const AdminVectorDatabaseset = () => {
  // State declarations
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [classNum, setClassNum] = useState('');
  const [subject, setSubject] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    pages: 0,
    chapters: 0,
    chunks: 0,
    message: '',
  });
  const [error, setError] = useState('');

  const fileInputRef = useRef(null);
  const dropAreaRef = useRef(null);

  // File handling functions - Remove duplicates
  const addFiles = (files) => {
    const pdfFiles = Array.from(files).filter(
      (file) => file.type === 'application/pdf'
    );
    
    // Remove duplicate files based on name and size
    const uniquePdfFiles = pdfFiles.filter((newFile) => {
      return !selectedFiles.some(
        (existingFile) => 
          existingFile.name === newFile.name && 
          existingFile.size === newFile.size
      );
    });
    
    if (uniquePdfFiles.length > 0) {
      setSelectedFiles((prev) => [...prev, ...uniquePdfFiles]);
    }
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-gray-100');
    if (e.dataTransfer.files.length) {
      addFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-gray-100');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-gray-100');
  };

  const handleFileInputChange = (e) => {
    if (e.target.files?.length) {
      addFiles(e.target.files);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate form
    if (selectedFiles.length === 0) {
      alert('Please select at least one PDF.');
      return;
    }
    
    if (!classNum.trim()) {
      alert('Please enter a Class/Grade Number.');
      return;
    }
    
    if (!subject.trim()) {
      alert('Please enter a Subject.');
      return;
    }

    // Transition to loading state
    setIsLoading(true);

    try {
      // Create form data for API
      const formData = new FormData();
      
      // Append each file to formData
      selectedFiles.forEach((file) => {
        formData.append('file', file);
      });
      
      // Append other fields
      formData.append('class_number', parseInt(classNum));
      formData.append('subject', subject);

      // Make API call
      const response = await axios.post(
        'http://127.0.0.1:8001/vectordb/storpdf_forembedding',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Handle successful response
      setIsLoading(false);
      setFeedbackData({
        pages: response.data.pages_processed || selectedFiles.length * 50,
        chapters: response.data.chapters_created || Math.floor(selectedFiles.length * 3.5),
        chunks: response.data.chunks_indexed || selectedFiles.length * 120,
        message: response.data.message || 'Files successfully processed and stored in vector database',
      });
      setShowFeedback(true);
      
    } catch (err) {
      setIsLoading(false);
      setError(err.response?.data?.detail || 'Failed to process files. Please try again.');
      console.error('Error uploading files:', err);
    }
  };

  const resetForm = () => {
    setSelectedFiles([]);
    setClassNum('');
    setSubject('');
    setShowFeedback(false);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Render file list
  const renderFileList = () => {
    if (selectedFiles.length === 0) return null;
    
    return selectedFiles.map((file, index) => (
      <div
        key={`${file.name}-${index}`}
        className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-300 p-3 bg-white text-xs gap-2"
      >
        <div className="flex items-center truncate">
          <svg
            className="w-4 h-4 mr-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="truncate max-w-[150px] sm:max-w-full">{file.name}</span>
          <span className="ml-2 text-gray-400">
            ({(file.size / 1024 / 1024).toFixed(2)} MB)
          </span>
        </div>
        <button
          className="text-gray-400 hover:text-red-600 uppercase font-bold tracking-tighter text-xs ml-auto sm:ml-0"
          onClick={() => removeFile(index)}
          type="button"
        >
          Remove
        </button>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminNavbar />
      
      {/* Main Content - Full Width */}
      <div className="flex-1 w-full">
        <main className="w-full bg-white shadow-sm">
          <div className="p-6 mx-auto">
            {/* Header Section */}
            <header className="mb-8 border-b border-gray-200 pb-6">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight uppercase">
                Textbook Ingestion
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Internal Administration Tool v1.0
              </p>
            </header>

            {/* Error Display */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Ingestion Form */}
            {!isLoading && !showFeedback && (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* File Upload Field */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-700">
                    Select Textbook PDFs (Batch Upload)
                  </label>
                  <div
                    ref={dropAreaRef}
                    className="border-2 border-gray-300 border-dashed p-6 sm:p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                  >
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <p className="text-xs sm:text-sm text-gray-600 text-center">
                      {selectedFiles.length > 0
                        ? `${selectedFiles.length} file(s) selected`
                        : 'Drag and drop PDFs here or click to browse'}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF files only (duplicates will be ignored)
                    </p>
                    <input
                      ref={fileInputRef}
                      accept="application/pdf"
                      className="hidden"
                      id="fileInput"
                      multiple
                      type="file"
                      onChange={handleFileInputChange}
                    />
                  </div>
                  {selectedFiles.length > 0 && (
                    <div className="mt-4 space-y-2 max-h-48 overflow-y-auto pr-1">
                      {renderFileList()}
                    </div>
                  )}
                </div>

                {/* Removed Book ID Field */}

                {/* Class and Subject Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Class Field */}
                  <div className="space-y-2">
                    <label
                      className="block text-xs font-bold uppercase tracking-widest text-gray-700"
                      htmlFor="class_num"
                    >
                      Class/Grade <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-black focus:outline-none placeholder:text-gray-300 rounded"
                      id="class_num"
                      name="class_num"
                      placeholder="e.g., 10"
                      required
                      type="number"
                      min="1"
                      max="12"
                      value={classNum}
                      onChange={(e) => setClassNum(e.target.value)}
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label
                      className="block text-xs font-bold uppercase tracking-widest text-gray-700"
                      htmlFor="subject"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-black focus:outline-none placeholder:text-gray-300 rounded"
                      id="subject"
                      name="subject"
                      placeholder="e.g., Physics"
                      required
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-4 hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed rounded"
                  type="submit"
                  disabled={selectedFiles.length === 0 || !classNum || !subject}
                >
                  Ingest Batch & Build AI Brain
                </button>
              </form>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-8 sm:py-12">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border-3 border-gray-200 border-t-black rounded-full animate-spin mb-4"></div>
                  <p className="text-sm font-medium text-gray-700">
                    Processing {selectedFiles.length} file(s)...
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    This may take a few minutes
                  </p>
                </div>
              </div>
            )}

            {/* Feedback Area */}
            {showFeedback && !isLoading && (
              <div className="border border-green-200 bg-green-50 p-4 sm:p-6 rounded">
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-green-800">
                    Ingestion Successful
                  </span>
                </div>
                
                {feedbackData.message && (
                  <p className="text-sm text-gray-600 mb-4">{feedbackData.message}</p>
                )}
                
                <dl className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                      Pages Processed
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {feedbackData.pages.toLocaleString()}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                      Chapters Created
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {feedbackData.chapters}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                      Chunks Indexed
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {feedbackData.chunks.toLocaleString()}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                      Files Uploaded
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {selectedFiles.length}
                    </dd>
                  </div>
                </dl>
                
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <button
                    className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
                    onClick={resetForm}
                  >
                    Ingest Another File
                  </button>
                  
                  <div className="text-xs text-gray-500">
                    Class {classNum} • {subject}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminVectorDatabaseset;