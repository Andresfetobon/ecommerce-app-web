/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import CardProduct from '../Home/CardProduct';
const SimilarProducts = ({ product }) => {
  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1';
  const [productByCategory, getProductByCategory] = useFetch(baseUrl);

  useEffect(() => {
    if (product) {
      getProductByCategory(`/products?categoryId=${product.category.id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);
  console.log(productByCategory);
  return (
    <div>
      <h2>Similar Products</h2>
      <div className='container-product-card'>
        {productByCategory?.map(prod => {
          if (product.id !== prod.id) {
            return (
              <CardProduct prod={prod} key={prod.id} />
            ) 
          }
        })}
      </div>
    </div>
  );
};

export default SimilarProducts;
