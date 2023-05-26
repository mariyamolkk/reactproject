import React from 'react'
import { Button, TextField } from '@mui/material'
const Add3 = () => {
  return (
    <div style={{paddingTop:"100px"}}>
    <br/>
    <br/>
    <br/>
    <TextField variant='outlined' color='secondary' label='Blog Name' ></TextField>
    <br/>
    <br/>
    <TextField variant='outlined' color='secondary' label='Description' ></TextField>
    <br/>
    <br/>
    <TextField variant='outlined' color='secondary' label='Author' ></TextField>
    <br/>
    <br/>
    <Button >SAVE</Button>
    </div>
  )
}

export default Add3