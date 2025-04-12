import {create} from 'zustand';
import type {Product, StoreState} from '@/types/store.ts';

export const useStore = create<StoreState>()(
    (set, get) =>
        ({
          // Products slice
          products: [],
          isLoading: true,
          error: null,
          fetchProducts: async () => {
            set({isLoading: true, error: null});
            try {
              const response = await fetch('https://fakestoreapi.com/products');
              const products: Product[] = await response.json();
              set({products, isLoading: false});
              return products;
            } catch (error) {
              const errorMessage = error instanceof Error
                  ? error.message
                  : 'Failed to fetch products';
              set({error: errorMessage, isLoading: false});
              return [];
            }
          },

          // Cart Slice TODO
        }));