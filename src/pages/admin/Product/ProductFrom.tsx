/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {  useNavigate, useParams } from "react-router-dom";
import { createProduct } from "../../../api/product";
import { PRODUCT_TYPE } from "../../ProductPage";


export type  TYPE_PRODUCT = {
   name : string,
   desc : string,
   price: number,
   img : string,
   status : number
}

const ProductFrom = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  const {
      register,
      handleSubmit,
      formState: {errors},
      reset

  }=useForm({
      defaultValues:{
          name: '',
          desc : '',
          price: 0,
          img : '',
          status : 0
      }
  });
  
  const onSubmit: SubmitHandler<TYPE_PRODUCT> = (data) => {
      const submitData = {
          ...data,
          status: +data.status
      }
      if(id){
        
      }
  }


   const handleCreateProduct = async (data : PRODUCT_TYPE)=>{

    const response = await  createProduct(data);
    if(response.status === 201){
        navigate('/products')
    }
   }

  return (
<div>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
      <label >NAME</label>
      <input type="text" className="form-control" id="" placeholder="name...." {...register('name',{
          required: {value:true ,message: 'bắt buộc'},
      })} />
    </div>
    <div className="form-group">
      <label >DESC</label>
      <input type="text" className="form-control" id="" placeholder="desc...."  {...register('desc',{
          required:true
      })} />
    </div>
    <div className="form-group">
      <label >PRICE</label>
      <input type="number" className="form-control" id="" placeholder="price...." {...register('price' , {
          required: {
              value:true , message :'bắt buộc'
          },
      })} />
    </div>
    <div className="form-group">
      <label >IMG</label>
      <input type="text" className="form-control" id="" placeholder="img...."  {...register('img' , {
          required: {
              value:true , message :'bắt buộc'
          },
      })} /> 
    </div>
    <div className="form-group">
      <label >STATUS</label>
      <input type="radio" {...register('status')} value ={0}  /> hết hàng
      <input type="radio" {...register('status')} value ={1}  /> còn hàng
    </div>
  
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>

  )
}

export default ProductFrom