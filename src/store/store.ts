import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import type {Product, StoreState} from '@/types/store.ts';

export const useStore = create<StoreState>()(
    persist(
        (set, get) =>
            ({
              // View slice
              cartView: false,
              setCartView: (value: boolean) => {set({ cartView: value })},

              // Products slice
              products: [],
              isLoading: true,
              error: null,
              fetchProducts: async () => {
                set({isLoading: true, error: null});
                try {
                  const response = await fetch(
                      'https://fakestoreapi.com/products');
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

              // Cart Slice
              cartItems: [],
              addItemToCart: (product: Product) => {
                //Check if there's this item in the cart already
                const item = get().
                    cartItems.
                    find(item => item.id === product.id);
                if (item) {
                  set({
                    cartItems: get().cartItems.map(i => i.id === item.id
                        ? {...i, quantity: i.quantity + 1}
                        : i,
                    ),
                  });
                } else {
                  set({
                    cartItems: [
                      ...get().cartItems,
                      {...product, quantity: 1}],
                  });
                }
              },
              removeItemFromCart: (productId) => {
                set({
                  cartItems: get().
                      cartItems.
                      filter(item => item.id !== productId),
                });
              },
              // updateCartItemQuantity: (productId, quantity) => {
              //   set({
              //     cartItems: get().
              //         cartItems.
              //         map(item => item.id === productId ? {
              //           ...item,
              //           quantity: quantity,
              //         } : item),
              //   });
              // },
              clearCart: () => {
                set({cartItems: []});
              },
            }),
        {
          name: 'cart-storage',
        },
    ));