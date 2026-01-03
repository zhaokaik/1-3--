import React, { useState } from 'react';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import AssignmentItem from './components/AssignmentItem';
import { ASSIGNMENTS_DATA } from './constants';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ASSIGNMENTS);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.ASSIGNMENTS:
        return (
          <div className="bg-white min-h-screen pb-24">
             {/* List Header: Sticky below TopBar */}
             {/* TopBar is ~60px height. We position this sticky header right after it. */}
             <div className="sticky top-[60px] z-10 bg-gray-50 border-b border-gray-100 shadow-sm">
               <div className="flex justify-between items-center px-4 py-2.5 text-xs text-gray-500 font-medium">
                  <span>作业名称</span>
                  <span>操作</span>
               </div>
            </div>

            {/* Assignment List */}
            <div className="flex flex-col">
              {ASSIGNMENTS_DATA.map((assignment) => (
                <AssignmentItem key={assignment.id} assignment={assignment} />
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-50 px-6 text-center">
            <div className="text-gray-300 mb-4">
               {activeTab === Tab.EXAMS && <span className="text-6xl">✏️</span>}
               {activeTab === Tab.NOTEBOOK && <span className="text-6xl">📖</span>}
               {activeTab === Tab.SIGN_IN && <span className="text-6xl">📍</span>}
               {activeTab === Tab.RESOURCES && <span className="text-6xl">🏫</span>}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {activeTab === Tab.EXAMS && '考试安排'}
              {activeTab === Tab.NOTEBOOK && '我的错题本'}
              {activeTab === Tab.SIGN_IN && '签到打卡'}
              {activeTab === Tab.RESOURCES && '我的课堂'}
            </h2>
            <p className="text-sm text-gray-500 max-w-xs">
              该模块功能正在开发中，请稍后访问。
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Top Navigation */}
      <TopBar />

      {/* Main Content Area */}
      <main className="w-full mx-auto max-w-md bg-white min-h-screen shadow-sm">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <div className="w-full mx-auto max-w-md">
         <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default App;