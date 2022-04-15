import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteProduct, getProducts } from '../../../api/product'



type PRODUCT = {
    _id : number,
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

    const handleDelete = async (_id : number | string) => {
      const response = await deleteProduct(_id);
      if(response.status === 200 ){
        handleGetProducts();
      }
    }



     useEffect(() => {
         handleGetProducts();
     },[])
  return (

<div>

<table className="table table-bordered">
<thead >
      <tr>
        <th >id</th>
        <th >Name</th>
        <th >Desc</th>
        <th >price</th>
        <th >img</th>
        <th >Status</th>
        <th >Sửa</th>
        <th >Xóa</th>
      </tr>
    </thead>
    <tbody>
     {
         products.map(product =>(

            <tr key={product._id}>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.desc}</td>
            <td>{product.price}</td>
            <td><img src={product.img} width={60} alt=""  /></td> 
            <td>{product.status ? 'còn hàng' : 'hết hàng'}</td>
            <td>
              <button>
              <Link to={`/admin/product/edit/${product._id}`}> sửa</Link>
              </button>
              </td>
            <td>
              <button onClick={() => handleDelete(product._id)}>Xóa</button>
            </td>
          </tr>

         ))
     }
    </tbody>  
</table>


 <button className="btn btn-primary"><Link to={'/admin/product/create'} style = {{color: 'white'}}> Thêm sản phẩm</Link></button>

    </div>
  )
}

export default ProductList

