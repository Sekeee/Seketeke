import React from 'react'
import { useParams } from 'react-router-dom'

export default function Products( {products} ) {
    const {id : productId} = useParams();

    const product = products.find((id) => {
        console.log(id);
    })
  return (
    <div>Products</div>
  )
}
