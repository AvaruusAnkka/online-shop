import { Button, Menu, MenuItem } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import React from 'react'

const CategoryButton = (
  categoryValue: string,
  setCategoryLabel: React.Dispatch<React.SetStateAction<string>>,
  searchFunction: Function
) => {
  const { shopStore } = useStoreContext()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ mr: 2 }}
      >
        {categoryValue}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {shopStore.categoriesList.map((category) => {
          return (
            <MenuItem
              key={category}
              onClick={() => {
                handleClose()
                setCategoryLabel(category)
                searchFunction()
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