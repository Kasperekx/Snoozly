import {
  Button,
  Link,
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
import { useNavigate } from "react-router-dom";

import { signOut } from "services/auth/login";

const CustomMenu = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const signingOut = () => {
    signOut().then((res) => {
      toast({
        title: "Zostałeś Wylogowany!",
        description: "Mamy nadzieję że szybko do nas wrócisz :)",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    });
  };
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
          <MenuItem onClick={() => signingOut()}>Wyloguj</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
