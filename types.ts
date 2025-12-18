
export enum Language {
  EN = 'en',
  AM = 'am'
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  specs?: Record<string, string>;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export interface ExportCategory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: string;
}

export interface Inquiry {
  id: string;
  type: 'CONTACT' | 'RFQ';
  name: string;
  email: string;
  company?: string;
  department?: string;
  message: string;
  items?: QuoteItem[];
  timestamp: string;
}
