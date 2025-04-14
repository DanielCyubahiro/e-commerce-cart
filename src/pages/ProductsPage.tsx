import {useStore} from '@/store/store.ts';
import {useEffect} from 'react';
import styled from 'styled-components';
import Product from '@/components/Product/Product.tsx';

export const StyledContentContainer = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    aspect-ratio: 1/1;
    gap: 1rem;
`;
const ProductsPage = () => {
  const products = useStore(state => state.products);
  const isLoading = useStore(state => state.isLoading);
  const error = useStore(state => state.error);
  const fetchProducts = useStore(state => state.fetchProducts);

  useEffect(() => {
    if (products.length === 0) void (fetchProducts());
  }, [fetchProducts, products]);

  return (
      <StyledContentContainer>
        {products.map(product => {
          if (product.category !== 'jewelery' && product.category !== 'electronics')
            return <Product key={product.id} product={product}/>;
        })}
      </StyledContentContainer>
  );
};

export default ProductsPage;