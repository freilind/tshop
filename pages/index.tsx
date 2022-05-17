import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';
import { initialData } from 'database/products';
import { ProductList } from '../components/products';

const Home: NextPage = () => {
  return (
    <ShopLayout title={'TShop - Home'} pageDescription={'Encuentra los productos'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }} component='h2'>Todos los productos</Typography>

      <ProductList
        products={initialData.products as any} />

    </ShopLayout>
  )
}

export default Home
