import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";


function MyMenu() {
    return (
      <Menu>
        <MenuButton as={Button}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>New</MenuItem>
          <MenuItem>Open</MenuItem>
          <MenuItem>Save</MenuItem>
        </MenuList>
      </Menu>
    );
  }
  
  export default MyMenu;