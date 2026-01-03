export interface Assignment {
  id: string;
  title: string;
  completedCount: number;
  totalCount: number;
  startDate: string;
  endDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
}

export enum Tab {
  ASSIGNMENTS = 'assignments',
  EXAMS = 'exams',
  NOTEBOOK = 'notebook',
  SIGN_IN = 'signin',
  RESOURCES = 'resources'
}

export interface NavItem {
  id: Tab;
  label: string;
  icon: React.ComponentType<any>;
}