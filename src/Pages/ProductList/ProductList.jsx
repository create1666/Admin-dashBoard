import React from 'react'
import './ProductList.css'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductListRow } from '../../components/Utils/ProductDataLIst';

const ProductList = () => {
  

  

    const [data, setState] = useState(ProductListRow)
    const handleDelete = (i) => {
      setState(data.filter((item) => {
       return item.id !==i
      }))
   }
    
    const columns = [
      { field: "id", headerName: "ID", width: 100 },
      { field: "product", headerName: "product", width: 120 },
      { field: "avatar", headerName: "Avatar", width: 160, renderCell: (params)=> {
        return (
          <>
          <div className='productLisstuserImg'>
            <img className='productuserListImg' src={params.row.img} alt=''/>
            {params.row.name}
          </div>
          </>
        )
      } },
      {
        field: "stock",
        headerName: "Stock",
        width: 120,
      },
      {
        field: "status",
        headerName: "Status",
       
        sortable: false,
        width: 100,
      },
      {
        field: "price",
        headerName: "price",
        sortable: false,
        width: 130,
      },
      {
        field: "actions",
        headerName: "Action",
        sortable: false,
        width: 160,
        renderCell: (params) => {
          return (
            <><div className='ProductListuserActions'>
              
             <Link to={'/product/'+ params.row.id}> <button className='prodctuserEditBTn'>Edit</button></Link>
  
              <DeleteOutline checkboxSelection className='productuserDelBtn' onClick = {()=>handleDelete(params.row.id)}/>
              </div></>
          ) 
        }
      },
    ];
  return (
    <div className='productList'>
      
      <DataGrid rows={data} columns={columns} pageSize={8} disableSelectionOnClick checkboxSelection />
 
    </div>
  )
}

export default ProductList
