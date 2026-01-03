import { Assignment } from './types';

// Data extracted exactly from Image 1
export const ASSIGNMENTS_DATA: Assignment[] = [
  {
    id: '1',
    title: '附加课堂测验 (选做)', // Additional Class Quiz (Optional)
    completedCount: 0,
    totalCount: 1,
    startDate: '2025-12-21 15:15',
    endDate: '2025-12-28 23:00',
    status: 'pending'
  },
  {
    id: '2',
    title: '第八章作业', // Chapter 8 Homework
    completedCount: 5,
    totalCount: 14,
    startDate: '2025-12-18 19:23',
    endDate: '2025-12-26 23:00',
    status: 'in-progress'
  },
  {
    id: '3',
    title: '第七章作业', // Chapter 7 Homework
    completedCount: 5,
    totalCount: 5,
    startDate: '2025-12-17 14:55',
    endDate: '2025-12-26 23:00',
    status: 'completed'
  },
  {
    id: '4',
    title: '12月12日课堂测验', // Dec 12 Class Quiz
    completedCount: 0,
    totalCount: 5,
    startDate: '2025-12-13 20:40',
    endDate: '2025-12-15 08:00',
    status: 'overdue' // Assuming purely based on visualization needs (yellow usually pending, but simulating variety)
  },
  {
    id: '5',
    title: '第六章作业', // Chapter 6 Homework
    completedCount: 0,
    totalCount: 12,
    startDate: '2025-12-10 19:40',
    endDate: '2025-12-12 23:00',
    status: 'overdue'
  },
  {
    id: '6',
    title: '7.3课堂测验', // 7.3 Class Quiz
    completedCount: 0,
    totalCount: 2,
    startDate: '2025-12-08 14:48',
    endDate: '2025-12-10 08:00',
    status: 'overdue'
  },
  {
    id: '7',
    title: '第五章作业', // Chapter 5 Homework
    completedCount: 0,
    totalCount: 19,
    startDate: '2025-12-03 14:34',
    endDate: '2025-12-05 23:00',
    status: 'overdue'
  },
  {
    id: '8',
    title: '填空、选择、判断题', // Fill-in, Choice, True/False
    completedCount: 0,
    totalCount: 30,
    startDate: '2025-12-01 14:35',
    endDate: '2025-12-03 08:00',
    status: 'overdue'
  },
  {
    id: '9',
    title: '第四章作业', // Chapter 4 Homework
    completedCount: 0,
    totalCount: 21,
    startDate: '2025-11-28 14:35',
    endDate: '2025-11-30 08:00',
    status: 'overdue'
  }
];