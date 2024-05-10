import { useSelector } from "react-redux";
import CardPorduct from '../components/Home/CardProduct'

const Home = () => {

  const products = useSelector(states => states.products);

  console.log(products)

  return (
    <div>
      {
        products?.map(prod => (
          <CardPorduct key={prod.id} prod={prod}/>
        ))
      }
    </div>
  )
}

export default Home