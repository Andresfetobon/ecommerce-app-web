import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { useEffect } from 'react';
import ProductInfo from '../components/ProductId/ProductInfo';
import SimilarProducts from '../components/ProductId/SimilarProducts';

const ProductIdPage = () => {
  const { id } = useParams();

  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1';
  const [product, getProductById] = useFetch(baseUrl);

  useEffect(() => {
    getProductById(`/products/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(product);

  return (
    <div>
      <ProductInfo product={product} />
      <SimilarProducts />
    </div>
  );
};

export default ProductIdPage;
