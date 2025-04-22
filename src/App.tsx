import Header from '@/components/Header/Header.tsx';
import Footer from '@/components/Footer/Footer.tsx';
import ProductsPage from '@/pages/ProductsPage.tsx';
import {useStore} from '@/store/store.ts';
import CartPage from '@/pages/CartPage.tsx';

function App() {
  const cartView = useStore(state => state.cartView);
  return (
      <main>
          <Header/>
          {cartView ? <CartPage/> : <ProductsPage/>}
          <Footer/>
      </main>
  );
}

export default App;
