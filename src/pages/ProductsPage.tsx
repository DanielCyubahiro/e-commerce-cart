import {useStore} from '@/store/store.ts';
import {useEffect} from 'react';
import styled from 'styled-components';
import Product from '@/components/Product/Product.tsx';

export const StyledContentContainer = styled.div`
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
`;
const ProductsPage = () => {
  const products = useStore(state => state.products);
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