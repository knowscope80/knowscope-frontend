import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { googleAuth } from "../../api/auth_api";
import React, { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setIsChecking(true);
      setAuthError(null);
      const idToken = credentialResponse.credential;
      console.log("Google login successful, getting token...");
      
      const res = await googleAuth(idToken);
      console.log('res.data....   ',res.data)
      console.log('User access token:', res.data.access_token);
      
      // Store tokens
      localStorage.setItem("access_token", res.data.access_token);
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      console.log('res.data.user.role    ',res.data.user.role)
      if(res.data.user.role=="admin"){
         navigate("/AdminDashboard")
      }else if(res.data.user.role=="user"){
         navigate("/DashboardOverview");       
      }
    } catch (err) {
      console.error("Google auth failed", err);
      setAuthError(err.response?.data?.message || "Authentication failed. Please try again.");
    } finally {
      setIsChecking(false);
    }
  };

  const handleGoogleError = () => {
    console.error("Google Login Failed");
    setAuthError("Google login failed. Please try again.");
  };

  // Show loading state while checking
  if (isChecking) {
    return (
      <div className="relative min-h-screen w-full flex items-center justify-center bg-white text-black px-4 font-['Inter']">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-white text-black px-4 font-['Inter']">
      {/* Brand */}
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
          <span className="text-white font-black text-xl">S</span>
        </div>
        <span className="text-xl font-bold tracking-tight">
          SmartLearn AI
        </span>
      </div>

      {/* Card */}
      <div className="w-full max-w-[440px] flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black tracking-[-0.033em]">
            Welcome back
          </h1>
          <p className="text-slate-500">
            Log in to your student account
          </p>
        </div>

        {/* Error Message */}
        {authError && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
            {authError}
          </div>
        )}

        {/* Google Login */}
        <div className="rounded-lg overflow-hidden border border-black">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            theme="outline"
            size="large"
            width="100%"
            disabled={isChecking}
            useOneTap
          />
        </div>


        {/* <div style={{ width: "100%" }}>
  <GoogleLogin width={300} />
</div> */}

        {/* Divider */}
        <div className="flex items-center py-2">
          {/* <div className="flex-grow border-t border-slate-200"></div> */}
          {/* <span className="mx-4 text-slate-400 text-sm font-medium uppercase tracking-widest">
            or
          </span> */}
          {/* <div className="flex-grow border-t border-slate-200"></div> */}
        </div>

        {/* Email (UI only) */}
        {/* <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold px-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. alex@university.edu"
              className="h-14 rounded-lg border border-slate-200
              bg-white px-4 text-base text-black
              placeholder:text-slate-400
              focus:outline-none focus:ring-1 focus:ring-black
              transition-colors"
              disabled={isChecking}
            />
          </div>

          <button
            disabled
            className="h-14 rounded-lg bg-black text-white font-bold opacity-40 cursor-not-allowed"
          >
            Continue with Email
          </button>
        </div> */}

        {/* Footer */}
        {/* <div className="flex flex-col items-center gap-4 mt-4">
          <p className="text-slate-500 text-sm">
            Don&apos;t have an account?{" "}
            <span 
              className="font-bold text-black cursor-pointer hover:underline"
              onClick={() => navigate("/signup")} // adjust path as needed
            >
              Sign up for free
            </span>
          </p>

          <div className="flex gap-6 text-xs text-slate-400 font-medium">
            <span className="hover:text-black cursor-pointer">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer">Terms of Service</span>
            <span className="hover:text-black cursor-pointer">Help Center</span>
          </div>
        </div> */}
      </div>

      {/* Decorative Icon */}
      <div className="fixed bottom-0 right-0 p-8 opacity-10 pointer-events-none select-none">
        <span className="material-symbols-outlined text-[200px] text-black">
          auto_stories
        </span>
      </div>
    </div>
  );
};

export default Login;