export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
// EdgeStore Application Types
export type Category =
  | "Application Security and Performance"
  | "Network Security and Connectivity"
  | "Zero Trust"
  | "Developer Services";
export interface Product {
  id: string;
  name: string;
  description: string;
  icon: string; // Changed from image to icon
  categories: Category[];
  cost: 1 | 2 | 3 | 4 | 5; // 1-5 dollar signs
  difficulty: number; // 1-100 scale
}