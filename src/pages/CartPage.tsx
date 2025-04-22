import styled from 'styled-components';
import {useStore} from '@/store/store.ts';
import {Trash2} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {useEffect, useState} from 'react';

export const StyledCartContainer = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    min-height: 81.4vh;
`;

export const StyledTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 2rem;
`;

const CartPage = () => {
  let cartItems = useStore(state => state.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const removeItemFromCart = useStore(state => state.removeItemFromCart);
  useEffect(() => {
    setTotalPrice(cartItems.reduce((sum, item) => sum + item.price, 0));
  }, [cartItems]);

  const updateCartItemQuantity = (productId: number, quantity:number) => {
    cartItems = cartItems.map(
        item => item.id === productId ? {...item, quantity: quantity} : item);
    setTotalPrice(cartItems.reduce((sum, item) => sum + item.price, 0));
  };
  return (
      <StyledCartContainer>
        <StyledTitle>
          Shopping Cart
        </StyledTitle>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-center">Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems.map((item) => (<TableRow key={item.id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{'€' + item.price}</TableCell>
              <TableCell>
                <Select
                    onValueChange={(value) => (updateCartItemQuantity(item.id,
                        Number(value)))}>
                  <SelectTrigger>
                    <SelectValue placeholder={item.quantity}/>
                  </SelectTrigger>
                  <SelectContent className="text-center">
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="text-center"
                         onClick={() => removeItemFromCart(
                             item.id)}><Trash2/></TableCell>
            </TableRow>))}
          </TableBody>
          <TableFooter>
            <TableRow className="h-16">
              <TableCell colSpan={1}>Total</TableCell>
              <TableCell colSpan={3}>{'€' + totalPrice}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>

      </StyledCartContainer>
  );
};

export default CartPage;