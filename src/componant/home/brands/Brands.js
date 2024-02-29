import React from 'react';
import brand from '../../../ass/4778723-200.png'
import { Box, styled } from '@mui/material';

const brands = [
    brand, brand, brand, brand, brand
]

const BrandsWrapps = styled(Box)(({ theme }) => ({
marginBottom:'4rem',
display:'flex',
justifyContent:'space-between',
alignItems:'center',

'&>img':{
    height:'250px'
},
[theme.breakpoints.down('md')]:{
    flexDirection:'colum'
}
}))

const Brands = () => {
    return (
        <BrandsWrapps>
        {
            brands.map((bran,i)=><img key={i} src={bran} alt='aaa'/>)
        }
        </BrandsWrapps>
    );
};

export default Brands;