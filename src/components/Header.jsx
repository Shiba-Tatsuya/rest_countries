import React,{ useState } from "react"
import { Link } from 'react-router-dom'
import {Stack,Typography} from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {


  return (
    <>
  <Stack direction='row' alignItems='center'  p={2} sx={{position:'sticky',background:'#2b3743',top:0,justifyContent:'space-between',color:'white'}}>
  <Link to='/' style={{display:'flex',alignItems:"center"}}>
        <h1>Where in the world?</h1>
    </Link>
  </Stack>
    </>
  )
}

export default Header
