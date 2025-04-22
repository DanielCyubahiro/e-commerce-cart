import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {useState} from 'react';
import styled from 'styled-components';
import {cn} from '@/lib/utils.ts';
import {useStore} from '@/store/store.ts';

export const StyledNavigationMenuLink = styled(NavigationMenuLink)`
    padding: 1rem 1rem;
    position: relative;

    &.active {
        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: currentColor;
        }
    }
`;

const Nav = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('home');
  const setCartView = useStore(state => state.setCartView);

  const navItems = [
    {id: 'home', label: 'Home'},
    {id: 'man', label: 'Man'},
    {id: 'woman', label: 'Woman'},
    {id: 'jewelery', label: 'Jewelery'},
    {id: 'electronics', label: 'Electronics'},
  ];
  return (
      <NavigationMenu>
        <NavigationMenuList>
          {
            navItems.map((item) => {
              return (
                  <NavigationMenuItem key={item.id}>
                    <StyledNavigationMenuLink
                        href={'#'}
                        onClick={() => (setActiveNavItem(item.id), setCartView(false))}
                        className={cn(
                            'transition-colors hover:text-primary',
                            activeNavItem === item.id
                                ? 'text-primary font-medium active'
                                : 'text-muted-foreground'
                        )}
                    >
                      {item.label}
                    </StyledNavigationMenuLink>
                  </NavigationMenuItem>
              );
            })
          }
        </NavigationMenuList>
      </NavigationMenu>

  );
};

export default Nav;