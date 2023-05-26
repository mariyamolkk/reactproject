import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';


const Home3 = () => {
    var[users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setUsers(response.data)
            console.log(response.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"blue",fontFamily:"serif",fontSize:"30px"}} >ID</TableCell>
                        <TableCell style={{color:"blue",fontFamily:"serif",fontSize:"30px"}} >BLOG</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((val,index)=>{
                    return(
                        <TableRow key={index}>
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.title}</TableCell>
                        </TableRow>
                    )
                })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home3