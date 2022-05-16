import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { Typography } from '@mui/material';


const Home: NextPage = () => {
  return (
    <ShopLayout title={'TShop - Home'} pageDescription={'Encuentra los productos'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }} component='h2'>Todos los productos</Typography>

    </ShopLayout>
  )
}

export default Home
