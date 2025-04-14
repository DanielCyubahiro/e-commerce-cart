import Nav from '@/components/Nav/Nav.tsx';
import {Bell, Heart, Search, ShoppingCart} from 'lucide-react';
import styled from 'styled-components';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar.tsx';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    position: sticky;
    z-index: 1000;
`

export const StyledQuickActions = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
`

export const StyledHeading = styled.h1`
  font-size: 2rem;
`

const Header = () => {
  return (
      <StyledHeader>
        <StyledHeading>Acme Co.</StyledHeading>
        <Nav/>
        <StyledQuickActions>
          <Search/>
          <Bell/>
          <Heart/>
          <ShoppingCart/>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </StyledQuickActions>
      </StyledHeader>
  );
};

export default Header;