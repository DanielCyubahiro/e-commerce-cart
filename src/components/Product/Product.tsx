import {Card} from '@/components/ui/card.tsx';
import styled from 'styled-components';
import {Button} from '@/components/ui/button.tsx';
import {Heart} from 'lucide-react';
import {useStore} from '@/store/store.ts';

export const StyledCard = styled(Card)`
    background-image: url(${(props) => props.$background});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 250px;
    height: 400px;
    margin-bottom: 1rem;
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    gap: 0;
    transition: transform 0.3s ease;
    &:hover {
        border-color: black;
        transform: translateY(-5px);
    }
`;

export const StyledInnerCard = styled(Card)`
    padding: 0.5rem;
    margin: 0.5rem;
    width: 230px;
    gap: 0;
    font-size: 0.8rem;
`;

export const StyledLighterShadePrice = styled.span`
    color: gray;
    text-decoration: line-through;
    padding-left: 0.3rem;
`;

export const StyledItemTitle = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`;

export const StyledItemReviewSection = styled.p`
    margin-left: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 0.7rem;
`;

export const StyledItemPrice = styled.p`
    margin-left: 0;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const StyledLighterShade = styled.span`
    color: gray;
`;

export const StyledCartButton = styled(Button)`
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    width: 230px;

    &:hover {
        cursor: pointer;
    }
`;

export const StyledFavorite = styled(Heart)`
    background-color: lightgray;
    color: white;
    padding: 0.25rem;
    border-radius: 50%;
    position: relative;
    bottom: 220px;
    left: 100px;
`;
const Product = ({product}) => {
  const addItemToCart = useStore(state => state.addItemToCart);
  const handleAddItemToCart = () => {
    addItemToCart(product);
  };
  return (
      <StyledCard $background={product.image}>
        <StyledFavorite/>
        <StyledInnerCard>
          <StyledItemTitle>{product.title}</StyledItemTitle>
          <StyledItemReviewSection>
            <img width="20" height="15"
                 src="https://img.icons8.com/material-rounded/15/FD7E14/star--v1.png"
                 alt="star--v1"/>
            {product.rating.rate}
            <StyledLighterShade>({product.rating.count} reviews)</StyledLighterShade>
          </StyledItemReviewSection>
          <StyledItemPrice>
            {'€' + product.price}
            <StyledLighterShadePrice>{'€' +
                Math.round(product.price + 80)}</StyledLighterShadePrice>
          </StyledItemPrice>
        </StyledInnerCard>
        <StyledCartButton onClick={handleAddItemToCart}>Add to
          Cart</StyledCartButton>
      </StyledCard>
  );
};

export default Product;