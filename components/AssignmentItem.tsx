import React from 'react';
import { Assignment } from '../types';

interface AssignmentItemProps {
  assignment: Assignment;
}

const AssignmentItem: React.FC<AssignmentItemProps> = ({ assignment }) => {
  // Determine badge styles based on completion or status logic
  const getBadgeStyle = () => {
    if (assignment.completedCount === assignment.totalCount) {
      // Completed (Greenish)
      return 'bg-teal-50 text-teal-600 border-teal-100';
    } else if (assignment.completedCount > 0) {
      // In Progress (Blueish)
      return 'bg-blue-50 text-blue-600 border-blue-100';
    } else {
      // Not Started / Pending (Yellowish)
      return 'bg-amber-50 text-amber-600 border-amber-100';
    }
  };

  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0 bg-white px-4 hover:bg-gray-50 transition-colors">
      <div className="flex-1 pr-4">
        {/* Title and Badge Row */}
        <div className="flex items-start mb-2">
          <h3 className="text-[15px] font-bold text-gray-800 leading-tight mr-2 line-clamp-1">
            {assignment.title}
          </h3>
          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium whitespace-nowrap ${getBadgeStyle()}`}>
            {assignment.completedCount}/{assignment.totalCount}
          </span>
        </div>

        {/* Date Row */}
        <div className="text-[11px] text-gray-400 font-light flex items-center">
          <span>{assignment.startDate}</span>
          <span className="mx-1">—</span>
          <span className="text-red-400">{assignment.endDate}</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex-shrink-0">
        <button className="px-3 py-1.5 border border-gray-300 rounded text-[13px] text-gray-700 font-medium hover:bg-gray-100 active:bg-gray-200 transition-colors">
          查看作业
        </button>
      </div>
    </div>
  );
};

export default AssignmentItem;