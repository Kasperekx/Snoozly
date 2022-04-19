import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import colors from "theme/base/colors";

const CustomMenu = () => {
  return (
    <Menu>
      <MenuButton borderRadius="5px" as={Button} colorScheme="orange">
        <FaUser />
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Settings">
          <MenuItem>Sign-Out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
