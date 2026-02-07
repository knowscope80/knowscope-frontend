
import React from 'react';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar'
const ProgressAnalyticsDashboard = () => {
  // Generate heatmap cells
  const shades = ['bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-black'];
  const heatmapCells = Array.from({ length: 52 * 7 }, (_, i) => {
    const shade = shades[Math.floor(Math.random() * shades.length)];
    return <div key={i} className="aspect-square rounded-sm border border-gray-50" className={`aspect-square rounded-sm ${shade}`} />;
  });

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-black antialiased">
      <div className="min-h-screen flex flex-col">
        {/* Top Navigation */}
        <SmartLearnAINavbar/>

        <main className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-6">
          {/* Hero Title */}
          <div className="flex flex-col gap-1">
            <h2 className="text-4xl font-black tracking-tight">Progress & Analytics</h2>
            <p className="text-gray-600">Comprehensive review of your learning performance across all domains.</p>
          </div>

          {/* Mastery Heatmap Section */}
          <section className="bg-white border border-gray-300 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Mastery Heatmap</h3>
              <div className="flex items-center gap-2 text-[10px] text-gray-600 uppercase font-bold tracking-widest">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-gray-100 border border-gray-200"></div>
                  <div className="w-3 h-3 bg-gray-300"></div>
                  <div className="w-3 h-3 bg-gray-500"></div>
                  <div className="w-3 h-3 bg-black"></div>
                </div>
                <span>More</span>
              </div>
            </div>
            <div className="grid grid-cols-52 gap-0.5 mb-2">
              {heatmapCells}
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 font-medium px-1">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                <span key={index}>{month}</span>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Subject Completion Bar Chart */}
            <section className="bg-white border border-gray-300 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-8">Subject Progress</h3>
              <div className="flex items-end justify-around h-64 gap-4 px-8">
                {[
                  { percentage: 85, subject: 'Physics' },
                  { percentage: 62, subject: 'Chemistry' },
                  { percentage: 94, subject: 'Math' },
                  { percentage: 45, subject: 'Bio' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 w-full max-w-[80px]">
                    <span className="text-xs font-bold">{item.percentage}%</span>
                    <div 
                      className={`w-full rounded-t-lg ${index === 3 ? 'bg-gray-300' : 'bg-black'}`} 
                      style={{ height: `${item.percentage}%` }}
                    ></div>
                    <span className={`text-sm font-medium ${index === 3 ? 'text-gray-400' : ''}`}>
                      {item.subject}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Strengths & Weaknesses */}
            <section className="bg-white border border-gray-300 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-6">Topic Analysis</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Strengths */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2">Strengths</h4>
                  <ul className="space-y-3">
                    {['Quantum Mechanics', 'Calculus III', 'Thermodynamics', 'Linear Algebra'].map((strength, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-black font-bold text-lg">check_circle</span>
                        <span className="text-sm font-medium">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 border-b border-gray-300 pb-2">Weaknesses</h4>
                  <ul className="space-y-3">
                    {[
                      { topic: 'Organic Chemistry', hasData: true },
                      { topic: 'Electromagnetism', hasData: true },
                      { topic: 'Fluid Dynamics', hasData: true },
                      { topic: 'Not enough data', hasData: false }
                    ].map((weakness, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className={`material-symbols-outlined text-black font-bold text-lg ${!weakness.hasData ? 'opacity-20' : ''}`}>
                          error
                        </span>
                        <span className={`text-sm font-medium ${!weakness.hasData ? 'text-gray-400 italic' : ''}`}>
                          {weakness.topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Detailed Stats Table */}
          <section className="bg-white border border-gray-300 overflow-hidden rounded-lg">
            <div className="p-6 border-b border-gray-300">
              <h3 className="text-lg font-bold">Recent Learning Activity</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-300">
                    <th className="px-6 py-4 font-bold">Topic</th>
                    <th className="px-6 py-4 font-bold">Mastery Level</th>
                    <th className="px-6 py-4 font-bold">Time Spent</th>
                    <th className="px-6 py-4 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { topic: 'Newtonian Physics', mastery: 90, time: '12h 45m', status: 'Mastered' },
                    { topic: 'Differential Equations', mastery: 72, time: '8h 20m', status: 'In Progress' },
                    { topic: 'Cellular Biology', mastery: 35, time: '4h 10m', status: 'Struggling' }
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 font-medium">{row.topic}</td>
                      <td className="px-6 py-4">
                        <div className="w-full bg-gray-200 h-1.5 max-w-[100px] rounded-full overflow-hidden">
                          <div className="bg-black h-full" style={{ width: `${row.mastery}%` }}></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{row.time}</td>
                      <td className="px-6 py-4">
                        <span className="bg-gray-100 px-2 py-1 rounded text-[10px] font-black uppercase">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-300 p-10 text-center">
          <p className="text-sm text-gray-400">© 2024 SmartLearn AI. All analytics are generated based on real-time study habits.</p>
        </footer>
      </div>
    </div>
  );
};

export default ProgressAnalyticsDashboard;