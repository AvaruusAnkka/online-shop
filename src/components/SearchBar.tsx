import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useStoreContext } from 'contexts/StoreContext'
import CategoryButton from './CategoryButton'

export function SearchBar() {
  const { shopStore } = useStoreContext()
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: '28px' }}>
      <TextField
        onKeyDown={(e) => {
          if (e.key === 'Enter') shopStore.filter()
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CategoryButton />
              <IconButton onClick={shopStore.filter}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}
