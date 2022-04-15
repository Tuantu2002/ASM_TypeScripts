/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, getProduct, updateProduct } from "../../../api/product";
import { PRODUCT_TYPE } from "../../ProductPage";

export type TYPE_PRODUCT = {
  name: string;
  desc: string;
  price: string;
  img: string;
  status: number;
};

const ProductFrom = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [imageBase64, setImageBase64] = useState<any>('');

  console.log(_id);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      desc: "",
      price: "",
      img: "",
      status: 0,
    },
  });

  const onSubmit: SubmitHandler<TYPE_PRODUCT> = (data) => {
    const submitData = {
      ...data,
      status: +data.status,
      img: imageBase64
    };
    if (_id) {
      return handleUpdatePost(submitData);
    }
    return handleCreateProduct(submitData);
  };

  const handleCreateProduct = async (data: PRODUCT_TYPE) => {
    const response = await createProduct(data);
    if (response.status === 201) {
      navigate("/admin/product");
    }
  };

  const handleUpdatePost = async (data: PRODUCT_TYPE) => {
    const response = await updateProduct(_id, data);
    
    if (response.status === 200) {
      navigate("/admin/product");
    }
  };
  const handleGetProduct = async (_id: string) => {
    const response = await getProduct(_id);
    if (response.status === 200) {
      reset({
        ...response.data,
        status: `${response.data.status}`,
      });
    }
  };


  const getEventResult = (event: any) => {
    if (event && event.target && typeof event.target.result == 'string') {
        return event.target.result;
    }

    return '';
};


  const handleChangeFile = (event :any) => {
    // const acceptImageTypes = ['image/png', 'image/jpg'];
    const file = event.target.files[0];
    if (!file) {
        console.log('Không có file');
        return;
    } else if (file.size > 5000000) {
        console.log('File quá lớn');
        return;
    }
    //  else if (!acceptImageTypes.includes(file.type)) {
    //     console.log('File không đúng định dạng');
    //     return;
    // }

    // 1. Định nghĩa 1 đối tượng đọc file
    const reader  = new FileReader();
    // 2. Định nghĩa việc load file
    reader.onload = (e) => {
        const image = new Image();
        if (e && e.target) {
            image.src = getEventResult(e);
            console.log(image.width, image.height, file.size, file.type);
            setImageBase64(e.target.result);
        }
    };

    // 3. Load file mà lấy được từ input
    reader.readAsDataURL(file);
};


  useEffect(() => {
    if (_id) {
      handleGetProduct(_id);
    }
  }, [_id]);

  return (
    <div style={{width : '60%', margin : 'auto'} }>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group" >
          <label>NAME</label>
          <input 
            type="text"
            className="form-control"
            id=""
            placeholder="name...."
            {...register("name", {
              required: { value: true, message: "vui lòng điền thông tin" },
            })}
          
          />
        </div>
        <div style={{color : 'red'}}>
            {errors.name ? errors.name.message:''}
        </div>
        <div className="form-group">
          <label>DESC</label>
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="desc...."
            {...register("desc", {
              required:{ value: true, message: "vui lòng điền thông tin" }
            })}
          />
        </div>
        <div style={{color : 'red'}}>
            {errors.desc ? errors.desc.message:''}
        </div>
        <div className="form-group">
          <label>PRICE</label>
          <input
            type="number"
            className="form-control"
            id=""
            placeholder="price...."
            {...register("price", {
              required: {
                value: true,
                message: "vui lòng điền thông tin",
              },
            })}
          />
        </div>
        <div style={{color : 'red'}}>
            {errors.price ? errors.price.message:''}
        </div>
        <div className="form-group">
          <label>IMG</label>
          <input
            type="file"
            className="form-control"
            id=""
            placeholder="img...."
            onChange={(event) => handleChangeFile(event)}
          />
           <img src={imageBase64} width={200} alt="" />
        </div>
        <div className="form-group">
          <label>STATUS</label>
          <input type="radio" {...register("status")} value={0} /> hết hàng
          <input type="radio" {...register("status")} value={1} /> còn hàng
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductFrom;
