export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  year: string;
  metrics: { label: string; value: string }[];
  fullDetails: string;
  services: string[];
}

export interface MethodologyStep {
  stepNum: string;
  title: string;
  description: string;
  detailedScope: string;
  duration: string;
  deliverables: string[];
}

export interface Capability {
  title: string;
  description: string;
  detailedTech: string;
  features: string[];
}

export interface ConsultationRequest {
  id: string;
  name: string;
  email: string;
  details: string;
  projectType: string;
  budget: string;
  timeline: string;
  date: string;
  status: 'pending' | 'reviewed' | 'scheduled';
  notes?: string;
}
