import React,{ useState } from "react"
import {AppBar} from '@mui/material'

const Header = () => {
const dark = '#2b3743';
  return (
    <>
   <AppBar position="fixed" sx={{background:{dark}}}> 
    Where in the world?
   </AppBar>
    </>
  )
}

export default Header
