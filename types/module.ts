export type Audience =
  | "citizens"
  | "policymakers"
  | "journalists"
  | "researchers"
  | "platform-teams"
  | "comms-professionals"
  | "educators";

export interface Module {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  description: string;
  learningPath?: string;
  moduleNumber?: number;
  estimatedTime: string;
  content?: string;
  audiences?: Audience[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Specialist";
  totalModules: number;
  duration: string;
  modules: Module[];
}
