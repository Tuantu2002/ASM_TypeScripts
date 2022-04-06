import React, { useEffect, useState } from 'react'
import { getProducts } from '../../../api/product'



type PRODUCT = {
    _id? : number
    name : string,
   desc : string,
   price: string,
   img : string,
   status : number
}
const ProductList = () => {
     const [products , setProducts] = useState<PRODUCT[]>([]);


     const handleGetProducts = async()=>{
         const response = await getProducts();
         setProducts(response.data);
     };
     useEffect(() => {
         handleGetProducts();
     },[])
  return (



    <div>
<div>
  <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
     {
         products.map(product =>(

            <tr key={product._id}>
            <th scope="row">{product._id}</th>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.desc}</td>
            <td>{product.price}</td>
            <td>{product.img}</td> 
            <td>{product.status ? 'còn hàng' : 'hết hàng'}</td>
          </tr>

         ))
     }
    </tbody>
    </table>
</div>

    </div>
  )
}

export default ProductList