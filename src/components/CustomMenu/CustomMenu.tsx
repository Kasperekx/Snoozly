import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";

import { signOut } from "services/auth/login";

const CustomMenu = () => {
  const toast = useToast();
  return (
    <Menu>
      <MenuButton borderRadius="5px" as={Button} colorScheme="orange">
        <FaUser />
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profil">
          <MenuItem>Moje konto</MenuItem>
          <MenuItem>Zadania</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Pomoc">
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Ustawienia">
          <MenuItem
            onClick={() =>
              signOut().then((res) => {
                toast({
                  title: "Zostałeś Wylogowany!",
                  description: "Mamy nadzieję że wrócisz do nas! :)",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              })
            }
          >
            Wyloguj
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
