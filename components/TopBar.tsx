import React from 'react';
import { MessageSquare, User, ChevronDown } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <header className="bg-white px-4 py-3 flex items-center justify-between sticky top-0 z-20 shadow-sm border-b border-gray-100 h-[60px]">
      {/* Left: Classes Selector (Shows selected class) */}
      <div className="flex items-center space-x-1 cursor-pointer max-w-[65%]">
        <span className="text-lg font-bold text-gray-900 truncate leading-none">代数与几何x-006</span>
        <ChevronDown size={18} className="text-gray-900 flex-shrink-0" />
      </div>

      {/* Right: Messaging (Customer Service) and Personal Center */}
      <div className="flex items-center space-x-5">
        <button className="flex flex-col items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
          <div className="relative">
            <MessageSquare size={22} />
            {/* Notification Dot */}
            <span className="absolute -top-0.5 -right-0.5 block h-2 w-2 rounded-full bg-red-500 ring-1 ring-white"></span>
          </div>
          <span className="text-[10px] mt-0.5">消息</span>
        </button>
        
        <button className="flex flex-col items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
          <User size={22} />
          <span className="text-[10px] mt-0.5">我的</span>
        </button>
      </div>
    </header>
  );
};

export default TopBar;