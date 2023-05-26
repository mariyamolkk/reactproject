import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{paddingTop:'100px'}}>
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>BLOG DASHBOARD </Typography>
                <Button variant='text' > <Link to={'/Home3'}>Home</Link></Button>
                <Button variant='text' > <Link to={'/add3'} >Add</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar