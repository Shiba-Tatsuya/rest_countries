import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Grid,Box } from '@mui/material'
import { fetchData } from '../utils/fetchData'

const Home = () => {
    const url = 'https://restcountries.com/v3.1/all';
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCountries(data.splice(0,10))
                
            })
    }, [])

    return (
        <>
            <Grid  sx={{ flexGrow: 1}} container spacing={4} >
                {
                    countries.map((item) => (
                        /*<Card key={index}>
                            <CardMedia  component="img" image={item.coatOfArms.svg}/>
                            <CardContent>
                                <h1>{item.name.common}</h1>
                                <h4>Population : {item.population}</h4>
                            </CardContent>
                        </Card>*/
                        <Grid  item lg={3} xs={12} >
                            <Box   sx={{height:'550px',width:'auto'}}>
                            <Card >
                                <CardMedia component="img" image={`${item.flags.svg}`||`${item.flags.png}`} />
                                <CardContent>
                                    <h1>{item.name.common}</h1>
                                    <h4>Population : {item.population}</h4>
                                </CardContent>
                            </Card>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default Home