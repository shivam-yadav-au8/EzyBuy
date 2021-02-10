import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link } from 'react-router-dom';
import './Styles/HomeScreen.scss';
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {
    // console.log(sellers.name)
    document.getElementById("nav").style.display = "flex"; 
    document.getElementById("footer").style.display = "flex";
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return (
    <div className="home">
      <h2 className="fp">Top Sellers</h2>
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <div className="carousal">
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
         
           <div className="banner">
        <AwesomeSlider cssModule={AwesomeSliderStyles} >
        {sellers.map((seller) => (
  <Carousel showArrows autoPlay showThumbs={false}>
      <Link to={`/seller/${seller._id}`}>
        <img src={seller.seller.logo} alt={seller.seller.name} style={{height:'500px',width:'1000px'}}/>
        <p className="legend">{seller.seller.name}</p>
      </Link>
</Carousel>
        ))}
  </AwesomeSlider>
  </div>
        </div>
      )}
      <h2 className="fp">Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="product-con">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
