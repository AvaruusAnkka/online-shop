import { Button, Menu, MenuItem } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import React from 'react'

const CategoryButton = () => {
  const { shopStore } = useStoreContext()
  const [categoryButton, setCategoryButton] =
    React.useState<null | HTMLElement>(null)

  return (
    <>
      <Button
        onClick={(e) => setCategoryButton(e.currentTarget)}
        sx={{ mr: 2 }}
      >
        {shopStore.selectedCategory}
      </Button>
      <Menu
        anchorEl={categoryButton}
        open={!!categoryButton}
        onClose={() => setCategoryButton(null)}
      >
        {shopStore.categoriesList.map((category) => {
          return (
            <MenuItem
              key={category}
              onClick={(e) => {
                setCategoryButton(null)
                shopStore.selectedCategory = category
                shopStore.filter()
              }}
            >
              {category}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

export default CategoryButton
