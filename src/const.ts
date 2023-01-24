export interface IContact {
  id: string;
  [key: string]: string;
}

export const enum ContactFilter {
  ALL = 'all',
  ANDROID = 'android',
  IOS = 'ios',
  DESIGN = 'design',
  MANAGMENT = 'management',
  QA = 'qa',
  BACK_OFFICE = 'back_office',
  FRONTEND = 'frontend',
  HR = 'hr',
  PR = 'pr',
  BACKEND = 'backend',
  SUPPORT = 'support',
  ANALYTICS = 'analytics',
}
