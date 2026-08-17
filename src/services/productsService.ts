import { Product } from '@/types';
import { products } from '@/data/products';

export const productsService = {
  getAll: (): Product[] => products,
  getFeatured: (): Product[] => products.filter((p) => p.featured),
  getByCategory: (category: Product['category']): Product[] =>
    products.filter((p) => p.category === category),
  getById: (id: string): Product | undefined => products.find((p) => p.id === id),
};
