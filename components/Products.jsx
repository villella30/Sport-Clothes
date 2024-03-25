import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tshirt from '../public/tshirt.jpg'
import LebronTshirt from '../public/Lebron-Tshirt.jpg'
import Anteto from '../public/Anteto.jpg'
import { productos } from "./productos.js"


export default function Products() {
    return (
        <div>
            <Typography //Titulo del area productos
                variant="h5"
                noWrap
                component="a"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    justifyContent: 'start',
                    marginLeft: 20,
                    marginRight: 0,
                    marginTop: 3,
                    marginBottom: 3,
                }}
            >
                Todos los productos
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'center', cursor: 'pointer' }}>
                {productos.map((prod) => {
                    return ( // Aca empieza los productos
                        <div key={prod.id} style={{ margin: '10px', minWidth: '300px' }}> 
                            <Card sx={{ maxWidth: 300, margin: 3 }}>  
                                <div style={{ height: '300px', marginBottom: 20 }}> 
                                    <Image
                                        src={prod.img}
                                        alt={prod.alt}
                                        width={prod.width}
                                        height={prod.heigth}
                                        layout="responsive"
                                    />
                                </div>
                                <CardContent style={{ height: 'calc(100% - 200px)', overflowY: 'auto' }}> 
                                    <Typography variant='body1' color='black' fontWeight='300' fontSize='20'>
                                        {prod.title}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary'>
                                        {prod.subtitle}
                                    </Typography>
                                    <Typography variant='h5' color='black'>
                                        {prod.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
            </div>


        </div>
    );
}