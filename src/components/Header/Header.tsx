import Nav from '@/components/Nav/Nav.tsx';
import {Bell, Heart, Search, ShoppingCart} from 'lucide-react';
import styled from 'styled-components';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar.tsx';
import {useStore} from '@/store/store.ts';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    position: sticky;
    z-index: 1000;
`;

export const StyledQuickActions = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
`;

export const StyledHeading = styled.h1`
    font-size: 2rem;
`;

export const StyledCartButton = styled.button`
    &:hover {
        cursor: pointer;
    }
`;

const Header = () => {
  const cartItems = useStore(state => state.cartItems);
  const setCartView = useStore(state => state.setCartView);
  return (
      <StyledHeader>
        <StyledHeading>Acme Co.</StyledHeading>
        <Nav/>
        <StyledQuickActions>
          <Search/>
          <Bell/>
          <Heart/>
          <StyledCartButton
              className="relative inline-block"
              onClick={() => setCartView(true)}
          >
            <ShoppingCart/>
            <span
                className="
                absolute
                -top-2
                -right-2
                bg-red-500
                text-white
                text-xs
                rounded-full
                w-5
                h-5
                flex
                items-center
                justify-center">
              {cartItems.reduce((sum, current) => sum + current.quantity, 0)}
            </span>
          </StyledCartButton>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </StyledQuickActions>
      </StyledHeader>
  );
};

export default Header;