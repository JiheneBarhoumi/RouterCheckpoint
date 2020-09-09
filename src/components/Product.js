import React from 'react';
import '../product.css'



const Product=(props)=>{

console.log(props.match)

let product=props.products.find(product=>product.id==props.match.params.productID)


return <div>
    <h1>{product.name}</h1> <br></br> 
    {product.description} <hr></hr> 
    {product.status}
    </div>
}

export default Product;