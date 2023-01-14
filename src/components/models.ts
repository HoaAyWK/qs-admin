export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface ChartProps {
  type?: string;
  height?: number;
}

export interface Connection {
  avatar: string;
  name: string;
  numbOfConnections: number;
  status: 'Connected' | 'Pending';
}

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  image: string;
}

export interface Review {
  id: number;
  reviewer: string;
  avatar: string;
  ratedDay: string;
  star: number;
  content: string;
}
