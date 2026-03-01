import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./navbarside/AdminNavbar";

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:8000/auth/auth_alluser');
        
        // Remove duplicates based on email
        const uniqueUsers = removeDuplicates(response.data);
        
        // Transform API data to match UI structure
        const transformedUsers = transformUserData(uniqueUsers);
        
        setUsers(transformedUsers);
        setFilteredUsers(transformedUsers);
        setError(null);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Remove duplicates based on email
  const removeDuplicates = (userArray) => {
    const seen = new Set();
    return userArray.filter(user => {
      if (user.email && !seen.has(user.email)) {
        seen.add(user.email);
        return true;
      }
      return false;
    });
  };

  // Transform API data to match UI structure
  const transformUserData = (apiUsers) => {
    return apiUsers.map((user, index) => ({
      id: user.id || `#ED-${9000 + index}`,
      name: user.name || 'Not Provided',
      email: user.email || 'No Email',
      role: user.role === 'admin' ? 'Admin' : user.role === 'user' ? 'Student' : 'Pending',
      picture: user.picture
    }));
  };

  // Filter users based on search
  useEffect(() => {
    let filtered = users;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchTerm, users]);

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Handle user deletion
  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white text-black">
        <main className="flex-1 min-h-screen">
          <AdminNavbar />
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-black border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading users...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen bg-white text-black">
        <main className="flex-1 min-h-screen">
          <AdminNavbar />
          <div className="flex items-center justify-center h-96">
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
    <div className="flex min-h-screen bg-white text-black">
      <main className="flex-1 min-h-screen">
        <AdminNavbar />
        
        {/* Header */}
        <header className="h-16 border-b border-gray-200 flex items-center justify-between px-8 bg-white sticky top-0 z-10">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-gray-700">
            User Management
          </h2>
         
        </header>

        {/* Content Area */}
        <div className="p-8">
          {/* Filter Toolbar */}
          <section className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-1 items-center gap-4 max-w-2xl">
              {/* Search Bar */}
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded text-sm focus:ring-black focus:border-black"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              Showing <strong>{currentUsers.length}</strong> of {filteredUsers.length} users
            </div>
          </section>

          {/* Users Table */}
          <section className="border border-gray-200 rounded overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse" id="users-table">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <th className="px-6 py-4">Profile</th>
                    <th className="px-6 py-4">User Details</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {currentUsers.length > 0 ? (
                    currentUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          {user.picture ? (
                            <img 
                              src={user.picture} 
                              alt={user.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-500 text-xs">
                                {user.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-gray-500">{user.email}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                              user.role === "Admin"
                                ? "bg-purple-50 text-purple-700"
                                : user.role === "Student"
                                ? "bg-blue-50 text-blue-700"
                                : "bg-gray-50 text-gray-700"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-gray-400 hover:text-black mr-3 font-medium text-xs">
                            View
                          </button>
                          <button 
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-gray-400 hover:text-red-600 font-medium text-xs"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pagination */}
          {filteredUsers.length > 0 && (
            <nav className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
              <div className="flex flex-1 justify-between sm:hidden">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${
                    currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                  }`}
                >
                  Next
                </button>
              </div>
              
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing page <span className="font-medium">{currentPage}</span> of{" "}
                    <span className="font-medium">{totalPages}</span>
                  </p>
                </div>
                
                <div>
                  <ul aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm">
                    <li>
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
                          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <li key={i + 1}>
                        <button
                          onClick={() => paginate(i + 1)}
                          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                            currentPage === i + 1
                              ? 'z-10 bg-black text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                              : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                          }`}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    
                    <li>
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
                          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminUserManagement;