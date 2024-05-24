import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { useEffect } from 'react';
import ProductInfo from '../components/ProductId/ProductInfo';
import SimilarProducts from '../components/ProductId/SimilarProducts';
import SliderImgs from '../components/ProductId/SliderImgs';
import '../styles/ProductIdPage.css'

const ProductIdPage = () => {
  const { id } = useParams();

  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1';
  const [product, getProductById] = useFetch(baseUrl);

  useEffect(() => {
    getProductById(`/products/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <div className='container'>
        <div className='slider'>
          <SliderImgs product={product} />
        </div>
        <div className='product-info-container'>
          <ProductInfo product={product} />
        </div>
      </div>
      <SimilarProducts product={product} />
    </div>
  );
};

export default ProductIdPage;
