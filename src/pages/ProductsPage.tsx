import {useStore} from '@/store/store.ts';
import {useEffect} from 'react';

const ProductsPage = () => {
  const products = useStore(state => state.products);
  const isLoading = useStore(state => state.isLoading);
  const error = useStore(state => state.error);
  const fetchProducts = useStore(state => state.fetchProducts);
  const addItemToCart = useStore(state => state.addItemToCart);

  useEffect(() => {
    if(products.length === 0) void (fetchProducts())
  }, [fetchProducts, products]);

  return (
      <>

      </>
  );
};

export default ProductsPage;