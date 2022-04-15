/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/product';
import { Link } from 'react-router-dom';

export type PRODUCT_TYPE ={
    _id? :number| string,
    name : string, 
    price : string,
    desc : string,
    img: string,
    status: number,
};
const ProductPage = () => {

const [products , setProducts] = useState<PRODUCT_TYPE[]>([]);
const handleGetProducts =  async() => {
  const response = await getProducts();
  setProducts(response.data);
}
  
useEffect(() => {
  handleGetProducts();
} , [])
  return (
    <div>
        
        
         <div>
  <div className="product-big-title-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="product-bit-title text-center">
            <h2>Shop</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="single-product-area">
    <div className="zigzag-bottom" />
    <div className="container">
      <div className="row">
   
    {
      products.map((product , index) =>(

        <div className="col-md-3 col-sm-6" key={index} >
        <div className="single-shop-product">
          <div className="product-upper">
            <Link to={`${product._id}`}>
            <img src={product.img}  />
           </Link>
          </div>
          <h2><a href=''  ><Link to={`/product/${product._id}`}>{product.name}</Link></a></h2>
          <div className="product-carousel-price">
            <ins>{product.price}</ins> <del>$999.00</del>
          </div>  
          <div className="product-option-shop">
            <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={70} rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
          </div>                       
        </div>
      </div>

      ))
    }

      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="product-pagination text-center">
            <nav>
              <ul className="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </nav>                        
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

</div>
  )
}

export default ProductPage