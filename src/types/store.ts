export interface Rating {
  'rate': number,
  'count': number
}

export interface Product {
  'id': number,
  'title': string,
  'price': number,
  'description': string,
  'category': string,
  'image': string,
  'rating': Rating
}

export interface CartItem extends Product {
  'quantity': number;
}

export interface CartState {
  'cartItems': CartItem[],
  'addItemToCart': (product: Product) => void,
  'removeItemFromCart': (productId: number) => void,
  // 'updateCartItemQuantity': (productId: number, quantity: number) => void,
  'clearCart': () => void,
}

export interface ProductsState {
  'products': Product[],
  'fetchProducts': () => Promise<Product[]>,
  'isLoading': boolean,
  'error': string | null
}

export interface View {
  'cartView': boolean,
  'setCartView': (value:boolean) => void,
}

export type StoreState = CartState & ProductsState & View;