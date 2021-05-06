import React, { useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectedProduct, removeSelectedProduct} from '../redux/actions/productActions'
const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const {image,title,price,category,description} = product;
        const { productId } = useParams();
        const dispatch = useDispatch();
    console.log(productId)
    const fetchProductDetail = async () => {
        const response =  await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => {
            console.log('Err', err)
        });

        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])
    return (
        <div className="product-details-container">
           {Object.keys(product).length === 0 ? (
               <div>...Loading</div>
           ) : (
               <div className="details">
                   <div className="details-image">
                       <img src={image} />
                   </div>
                   <div className="details-content">
                       <h1>{title}</h1>
                       <h2>${price}</h2>
                       <h3>{category}</h3>
                       <p>{description}</p>
                       <button type="button">Add to Cart</button>
                   </div>
                  
               </div>
           )
           }
        </div>
    )
}

export default ProductDetail
