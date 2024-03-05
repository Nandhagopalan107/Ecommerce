import React,{ useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
const Product = () => {
  const {all_product} = useContext(ShopContext);

  const {id} = useParams(); 
  const product= all_product.find((e)=> e.id===parseInt(id) ) 

  
 
  return (
    <div>
    
      <Breadcrums product = {product}/>
      <ProductDisplay product = {product}/>
      <Description/>
      <RelatedProducts/>
      <hr />
    </div>
  )
}

export default Product
