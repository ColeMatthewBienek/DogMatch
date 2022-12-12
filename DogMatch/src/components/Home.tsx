import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
  Box,
  Spacer,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
function ToggleMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      display={{ base: "none", md: "block" }}
      position="fixed"
      top="2"
      right="0"
      justifySelf={"right"}
      alignSelf={"center"}
      size={{ base: "sm", md: "md", lg: "sm" }}
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
}

function Home() {
  return (
    <Flex
      flexDirection={"column"}
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://res.cloudinary.com/dsqh5elvv/image/upload/v1670704488/david-taffet-5gXPapBz40c-unsplash_yskjlt.jpg)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Box
        top="0"
        w="100vw"
        position={"fixed"}
        _dark={{ bg: "#191970" }}
        _light={{ bg: "#FDF5E6", color: "#222222" }}
        p="2"
      >
        <Stack direction={"row"}>
          <Box>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                size="sm"
              />
              <MenuList
                _hover={{ bg: "#336699" }}
                p="0"
                fontSize=".75rem"
                boxSize="-webkit-fit-content"
              >
                <MenuItem>
                  <Link
                    _hover={{ textDecoration: "none" }}
                    as={ReactRouterLink}
                    to="/petList"
                    alignSelf={"center"}
                  >
                    PetList
                  </Link>
                </MenuItem>
                <MenuItem>Search Locations</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>Exit</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Text fontSize={"1.5rem"} fontFamily="Satisfy" alignSelf={"center"}>
            PetMatch! Adopt a Pet Now!
          </Text>
          <Spacer />
          <ToggleMode />
        </Stack>
      </Box>
    </Flex>
  );
}

export default Home;
