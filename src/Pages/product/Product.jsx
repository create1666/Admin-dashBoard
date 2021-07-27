import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/CHART/Chart'
import './Product.css'
import { productData } from './productData/productDumydata'

export const Product = () => {
  return (
    <div className='product'>
      <div className="producTitleContainer">
        <div className="productTitle">Product</div>
        <Link to='/newproduct'><button className="productAddBtn">Create</button></Link>
      </div>
     <div className="productTop">
       <div className="productTopLeft">
         <Chart data={productData } dataKey='sales' title='Sales performance'/>
       </div>
       <div className="productTopRight">
         <div className="productInfoTop">
           <img src="" alt="" className="productInfoImg" />
         </div>
         <div className="productInfoBottom"></div>
       </div>
     </div>
     <div className="productBottom"></div>
    </div>
  )
}
