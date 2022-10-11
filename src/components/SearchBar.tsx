import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState } from 'react'
import { useStoreContext } from 'contexts/StoreContext'
import CategoryButton from './CategoryButton'

export function SearchBar() {
  const { shopStore } = useStoreContext()

  const [searchValue, setSearchValue] = useState('')
  const [categoryValue, setCategoryLabel] = useState('Category')

  function newSearch() {
    shopStore.filter(searchValue, categoryValue)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: '28px' }}>
      <TextField
        onKeyDown={(e) => {
          if (e.key === 'Enter') newSearch()
        }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {CategoryButton(categoryValue, setCategoryLabel, newSearch)}
              <IconButton aria-label="search" onClick={() => newSearch()}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}
