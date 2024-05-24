import { useSelector } from 'react-redux';
import CardPorduct from '../components/Home/CardProduct';

const Home = () => {
  const products = useSelector(states => states.products);

  return (
    <div>
      <div className='container-product-card'>
        {products?.map(prod => (
          <CardPorduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;
