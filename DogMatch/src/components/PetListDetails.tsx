import React from "react";
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Text,
  Heading,
  Box,
  Flex,
  Spacer,
  Image,
  Container,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { BellIcon, InfoIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const puppy =
  "https://res.cloudinary.com/dsqh5elvv/image/upload/v1670819169/karsten-winegeart-ewfHXBcuFA0-unsplash_chmqbh.jpg";

const kitten =
  "https://res.cloudinary.com/dsqh5elvv/image/upload/v1670866524/sergey-semin-Y0WXj3xqJz0-unsplash_c8hjas.jpg";

function PetListDetails(props: {
  petName: string;
  photo: string;
  description: string;
  species: string;
}) {
  return (
    <Card size="sm" justifyContent={"center"}>
      <CardHeader>
        <Flex>
          <Flex flex={1} gap="4" alignItems={"center"} flexWrap="wrap">
            <Avatar
              name="placeholder"
              src={props.species === "Cat" ? kitten : puppy}
            />
            <Box>
              <Heading size="sm">{props.petName}</Heading>
              <Text fontSize={{ base: ".5rem", md: ".75rem" }}>
                Few words here
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text fontSize={{ base: ".75rem", md: ".75rem" }}>
          {props.description}
        </Text>
        <Box p={3}>
          <Image
            boxSize={"350px"}
            border="1px"
            p="2"
            borderRadius="xl"
            mx="auto"
            objectFit={"cover"}
            src={props.photo}
          />
        </Box>
      </CardBody>

      <Stack justifyContent={"center"} p={2} direction={{ md: "row" }}>
        <Button
          fontSize={{ base: ".5rem", md: ".7rem" }}
          variant="ghost"
          leftIcon={<BellIcon />}
        >
          Like
        </Button>
        <Button
          fontSize={{ base: ".7rem", md: ".7rem" }}
          variant="ghost"
          leftIcon={<InfoIcon />}
        >
          More
        </Button>
        <Button
          fontSize={{ base: ".5rem", md: ".7rem" }}
          variant="ghost"
          leftIcon={<ExternalLinkIcon />}
        >
          Link
        </Button>
      </Stack>
    </Card>
  );
}

export default PetListDetails;
