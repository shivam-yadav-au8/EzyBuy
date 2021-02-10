import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './styles/Product.scss';
export default function Product(props) {
  const { product } = props;
  return (
    // <div key={product._id} className="card">
    //   <Link to={`/product/${product._id}`}>
    //     <img className="medium" src={product.image} alt={product.name} />
    //   </Link>
    //   <div className="card-body">
    //     <Link to={`/product/${product._id}`}>
    //       <h2>{product.name}</h2>
    //     </Link>
    //     <Rating
    //       rating={product.rating}
    //       numReviews={product.numReviews}
    //     ></Rating>
    //     <div className="row">
    //       <div className="price">${product.price}</div>
    //       <div>
    //         <Link to={`/seller/${product.seller._id}`}>
    //           {product.seller.seller.name}
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="contain"  key={product._id} >
 <Link to={`/product/${product._id}`}>
    <div className="work-sample-card">
        <div className="imgBx" style={{backgroundImage: "url(" +`${product.image}`+ ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }}></div>
  
        <div className="content">
        <Link to={`/product/${product._id}`}>
          <h2 className="title">{product.name}</h2>
       </Link>
          {/* <h2 className="title">Lorem Ipusem</h2> */}
          <p className="description"><Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        ${product.price}
        <div>
            {/* <Link to={`/seller/${product.seller._id}`}>
               {product.seller.seller.name}
             </Link> */}
           </div>
    </p>
          {/* <button onClick={()=>this.handleClick("abc")}>Add to Cart</button> */}
          {/* <a href="#" target="_blank">Click Here</a> */}
        </div>
  
        <div className="titr">
        <Link to={`/product/${product._id}`} >
          <h2 className="title">{product.name}</h2>
       </Link>
        </div>
    </div>
    </Link>
  </section>
  );
}
