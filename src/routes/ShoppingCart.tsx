import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'

const ShoppingCart = () => (
  <Box sx={{ p: 2 }}>
    <Grid container spacing={2}>
      <Grid xs={8}>
        <Typography>ShoppingCart</Typography>
      </Grid>
      <Grid xs={4} sx={{ p: 2 }}>
        <Card>
          <CardContent>
            <h1>Summary</h1>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <h3>Subtotal</h3>
              <h3>$ 1,89</h3>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <h3>Shipping fee</h3>
              <h3>$ 1,34</h3>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <h2>Total</h2>
              <h2>$ 3,23</h2>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Button>CheckOut</Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
)

export default ShoppingCart
