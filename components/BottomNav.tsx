import React from 'react';
import { Tab, NavItem } from '../types';
import { FileText, PenTool, BookX, CalendarCheck, School } from 'lucide-react';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: Tab.ASSIGNMENTS, label: '作业', icon: FileText },
  { id: Tab.EXAMS, label: '考试', icon: PenTool },
  { id: Tab.NOTEBOOK, label: '错题本', icon: BookX },
  { id: Tab.SIGN_IN, label: '签到', icon: CalendarCheck },
  { id: Tab.RESOURCES, label: '课堂', icon: School }, // Changed label to Classroom (课堂)
];

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 pb-safe pt-2 z-30 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-end pb-2 max-w-md mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center w-full py-1 transition-all duration-200 group ${
                isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className={`mb-1 transition-transform duration-200 ${isActive ? '-translate-y-0.5' : ''}`}>
                <Icon 
                  size={24} 
                  strokeWidth={isActive ? 2.5 : 2} 
                />
              </div>
              <span className={`text-[11px] leading-none ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;