export interface Service {
  imageUrl: string;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  span?: 'row-span-2' | 'col-span-1';
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

