import api from "./axios"

export const getProducts = () => {
    return api.get('/product')
}
export const getProduct = (_id : string | undefined) => {
    return api.get(`/product/${_id}`)
}
export const createProduct = (data: any) => {
    return api.post('/product', data)
} 
export const deleteProduct = (_id : number | string) => {
    return api.delete(`/product/${_id}`)
}
export const updateProduct = (_id : string | undefined , data: any) => {
    console.log(_id);
    
    return api.put(`/product/${_id}`, data )
}
