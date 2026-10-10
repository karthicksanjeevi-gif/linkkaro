export type UserRole = 'seeker' | 'employer' | 'admin';

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isBusinessVerified?: boolean;
  skills?: string[];
  location?: {
    lat: number;
    lng: number;
    address: string;
    district: string;
    state: string;
  };
  experienceYears?: number;
  bio?: string;
  createdAt: string;
}

export interface JobPost {
  id: string;
  employerId: string;
  employerName: string;
  title: string;
  category: string;
  description: string;
  wage: number;
  wageType: 'daily' | 'monthly' | 'per_task';
  requiredWorkers: number;
  filledWorkers: number;
  status: 'open' | 'closed';
  location: {
    lat: number;
    lng: number;
    address: string;
    district: string;
    state: string;
  };
  createdAt: string;
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  seekerId: string;
  seekerName: string;
  employerId: string;
  status: 'pending' | 'accepted' | 'rejected';
  contactRevealed: boolean;
  appliedAt: string;
}
