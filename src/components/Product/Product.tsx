import {Card, CardContent} from '@/components/ui/card.tsx';
import styled from 'styled-components';

interface StyledCardProps {
  $background?: string;
}

export const StyledCard = styled(Card)`
    background-image: url(${(props) => props.$background});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export const StyledCardContent = styled(CardContent)`
    padding: 1rem;
    font-size: 0.8rem;
    display: flex;
    align-items: flex-end;
`

const Product = ({product}) => {
  return (
      <StyledCard $background={product.image}>
        <StyledCardContent>
          <Card>
            <p>{product.title.length < 25
                ? product.title
                : product.title.substring(0, 25) + '...'}
            </p>
            <p>

            </p>
          </Card>
        </StyledCardContent>
        {/*<CardFooter>*/}
        {/*  <p>Card Footer</p>*/}
        {/*</CardFooter>*/}
      </StyledCard>
  );
};

export default Product;