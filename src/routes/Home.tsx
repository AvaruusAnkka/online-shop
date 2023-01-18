import { observer } from 'mobx-react-lite'
import { Box, Grid } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import { ItemCard } from 'components/ItemCard'
import { SearchBar } from 'components/SearchBar'

const Home = () => {
  const { shopStore } = useStoreContext()

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      <SearchBar />
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {shopStore.filteredItems.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={4} md={3} lg={2} xl={1.5}>
              <ItemCard {...item} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default observer(Home)
