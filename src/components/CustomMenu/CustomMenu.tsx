import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { signOut } from "services/auth/login";

const CustomMenu = () => {
  return (
    <Menu>
      <MenuButton borderRadius="5px" as={Button} colorScheme="orange">
        <FaUser />
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profil">
          <MenuItem as={Link} href="/panel">
            Moje konto
          </MenuItem>
          <MenuItem>Zadania</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Pomoc">
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Ustawienia">
          <MenuItem onClick={() => signOut()}>Wyloguj</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
