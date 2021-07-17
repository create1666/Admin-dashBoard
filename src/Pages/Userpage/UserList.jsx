import React from "react";
import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { UserRows } from "../../data";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserList() {

  

  const [data, setState] = useState(UserRows)
  const handleDelete = (id) => {
    setState(data.filter((item) => {
     return item.id !==id
    }))
 }
  
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "userName", headerName: "Users", width: 120 },
    { field: "avatar", headerName: "Avatar", width: 160, renderCell: (params)=> {
      return (
        <>
        <div className='userLisstuserImg'>
          <img className='userListImg' src={params.row.avatar} alt=''/>
          {params.row.avatar}
        </div>
        </>
      )
    } },
    {
      field: "email",
      headerName: "Email",
      width: 120,
    },
    {
      field: "status",
      headerName: "Status",
     
      sortable: false,
      width: 100,
    },
    {
      field: "transaction",
      headerName: "Transaction",
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
          <><div className='userActions'>
            
           <Link to={'/users/'+ params.row.id}> <button className='userEditBTn'>Edit</button></Link>

            <DeleteOutline checkboxSelection className='userDelBtn' onClick = {()=>handleDelete(params.row.id)}/>
            </div></>
        )
      }
    },
  ];

 
  return (
    <div className='users'>
      <DataGrid rows={data} columns={columns} pageSize={8} disableSelectionOnClick checkboxSelection />
    </div>
  );
}
